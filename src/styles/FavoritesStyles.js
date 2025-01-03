import { StyleSheet } from 'react-native';

const FavoritesStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    bottomTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    CategoryButton: {
        flex: 1,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#00A54F',
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    SelectedButton: {
        backgroundColor: '#00A54F',
    },
    buttonText: {
        color: '#054A12',
        fontWeight: 'bold',
        fontSize: 14,
    },
    eventCategory: {
        marginBottom: 20,
    },
    eventItem: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    eventDetails: {
        marginBottom: 10,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    eventDate: {
        fontSize: 14,
        color: '#666666',
        marginVertical: 3,
    },
    eventLocation: {
        fontSize: 14,
        color: '#666666',
        marginVertical: 3,
    },
    eventDescription: {
        fontSize: 13,
        color: '#888888',
        marginTop: 5,
    },
    eventActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButton: {
        backgroundColor: '#00A54F',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
    },
    detailsButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    removeButton: {
        backgroundColor: '#FF4D4D',
        padding: 10,
        borderRadius: 8,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666666',
        marginTop: 20,
    },
});

export default FavoritesStyles;
