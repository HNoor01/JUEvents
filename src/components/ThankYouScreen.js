import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ThankYouStyles from '../styles/ThankYouStyles'; // Import styles

const ThankYouScreen = ({ navigation }) => {
    return (
        <View style={ThankYouStyles.container}>
            {/* Confetti Background */}
            <Image
                source={require('../../assets/confettiBackground.png')} // Replace with your actual confetti background image
                style={ThankYouStyles.confettiBackground}
            />

            {/* Illustration */}
            <Image
                source={require('../../assets/thankYouIllustration.png')} // Replace with your actual illustration image
                style={ThankYouStyles.illustration}
            />

            {/* Thank You Text */}
            <Text style={ThankYouStyles.title}>Thank you!</Text>
            <Text style={ThankYouStyles.subtitle}>We appreciate your feedback!</Text>

            {/* Home Button */}
            <TouchableOpacity
                style={ThankYouStyles.button}
                onPress={() => navigation.navigate('Home')} // Navigate back to the Home screen
            >
                <Text style={ThankYouStyles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ThankYouScreen;
