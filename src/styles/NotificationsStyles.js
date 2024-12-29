import { StyleSheet } from 'react-native';


const NotificationsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00A54F',
        marginBottom: 20,
    },
    scrollContainer: {
        paddingBottom: 100,
    },
    notificationItem: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    notificationMessage: {
        fontSize: 16,
        color: '#555',
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    modalMessage: {
        fontSize: 16,
        color: '#FFF',
        marginTop: 10,
    },
    modalComment: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 5,
    },
    closeButton: {
        backgroundColor: '#00A54F',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#FFF',
        textAlign: 'center',
    },
});
export default NotificationsStyles;