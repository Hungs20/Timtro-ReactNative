import React, {Component} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import * as Colors from '../../styles/colors'
import ListTable from './cell/listTable'
class NewRoom extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text style={styles.title}>Phòng mới</Text>
                <View style={{flex: 1, flexDirection: 'column'}}> 
                    <ListTable/>
                    <ListTable/>
                    <ListTable/>
                    <ListTable/>
                    <ListTable/>
                    <ListTable/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        flex:1, borderRadius: 10, margin: 5, height: 100, width: '100%'
    },
    title : {
        fontSize: 14,
        color: Colors.white, 
        fontWeight:'bold',
        textTransform: 'uppercase',
        paddingVertical: 10
    },
  })
export default NewRoom;