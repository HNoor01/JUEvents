import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStyles from '../styles/HomeStyles';

function HomeScreen() {
  const navigation = useNavigation();
  const [hasNewNotifications, setHasNewNotifications] = useState(true);

  const ForYouEvents = [
    {
      id: '1',
        //image: require('../../../assets/images/event1.jpg'),
      date: 'Monday, November 20, 2024 10:00 AM',
      title: 'Nursing Skills Workshop',
      facility: 'School of Nursing',
    },
  ];

  const UniversityWideEvents = [
    {
      id: '1',
       // image: require('../../../assets/images/event2.jpg'),
      date: 'Wednesday, November 22, 2024 12:00 PM',
      title: 'Business Innovation',
      facility: 'School Of Business',
    },
  ];

  return (
      <ScrollView contentContainerStyle={HomeStyles.container}>
        <View style={HomeStyles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ zIndex: 1 }}>
            <Icon name="user-circle-o" size={35} style={HomeStyles.UserIcon} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={HomeStyles.AppName}>JUEvents</Text>
        </View>

        <View style={HomeStyles.eventCategory}>
          <Text style={HomeStyles.CategoryButton}>For You</Text>
          {ForYouEvents.map((event) => (
              <TouchableOpacity
                  key={event.id}
                  style={HomeStyles.eventItem}
                  onPress={() => navigation.navigate('EventDetails', { eventId: event.id })}
              >
                <Image source={event.image} style={HomeStyles.eventImage} />
                <Text style={HomeStyles.eventDate}>{event.date}</Text>
                <Text style={HomeStyles.eventTitle}>{event.title}</Text>
                <Text style={HomeStyles.eventFacility}>{event.facility}</Text>
              </TouchableOpacity>
          ))}
        </View>

        <View style={HomeStyles.eventCategory}>
          <Text style={HomeStyles.CategoryTitle}>University - Wide Events</Text>
          {UniversityWideEvents.map((event) => (
              <View key={event.id} style={HomeStyles.eventItem}>
                {event.image ? (
                    <Image source={event.image} style={homeStyles.eventImage} />
                ) : (
                    <Text>No Image Available</Text>
                )}
                <Text style={HomeStyles.eventDate}>{event.date}</Text>
                <Text style={HomeStyles.eventTitle}>{event.title}</Text>
                <Text style={HomeStyles.eventFacility}>{event.facility}</Text>
              </View>
          ))}
        </View>

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
