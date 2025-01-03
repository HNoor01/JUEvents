import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import FavoritesStyles from '../styles/FavoritesStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { useNavigation } from '@react-navigation/native';
import api from '../apiService';

function FavoritesScreen() {
    const { interestedEvents, toggleInterestedEvent } = useContext(FavoritesContext);
    const [selectedCategory, setSelectedCategory] = useState('upcoming');
    const navigation = useNavigation();

    const currentDate = new Date();
    const upcomingEvents = interestedEvents.filter(
        (event) => new Date(event.date) >= currentDate
    );
    const pastEvents = interestedEvents.filter(
        (event) => new Date(event.date) < currentDate
    );

    const renderEventItem = ({ item }) => (
        <View style={FavoritesStyles.eventItem}>
            <View style={FavoritesStyles.eventDetails}>
                <Text style={FavoritesStyles.eventTitle}>{item.name}</Text>
                <Text style={FavoritesStyles.eventDate}>
                    <Ionicons name="calendar-outline" size={14} color="#00A54F" />{' '}
                    {item.date}
                </Text>
                <Text style={FavoritesStyles.eventLocation}>
                    <Ionicons name="location-outline" size={14} color="#00A54F" />{' '}
                    {item.location}
                </Text>
                <Text style={FavoritesStyles.eventDescription}>
                    {item.description.length > 50
                        ? item.description.substring(0, 50) + '...'
                        : item.description}
                </Text>
            </View>
            <View style={FavoritesStyles.eventActions}>
                <TouchableOpacity
                    style={FavoritesStyles.detailsButton}
                    onPress={() => navigation.navigate('EventDetails', { eventId: item.id })}
                >
                    <Text style={FavoritesStyles.detailsButtonText}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={FavoritesStyles.removeButton}
                    onPress={() => toggleInterestedEvent(item)}
                >
                    <Ionicons name="trash-outline" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={FavoritesStyles.container}>
            {/* Category Tabs */}
            <View style={FavoritesStyles.bottomTitle}>
                <TouchableOpacity
                    style={[
                        FavoritesStyles.CategoryButton,
                        selectedCategory === 'upcoming' &&
                        FavoritesStyles.SelectedButton,
                    ]}
                    onPress={() => setSelectedCategory('upcoming')}
                >
                    <Text style={FavoritesStyles.buttonText}>Upcoming Events</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        FavoritesStyles.CategoryButton,
                        selectedCategory === 'past' && FavoritesStyles.SelectedButton,
                    ]}
                    onPress={() => setSelectedCategory('past')}
                >
                    <Text style={FavoritesStyles.buttonText}>Past Events</Text>
                </TouchableOpacity>
            </View>

            {/* Event List */}
            <FlatList
                data={selectedCategory === 'upcoming' ? upcomingEvents : pastEvents}
                renderItem={renderEventItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={FavoritesStyles.eventCategory}
                ListEmptyComponent={
                    <Text style={FavoritesStyles.emptyText}>
                        No {selectedCategory === 'upcoming' ? 'Upcoming' : 'Past'} Events
                    </Text>
                }
            />
        </View>
    );
}

export default FavoritesScreen;
