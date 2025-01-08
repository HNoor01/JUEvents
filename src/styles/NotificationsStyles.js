import { StyleSheet } from 'react-native';

const NotificationsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC', // Light background for the entire screen
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#00A54F', // Match the theme color
    },
    errorText: {
        color: '#FF0000',
        textAlign: 'center',
        marginVertical: 10,
    },
    scrollContainer: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    notificationItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2, // For Android shadow
    },
    unreadNotification: {
        backgroundColor: '#E6FAE6', // Light green for unread notifications
        borderLeftWidth: 5,
        borderLeftColor: '#00A54F',
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333333',
    },
    notificationMessage: {
        fontSize: 14,
        color: '#555555',
        marginBottom: 10,
    },
    notificationDate: {
        fontSize: 12,
        color: '#888888',
        textAlign: 'right',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00A54F',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 14,
        color: '#555555',
        marginBottom: 10,
    },
    modalComment: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#777777',
        marginBottom: 15,
    },
    closeButton: {
        backgroundColor: '#00A54F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'center',
    },
    closeButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default NotificationsStyles;
