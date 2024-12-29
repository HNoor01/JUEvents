import React, { useState } from 'react';
import {Text, View, TouchableOpacity,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileStyles from '../styles/ProfileStyles';
function ProfileScreen() {
  return (
      <View style={ProfileStyles.container}>
        <View style={ProfileStyles.header}>
          <View style={ProfileStyles.ProfileIconContainer}>
            <Icon name="user-circle" size={80} color="#00A54F" />
          </View>
          <Text style={ProfileStyles.userName}>Rayah AlRababah</Text>
        </View>
        <View style={ProfileStyles.menuItems}>
          <TouchableOpacity style={ProfileStyles.MenuItem}>
            <Icon name="gear" size={20} color="#00A54F" />
            <Text style={ProfileStyles.MenuText}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ProfileStyles.MenuItem}>
            <Icon name="bell" size={20} color="#00A54F" />
            <Text style={ProfileStyles.MenuText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ProfileStyles.MenuItem}>
            <Icon name="database" size={20} color="#00A54F" />
            <Text style={ProfileStyles.MenuText}>Data and Storage</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ProfileStyles.MenuItem}>
            <Icon name="question-circle" size={20} color="#00A54F" />
            <Text style={ProfileStyles.MenuText}>Help & Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ProfileStyles.MenuItem}>
            <Icon name="info-circle" size={20} color="#00A54F" />
            <Text style={ProfileStyles.MenuText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ProfileStyles.MenuItem}>
            <Icon name="lock" size={20} color="#00A54F" />
            <Text style={ProfileStyles.MenuText}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ProfileStyles.MenuItem}>
            <Icon name="sign-out" size={20} color="#00A54F" />
            <Text style={ProfileStyles.MenuText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
export default ProfileScreen;
