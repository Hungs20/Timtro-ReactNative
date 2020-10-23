import React from 'react'
import {Colors, Fonts} from '../../../styles'
import {Text, StyleSheet, View} from 'react-native'
import { Component } from 'react'
import { RadioButton, TextInput  } from 'react-native-paper';
import Step from './step'

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
        console.log(this.state.numRoom)
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: Colors.white}}><Step/></View>
                <Text style={styles.titleLabel}>Thông tin phòng</Text>
                <Text style={styles.subTitleLabel}>LOẠI PHÒNG</Text>
                
                <RadioButton.Group onValueChange={value => this.setValueRoom(value)} value={this.state.valueRoom}>
                    {this.state.dataTypeRoom.map((data,index) => {
                        return(
                            <RadioButton.Item 
                                key={data.value}
                                label={data.label} 
                                value={data.value} 
                                style={styles.radioButton} 
                                labelStyle= {(this.state.valueRoom === data.value) ? styles.radioLabelSelected : styles.radioLabel}
                                color={Colors.blue}
                            />
                        )
                    })}
                    
                </RadioButton.Group>

                <Text style={styles.subTitleLabel}>SỐ LƯỢNG PHÒNG</Text>
                <TextInput
                    style = {{marginHorizontal: 15}}
                    selectionColor={Colors.pink}
                    underlineColor={Colors.pink}
                    label="Số lượng phòng"
                    value={this.state.numRoom}
                    placeholder="Nhập số phòng bạn đang quản lý"
                    onChangeText={text => this.setNumRoom({ text })}
                />
                
            </View>
           
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
