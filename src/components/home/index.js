import React, { Component} from 'react'
import {View, Image, StyleSheet, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Text, CheckBox, Divider, ThemeProvider, Input } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import Search from '../search/search'
import { FlatGrid } from 'react-native-super-grid';
import { SectionGrid } from 'react-native-super-grid';

import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null,
            items: [
                { name: 'Hai Bà Trưng', uri: require('../../data/haibatrung.png') },
                { name: 'Cầu Giấy', uri: require('../../data/haibatrung.png') },
                { name: 'Đống Đa', uri: require('../../data/haibatrung.png') },
                { name: 'Nam Từ Liêm', uri: require('../../data/haibatrung.png') },
                { name: 'Bắc Từ Liêm', uri: require('../../data/haibatrung.png') },
                { name: 'Hoàng Mai', uri: require('../../data/haibatrung.png') },
            ]
        }
    }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }
    render(){
        const { currentUser } = this.state
        return (
            <SafeAreaView style={{flex: 1}}>
                <Search/>
                <Card>
                    <Card.Title><Text h5>Xu hướng tìm kiếm</Text></Card.Title>
                    <Card.Divider/>
                    <FlatGrid
                        data={this.state.items}
                        style={styles.gridView}
                        // staticDimension={300}
                        // fixed
                        spacing={10}
                        renderItem={({ item }) => (
                            <View>
                            <Image source={item.uri}  style={{width: 120, height: 120,borderRadius: 10,}}/>
                            <Text style={styles.itemName}>{item.name}</Text>
                            </View>
                        )}
                        />
                </Card>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 5,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
  });
export default Home;