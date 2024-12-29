import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Ensure Ionicons is imported
import EventDetailsStyles from '../styles/EventDetailsStyles';

function EventDetailsScreen({ route }) {
    // Destructure eventId from route.params if available
    const { eventId } = route.params || {};

    const navigation = useNavigation();

    const [selectedTab, setSelectedTab] = useState('Details');
    const [attendanceCode, setAttendanceCode] = useState('');
    const [isAttended, setIsAttended] = useState(false);
    const [interested, setInterested] = useState(false);

    const [reviews, setReviews] = useState([
        { id: 1, name: 'Talal Najada', rating: 5, text: 'Great workshop!' },
        { id: 2, name: 'Hashem Noor', rating: 4, text: 'Very informative and engaging, but busy.' },
    ]);

    const handleAttendanceSubmit = () => {
        if (attendanceCode === '1234') {
            setIsAttended(true);
        } else {
            alert('Attendance Code is wrong!');
        }
    };

    const handleInterestedToggle = () => setInterested(!interested);

    return (
        <View style={EventDetailsStyles.container}>
            {/* Event Image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/400x200' }}
                style={EventDetailsStyles.image}
            />
            <Text style={EventDetailsStyles.header}>Nursing Skills Workshop</Text>

            {/* Tabs */}
            <View style={EventDetailsStyles.tabContainer}>
                {['Details', 'Attendance', 'Reviews'].map((tab) => (
                    <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
                        <Text
                            style={
                                selectedTab === tab
                                    ? EventDetailsStyles.activeTab
                                    : EventDetailsStyles.inactiveTab
                            }
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Tab Content */}
            {selectedTab === 'Details' && (
                <View style={EventDetailsStyles.detailsContainer}>
                    <View style={EventDetailsStyles.row}>
                        <Ionicons name="calendar-outline" size={20} color="#00a54f" />
                        <Text style={EventDetailsStyles.detailText}>Nov 25, 2024</Text>
                    </View>
                    <View style={EventDetailsStyles.row}>
                        <Ionicons name="location-outline" size={20} color="#00a54f" />
                        <Text style={EventDetailsStyles.detailText}>Faculty Of Nursing</Text>
                    </View>
                    <View style={EventDetailsStyles.row}>
                        <Ionicons name="person-outline" size={20} color="#00a54f" />
                        <Text style={EventDetailsStyles.detailText}>Posted by: Raya Yahya</Text>
                    </View>
                    <View style={EventDetailsStyles.row}>
                        <Ionicons name="star-outline" size={20} color="#00a54f" />
                        <Text style={EventDetailsStyles.detailText}>
                            17 people are interested
                        </Text>
                    </View>
                    <Text style={EventDetailsStyles.descriptionHeader}>Description:</Text>
                    <Text style={EventDetailsStyles.description}>
                        A workshop designed for nurses to enhance their skills in patient care.
                    </Text>

                    {/* Interested Button */}
                    <View style={EventDetailsStyles.buttonContainer}>
                        <TouchableOpacity
                            style={EventDetailsStyles.interestedButton}
                            onPress={handleInterestedToggle}
                        >
                            <Ionicons
                                name={interested ? 'star' : 'star-outline'}
                                size={20}
                                color="#fff"
                            />
                            <Text style={EventDetailsStyles.interestedButtonText}>
                                {interested ? 'Not Interested' : 'Interested'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {selectedTab === 'Attendance' && (
                <View style={EventDetailsStyles.attendedContainer}>
                    {!isAttended ? (
                        <>
                            <Text style={EventDetailsStyles.attendanceLabel}>Code:</Text>
                            <TextInput
                                style={EventDetailsStyles.inputBox}
                                placeholder="Enter code"
                                value={attendanceCode}
                                onChangeText={setAttendanceCode}
                            />
                            <TouchableOpacity
                                style={EventDetailsStyles.submitButton}
                                onPress={handleAttendanceSubmit}
                            >
                                <Text style={EventDetailsStyles.submitButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <Text style={EventDetailsStyles.successText}>
                            Successfully Attended
                        </Text>
                    )}
                </View>
            )}

            {selectedTab === 'Reviews' && (
                <View style={EventDetailsStyles.reviewsContainer}>
                    <FlatList
                        data={reviews}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={EventDetailsStyles.reviewItem}>
                                <Text style={EventDetailsStyles.reviewText}>
                                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text> -{' '}
                                    {'⭐'.repeat(item.rating)}
                                </Text>
                                <Text>{item.text}</Text>
                            </View>
                        )}
                    />
                </View>
            )}
        </View>
    );
}

export default EventDetailsScreen;
