import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import * as Colors from '../../styles/colors'
import CellTable from '../home/cell/cellTable'
import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

class LoveRoom extends Component {
    constructor(props){
        super(props)
        this.state={
            currentUser: null,
            listRoom: [],
        }
    }
    _isMounted = false;
    async componentDidMount() {
        const {currentUser} = await firebase.auth()
        await this.setState({ currentUser })
         this._isMounted = true;
        const subscriber = firestore()
        .collection('loveRooms').where('user', '==',this.state.currentUser ? this.state.currentUser.email : null)
        .onSnapshot( querySnapshot => {
        const rooms = [];

         querySnapshot.forEach( documentSnapshot => {
            const roomLove =  documentSnapshot.data();
            const roomQuery =  firestore().collection('rooms').doc(roomLove.roomId);
            const roomObj =  roomQuery.onSnapshot( docSnapshot => {
                 rooms.push({
                ...docSnapshot.data(),
                key: docSnapshot.id,
                });
                //console.log(rooms)
                if (this._isMounted) {
            
                     this.setState({listRoom: rooms})
                  }
              }, err => {
                console.log(`Encountered error: ${err}`);
              })
        });
        });

    // Unsubscribe from events when no longer in use
    async () => await subscriber();

    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    render() {
        console.log(this._isMounted)
        return(
            <ScrollView>
              {
                this.state.listRoom.map((room, index) => {
                    return (
                        <CellTable key={this.state.listRoom[index].key} room={this.state.listRoom[index]} navigation={this.props.navigation}/>
                    )
                })
                }  
            </ScrollView>
        )
    }
}
export default LoveRoom;