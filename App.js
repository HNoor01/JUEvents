import React from 'react';
import { registerRootComponent } from 'expo';
import Navigation from './src/Navigation'; // Adjust path as needed

export default function App() {
    return <Navigation />;
}

// Register the app with Expo
registerRootComponent(App);
