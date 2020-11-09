import React, { Component } from 'react'
import {View, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Text, CheckBox, Divider, ThemeProvider, Input } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import Search from '../search/search'
import { FlatGrid } from 'react-native-super-grid';
class Home extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ScrollView>
                <Search/>
                <Card>
                    <Card.Title><Text h5>Xu hướng tìm kiếm</Text></Card.Title>
                    <Card.Divider/>

                </Card>
            </ScrollView>
        )
    }
}
export default Home;