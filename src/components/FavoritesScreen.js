import React, { useState } from 'react';
import {Text, View, TouchableOpacity, ScrollView } from 'react-native';

import FavoritesStyles from '../styles/FavoritesStyles';
import Ionicons from "@expo/vector-icons/Ionicons";
function FavoritesScreen() {
  const [SelectedCategory, SetSelectedCategory] = useState('upcoming');
  const upcomingEvents = [
    {
      id: '1',
      title: 'Nursing Skills Workshop',
    },
  ];

  const pastEvents = [
    {
      id: '2',
      title: 'Business Innovation Seminar',
    },
  ];

  return (
      <ScrollView contentContainerStyle={FavoritesStyles.container}>

        {/* Toggle buttons */}
        <View style={FavoritesStyles.bottomTitle}>
          <TouchableOpacity
              style={[
                  FavoritesStyles.CategoryButton,
                  SelectedCategory === 'upcoming' && FavoritesStyles.SelectedButton,
              ]}
              onPress={() => SetSelectedCategory('upcoming')}
          >
            <Text style={FavoritesStyles.buttonText}>Upcoming Events</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={[
                  FavoritesStyles.CategoryButton,
                  SelectedCategory === 'past' && FavoritesStyles.SelectedButton,
              ]}
              onPress={() => SetSelectedCategory('past')}
          >
            <Text style={FavoritesStyles.buttonText}>Past Events</Text>
          </TouchableOpacity>
        </View>

        {/* Events list */}
        <View style={FavoritesStyles.eventCategory}>
          {SelectedCategory === 'upcoming' &&
              upcomingEvents.map((event) => (
                  <View key={event.id} style={FavoritesStyles.eventItem}>
                    <Text style={FavoritesStyles.eventTitle}>{event.title}</Text>
                    <Ionicons name="chevron-forward" size={24} color="#00A54F" />
                  </View>
              ))}

          {SelectedCategory === 'past' &&
              pastEvents.map((event) => (
                  <View key={event.id} style={FavoritesStyles.eventItem}>
                    <Text style={FavoritesStyles.eventTitle}>{event.title}</Text>
                    <Ionicons name="chevron-forward" size={24} color="#00A54F" />
                  </View>
              ))}
        </View>
      </ScrollView>
  );
}
export default FavoritesScreen;
