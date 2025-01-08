import React, { useState, useContext } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import LoginStyles from '../styles/LoginStyles';
import api from '../apiService';
import { UserContext } from '../contexts/UserContext';

function LoginScreen({ navigation }) {
  const [studentIdInput, setStudentIdInput] = useState(''); // Rename input to reflect student ID
  const [password, setPassword] = useState('');
  const {setStudentId} = useContext(UserContext);

  const handleLogin = async () => {
    if (studentIdInput && password) {
      try {
        const response = await api.post('/students/login', {
          student_id: studentIdInput, // Use student_id in the API request
          password,
        });

        console.log('Login API Response:', response.data); // Debug log

        if (response.data) {
          setStudentId(studentIdInput); // Set student ID in context
          console.log('Student ID set in context:', studentIdInput); // Debug log
          alert('Login successful!');
          navigation.navigate('Facilities'); // Navigate to the next screen
        }
      } catch (error) {
        console.error('Login Error:', error);
        alert(error.response?.data?.message || 'Login failed.');
      }
    } else {
      alert('Please enter both student ID and password.');
    }
  };

  return (
      <SafeAreaView style={LoginStyles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={LoginStyles.header}>
            <Text style={[LoginStyles.headerText, LoginStyles.boldText]}>Welcome!</Text>
            <Text style={LoginStyles.headerText}>Glad to See You!</Text>
          </View>

          <View style={LoginStyles.LoginForm}>
            <Text style={LoginStyles.formText}>Student ID:</Text>
            <TextInput
                style={LoginStyles.input}
                placeholder="Enter Student ID"
                onChangeText={setStudentIdInput}
                value={studentIdInput}
                keyboardType="numeric"
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
        </ScrollView>
      </SafeAreaView>
  );
}

  export default LoginScreen;
