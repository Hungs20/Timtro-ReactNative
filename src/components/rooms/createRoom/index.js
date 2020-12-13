import React from 'react'
import {Colors, Fonts} from '../../../styles'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Text, CheckBox, Divider, ThemeProvider, Input } from 'react-native-elements'
import { Component } from 'react'
import Step from './step'
import { ScrollView } from 'react-native-gesture-handler'
import * as Language from '../../language'
import { blue, grayBackground, grayLabel, white } from '../../../styles/colors';
import CreateInfoRoom from './CreateInfoRoom'
import CreateAddressRoom from './CreateAddressRoom'
import CreateExtensionRoom from './CreateExtensionRoom'
import CreateConfirmRoom from './CreateConfirmRoom'

import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

class CreateRoom extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 0,
            maxStep: 0,
            currentUser: null,
            newRoom : {
                id: Date.now(),
                author: null,
                date_create: new Date(),
                vote: 0,
                view: 0,
                info: {
                    typeRoom: '',
                    numRoom : '',
                    numPersonOfRoom : '',
                    gender : '',
                    area : '',
                    giathue: '',
                    giacoc: '',
                    tiendien: '',
                    tiennuoc: '',
                    tienmang: '',
                    dexe: false,
                },
                address: {
                    nameQuan: '',
                    namePhuong: '',
                    nameDuong: '',
                    nameNha: '',
                    nameCity: ''
                },
                extension: {
                    listImageUrl: [],
                    listExtChecked: []
                },
                confirm: {
                    phone: '',
                    title: '',
                    description: '',
                    timeOpen: new Date(),
                    timeClose: new Date(),
                    isTimeOpen: false,
                    isTimeClose: false,
                }
                
            }
        }
    }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser }) 
        this.setState(prevState => ({
            newRoom: {
                ...prevState.newRoom,
                author: currentUser.email
              }
          }))
      }
    setConfirm = (value, type) => {
        switch (type) {
            case 'phone':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        confirm: {
                            ...prevState.newRoom.confirm,
                            phone: value
                        }
                      }
                  }))
                break;
            case 'title':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        confirm: {
                            ...prevState.newRoom.confirm,
                            title: value
                        }
                        }
                    }))
                break;
            case 'description':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        confirm: {
                            ...prevState.newRoom.confirm,
                            description: value
                        }
                      }
                  }))
                break;
            case 'timeOpen':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        confirm: {
                            ...prevState.newRoom.confirm,
                            timeOpen: value
                        }
                      }
                  }))
                break;
            case 'timeClose':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        confirm: {
                            ...prevState.newRoom.confirm,
                            timeClose: value
                        }
                      }
                  }))
                break;
            case 'isTimeOpen':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        confirm: {
                            ...prevState.newRoom.confirm,
                            isTimeOpen: value
                        }
                      }
                  }))
                break;
            case 'isTimeClose':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        confirm: {
                            ...prevState.newRoom.confirm,
                            isTimeClose: value
                        }
                      }
                  }))
                break;
            default:
                break;
        }
    }

    setInfoRoom = (value, typeInfo) => {
        switch (typeInfo) {
            case 'typeRoom':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            typeRoom: value
                        }
                      }
                  }))
                break;
            case 'numRoom':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            numRoom: value
                        }
                        }
                    }))
                break;
            case 'numPersonOfRoom':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            numPersonOfRoom: value
                        }
                      }
                  }))
                break;
            case 'gender':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            gender: value
                        }
                      }
                  }))
                break;
            case 'area':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            area: value
                        }
                      }
                  }))
                break;
            case 'giathue':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            giathue: value
                        }
                      }
                  }))
                break;
            case 'giacoc':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            giacoc: value
                        }
                      }
                  }))
                break;
            case 'tiendien':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            tiendien: value
                        }
                      }
                  }))
                break;
            case 'tiennuoc':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            tiennuoc: value
                        }
                      }
                  }))
                break;
            case 'tienmang':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            tienmang: value
                        }
                      }
                  }))
                break;
            case 'dexe':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        info: {
                            ...prevState.newRoom.info,
                            dexe: value
                        }
                      }
                  }))
                break;
            default:
                break;
        } 
        
    }

    setAddressRoom = (value, typeAddress) => {
        switch (typeAddress) {
            case 'nameCity':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        address: {
                            ...prevState.newRoom.address,
                            nameCity: value
                        }
                      }
                  }))
                break;
            case 'nameQuan':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        address: {
                            ...prevState.newRoom.address,
                            nameQuan: value
                        }
                        }
                    }))
                break;
            case 'namePhuong':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        address: {
                            ...prevState.newRoom.address,
                            namePhuong: value
                        }
                      }
                  }))
                break;
            case 'nameDuong':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        address: {
                            ...prevState.newRoom.address,
                            nameDuong: value
                        }
                      }
                  }))
                break;
            case 'nameNha':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        address: {
                            ...prevState.newRoom.address,
                            nameNha: value
                        }
                      }
                  }))
                break;
            default:
                break;
        }
    }

    setExtension = (value, typeExt) => {
        switch (typeExt) {
            case 'image':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        extension: {
                            ...prevState.newRoom.extension,
                            listImageUrl: value
                        }
                      }
                  }))
                break;
            case 'ext':
                this.setState(prevState => ({
                    newRoom: {
                        ...prevState.newRoom,
                        extension: {
                            ...prevState.newRoom.extension,
                            listExtChecked: value
                        }
                        }
                    }))
                break;
            default:
                break;
        }
    }

    setCurrentStep = (value) => {
        this.setState({
            currentStep: value < this.state.maxStep ? value : this.state.maxStep
        })
    }
    nextBtnPress = () => {
        this.setState({
            currentStep: this.state.currentStep + 1 < 3 ? this.state.currentStep + 1 : 3,
            maxStep: this.state.currentStep + 1 < this.state.maxStep ? this.state.maxStep : this.state.currentStep + 1
        })
        if(this.state.currentStep  + 1 == 4){
            console.log(this.state.newRoom)
            firestore()
            .collection('rooms')
            .add(this.state.newRoom)
            .then(() => {
                console.log('Room added!');
            });
        }
    }
    renderSwitch(step){
        switch (step) {
            case 0:
                return <CreateInfoRoom info = {this.state.newRoom.info} setInfo={this.setInfoRoom.bind(this)}/>
            case 1:
                return <CreateAddressRoom address = {this.state.newRoom.address} setAddress={this.setAddressRoom.bind(this)}/>
            case 2:
                return <CreateExtensionRoom extension = {this.state.newRoom.extension} setExtension={this.setExtension.bind(this)}/>
            case 3:
                return <CreateConfirmRoom confirm = {this.state.newRoom.confirm} setConfirm={this.setConfirm.bind(this)}/>
            default:
                break;
        }
    }

    /// Render
    render() {
        return (
            
                <ThemeProvider>
                    <Card><Step currentStep={this.state.currentStep} maxStep={4} setStep={this.setCurrentStep.bind(this)}/></Card>
                    <ScrollView>
                        {this.renderSwitch(this.state.currentStep)}
                        <Text>{'\n'}</Text>
                        <Button
                            title={this.state.currentStep + 1 < 4 ? "Tiếp theo " : "Đăng phòng "}
                            type={this.state.currentStep + 1 < 4 ? "clear" : "solid"}
                            iconRight
                            icon={
                                <Icon name='chevron-right'color={this.state.currentStep + 1 < 4 ? Colors.primary : Colors.white} size={14}/>
                            }
                            titleStyle={this.state.currentStep + 1 < 4 ? styles.btnNext : styles.btnDone}
                            containerStyle={{marginHorizontal: 35, borderColor: Colors.primary, borderWidth: 1, borderRadius: 10}}
                            onPress={this.nextBtnPress}
                        />
                    </ScrollView>
                </ThemeProvider>
            
        )
        
    }
}
const styles = StyleSheet.create({
    btnNext: {
        color: Colors.primary
    },
    btnDone: {
        color: Colors.white
    }
})
export default CreateRoom;
