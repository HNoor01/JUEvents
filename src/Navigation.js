import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import FacilitiesScreen from './components/FacilitiesScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import CreateEventScreen from './components/CreateEventScreen';
import NotificationsScreen from './components/NotificationsScreen';
import FavoritesScreen from './components/FavoritesScreen';
import EventDetailsScreen from './components/EventDetailsScreen';
import AddReviewScreen from './components/AddReviewScreen';

const Stack = createStackNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator id="mainStack" initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Facilities" component={FacilitiesScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
            <Stack.Screen name="AddReviewScreen" component={AddReviewScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation;
