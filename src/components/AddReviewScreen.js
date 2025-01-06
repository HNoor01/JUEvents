import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AddReviewStyles from '../styles/AddReviewStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../apiService';

const AddReviewScreen = ({ route, navigation }) => {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [photos, setPhotos] = useState([]);
    const { eventId, eventTitle } = route.params || {};

    const handleStarPress = (index) => setRating(index);

    const handleAddPhotos = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 1,
            allowsMultipleSelection: true,
        });

        if (!result.canceled) {
            setPhotos([...photos, ...result.assets]);
        }
    };

    const handleSubmitReview = async () => {
        if (reviewText.trim() && rating > 0) {
            try {
                const photoUris = photos.map(photo => photo.uri);

                await api.post(`/reviews/${eventId}/reviews`, {
                    rating,
                    comment: reviewText,
                    photos: photoUris,
                    isAttended: true,
                });

                navigation.navigate('ThankYouScreen');
            } catch (error) {
                Alert.alert('Error', error.response?.data?.error || 'Failed to submit review.');
            }
        } else {
            Alert.alert('Error', 'Please provide a rating and review!');
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={AddReviewStyles.container}>
                    <Text style={AddReviewStyles.title}>{eventTitle || 'No event title provided'}</Text>

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

                    <TextInput
                        style={AddReviewStyles.input}
                        placeholder="Write your review here..."
                        value={reviewText}
                        onChangeText={setReviewText}
                        multiline
                        maxLength={80}
                    />

                    <TouchableOpacity style={AddReviewStyles.addPhotoButton} onPress={handleAddPhotos}>
                        <Text style={AddReviewStyles.addPhotoText}>Add Photos</Text>
                    </TouchableOpacity>

                    <View style={AddReviewStyles.photosContainer}>
                        {photos.map((photo, index) => (
                            <Image key={index} source={{ uri: photo.uri }} style={AddReviewStyles.photo} />
                        ))}
                    </View>

                    <TouchableOpacity style={AddReviewStyles.submitButton} onPress={handleSubmitReview}>
                        <Text style={AddReviewStyles.submitText}>Submit Review</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddReviewScreen;
