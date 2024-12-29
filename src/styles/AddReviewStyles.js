import { StyleSheet } from 'react-native';


const AddReviewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        minHeight: 100,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
    addPhotoButton: {
        backgroundColor: '#00a54f',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    addPhotoText: {
        color: '#fff',
        fontSize: 16,
    },
    photosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    photo: {
        width: 100,
        height: 100,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    submitButton: {
        backgroundColor: '#00a54f',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    submitText: {
        color: '#fff',
        fontSize: 18,
    },
    charCount: {
        fontSize: 12,
        color: 'red',
        textAlign: 'right',
        marginBottom: 5,
    }
});
export default AddReviewStyles;