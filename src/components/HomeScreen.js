import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStyles from '../styles/HomeStyles';
import api from '../apiService';
import { useFocusEffect } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();
    const [hasNewNotifications, setHasNewNotifications] = useState(true);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/events/');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents(); // Call the async function inside useEffect
    }, []);
    useFocusEffect(
        React.useCallback(() => {
            const fetchEvents = async () => {
                try {
                    const response = await api.get('/events');
                    setEvents(response.data);
                } catch (error) {
                    console.error('Error fetching events:', error);
                }
            };
            fetchEvents();
        }, [])
    );
    return (
        <ScrollView contentContainerStyle={HomeStyles.container}>
            {/* Header */}
            <View style={HomeStyles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ zIndex: 1 }}>
                    <Icon name="user-circle-o" size={35} style={HomeStyles.UserIcon} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={HomeStyles.AppName}>JUEvents</Text>
            </View>

            {/* Events Section */}
            <View style={HomeStyles.eventCategory}>
                <Text style={HomeStyles.CategoryTitle}>Upcoming Events</Text>
                {events.length > 0 ? (
                    <FlatList
                        data={events}
                        keyExtractor={(item) => item.id.toString()} // Assuming event has a unique id
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={HomeStyles.eventItem}
                                onPress={() => navigation.navigate('EventDetails', { eventId: item.id })}
                            >
                                <Image
                                    source={{ uri: item.image || 'https://via.placeholder.com/150' }}
                                    style={HomeStyles.eventImage}
                                />
                                <Text style={HomeStyles.eventDate}>{item.date}</Text>
                                <Text style={HomeStyles.eventTitle}>{item.name}</Text>
                                <Text style={HomeStyles.eventFacility}>{item.location}</Text>
                            </TouchableOpacity>
                        )}
                    />
                ) : (
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>No events available</Text>
                )}
            </View>

            {/* Bottom Navigation Icons */}
            <View style={HomeStyles.BottomIconContainer}>
                <TouchableOpacity
                    style={HomeStyles.IconButton}
                    onPress={() => navigation.navigate('EventDetails')}
                >
                    <Icon name="home" size={50} color="#00A54F" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={HomeStyles.IconButton}
                    onPress={() => navigation.navigate('CreateEvent')}
                >
                    <Icon name="plus-square" size={50} color="#00A54F" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={HomeStyles.IconButton}
                    onPress={() => navigation.navigate('Favorites')}
                >
                    <Icon name="star" size={50} color="#00A54F" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={HomeStyles.IconButton}
                    onPress={() => {
                        navigation.navigate('Notifications');
                        setHasNewNotifications(false);
                    }}
                >
                    <View>
                        <Icon name="bell" size={50} color="#00A54F" />
                        {hasNewNotifications && (
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    height: 12,
                                    width: 12,
                                    borderRadius: 6,
                                    backgroundColor: 'red',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            />
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;
