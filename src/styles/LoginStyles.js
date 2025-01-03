import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00A54F',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -80,
        marginBottom: 20,
    },
    HeaderImage: {
        width: 120,
        height: 120,
    },
    headerText: {
        color: "#FFFFFF",
        textAlign: 'center',
        fontSize: 30,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: "#FFFFFF",
    },
    LoginForm: {
        width: '90%',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    formText: {
        fontSize: 20,
        color: "#FFFFFF",
        marginVertical: 1,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        marginVertical: 10,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#00A54F',
        fontSize: 18,
    },
    ForgotPassword: {
        color: '#FFFFFF',
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 200,
    },
});
export default LoginStyles;
