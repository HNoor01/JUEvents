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

// Dummy Notifications Data
const notifications = [
    {
        id: '1',
        type: 'response',
        eventTitle: 'Nursing Skills Workshop',
        message: 'Your request has been responded to',
        status: 'approved',
        comment: 'Event request has been approved!',
    },
    {
        id: '2',
        type: 'received',
        eventTitle: 'Business Innovation Seminar',
        message: 'Your request has been received',
        status: null,
        comment: '',
    },
    {
        id: '3',
        type: 'event_today',
        eventTitle: 'Nursing Skills Workshop',
        message: 'You have an event today',
        status: null,
        comment: '',
    },
    {
        id: '4',
        type: 'event_in_your_college',
        eventTitle: 'Tech Conference 2024',
        message: 'There is an event in your college today!',
        status: null,
        comment: '',
    },
];

function NotificationsScreen() {
    const [selectedNotification, setSelectedNotification] = useState(null);

    const handleNotificationPress = (notification) => {
        if (notification.type === 'response') {
            setSelectedNotification(notification);
        } else {
            console.log('Navigating to event details for:', notification.eventTitle);
        }
    };

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
