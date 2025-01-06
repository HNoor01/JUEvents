import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FavoritesProvider } from './src/contexts/FavoritesContext';
import { UserProvider } from './src/contexts/UserContext'; // Import the UserProvider
import Navigation from './src/Navigation'; // Adjust path as needed

export default function App() {
    return (
        <UserProvider>
            <FavoritesProvider>
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </FavoritesProvider>
        </UserProvider>
    );
}
