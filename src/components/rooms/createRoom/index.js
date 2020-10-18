import React from 'react'
import {Colors, Fonts} from '../../../styles'
import {Text, StyleSheet, View} from 'react-native'
import { Component } from 'react'
import { RadioButton } from 'react-native-paper';
import Step from './step'

class CreateRoom extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            valueRoom: ''
        }
    }
    setValueRoom = (value) => {
        this.setState({
            valueRoom : value
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: Colors.white}}><Step/></View>
                <Text style={styles.titleLabel}>Thông tin phòng</Text>
                <Text style={styles.subTitleLabel}>LOẠI PHÒNG</Text>
                
                <RadioButton.Group onValueChange={value => this.setValueRoom(value)} value={this.state.valueRoom}>
                    <RadioButton.Item label="First item" value="first" style={styles.radioButton} labelStyle={styles.radioLabel} color={Colors.blue}/>
                    
                    <RadioButton.Item label="Second item" value="second" />
                </RadioButton.Group>
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
        marginVertical: 10
    },
    radioLabel: {
        color: Colors.grayLabel,
    },
    radioButton: {
        borderBottomColor: Colors.grayLabel,
        borderBottomWidth: 1,
        marginLeft: 15,
        marginVertical: 10,
        marginRight: 15
    }

  })
export default CreateRoom;