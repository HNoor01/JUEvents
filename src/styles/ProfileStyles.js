import { StyleSheet } from 'react-native';


const ProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    ProfileIconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#EEEEEE',
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        fontFamily: 'Arial',
    },
    MenuItems: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    MenuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    MenuIcon: {
        marginRight: 20,
        color: '#00A54F',
    },
    MenuText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#333333',
    },
});
export default ProfileStyles;