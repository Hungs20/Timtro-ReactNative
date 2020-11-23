import React, {Component} from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import * as Colors from '../../../styles/colors'
class CellTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            image: require('../../../data/haibatrung.png'),
            type: 'Tìm người thuê',
            title: 'Phòng cho thuê Hồ Tùng Mậu, Quận Bắc Từ Liêm',
            cost: '3.7 triệu VND/phòng',
            address: 'Ngõ 136 Hồ Tùng Mậu, Phường abc',
            address2: 'Quận Nam Từ Liêm'
        }
    }
    render(){
        return(
            <View style={{flex: 1, margin: 5}}>
                <Image source={this.state.image} style={{height: 100, borderRadius: 10, margin: 5, width: '100%'}}/>
                <Text numberOfLines={1} style={styles.type}>{this.state.type}</Text>
                <Text numberOfLines={2} style={styles.title}>{this.state.title}</Text>
                <Text style={styles.cost}>{this.state.cost}</Text>
                <Text numberOfLines={1} style={styles.address}>{this.state.address}</Text>
                <Text style={styles.address2}>{this.state.address2}</Text>
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
export default CellTable;