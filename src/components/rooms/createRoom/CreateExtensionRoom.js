import React from 'react'
import {Colors, Fonts} from '../../../styles'
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Text, CheckBox, Divider, ThemeProvider, Input, Overlay, Avatar , Image, ButtonGroup } from 'react-native-elements'
import { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import * as Language from '../../language'
import { blue, grayBackground, grayLabel, white } from '../../../styles/colors';
import DocumentPicker from 'react-native-document-picker';
import { ActivityIndicator } from 'react-native';

class CreateExtensionRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            singleFileOBJ: [],
            selectedIndex: []
          };
    }
    updateIndex = (selectedIndex) => {
        this.setState({selectedIndex: selectedIndex})
      }
    async SingleFilePicker() {
        
        try {
            const results = await DocumentPicker.pickMultiple({
              type: [DocumentPicker.types.images],
            });
            this.setState({singleFileOBJ: results})
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err;
            }
          }
      }
      showImagePicker = (array) => {
        return array.map(function(images, index) {
          // don't put your key as index, choose other unique values as your key.
          return <Image
            key={index}
            source={{uri: images.uri}}
            style={{width: 60, height: 60}} 
            PlaceholderContent={<ActivityIndicator />}
            />
        })
      }
      
    render(){
        const exts = [{name: 'WC riêng',icon: 'bath'},{name: 'Cửa sổ', icon: 'window-maximize'}, {name: 'Wifi', icon: 'wifi'}, {name:'Chủ riêng',icon:'key'}, {name:'Máy nước nóng',icon:'tint'}, {name:'Tủ lạnh',icon:''}, {name:'Gác lửng',icon:''}, {name:'Tủ đồ',icon:''}, {name:'Thú cưng', icon:''}]
        return(
            <ThemeProvider>
                <Card>
                    <Card.Title><Text h5>{Language.ROOM_EXTENSION}</Text></Card.Title>
                    <Card.Divider/>
                    <Text style={styles.title}>{'Hình ảnh'}</Text>
                    <View style={{paddingHorizontal: 10, borderStyle:'dashed',borderColor: grayBackground, borderWidth: 1, flex: 1, flexDirection:'column'}}>
                        <View style={{flex: 1, flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                        {this.showImagePicker(this.state.singleFileOBJ)}
                        </View>
                        <TouchableOpacity onPress={this.SingleFilePicker.bind(this)}>
                            <Icon name='upload' color='blue' size={25} style={{paddingTop: 30, paddingHorizontal: 150}}/>
                            <Text style={{justifyContent: 'center', color: 'blue',alignItems: 'center', paddingVertical: 10}}>  Bấm vào đây để đăng hình ảnh từ thư viện nhé</Text>
                        </TouchableOpacity>
                    </View>

                    <Button
                    title=" Chụp hình"
                    titleStyle={{color:'#0275D8',fontSize: 15}}
                    icon={
                        <Icon
                          name="camera"
                          size={15}
                          color="#0275D8"
                        />
                      }
                    type="outline"
                    buttonStyle={{borderRadius: 10, width: 150}}
                    containerStyle={{alignItems: 'center', paddingTop: 10}}
                    />

                <Text style={styles.title}>{'Tiện ích'}</Text>
                {exts.map((data, index) => {
                    return (
                    <CheckBox
                        title={data.name}
                        iconType='font-awesome'
                        checkedIcon={data.icon}
                        uncheckedIcon={data.icon}
                        containerStyle={styles.extensionButton}
                    />
                    )
                })}
                
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
        containerListItemFocus: {paddingVertical: 5, borderBottomColor: blue, borderBottomWidth: 1, paddingHorizontal: 0},
        
        containerListItemError: {paddingVertical: 0, borderBottomColor: "red", borderBottomWidth: 1, paddingHorizontal: 0},
        subtitleItem:{color: 'black', fontSize: 16},
        subtitleItemPlaceholder:{color: grayLabel, fontSize: 16},
        itemError: {color: "red", fontSize: 13},
        extensionButton:{borderColor: '#0275D8', borderWidth: 1, borderRadius: 10, width: 120},

    
    
        
})
export default CreateExtensionRoom;