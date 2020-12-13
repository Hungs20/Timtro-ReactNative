import React, { Component, useEffect  } from 'react'
import {View, Text, AppRegistry } from 'react-native'
import { ListItem, Avatar, FlatList, Icon } from 'react-native-elements'
import * as Colors from '../../styles/colors' 
import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';


class Account extends Component {
    constructor(props){
        super(props)
        this.state = { currentUser: null, data: [] }
        
    }
    
  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })

    const subscriber = firestore()
    .collection('users').where('email','==', currentUser.email)
    .onSnapshot(querySnapshot => {
      const users = [];

      querySnapshot.forEach(documentSnapshot => {
        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      this.setState({data: users})
    });

  // Unsubscribe from events when no longer in use
   () => subscriber();

    
  }

    keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem bottomDivider>
    <Avatar source={{uri: item.avatar_url}} />
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
)


    render(){
         
        return (
        <View>
            <View style={{backgroundColor: 'white', height: 60}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center',textAlignVertical: 'center', paddingVertical: 10}}>Tài khoản</Text>
            </View>

            {this.state.data.map((item, i) => (
            <ListItem bottomDivider containerStyle={{backgroundColor: Colors.grayBackground}}>
                <Avatar rounded size="medium" source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}} />
                <ListItem.Content>
                <ListItem.Title style={{fontWeight: 'bold'}}>{this.state.currentUser && this.state.currentUser.email}</ListItem.Title>
                <ListItem.Subtitle>{item.location}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            ))}

        {this.state.data.map((item, i) => (
            <ListItem key={i} bottomDivider  containerStyle={{backgroundColor: Colors.grayBackground}}>
                <ListItem.Content>
                <ListItem.Title>Ngôn ngữ</ListItem.Title>
                
                </ListItem.Content>
                
                <Text style={{textAlign:'right', width:100}}>{item.language}</Text>
                <ListItem.Chevron />
            </ListItem>
        ))}

        {this.state.data.map((item, i) => (
            <ListItem key={i} bottomDivider  containerStyle={{backgroundColor: Colors.grayBackground}} onPress={()=>console.log('tiente')}>
                <ListItem.Content>
                <ListItem.Title>Tiền tệ</ListItem.Title>
                
                </ListItem.Content>
                
                <Text style={{textAlign:'right', width:100}}>{item.unitMoney}</Text>
                <ListItem.Chevron />
            </ListItem>
        ))}


        </View>
        )
    }
}
export default Account;