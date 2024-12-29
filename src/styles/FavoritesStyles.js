import { StyleSheet } from 'react-native';

const FavoritesStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        color: '#00A54F',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    bottomTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    CategoryButton: {
        flex: 1,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#00A54F',
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    SelectedButton: {
        backgroundColor: '#00A54F',
    },
    buttonText: {
        color: '#054A12',
        fontWeight: 'bold',
    },
    EventCategory: {
        marginBottom: 30,
    },
    EventItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#00A54F',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    EventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#054A12',
    },
});
export default FavoritesStyles;