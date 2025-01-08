import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, FlatList, ActivityIndicator, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import EventDetailsStyles from '../styles/EventDetailsStyles';
import api from '../apiService'; // Ensure your API service is properly imported
import { FavoritesContext } from '../contexts/FavoritesContext';

function EventDetailsScreen({ route }) {
    const { eventId, eventTitle } = route.params; // Get eventId and eventTitle from route params
    console.log('Received eventId:', eventId);

    const [eventDetails, setEventDetails] = useState(null); // State for event details
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [selectedTab, setSelectedTab] = useState('Details'); // Tab state
    const [attendanceCode, setAttendanceCode] = useState('');
    const [isAttended, setIsAttended] = useState(false);
    const [interested, setInterested] = useState(false);
    const { toggleInterestedEvent } = useContext(FavoritesContext); // Access context
    const [reviews, setReviews] = useState([]); // State for reviews

    const navigation = useNavigation();

    const handleInterestedToggle = () => {
        toggleInterestedEvent(eventDetails); // Pass the event details to the context
        setInterested(!interested); // Update the local state for UI toggle
    };

    // Fetch event details
    useEffect(() => {
        if (!eventId) {
            console.error('No eventId provided to fetch event details.');
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                console.log(`Fetching event details for ID: ${eventId}`);
                const response = await api.get(`/events/${eventId}`);
                setEventDetails(response.data);
                console.log('Event details fetched:', response.data);
            } catch (error) {
                console.error('Error fetching event details:', error.response?.data || error);
                setError('Failed to fetch event details.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [eventId]);


    // Fetch reviews for the selected tab
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await api.get(`/reviews/${eventId}/reviews`);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error.response?.data || error);
            }
        };

        if (selectedTab === 'Reviews') {
            fetchReviews();
        }
    }, [selectedTab, eventId]);

    const handleAttendanceSubmit = async () => {
        try {
            const response = await api.post(`/events/${eventId}/validate-attendance`, {
                attendanceCode,
            });
            setIsAttended(true); // Mark the user as attended
            alert(response.data.message); // Show confirmation message
        } catch (error) {
            console.error('Error validating attendance code:', error.response?.data || error);
            alert(error.response?.data?.error || 'Invalid attendance code. Please try again.');
        }
    };

    if (loading) {
        return (
            <View style={EventDetailsStyles.container}>
                <ActivityIndicator size="large" color="#00A54F" />
                <Text style={{ marginTop: 10 }}>Loading event details...</Text>
            </View>
        );
    }

    if (!eventDetails) {
        return (
            <View style={EventDetailsStyles.container}>
                <Text style={{ color: 'red', fontSize: 18 }}>Event details not found.</Text>
            </View>
        );
    }

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: `Check out this event: ${eventDetails.name}\nLocation: ${eventDetails.location}\nDate: ${eventDetails.date}\nTime: ${eventDetails.time}\n\nJoin us at this amazing event!`,
            });

            if (result.action === Share.sharedAction) {
                console.log('Event shared successfully!');
            } else if (result.action === Share.dismissedAction) {
                console.log('Event sharing dismissed.');
            }
        } catch (error) {
            console.error('Error sharing event:', error);
        }
    };

    return (
        <View style={EventDetailsStyles.container}>
            {/* Event Image */}
            <Image
                source={{ uri: eventDetails.image || 'https://via.placeholder.com/400x200' }}
                style={EventDetailsStyles.image}
            />

            <Text style={EventDetailsStyles.header}>{eventDetails.name}</Text>

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
            <View style={EventDetailsStyles.tabContent}>
                {selectedTab === 'Details' && (
                    <View style={EventDetailsStyles.detailsContainer}>
                        <View style={EventDetailsStyles.row}>
                            <Ionicons name="calendar-outline" size={20} color="#00A54F" />
                            <Text style={EventDetailsStyles.detailText}>{eventDetails.date}</Text>
                        </View>
                        <View style={EventDetailsStyles.row}>
                            <Ionicons name="location-outline" size={20} color="#00A54F" />
                            <Text style={EventDetailsStyles.detailText}>{eventDetails.location}</Text>
                        </View>
                        <View style={EventDetailsStyles.row}>
                            <Ionicons name="person-outline" size={20} color="#00A54F" />
                            <Text style={EventDetailsStyles.detailText}>Posted by: {eventDetails.created_by || 'Unknown'}</Text>
                        </View>
                        <Text style={EventDetailsStyles.descriptionHeader}>Description:</Text>
                        <Text style={EventDetailsStyles.description}>
                            {eventDetails.description}
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
                        {reviews.length === 0 ? (
                            <Text>No reviews yet. Be the first to leave one!</Text>
                        ) : (
                            <FlatList
                                data={reviews}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View style={EventDetailsStyles.reviewItem}>
                                        <Text style={EventDetailsStyles.reviewText}>
                                            <Text style={{ fontWeight: 'bold' }}>{item.Student.name}</Text> -{' '}
                                            {'⭐'.repeat(item.rating)}
                                        </Text>
                                        <Text>{item.comment}</Text>
                                        {item.photos && (
                                            <Image
                                                source={{ uri: item.photos }}
                                                style={EventDetailsStyles.image}
                                            />
                                        )}
                                    </View>
                                )}
                            />
                        )}
                        <TouchableOpacity
                            style={[EventDetailsStyles.addReviewButton, !isAttended && { backgroundColor: 'gray' }]}
                            onPress={() => {
                                if (isAttended) {
                                    navigation.navigate('AddReviewScreen', { eventId, eventTitle });
                                } else {
                                    alert('You must validate the attendance code before leaving a review.');
                                }
                            }}
                            disabled={!isAttended}
                        >
                            <Ionicons name="add-circle-outline" size={20} color="#fff" />
                            <Text style={EventDetailsStyles.addReviewButtonText}>Add Review</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            {/* Share Event Button */}
            <TouchableOpacity
                style={EventDetailsStyles.shareButton}
                onPress={handleShare}
            >
                <Ionicons name="share-social-outline" size={20} color="#fff" />
                <Text style={EventDetailsStyles.shareButtonText}>Share Event</Text>
            </TouchableOpacity>
        </View>
    );
}

export default EventDetailsScreen;
