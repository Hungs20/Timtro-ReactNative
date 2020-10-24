import React from 'react'
import {Colors, Fonts} from '../../../styles'
import {StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Text, CheckBox, Divider, ThemeProvider, Input } from 'react-native-elements'
import { Component } from 'react'
import Step from './step'
import { ScrollView } from 'react-native-gesture-handler'

class CreateRoom extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            valueRoom: '',
            dataTypeRoom: [
                {'label': 'Kí túc xá/Homestay', 'value' : 'ktx'}, 
                {'label': 'Phòng cho thuê', 'value' : 'pct'}, 
                {'label': 'Phòng ở ghép', 'value' : 'pog'}, 
                {'label': 'Nhà nguyên căn', 'value' : 'nnc'}, 
                {'label': 'Căn hộ', 'value' : 'ch'}
            ],
            numRoom : ''
        }
    }
    setValueRoom = (value) => {
        this.setState({
            valueRoom : value
        })
    }
    setNumRoom = (value) => {
        this.setState({
            numRoom : value
        })
    }
    render() {
        console.log(this.state.checked);
        return (
            <ScrollView>
                <ThemeProvider>
                    <Card><Step/></Card>
                    <Text h4>Thông tin phòng</Text>
<Card>
  <Card.Title>Loại phòng</Card.Title>
  <Card.Divider/>
  {//<Card.Image source={require('../images/pic2.jpg')} />
  }
  {this.state.dataTypeRoom.map((data,index) => {
                        return(
                            
                            <CheckBox
                                key={data.value}
                                title={data.label}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.valueRoom == data.value}
                                onPress = {() => this.setValueRoom(data.value)}
                            />
                        )
                    })}
</Card>



                <Input
   placeholder="Nhập số lượng phòng"
   label="Số lượng phòng"
   rightIcon={{ type: 'font-awesome', name: 'home' }}
   style={styles}
   onChangeText={value => this.setValueRoom(value)}
  />

            </ThemeProvider>
            </ScrollView>
        )
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grayBackground,
      },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    label: {
      color: Colors.pink,
      fontSize: Fonts.headerFontSize
    },
    titleLabel: {
        color: Colors.black,
        fontSize: Fonts.headerFontSize,
        marginLeft: 15,
        marginVertical: 10
    },
    subTitleLabel: {
        color: Colors.grayLabel,
        fontSize: Fonts.smallFontSize,
        marginLeft: 15,
        marginVertical: 15
    },
    radioLabel: {
        color: Colors.grayLabel,
    },
    radioLabelSelected: {
        color: Colors.black
    },
    radioButton: {
        borderBottomColor: Colors.grayLabel,
        borderBottomWidth: 1,
       // marginVertical: 10,
        marginHorizontal: 15
    }

  })
export default CreateRoom;
