import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FavoritesProvider } from './src/contexts/FavoritesContext';
import Navigation from './src/Navigation'; // Adjust path as needed

export default function App() {
    return (
        <FavoritesProvider>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </FavoritesProvider>
    );
}
