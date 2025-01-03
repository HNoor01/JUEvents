import { StyleSheet } from 'react-native';

const ThankYouStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5', // Light background
        paddingHorizontal: 20,
    },
    confettiBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ensure the image covers the entire screen
        zIndex: -1,
    },
    illustration: {
        width: 200,
        height: 200,
        marginBottom: 20,
        resizeMode: 'contain', // Keep the illustration aspect ratio
    },
    title: {
        fontSize: 30, // Larger font size for the title
        fontWeight: 'bold',
        color: '#00A54F', // Green color for the title
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#555', // Neutral color for the subtitle
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#00A54F', // Green button
        padding: 15,
        borderRadius: 30, // Rounded button
        width: '60%', // Button width
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Shadow for button
    },
    buttonText: {
        color: '#FFF', // White text
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ThankYouStyles;
