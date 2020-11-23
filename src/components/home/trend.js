import React, {Component} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import * as Colors from '../../styles/colors'
class Trend extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text style={styles.title}>Xu hướng tìm kiếm</Text>
                <View style={{flex: 1, flexDirection: 'row'}}> 
                    <Image source={require('../../data/haibatrung.png')} style={styles.image}/>
                    <Image source={require('../../data/img/intro2.png')} style={styles.image}/>
                    <Image source={require('../../data/img/intro1.jpg')} style={styles.image}/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}> 
                    <Image source={require('../../data/haibatrung.png')} style={styles.image}/>
                    <Image source={require('../../data/img/intro2.png')} style={styles.image}/>
                    <Image source={require('../../data/img/intro1.jpg')} style={styles.image}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        flex:1, borderRadius: 10, margin: 5, height: 100
    },
    title : {
        fontSize: 14,
        color: Colors.white, 
        fontWeight:'bold',
        textTransform: 'uppercase',
        paddingVertical: 10
    },
  })
export default Trend;