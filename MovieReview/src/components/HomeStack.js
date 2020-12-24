 import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import Login from '../pages/Login';
import Register from '../pages/Register';
import HomePage from '../pages/HomePage';
import ReviewPage from '../pages/ReviewPage';
import ProfilePage from '../pages/ProfilePage';
import SplashScreen from '../pages/SplashScreenPage';
import HomePageAddReview from '../pages/HomePageAddReview';
import HomePageDetails from '../pages/HomePageDetails';

import Testing from '../pages/testing';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login Page" component={Login} />
      <Stack.Screen name="Home Page" component={HomePage} />
      <Stack.Screen name="Register Page" component={Register} />
      <Stack.Screen name="Home PAge Details" component={HomePageDetails} />
      <Stack.Screen name="Home Page Add Review" component={HomePageAddReview} />
      <Stack.Screen name="MyTab" component={MyTab} />
      <Stack.Screen name="Testing" component={Testing} />
    </Stack.Navigator>
  );
};

const MyTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home Page">
      <Tab.Screen
        name="All Reviews"
        component={ReviewPage}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="message" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Home Page"
        component={HomePage}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Edit Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
