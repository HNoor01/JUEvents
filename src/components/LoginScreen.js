import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import LoginStyles from '../styles/LoginStyles';
import api from '../apiService';

//import AddReviewScreen from "./AddReviewScreen";
//import universityLogo from "/university-logo.png";


function LoginScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log("LoginScreen is rendering");



  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await api.post('/students/login', {
          student_id: username,
          password,
        });
        if (response.data) {
          alert('Login successful!');
          navigation.navigate('Facilities');
        }
      } catch (error) {
        alert(error.response?.data?.message || 'Login failed.');
      }
    } else {
      alert('Please enter both username and password.');
    }
  };


  return (
      <ScrollView contentContainerStyle={LoginStyles.scrollContainer}>
        <View style={LoginStyles.container}>
          <View style={LoginStyles.header}>

            <Image
                style={LoginStyles.HeaderImage}
                //source={universityLogo}
            />
            <Text style={[LoginStyles.headerText, LoginStyles.boldText]}>Welcome!</Text>
            <Text style={LoginStyles.headerText}>Glad to See You!</Text>
          </View>

          <View style={LoginStyles.LoginForm}>
            <Text style={LoginStyles.formText}>Username:</Text>
            <TextInput
                style={LoginStyles.input}
                placeholder="Enter Username"
                onChangeText={setUsername}
                value={username}
            />
            <Text style={LoginStyles.formText}>Password:</Text>
            <TextInput
                style={LoginStyles.input}
                placeholder="Enter Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <TouchableOpacity style={LoginStyles.button} onPress={handleLogin}>
              <Text style={LoginStyles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('Forgot password clicked!')}>
              <Text style={LoginStyles.ForgotPassword}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
  );
}
export default LoginScreen;
