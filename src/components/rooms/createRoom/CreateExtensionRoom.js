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

import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-picker';
import * as Progress from 'react-native-progress';
class CreateExtensionRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            listImageUrl: [],
            listExtChecked: [],
            image: null,
            uploading: false,
            transferred: 0,
          };
    }

   selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log(source);
        await this.setState({
          image: source
        })
        this.uploadImage()
      }
    });
  };

  uploadImage = async () => {
    console.log("aaaa")
    const { uri } = this.state.image;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    this.setState({
      uploading: true,
      transferred: 0
    })
    const task = storage()
      .ref(filename)
      .putFile(uploadUri);
    // set progress state
    task.on('state_changed', snapshot => {
      this.setState({
        transferred: Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
      });
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    console.log(filename);
    const url = await storage()
  .ref(filename)
  .getDownloadURL();

    console.log(url);
    this.addImageUrl(this.props.extension.listImageUrl, url)
    this.setState({
      uploading: false,
      image: null
    });
  };

    addImageUrl = (array, value) => {
      console.log(array)
      console.log(value)
      var index = array.indexOf(value)
      if (index === -1) array.push(value);
      else array.splice(index, 1);
      this.props.setExtension(array,'image');
    }
    addExtChecked = (array, value) => {
      var index = array.indexOf(value)
      if (index === -1) array.push(value);
      else array.splice(index, 1);
      /*this.setState({
        listExtChecked: array
      })*/
      this.props.setExtension(array,'ext');
    }
    async SingleFilePicker() {
        
        try {
            const results = await DocumentPicker.pickMultiple({
              type: [DocumentPicker.types.images],
            });
            //this.setState({singleFileOBJ: results})
            this.props.setExtension(results,'image');
            console.log(results);
            this.uploadImageToStorage(results.uri, results.name);
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
            source={{uri: images}}
            style={{width: 60, height: 60}} 
            PlaceholderContent={<ActivityIndicator />}
            />
        })
      }
      
    render(){
      const exts = [{name: 'WC riêng',icon: 'toilet'},{name: 'Cửa sổ', icon: 'window-open-variant'}, {name: 'Wifi', icon: 'wifi'}, {name:'Chủ riêng',icon:'account-key-outline'}, {name:'Máy nước nóng',icon:'water-boiler'}, {name:'Tủ lạnh',icon:'fridge-outline'}, {name:'Gác lửng',icon:'stairs'}, {name:'Tủ đồ',icon:'locker'}, {name:'Thú cưng', icon:'dog'}]
      const exts2 = [{name: 'Chỗ để xe',icon: 'motorbike'},{name: 'An ninh', icon: 'security'}, {name: 'Tự do', icon: 'clock-outline'}, {name:'Máy lạnh',icon:'air-conditioner'}, {name:'Nhà bếp',icon:'chef-hat'}, {name:'Máy giặt',icon:'washing-machine'}, {name:'Giường',icon:'bed-outline'}, {name:'Tivi',icon:'television'}, {name:'Ban công', icon:'window-shutter'}]
         
        return(
            <ThemeProvider>

<TouchableOpacity onPress={this.selectImage}>
        <Text>Pick an image</Text>
      </TouchableOpacity>
      <View>
        {this.state.image !== null ? (
          <Image source={{ uri: this.state.image.uri }}/>
        ) : null}
        
          <TouchableOpacity onPress={this.uploadImage}>
            <Text>Upload image</Text>
          </TouchableOpacity>
        
      </View>


                <Card>
                    <Card.Title><Text h5>{Language.ROOM_EXTENSION}</Text></Card.Title>
                    <Card.Divider/>
                    <Text style={styles.title}>{'Hình ảnh'}</Text>
                    <View style={{paddingHorizontal: 10, borderStyle:'dashed',borderColor: grayBackground, borderWidth: 1, flex: 1, flexDirection:'column'}}>
                        <View style={{flex: 1, flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                        {
                          this.showImagePicker(this.props.extension.listImageUrl)
                        }
                        </View>
                        {this.state.uploading ? (
                          <View style={styles.progressBarContainer}>
                            <Progress.Bar progress={this.state.transferred} width={300} />
                          </View>
                        ) : null
                        }
                        <TouchableOpacity onPress={this.selectImage} style={{alignItems: 'center', paddingVertical: 10, paddingHorizontal: 20}}>
                            <Icon name='upload' color={Colors.primary} size={25}/>
                            <Text style={{justifyContent: 'center', color: Colors.primary}}>  Bấm vào đây để đăng hình ảnh từ thư viện nhé</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>{'\n'}</Text>
                    <Button
                    title=" Chụp hình"
                    titleStyle={{color:Colors.primary,fontSize: 15}}
                    icon={
                        <Icon
                          name="camera"
                          size={15}
                          color="#0275D8"
                        />
                      }
                    type="outline"
                    buttonStyle={{borderRadius: 10, width: 150}}
                    containerStyle={{alignItems: 'center'}}
                    />

                <Text style={styles.title}>{'Tiện ích'}</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
                  {exts.map((data, index) => {
                      return (
                        <CheckBox
                        key={index}
                        title={data.name}
                        iconType='material-community'
                        checkedIcon={data.icon}
                        uncheckedIcon={data.icon}
                        containerStyle={this.props.extension.listExtChecked.indexOf(data.name) === -1 ? styles.extensionButton : styles.extensionButtonSelected}
                        textStyle={this.props.extension.listExtChecked.indexOf(data.name) === -1 ? styles.extensionText : styles.extensionTextSelected}
                        size={17}
                        checkedColor={Colors.primary}
                        checked={this.props.extension.listExtChecked.indexOf(data.name) === -1 ? false : true}
                        onPress={() => this.addExtChecked(this.props.extension.listExtChecked, data.name)}
                    />
                      )
                  })}
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  {exts2.map((data, index) => {
                      return (
                      <CheckBox
                          key={index}
                          title={data.name}
                          iconType='material-community'
                          checkedIcon={data.icon}
                          uncheckedIcon={data.icon}
                          containerStyle={this.props.extension.listExtChecked.indexOf(data.name) === -1 ? styles.extensionButton : styles.extensionButtonSelected}
                          textStyle={this.props.extension.listExtChecked.indexOf(data.name) === -1 ? styles.extensionText : styles.extensionTextSelected}
                          size={17}
                          checkedColor={Colors.primary}
                          checked={this.props.extension.listExtChecked.indexOf(data.name) === -1 ? false : true}
                          onPress={() => this.addExtChecked(this.props.extension.listExtChecked, data.name)}
                      />
                      )
                  })}
                </View>
                </View>
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
        extensionButtonSelected:{borderColor: Colors.primary, borderWidth: 1, borderRadius: 10},
        extensionButton:{borderColor: Colors.grayBackground, borderWidth: 0, borderRadius: 10},
        extensionTextSelected:{fontSize: 14, color: Colors.primary, fontWeight: 'normal'},
        extensionText:{fontSize: 14, color: grayLabel, fontWeight: 'normal'},
})
export default CreateExtensionRoom;