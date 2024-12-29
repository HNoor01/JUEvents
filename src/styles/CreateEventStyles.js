import { StyleSheet } from 'react-native';


const CreateEventStyles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    required: {
        color: 'red',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        textAlignVertical: 'top',
        borderRadius: 5,
        marginBottom: 10,
    },
    errorInput: {
        borderColor: 'red',
    },
    imageUpload: {
        height: 200,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    imagePreview: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    imageText: {
        color: '#888',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    createEventButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    createEventButtonText: {
        color: 'white',
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: '#FF5733',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        padding: 20,
    },
    modalItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    modalText: {
        fontSize: 16,
        color: '#333',
    },
    modalCloseButton: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#FF5733',
        borderRadius: 5,
        alignItems: 'center',
    },
    modalCloseText: {
        color: 'white',
        fontSize: 16,
    },
    dateInput: {
        textAlign: 'center',
    },
    timeInput: {
        textAlign: 'center',
    },
    inputStyle : {
        textAlign: 'left',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    charCount: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'right',
        marginBottom: 5,
    },
});
export default CreateEventStyles;