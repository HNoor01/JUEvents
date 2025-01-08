import React, { useState, useContext } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Modal,
} from 'react-native';
import NotificationsStyles from '../styles/NotificationsStyles';
import api from '../apiService';
import { UserContext } from '../contexts/UserContext';
import { useFocusEffect } from '@react-navigation/native';

function NotificationsScreen({ navigation }) {
    const { studentId } = useContext(UserContext); // Get studentId from UserContext
    const [notifications, setNotifications] = useState([]);
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [error, setError] = useState(null);

    // Automatically reload notifications whenever the screen is focused
    useFocusEffect(
        React.useCallback(() => {
            const fetchNotifications = async () => {
                try {
                    if (!studentId) {
                        alert('Student ID is missing. Please log in.');
                        navigation.navigate('Login'); // Redirect to login if studentId is not set
                        return;
                    }
                    const response = await api.get(`/notifications/${studentId}`);
                    console.log('Fetched Notifications:', response.data); // Debug

                    // Sort notifications: newest first
                    const sortedNotifications = response.data.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );

                    setNotifications(sortedNotifications);
                    setError(null); // Clear any previous error
                } catch (error) {
                    console.error('Error fetching notifications:', error);
                    setError('Failed to fetch notifications. Please try again later.');
                }
            };


            fetchNotifications();
        }, [])
    );


    const handleNotificationPress = async (notification) => {
        try {
            if (!notification.eventId) {
                console.error('Notification does not have an associated event ID.');
                alert('This notification is not linked to an event.');
                return;
            }

            console.log('Navigating to EventDetailsScreen with eventId:', notification.eventId);
            navigation.navigate('EventDetails', { eventId: notification.eventId }); // Pass eventId here
        } catch (error) {
            console.error('Error handling notification press:', error);
        }
    };



    return (
        <SafeAreaView style={NotificationsStyles.container}>
            <Text style={NotificationsStyles.headerText}>Your Notifications</Text>

            {error && (
                <Text style={NotificationsStyles.errorText}>{error}</Text>
            )}

            <ScrollView contentContainerStyle={NotificationsStyles.scrollContainer}>
                {notifications.map((notification) => (
                    <TouchableOpacity
                        key={notification.id}
                        style={[
                            NotificationsStyles.notificationItem,
                            !notification.is_read && NotificationsStyles.unreadNotification,
                        ]}
                        onPress={() => handleNotificationPress(notification)}
                    >
                        <Text style={NotificationsStyles.notificationTitle}>
                            {notification.message || 'No Message'}
                        </Text>
                        <Text style={NotificationsStyles.notificationDate}>
                            {notification.created_at
                                ? new Date(notification.created_at).toLocaleString()
                                : 'No Date'}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {selectedNotification && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={true}
                    onRequestClose={() => setSelectedNotification(null)}
                >
                    <View style={NotificationsStyles.modalView}>
                        <Text style={NotificationsStyles.modalTitle}>
                            {selectedNotification.eventTitle || 'No Title'}
                        </Text>
                        <Text style={NotificationsStyles.modalMessage}>
                            Status: {selectedNotification.status || 'Pending'}
                        </Text>
                        <Text style={NotificationsStyles.modalComment}>
                            Comment: {selectedNotification.comment || 'No comment provided'}
                        </Text>

                        <TouchableOpacity
                            style={NotificationsStyles.closeButton}
                            onPress={() => setSelectedNotification(null)}
                        >
                            <Text style={NotificationsStyles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    );
}

export default NotificationsScreen;
