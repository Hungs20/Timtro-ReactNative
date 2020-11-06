import React from 'react';
import { StyleSheet } from 'react-native';
import {Colors, Fonts} from './src/styles';
import CreateRoom from './src/components/rooms/createRoom'
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
          </ThemeProvider>

  );
}

function CreateRoomIndex({ navigation }) {
  return (
      <CreateRoom/>
  );
}
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store = {store}>
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
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App