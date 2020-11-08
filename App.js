import React from 'react';
import { StyleSheet } from 'react-native';
import {Colors, Fonts} from './src/styles';
import CreateRoom from './src/components/rooms/createRoom'
import Search from './src/components/search/search'
import RoomDetail from './src/components/rooms/detailRoom/RoomDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, ThemeProvider, Text } from 'react-native-elements';
import {Provider} from 'react-redux';
import store from './src/store';
function HomeScreen({ navigation }) {
  return (
<ThemeProvider>

      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('createRoom')}
      />
      <Button
        title="Go to search"
        onPress={() => navigation.navigate('searchRoom')}
      />
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('detailRoom')}
      />
          </ThemeProvider>

  );
}

function CreateRoomIndex({ navigation }) {
  return (
      <CreateRoom/>
  );
}
function SearchRoomIndex({ navigation }) {
  return (
      <Search/>
  );
}
function DetailRoomIndex({ navigation }) {
  return (
      <RoomDetail/>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="createRoom" component={CreateRoomIndex} options={{
            title: 'Đăng phòng',
            headerStyle: {
              backgroundColor: Colors.pink,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: Fonts.headerFontSize
            },
          }} />
          <Stack.Screen name="searchRoom" component={SearchRoomIndex} options={{
            title: 'Tìm kiếm phòng',
            headerStyle: {
              backgroundColor: Colors.pink,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: Fonts.headerFontSize
            },
          }} />

          <Stack.Screen name="detailRoom" component={DetailRoomIndex} options={{
            title: 'Chi tiết phòng',
            headerStyle: {
              backgroundColor: Colors.pink,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: Fonts.headerFontSize
            },
          }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App