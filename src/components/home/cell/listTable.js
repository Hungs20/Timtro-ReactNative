import React, {Component} from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import * as Colors from '../../../styles/colors'
class ListTable extends Component {
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
            <View style={{flex: 1, margin: 5, flexDirection: 'row'}}>
                <View style={{flex: 1, marginRight: 15}}>
                    <Image source={this.state.image} style={{height: 100, borderRadius: 10, margin: 5, width: '100%'}}/>
                </View>
                <View style={{flex: 2, flexDirection: 'column', marginVertical: 10}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text numberOfLines={1} style={styles.type}>{this.state.type}</Text>
                        <Text style={styles.cost}>{this.state.cost}</Text>
                    </View>
                    <Text numberOfLines={2} style={styles.title}>{this.state.title}</Text>
                    <Text numberOfLines={1} style={styles.address}>{this.state.address}</Text>
                    <Text style={styles.address2}>{this.state.address2}</Text>
                </View>
            </View>
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