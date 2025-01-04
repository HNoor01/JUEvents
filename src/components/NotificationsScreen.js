import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Modal, // Import Modal
} from 'react-native';

import NotificationsStyles from '../styles/NotificationsStyles';

function NotificationsScreen() {
    const [notifications, setNotifications] = useState([]);
    const [selectedNotification, setSelectedNotification] = useState(null);

    const handleNotificationPress = (notification) => {
        if (notification.type === 'response') {
            setSelectedNotification(notification);
        } else {
            console.log('Navigating to event details for:', notification.eventTitle);
        }
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/notifications/');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents(); // Call the async function inside useEffect
    }, []);


    return (
        <SafeAreaView style={NotificationsStyles.container}>
            <Text style={NotificationsStyles.headerText}>Your Notifications</Text>
            <ScrollView contentContainerStyle={NotificationsStyles.scrollContainer}>
                {notifications.map((notification) => (
                    <TouchableOpacity
                        key={notification.id}
                        style={NotificationsStyles.notificationItem}
                        onPress={() => handleNotificationPress(notification)}
                    >
                        <Text style={NotificationsStyles.notificationTitle}>
                            {notification.eventTitle}
                        </Text>
                        <Text style={NotificationsStyles.notificationMessage}>
                            {notification.message}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Modal for Selected Notification */}
            {selectedNotification && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={true}
                    onRequestClose={() => setSelectedNotification(null)}
                >
                    <View style={NotificationsStyles.modalView}>
                        <Text style={NotificationsStyles.modalTitle}>
                            {selectedNotification.eventTitle}
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
