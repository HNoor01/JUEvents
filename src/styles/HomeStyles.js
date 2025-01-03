import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '10%',
        backgroundColor: '#00A54F',
        width: '112%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    UserIcon: {
        width: 35,
        height: 35,
        position: 'left',
        left: -163,
    },
    AppName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'absolute',
        right: 0,
        left: 0,
    },
    eventCategory: {
        marginTop: '20%',
    },
    CategoryTitle: {
        fontSize: 20,
        color: '#00A54F',
        marginBottom: 10,
    },
    eventItem: {
        backgroundColor: '#00A54F',
        borderRadius: 10,
        marginBottom: 1,
        padding: 0,
    },
    eventImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 5,
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
        marginBottom: 5,
    },
    BottomIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    IconButton: {
        padding: 18,
    },
});
export default HomeStyles
