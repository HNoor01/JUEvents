import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import CreateEventStyles from '../styles/CreateEventStyles';
import api from '../apiService';

function CreateEventScreen({ navigation }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [time, setTime] = useState('');
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [eventImage, setEventImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [imageAspectRatio, setImageAspectRatio] = useState(4 / 3); // Default aspect ratio


    const validateFields = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required.';
        if (!date) newErrors.date = 'Date is required.';
        if (!time) newErrors.time = 'Time is required.';
        if (!location) newErrors.location = 'Location is required.';
        if (!description) newErrors.description = 'Description is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleImageUpload = async () => {
        console.log('handleImageUpload function triggered'); // Log function start

        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            console.log('Permission status:', status); // Log permission status

            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'You need to grant permission to access the media library.');
                console.log('Permission not granted');
                return;
            }

            console.log('Launching ImagePicker...');
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'], // Correct enum value
                allowsEditing: true,    // Allow editing (cropping, etc.)
                quality: 1,             // Set quality to highest
            });

            console.log('ImagePicker result:', result); // Log the result from ImagePicker

            if (!result.canceled) {
                console.log('Image selected:', result.assets[0].uri); // Log selected image URI
                setEventImage(result.assets[0].uri); // Save image URI to state
            } else {
                console.log('Image selection canceled'); // Log cancellation
            }
        } catch (error) {
            console.error('Error in handleImageUpload:', error); // Log errors
        }
    };


    const fetchEventDetails = async (eventId) => {
        try {
            console.log("Fetching event details for ID:", eventId);
            const response = await api.get(`/events/${eventId}`); // Adjust the endpoint as per your backend
            console.log("Event details fetched:", response.data);
        } catch (error) {
            console.error("Error fetching event details:", error.response ? error.response.data : error.message);
        }
    };


    const handleCreateEvent = async () => {
        if (!validateFields()) return;

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('date', date);
            formData.append('time', time);
            formData.append('location', location);
            formData.append('description', description);
            if (eventImage) {
                console.log('Attaching event image:', eventImage); // Log event image before attaching
                const filename = eventImage.split('/').pop();
                const mimeType = filename.match(/\.\w+$/) ? `image/${filename.split('.').pop()}` : 'image/jpeg';
                formData.append('image', { uri: eventImage, name: filename, type: mimeType });
            }

            console.log('Submitting form data:', formData); // Log form data
            await api.post('/events', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Event created successfully!');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error creating event:', error);
            alert('Failed to create event. Please try again.');
        }
    };



    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0];
            setDate(formattedDate);
        }
    };

    const handleTimeChange = (event, selectedTime) => {
        setShowTimePicker(false);
        if (selectedTime) {
            const formattedTime = selectedTime.toTimeString().split(' ')[0]; // Outputs in HH:MM:SS format
            setTime(formattedTime);
        }
    };


    return (
        <ScrollView
            style={CreateEventStyles.container}
            contentContainerStyle={{ paddingBottom: 100 }}
            keyboardShouldPersistTaps="handled"
        >
            <Text style={CreateEventStyles.formTitle}>Create Event</Text>

            <Text style={CreateEventStyles.label}>Event Name:</Text>
            <TextInput
                style={[
                    CreateEventStyles.inputField,
                    errors.name && { borderColor: 'red' },
                ]}
                value={name}
                onChangeText={setName}
                placeholder="Enter event name"
            />
            {errors.name && <Text style={CreateEventStyles.errorText}>{errors.name}</Text>}

            <Text style={CreateEventStyles.label}>Location:</Text>
            <TextInput
                style={[
                    CreateEventStyles.inputField,
                    errors.location && { borderColor: 'red' },
                ]}
                value={location}
                onChangeText={setLocation}
                placeholder="Enter event location"
            />
            {errors.location && <Text style={CreateEventStyles.errorText}>{errors.location}</Text>}

            <Text style={CreateEventStyles.label}>Date:</Text>
            <TouchableOpacity
                style={CreateEventStyles.inputField}
                onPress={() => setShowDatePicker(true)}
            >
                <Text>{date || "Select date"}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
            {errors.date && <Text style={CreateEventStyles.errorText}>{errors.date}</Text>}

            <Text style={CreateEventStyles.label}>Time:</Text>
            <TouchableOpacity
                style={CreateEventStyles.inputField}
                onPress={() => setShowTimePicker(true)}
            >
                <Text>{time || "Select time"}</Text>
            </TouchableOpacity>
            {showTimePicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="time"
                    display="default"
                    onChange={handleTimeChange}
                />
            )}
            {errors.time && <Text style={CreateEventStyles.errorText}>{errors.time}</Text>}

            <Text style={CreateEventStyles.label}>Description:</Text>
            <TextInput
                style={[
                    CreateEventStyles.textAreaField,
                    errors.description && { borderColor: 'red' },
                ]}
                value={description}
                onChangeText={setDescription}
                placeholder="Enter event description"
                multiline
            />
            {errors.description && <Text style={CreateEventStyles.errorText}>{errors.description}</Text>}

            <Text style={CreateEventStyles.label}>Event Image:</Text>
            {eventImage ? (
                <Image
                    source={{ uri: eventImage }}
                    style={[
                        CreateEventStyles.imagePreview,
                        imageAspectRatio && { aspectRatio: imageAspectRatio }, // Apply dynamic aspect ratio
                    ]}
                />

            ) : (
                <View style={CreateEventStyles.imageUploadContainer}>
                    <Text style={CreateEventStyles.imagePlaceholder}>No image selected</Text>
                </View>
            )}
            <TouchableOpacity
                style={CreateEventStyles.primaryButton}
                onPress={async () => {
                    console.log('Pick an Image button pressed'); // Debug log
                    await handleImageUpload(); // Await the promise
                }}
            >
                <Text style={CreateEventStyles.primaryButtonText}>Pick an Image</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={CreateEventStyles.primaryButton}
                onPress={handleCreateEvent}
            >
                <Text style={CreateEventStyles.primaryButtonText}>Create Event</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default CreateEventScreen;
