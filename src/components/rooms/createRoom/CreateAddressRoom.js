import React from 'react'
import {Colors, Fonts} from '../../../styles'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Text, CheckBox, Divider, ThemeProvider, Input, Overlay, Avatar  } from 'react-native-elements'
import { Component } from 'react'
import Step from './step'
import { ScrollView } from 'react-native-gesture-handler'
import * as Language from '../../language'
import { blue, grayBackground, grayLabel, white } from '../../../styles/colors';
import listLocation from '../../../data/location.json'


class CreateAddressRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            idSelected: 0,
            idCity: 0,
            idQuan: -1,
            idPhuong:-1,
            nameQuan: '',
            namePhuong: '',
            nameCity: listLocation[0].name,
            typeSelected: '',
            isShowErrorCity : false,
            isShowErrorQuan : false,
            isShowErrorPhuong : false,
            listData: listLocation
        }
    }
    getListData = (value) => {
        switch (value) {
            case 'thanhpho':
                this.setState({
                    listData : listLocation
                })
                break;
            case 'quan':
                if(this.state.idCity < 0) break;
                this.setState({
                    listData : listLocation[this.state.idCity].huyen
                })
                break;
                
            case 'phuong':
                if(this.state.idQuan < 0) break;
                this.setState({
                    listData : listLocation[this.state.idCity].huyen[this.state.idQuan].xa
                })
                break;
            default:
                break;
        }
        
    }
    setIdSelected = (value) => {
        switch (value) {
            case 'thanhpho':
                this.setState({idSelected: this.state.idCity < 0 ? 0 : this.state.idCity})
                break;
            case 'quan':
                this.setState({idSelected: this.state.idQuan < 0 ? 0 : this.state.idQuan})
                break;
            case 'phuong':
                this.setState({idSelected: this.state.idPhuong < 0 ? 0 : this.state.idPhuong})
                break;
        
            default:
                break;
        }
        console.log(this.state.idSelected)
    }
   toggleOverlay = (value) => {
        switch (value) {
            case 'thanhpho':
                this.setState({
                    visible: !this.state.visible
                })
                break;
            case 'quan':
                this.setState({
                    isShowErrorCity: this.state.idCity < 0 ? true : false,
                    visible: this.state.idCity < 0 ? false : !this.state.visible
                })
                break;
            case 'phuong':
                this.setState({
                    isShowErrorCity: this.state.idCity < 0 ? true : false,
                    isShowErrorQuan: this.state.idQuan < 0 ? true : false,
                    visible: this.state.idQuan < 0 ? false : !this.state.visible
                })
                break;
        
            default:
                this.setState({
                    visible: !this.state.visible
                })
                break;
        }
        this.setState({
            typeSelected: value,
            //visible: !this.state.visible
        })
            this.getListData(value)
            this.setIdSelected(value)
        
        
  };

    chooseLocation = () => {
        switch (this.state.typeSelected) {
            case 'thanhpho':
                this.setState({
                    idCity: this.state.idSelected,
                    nameCity: this.state.listData[this.state.idSelected].name,
                    isShowErrorCity: false,
                    idQuan : -1,
                    nameQuan : '',
                    idPhuong : -1,
                    namePhuong : '',
                })
                break;
            case 'quan':
                this.setState({
                    idQuan: this.state.idSelected,
                    nameQuan: this.state.listData[this.state.idSelected].name,
                    isShowErrorQuan: false
                })
                break;
            case 'phuong':
                this.setState({
                    idPhuong: this.state.idSelected,
                    namePhuong: this.state.listData[this.state.idSelected].name,
                    isShowErrorPhuong: false
                })
                break;
            default:

                break;
        }
        this.setState({
            visible: false
        })
    };

    renderLanguage(state){
        switch (state) {
            case 'thanhpho':
                return Language.ROOM_CITY
            case 'quan':
                return Language.ROOM_QUAN
            case 'phuong':
                return Language.ROOM_PHUONG
            default:
                break;
        }
    }
    
    render(){
        //console.log(this.state.listData)
        return(
                <ThemeProvider>
                <Overlay isVisible={this.state.visible} onBackdropPress={()=>this.toggleOverlay('')}>
                    <View style={{width: 365, maxHeight: 400}}>
                        <Text style={styles.title}>{this.renderLanguage(this.state.typeSelected)}</Text>
                            <ScrollView>
                                {this.state.listData.map((data,index) => {
                                    return(
                                        <CheckBox
                                            left
                                            key={data.id}
                                            title={data.name}
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checked={this.state.idSelected == index}
                                            onPress = {() => this.setState({
                                                idSelected: index
                                            })}
                                            containerStyle={styles.radioBackground}
                                            textStyle={styles.radioLabel}
                                        />
                                    )
                                })}
                            </ScrollView>
                            <Text>{'\n'}</Text>
                            <Button title="OK" onPress={this.chooseLocation}/>
                    </View>
                </Overlay>
                    <Card>
                        <Card.Title><Text h4>{Language.ROOM_ADDRESS}</Text></Card.Title>
                        <Card.Divider/>
                        <TouchableOpacity onPress={() => this.toggleOverlay('thanhpho')}>
                         <ListItem containerStyle={this.state.isShowErrorCity ? styles.containerListItemError : styles.containerListItem} >
                            <ListItem.Content>
                            <Text style={styles.title}>{Language.ROOM_CITY}</Text>
                                <Text style={this.state.nameCity == '' ? styles.subtitleItemPlaceholder : styles.subtitleItem}>{this.state.nameCity == '' ? 'Bấm vào đây để chọn ' + Language.ROOM_CITY : this.state.nameCity} </Text>
                            </ListItem.Content>
                            <Icon name='chevron-down' size={13}/>
                        </ListItem>
                        </TouchableOpacity>
                        {this.state.isShowErrorCity ? <Text style={styles.itemError}>Vui lòng chọn {Language.ROOM_CITY}</Text> : <View></View>}
                        
                        <TouchableOpacity onPress={() => this.toggleOverlay('quan')}>
                        <ListItem containerStyle={this.state.isShowErrorQuan ? styles.containerListItemError : styles.containerListItem} >
                            <ListItem.Content>
                            <Text style={styles.title}>{Language.ROOM_QUAN}</Text>
                                <Text style={this.state.nameQuan == '' ? styles.subtitleItemPlaceholder : styles.subtitleItem}>{this.state.nameQuan == '' ? 'Bấm vào đây để chọn ' + Language.ROOM_QUAN : this.state.nameQuan} </Text>
                            </ListItem.Content>
                            <Icon name='chevron-down' size={13}/>
                        </ListItem>
                        </TouchableOpacity>
                        {this.state.isShowErrorQuan ? <Text style={styles.itemError}>Vui lòng chọn {Language.ROOM_QUAN}</Text> : <View></View>}
                        
                        <TouchableOpacity onPress={() => this.toggleOverlay('phuong')}>
                        <ListItem containerStyle={this.state.isShowErrorPhuong ? styles.containerListItemError : styles.containerListItem} >
                            <ListItem.Content>
                            <Text style={styles.title}>{Language.ROOM_PHUONG}</Text>
                                <Text style={this.state.namePhuong == '' ? styles.subtitleItemPlaceholder : styles.subtitleItem}>{this.state.namePhuong == '' ? 'Bấm vào đây để chọn ' + Language.ROOM_PHUONG : this.state.namePhuong} </Text>
                            </ListItem.Content>
                            <Icon name='chevron-down' size={13}/>
                        </ListItem>
                        </TouchableOpacity>
                        {this.state.isShowErrorPhuong ? <Text style={styles.itemError}>Vui lòng chọn {Language.ROOM_PHUONG}</Text> : <View></View>}
                    </Card>
                </ThemeProvider>
        )
    }
}

const styles = StyleSheet.create({
    title : {
        fontSize: 13,
        color: Colors.grayLabel, 
        fontWeight:'bold',
        textTransform: 'uppercase',
        paddingVertical: 10
    },
    radioLabel: {
        color: grayLabel, 
        fontWeight: 'normal',
        fontSize: 16
    },
    radioBackground: {
        backgroundColor: white, 
        borderColor: white, 
        marginVertical: 0, 
        borderBottomColor: grayBackground,
        fontSize: 16
    },
    inputContainer: {
        borderBottomColor: grayBackground,
        marginVertical: 0, 
        paddingVertical: 0
    },
    inputContainerFocus: {
        borderBottomColor: blue
    },
    inputStyle: {fontSize: 16},
    rightText: {
        fontSize: 16,
        color: grayLabel,
        marginBottom: 30,
        fontWeight: 'bold'
    },
    viewRightIcon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
     },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
        },
        ratingImage: {
        height: 19.21,
        width: 100
        },
        ratingText: {
        paddingLeft: 10,
        color: 'grey'
        },
        containerListItem: {paddingVertical: 5, borderBottomColor: grayBackground, borderBottomWidth: 1, paddingHorizontal: 0},
        containerListItemError: {paddingVertical: 0, borderBottomColor: "red", borderBottomWidth: 1, paddingHorizontal: 0},
        subtitleItem:{color: 'black', fontSize: 16},
        subtitleItemPlaceholder:{color: grayLabel, fontSize: 16},
        itemError: {color: "red", fontSize: 13}
    
        
})
export default CreateAddressRoom;