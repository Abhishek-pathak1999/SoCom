// import 'react-native-gesture-handler';
// import React from 'react';
// import { SafeAreaView, Text, View } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import Home from './home';
// //C:\Users\ACER\Desktop\ractapplication\myproject\src\Component\cart.js
// import Cart from './cart';
// import Favroite from './favroite';
// import Notification from './notification';
// import Search from './search';

// const Tab = createMaterialTopTabNavigator();

// function Dashboard() {
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <Tab.Navigator>
//                 <Tab.Screen name="Home" component={Home} />
//                 <Tab.Screen name="Cart" component={Cart} />
//                 <Tab.Screen name="Favroite" component={Favroite} />
//                 <Tab.Screen name="Notification" component={Notification} />
//                 <Tab.Screen name="Search" component={Search} />
//             </Tab.Navigator>
//         </SafeAreaView>
//     );
// }

// export default Dashboard;
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './src/screens/setting';
import HomeScreen from './src/screens/Dashboard/homescreen';
import NotificationsScreen from './src/screens/Dashboard/notification';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Like from './src/screens/Dashboard/like';

const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen options={{headerShown: false,}} name="Home" component={MyTabs} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
      
    </NavigationContainer>
    
  );
}

function MyTabs() {
  const screenOptions = {
    tabBarItemStyle: {
      backgroundColor: 'red',
    }
  };
  return (
    <Tab.Navigator {...{ screenOptions }} >
      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ tintColor }) => {
          return (
            <Icon name="ios-home" color={'black'} size={25} />)
        }
      }}
        name="Home" component={HomeScreen} />
      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ tintColor }) => {
          return (
            <Icon name="radio-outline" color={'black'} size={25} />)
        }
      }}
        name="Live Shop" component={SettingsScreen} />
      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ tintColor }) => {
          return (
            <Icon name="grid" color={'black'} size={25} />)
        }
      }}
        name="Category" component={HomeScreen} />
      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ tintColor }) => {
          return (
            <Icon name="storefront-outline" color={'black'} size={25} />)
        }
      }}

        name="Stores" component={SettingsScreen} />
      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ tintColor }) => {
          return (
            <Icon name="person-circle-outline" color={'black'} size={30} />)
        }
      }}
        name="Profile" component={HomeScreen} />


    </Tab.Navigator>
  );
}







