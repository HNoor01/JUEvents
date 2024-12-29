import { StyleSheet } from 'react-native';

const EventDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10, // Added from App.js
    },
    header: {
        fontSize: 32, // Updated from App.js
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#00A54F',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        backgroundColor: '#FFFFFF', // Added from App.js
        borderRadius: 50, // Added from App.js
    },
    activeTab: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00A54F',
        borderBottomWidth: 2,
        borderBottomColor: '#00A54F',
        paddingBottom: 5,
    },
    inactiveTab: {
        fontSize: 16,
        color: '#aaa',
        paddingBottom: 5,
    },
    detailsContainer: {
        padding: 20,
    },
    detailText: {
        fontSize: 16,
        marginVertical: 5,
        color: '#333',
        marginLeft: 10, // Added from App.js
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 10,
        lineHeight: 20,
    },
    descriptionHeader: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 18, // Added from App.js
        color: '#00A54F', // Added from App.js
    },
    attendedContainer: {
        padding: 20,
        alignItems: 'center',
    },
    attendanceLabel: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8, // Updated from App.js
        padding: 10,
        width: '80%',
        marginBottom: 20,
        textAlign: 'center',
    },
    submitButton: {
        backgroundColor: '#054A12',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '50%',
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    reviewsContainer: {
        padding: 20,
    },
    reviewItem: {
        marginBottom: 16, // Added from App.js
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 10,
    },
    reviewText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 16, // Added from App.js
    },
    reviewRating: {
        fontSize: 14,
        color: '#00A54F', // Added from App.js
    },
    addReviewButton: {
        backgroundColor: '#00A54F',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    addReviewButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    interestedButton: { // Added from App.js
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A54F',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    interestedButtonText: { // Added from App.js
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default EventDetailsStyles;
