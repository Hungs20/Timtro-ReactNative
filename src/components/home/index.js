import React, { Component} from 'react'
import {View, Image, StyleSheet, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Text, CheckBox, Divider, ThemeProvider, Input } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import * as Colors from '../../styles/colors'
import Search from '../search/search'
import { FlatGrid } from 'react-native-super-grid';
import { SectionGrid } from 'react-native-super-grid';
import Trend from './trend'
import HotRoom from './hotRoom'
import NewRoom from './newRoom'
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
            <ThemeProvider style={{flex: 1}}>
            <ScrollView>
                <Search/>
                <View style={styles.container}>
                    <Trend/>
                    <HotRoom/>
                    <NewRoom/>
                </View>
            </ScrollView>
            </ThemeProvider>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        marginHorizontal: 10, flex: 1
    },
    
  });
export default Home;