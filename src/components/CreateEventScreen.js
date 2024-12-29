import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Modal,
    FlatList,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CreateEventStyles from '../styles/CreateEventStyles';

function CreateEventScreen({ navigation }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [time, setTime] = useState(null);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [eventImage, setEventImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [errors, setErrors] = useState({}); // Error handling state

    const locations = ['Location 1', 'Location 2', 'Location 3'];

    const handleImageUpload = async () => {
        const response = await launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5,
        });

        if (response && response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response && response.errorMessage) {
            console.log('Error: ', response.errorMessage);
        } else if (response && response.assets && response.assets.length > 0) {
            setEventImage(response.assets[0].uri);
        }
    };

    const handleCreateEvent = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required.';
        if (!date) newErrors.date = 'Date is required.';
        if (!time) newErrors.time = 'Time is required.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        alert(
            `Event Created!\nTitle: ${title}\nDate: ${date?.toDateString()} ${time?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\nLocation: ${location}\nDescription: ${description}`
        );
    };

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const handleTimeChange = (event, selectedTime) => {
        setShowTimePicker(false);
        if (selectedTime) {
            setTime(selectedTime);
        }
    };

    return (
        <ScrollView contentContainerStyle={CreateEventStyles.container}>
            {/* Image Upload */}
            <TouchableOpacity style={CreateEventStyles.imageUpload} onPress={handleImageUpload}>
                {eventImage ? (
                    <Image source={{ uri: eventImage }} style={CreateEventStyles.imagePreview} />
                ) : (
                    <Text style={CreateEventStyles.imageText}>Upload Event Picture</Text>
                )}
            </TouchableOpacity>

            {/* Title */}
            <Text style={CreateEventStyles.label}>
                Event Title <Text style={CreateEventStyles.required}>*</Text>
            </Text>
            <TextInput
                style={[
                    CreateEventStyles.input,
                    errors.title ? { borderColor: 'red' } : undefined,
                ]}
                placeholder="Event Title"
                value={title}
                onChangeText={setTitle}
            />
            {errors.title && <Text style={{ color: 'red' }}>{errors.title}</Text>}

            {/* Location */}
            <Text style={CreateEventStyles.label}>
                Location <Text style={CreateEventStyles.required}>*</Text>
            </Text>
            <TouchableOpacity
                style={[CreateEventStyles.input, errors.location ? { borderColor: 'red' } : undefined]}
                onPress={() => setModalVisible(true)}
            >
                <Text>{location || 'Select Location'}</Text>
            </TouchableOpacity>

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={CreateEventStyles.modalContainer}>
                    <View style={CreateEventStyles.modalContent}>
                        <FlatList
                            data={locations}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={CreateEventStyles.modalItem}
                                    onPress={() => {
                                        setLocation(item);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={CreateEventStyles.modalText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item}
                        />
                        <TouchableOpacity
                            style={CreateEventStyles.modalCloseButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={CreateEventStyles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Date */}
            <Text style={CreateEventStyles.label}>
                Date <Text style={CreateEventStyles.required}>*</Text>
            </Text>
            <TouchableOpacity
                style={[CreateEventStyles.input, errors.date ? { borderColor: 'red' } : undefined]}
                onPress={() => setShowDatePicker(true)}
            >
                <Text>{date ? date.toDateString() : 'Select Date'}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker value={new Date()} mode="date" onChange={handleDateChange} />
            )}

            {/* Time */}
            <Text style={CreateEventStyles.label}>
                Time <Text style={CreateEventStyles.required}>*</Text>
            </Text>
            <TouchableOpacity
                style={[CreateEventStyles.input, errors.time ? { borderColor: 'red' } : undefined]}
                onPress={() => setShowTimePicker(true)}
            >
                <Text>
                    {time ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Select Time'}
                </Text>
            </TouchableOpacity>
            {showTimePicker && (
                <DateTimePicker value={new Date()} mode="time" onChange={handleTimeChange} />
            )}

            {/* Description */}
            <Text style={CreateEventStyles.label}>
                Description <Text style={CreateEventStyles.required}>*</Text>
            </Text>
            <TextInput
                style={CreateEventStyles.textArea}
                placeholder="Event Description"
                value={description}
                onChangeText={setDescription}
                maxLength={200}
                multiline
            />

            {/* Buttons */}
            <View style={CreateEventStyles.buttonContainer}>
                <TouchableOpacity style={CreateEventStyles.createEventButton} onPress={handleCreateEvent}>
                    <Text style={CreateEventStyles.createEventButtonText}>Add Event</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[CreateEventStyles.createEventButton, CreateEventStyles.cancelButton]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={CreateEventStyles.createEventButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default CreateEventScreen;
