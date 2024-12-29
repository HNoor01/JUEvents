import { StyleSheet } from 'react-native';


const FacilitiesStyles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#00A54F',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    headerText: {
        color: "#FFFFFF",
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
    },
    FacilityItem: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        margin: 10,
        width: '45%',
        alignItems: 'center',
    },
    selectedFacility: {
        backgroundColor: '#aeb7b1',
    },
    facilityText: {
        color: '#054A12',
        fontSize: 15,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#054A12',
        fontSize: 18,
    },
});
export default FacilitiesStyles;