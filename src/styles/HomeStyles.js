import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '8%',
        backgroundColor: '#00A54F',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    UserIcon: {
        width: 35,
        height: 35,
        position: 'absolute',
        left: 20,
        top: -15,
    },
    AppName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        flex: 1,
    },
    eventItem: {
        backgroundColor: '#00A54F',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        width: '90%',
        marginHorizontal: '5%',
        flex: 1,
    },

    eventImage: {
        width: '100%',
        aspectRatio: 16 / 9, // Adjust this ratio based on your image dimensions
        borderRadius: 10,
    },

    eventDate: {
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    eventFacility: {
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    BottomIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
    },
    IconButton: {
        padding: 10,
    },
});

export default HomeStyles;
