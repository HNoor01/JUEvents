import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AddReviewStyles from '../styles/AddReviewStyles';
import Ionicons from "react-native-vector-icons/Ionicons";
import api from '../apiService';

const AddReviewScreen = ({ route, navigation }) => {
    const [name, setName] = useState(''); // For review name
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [photos, setPhotos] = useState([]);
    const maxLength = 80;

    const { eventId, eventTitle } = route.params || {};

    const handleStarPress = (index) => {
        setRating(index);
    };

    const handleAddPhotos = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsMultipleSelection: true,
        });

        if (!result.canceled) {
            setPhotos([...photos, ...result.assets]);
        }
    };

    const handleTextChange = (text) => {
        if (text.length <= maxLength) {
            setReviewText(text);
        }
    };

    const handleSubmitReview = async () => {
        if (reviewText.trim() && rating > 0) {
            try {
                // Prepare photo data (if needed)
                const photoUris = photos.map(photo => photo.uri);

                // Submit review to the backend
                await api.post(`/reviews/${eventId}/reviews`, {
                    rating,
                    comment: reviewText,
                    photos: photoUris, // Include photos
                    isAttended: true, // Attendance flag
                });

                // Navigate to the Thank You Screen
                navigation.navigate('ThankYouScreen');

            } catch (error) {
                console.error('Error submitting review:', error.response?.data || error);
                Alert.alert('Error', error.response?.data?.error || 'Failed to submit review.');
            }
        } else {
            Alert.alert('Error', 'Please provide a rating and review!');
        }
    };


    return (
        <View style={AddReviewStyles.container}>
            <Text style={AddReviewStyles.title}>
                {eventTitle ? eventTitle : 'No event title provided'}
            </Text>



            {/* Star Rating */}
            <View style={AddReviewStyles.starsContainer}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                        <Ionicons
                            name={index <= rating ? 'star' : 'star-outline'}
                            size={30}
                            color={index <= rating ? '#ffd700' : '#ccc'}
                        />
                    </TouchableOpacity>
                ))}
            </View>

            {/* Character Count */}
            <Text style={AddReviewStyles.charCount}>
                {maxLength - reviewText.length} / {maxLength}
            </Text>

            {/* Review Text Input */}
            <TextInput
                style={AddReviewStyles.input}
                placeholder="Write your review here..."
                value={reviewText}
                onChangeText={handleTextChange}
                multiline
                maxLength={maxLength}
            />

            {/* Add Photos */}
            <TouchableOpacity style={AddReviewStyles.addPhotoButton} onPress={handleAddPhotos}>
                <Text style={AddReviewStyles.addPhotoText}>Add Photos</Text>
            </TouchableOpacity>

            {/* Display Added Photos */}
            <View style={AddReviewStyles.photosContainer}>
                {photos.map((photo, index) => (
                    <Image key={index} source={{ uri: photo.uri }} style={AddReviewStyles.photo} />
                ))}
            </View>

            {/* Submit Review */}
            <TouchableOpacity style={AddReviewStyles.submitButton} onPress={handleSubmitReview}>
                <Text style={AddReviewStyles.submitText}>Submit Review</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddReviewScreen;
