import React, {Component} from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import * as Colors from '../../../styles/colors'
class ListTable extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <View style={{flex: 1, margin: 5, flexDirection: 'row'}}>
                <View style={{flex: 1, marginRight: 15}}>
                    <Image source={{uri: this.props.room.extension.listImageUrl[0]}} style={{height: 100, borderRadius: 10, margin: 5, width: '100%'}}/>
                </View>
                <View style={{flex: 2, flexDirection: 'column', marginVertical: 10}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text numberOfLines={1} style={styles.type}>{this.props.room.info.typeRoom}</Text>
                        <Text style={styles.cost}>{this.props.room.info.giathue} VND/phòng</Text>
                    </View>
                    <Text numberOfLines={2} style={styles.title}>{this.props.room.confirm.title}</Text>
                    <Text numberOfLines={1} style={styles.address}>{this.props.room.address.nameNha}, {this.props.room.address.nameDuong}, {this.props.room.address.namePhuong}</Text>
                    <Text style={styles.address2}>{this.props.room.address.nameQuan}</Text>
                </View>
            </View>
        )   
    }
}
const styles = StyleSheet.create({
    type: {
        fontSize: 12,
        color: Colors.grayLabel,
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 15,
        color: Colors.white,
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
export default ListTable;