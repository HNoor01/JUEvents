import React, { useState, useEffect, useContext } from 'react';
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
import { UserContext } from '../contexts/UserContext'; // Adjust the path based on your context location

function NotificationsScreen({ navigation }) {
    const { studentId } = useContext(UserContext); // Get studentId from UserContext
    const [notifications, setNotifications] = useState([]);
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            if (!studentId) {
                setError('Student ID is missing. Please log in again.');
                return;
            }

            try {
                const response = await api.get(`/notifications/students/${studentId}`);
                setNotifications(response.data);
                setError(null); // Clear error if fetch is successful
            } catch (error) {
                console.error('Error fetching notifications:', error);
                setError('Failed to fetch notifications. Please try again later.');
            }
        };

        fetchNotifications();
    }, [studentId]);

    const handleNotificationPress = (notification) => {
        if (notification.notification_type === 'response') {
            setSelectedNotification(notification);
        } else {
            // Navigate to Event Details screen with event ID
            navigation.navigate('EventDetails', { eventId: notification.eventId });
        }
    };

    return (
        <SafeAreaView style={NotificationsStyles.container}>
            <Text style={NotificationsStyles.headerText}>Your Notifications</Text>

            {error && (
                <Text style={NotificationsStyles.errorText}>{error}</Text> // Display error message
            )}

            <ScrollView contentContainerStyle={NotificationsStyles.scrollContainer}>
                {notifications.map((notification) => (
                    <TouchableOpacity
                        key={notification.id}
                        style={NotificationsStyles.notificationItem}
                        onPress={() => handleNotificationPress(notification)}
                    >
                        <Text style={NotificationsStyles.notificationTitle}>
                            {notification.eventTitle || 'No Title'}
                        </Text>
                        <Text style={NotificationsStyles.notificationMessage}>
                            {notification.message || 'No Message'}
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
