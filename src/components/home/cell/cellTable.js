import React, {Component} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import * as Colors from '../../../styles/colors'
class CellTable extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <TouchableOpacity style={{flex: 1, margin: 5}} onPress={()=> this.props.navigation.navigate('RoomDetails', {room: this.props.room})}>
                <Image source={{uri: this.props.room.extension.listImageUrl[0]}} style={{height: 100, borderRadius: 10, marginBottom: 5, width: '100%'}}/>
                <Text numberOfLines={1} style={styles.type}>{this.props.room.info.typeRoom}</Text>
                <Text numberOfLines={2} style={styles.title}>{this.props.room.confirm.title}</Text>
                <Text style={styles.cost}>{this.props.room.info.giathue}</Text>
                <Text numberOfLines={1} style={styles.address}>{this.props.room.address.nameNha}, {this.props.room.address.nameDuong}, {this.props.room.address.namePhuong}</Text>
                <Text style={styles.address2}>{this.props.room.address.nameQuan}</Text>
            </TouchableOpacity>
        )   
    }
}
const styles = StyleSheet.create({
    type: {
        fontFamily: "roboto-regular",
        fontSize: 12,
        color: Colors.grayLabel,
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 15,
        //color: Colors.white,
        fontWeight: 'bold'
    },
    cost: {
        fontSize: 12,
        color: Colors.pink,
    },
    address:{
        fontSize: 12,
        color: Colors.grayLabel,
    },
     address2 : {
        fontSize: 12,
        color: Colors.grayLabel,
    }
})
export default CellTable;