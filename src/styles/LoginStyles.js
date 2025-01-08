import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00A54F',
        justifyContent: 'center', // Center all content vertically
        alignItems: 'center', // Center all content horizontally
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20, // Positive margin to space it properly
    },
    HeaderImage: {
        width: 120,
        height: 120,
    },
    headerText: {
        color: "#FFFFFF",
        textAlign: 'left',
        fontSize: 30,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: "#FFFFFF",
    },
    LoginForm: {
        width: '90%',
        alignItems: 'left', // Center form elements horizontally
        marginTop: 40, // Add space below the header
    },
    formText: {
        fontSize: 20,
        color: "#FFFFFF",
        marginVertical: 5,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        marginVertical: 10,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5, // Add rounded corners
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        borderRadius: 5, // Add rounded corners
    },
    buttonText: {
        color: '#00A54F',
        fontSize: 18,
    },
    ForgotPassword: {
        color: '#FFFFFF',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default LoginStyles;
