import React, {Component} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import * as Colors from '../../styles/colors'
import CellTable from './cell/cellTable'
import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

class HotRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            listRoom : []
        }
    }
    _isMounted = false;
    componentDidMount() {
        this._isMounted = true;
        var d = new Date()
        const subscriber = firestore()
        .collection('rooms').orderBy('vote', "desc").limitToLast(20)
        .onSnapshot(querySnapshot => {
        const rooms = [];

        querySnapshot.forEach(documentSnapshot => {
            rooms.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
            });
        });

        if (this._isMounted) {
            this.setState({listRoom: rooms})
          }
        });

    // Unsubscribe from events when no longer in use
    () => subscriber();

    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    render(){
        console.log(this.state.listRoom)
        return(
            <View style={{flex:1}}>
                <Text style={styles.title}>Phòng nổi bật</Text>
                {
                    this.state.listRoom.map((room, index) => {
                        if(index % 2 === 0) {
                            return (
                            <View style={{flex: 1, flexDirection: 'row'}}> 
                                <CellTable key={index} room={this.state.listRoom[index]}/>
                                {
                                    index + 1 < this.state.listRoom.length ? <CellTable key={index+1} room={ this.state.listRoom[index+1]}/> : null
                                }
                            </View>
                            )
                        }
                    })
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        flex:1, borderRadius: 10, margin: 5, height: 100, width: '100%'
    },
    title : {
        fontFamily: "roboto-regular",
        fontSize: 14,
        color: 'black', 
        fontWeight:'bold',
        paddingVertical: 10,
        paddingLeft: 10
    },
  })
export default HotRoom;