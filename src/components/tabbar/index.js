import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Colors, Fonts} from '../../styles';
import CreateRoom from '../../components/rooms/createRoom'
import Home from '../../components/home'
import RoomDetail from '../../components/rooms/detailRoom/RoomDetails'
import Message from '../../components/message'
import Account from '../../components/account'
import Partner from '../../components/partner'
import DistricSearch from '../../components/search/DistricSearch'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, ThemeProvider, Text } from 'react-native-elements';
import CreateAddressRoom from '../../components/rooms/createRoom/CreateAddressRoom';

function CreateRoomIndex({ navigation }) {
  return (
      <CreateRoom/>
  );
}
function HomeRoomIndex({ navigation }) {
  return (
      <Home navigation={navigation}/>
  );
}
function DetailRoomIndex({ navigation }) {
  return (
      <RoomDetail/>
  );
}
function MessageIndex({ navigation }) {
  return (
      <Message/>
  );
}
function AccountIndex({ navigation }) {
  return (
      <Account/>
  );
}
function PartnerIndex({ navigation }) {
  return (
      <Partner/>
  );
}

const Tab = createBottomTabNavigator();
function DetailsScreen() {
  return (
    <DistricSearch/>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();
function DistricSearchIndex() {
  return (
      <DistricSearch/>

  );
}
function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeRoomIndex} />
      <HomeStack.Screen name="DistricSearch" component={DistricSearchIndex} />
    </HomeStack.Navigator>
  );
}

const Tabbar = () => {
  return (
    
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Tìm kiếm') {
              iconName = focused
                ? 'search-outline'
                : 'search-outline';
            } else if (route.name === 'Ở ghép') {
              iconName = focused ? 'people-outline' : 'people-outline';
            } else if (route.name === 'Yêu thích'){
              iconName = focused ? 'heart-outline' : 'heart-outline';
            } else if (route.name === 'Tin nhắn'){
              iconName = focused ? 'chatbox-ellipses-outline' : 'chatbox-ellipses-outline';
            } else if (route.name === 'Tài khoản'){
              iconName = focused ? 'person-outline' : 'person-outline';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.pink,
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Tìm kiếm" component={HomeStackScreen} />
        <Tab.Screen name="Yêu thích" component={CreateRoomIndex} />
        <Tab.Screen name="Ở ghép" component={PartnerIndex} />
        <Tab.Screen name="Tin nhắn" component={MessageIndex} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Tài khoản" component={AccountIndex} />
      </Tab.Navigator>

        
    </NavigationContainer>
  );
}

export default Tabbar