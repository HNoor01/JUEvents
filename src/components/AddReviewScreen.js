import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AddReviewStyles from '../styles/AddReviewStyles';
import Ionicons from "react-native-vector-icons/Ionicons";

const AddReviewScreen = ({ route,navigation }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [photos, setPhotos] = useState([]);
  const maxLength = 80;

  const { eventTitle } = route.params || {};
  // التعامل مع الضغط على النجوم
  const handleStarPress = (index) => {
    setRating(index);
  };

  const handleAddPhotos = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.Images,
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

  const handleSubmitReview = () => {
    if (reviewText.trim() && rating > 0) {
      console.log({ reviewText, rating, photos });
      navigation.goBack();
    } else {
      alert('Please provide a rating and a review!');
    }
  };

  return (
      <View style={AddReviewStyles .container}>
        <Text style={AddReviewStyles .title}>
          {eventTitle ? eventTitle : 'No event title provided'}
        </Text>

        <View style={AddReviewStyles .starsContainer}>
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

        <Text style={AddReviewStyles .charCount}>
          {maxLength - reviewText.length} /80
        </Text>

        <TextInput
            style={AddReviewStyles .input}
            placeholder="Write your review here..."
            value={reviewText}
            onChangeText={handleTextChange}
            multiline
            maxLength={maxLength}
        />



        {/* زر لإضافة الصور */}
        <TouchableOpacity style={AddReviewStyles .addPhotoButton} onPress={handleAddPhotos}>
          <Text style={AddReviewStyles .addPhotoText}>Add Photos</Text>
        </TouchableOpacity>

        {/* عرض الصور المضافة */}
        <View style={AddReviewStyles .photosContainer}>
          {photos.map((photo, index) => (
              <Image key={index} source={{ uri: photo.uri }} style={AddReviewStyles .photo} />
          ))}
        </View>

        {/* زر إرسال التقييم */}
        <TouchableOpacity style={AddReviewStyles .submitButton} onPress={handleSubmitReview}>
          <Text style={AddReviewStyles .submitText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
  );
};

export default AddReviewScreen;

