import { StyleSheet } from 'react-native';

const EventDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9, // Adjust this ratio based on your image dimensions
        resizeMode: 'cover',
        borderRadius: 10,
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
        padding: 10,
    },
    detailText: {
        fontSize: 14,
        marginVertical: 5,
        color: '#333',
        marginLeft: 3, // Added from App.js
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
        backgroundColor: '#00A54F',
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
    tabContent: {
        flex: 1, // Take the remaining available space
        backgroundColor: '#F8F8F8', // Light background color
        padding: 15, // Add padding for spacing
        borderRadius: 10, // Optional: Rounded corners
        marginTop: 10, // Space above the tab content
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A54F',
        padding: 12,
        borderRadius: 8,
        marginTop: 15,
    },
    addReviewButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
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
    shareButton: {
        backgroundColor: '#00A54F', // Green color
        padding: 10,
        borderRadius: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: '89%', // Make it consistent with other buttons
        marginHorizontal: 20, // Consistent margins on the left and right


    },
    shareButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    statusLabel: {
        fontSize: 16,
        color: '#00A54F', // App's green color for the word "Status"
        fontWeight: 'bold',
        marginBottom: 10,
    },

    statusValue: {
        fontWeight: 'bold',
    },

    approved: {
        color: '#00A54F', // App's green for the Approved status
    },

    rejected: {
        color: 'red', // Default red for Rejected
    },

    pending: {
        color: 'orange', // Default orange for Pending
    },

    detailsContainer: {
        padding: 10,
    },

    detailsText: {
        fontSize: 16,
        color: '#555',
        marginTop: 10,
    },

    placeholderText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    },


});

export default EventDetailsStyles;
