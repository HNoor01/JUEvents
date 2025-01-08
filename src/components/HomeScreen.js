import React, { useEffect, useState, useContext } from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStyles from '../styles/HomeStyles';
import api from '../apiService';
import { UserContext } from '../contexts/UserContext'; // Import UserContext

function HomeScreen() {
    const navigation = useNavigation();
    const {studentId} = useContext(UserContext); // Access studentId from context
    const [hasNewNotifications, setHasNewNotifications] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/events/');
                setEvents(response.data);
                console.log("Events fetched:", response.data); // Debugging log
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        const fetchUnreadCount = async () => {
            try {
                const response = await api.get(`/notifications/${studentId}/unread`);
                setHasNewNotifications(response.data.unreadCount > 0);
            } catch (error) {
                console.error('Error fetching unread count:', error);
            }
        };

        fetchEvents();
        fetchUnreadCount();
    }, [studentId]);

    const handleNotificationsPress = async () => {
        try {
            console.log("Marking notifications as read for studentId:", studentId); // Debugging log

            const response = await api.patch('/notifications/mark-as-read', {
                studentId,
            });

            console.log('Notifications marked as read:', response.data); // Debugging log
            setHasNewNotifications(false);
            navigation.navigate('Notifications');
        } catch (error) {
            console.error('Error marking notifications as read:', error);
            alert(error.response?.data?.error || 'Failed to mark notifications as read.');
        }
    };


    return (
        <SafeAreaView style={HomeStyles.container}>
            <View style={HomeStyles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    style={{zIndex: 1}}
                >
                    <Icon
                        name="user-circle-o"
                        size={35}
                        style={HomeStyles.UserIcon}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
                <Text style={HomeStyles.AppName}>JUEvents</Text>
            </View>

            {/* Events Section */}
            <FlatList
                data={events}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={HomeStyles.eventItem}
                        onPress={() =>
                            navigation.navigate('EventDetails', {eventId: item.id})
                        }
                    >
                        <Image
                            source={{uri: item.image || 'https://via.placeholder.com/150'}}
                            style={HomeStyles.eventImage}
                        />
                        <Text style={HomeStyles.eventDate}>{item.date}</Text>
                        <Text style={HomeStyles.eventTitle}>{item.name}</Text>
                        <Text style={HomeStyles.eventFacility}>{item.location}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <Text style={{textAlign: 'center', marginTop: 20}}>
                        No events available
                    </Text>
                }
                contentContainerStyle={{paddingBottom: 100}}
            />

            {/* Bottom Navigation Icons */}
            <View style={HomeStyles.BottomIconContainer}>
                <TouchableOpacity
                    style={HomeStyles.IconButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Icon name="home" size={50} color="#00A54F"/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={HomeStyles.IconButton}
                    onPress={() => navigation.navigate('CreateEvent')}
                >
                    <Icon name="plus-square" size={50} color="#00A54F"/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={HomeStyles.IconButton}
                    onPress={() => navigation.navigate('Favorites')}
                >
                    <Icon name="star" size={50} color="#00A54F"/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={HomeStyles.IconButton}
                    onPress={handleNotificationsPress}
                >
                    <View>
                        <Icon name="bell" size={50} color="#00A54F"/>
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
        </SafeAreaView>
    );
}
export default HomeScreen;
