import React from 'react'
import {Colors, Fonts} from '../../../styles'
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Text, CheckBox, Divider, ThemeProvider, Input, Overlay, Avatar , Image, ButtonGroup } from 'react-native-elements'
import { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import * as Language from '../../language'
import { blue, grayBackground, grayLabel, white } from '../../../styles/colors';
import DateTimePicker from '@react-native-community/datetimepicker';

class CreateConfirmRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            title: '',
            description: '',
            timeOpen: new Date(),
            timeClose: new Date(),
            isTimeOpen: false,
            isTimeClose: false,
            focused: '',    
          };
    }
    showTimePicker = (type) => {
        this.setState({
            focused: this.state.focused === type ? '' : type
        })
    }
    onChangeTime = (event, selectedDate) => {
        switch (this.state.focused) {
            case 'open':
                this.setState({
                    isTimeOpen: true,
                    timeOpen: selectedDate || this.state.timeOpen,
                })
                break;
            case 'close':
                this.setState({
                    isTimeClose: true,
                    timeClose: selectedDate || this.state.timeClose,
                })
                break;
            default:
                break;
        }
    }
    render(){ 
        console.log(this.state.timeClose.toTimeString())
        return(
            <ThemeProvider>
                <Card>
                    <Card.Title><Text h5>{Language.ROOM_CONFIRM}</Text></Card.Title>
                    <Card.Divider/>
                    <Text style={styles.title}>{Language.ROOM_PHONE}</Text>
                    <Input
                        placeholder="Nhập số điện thoại"
                        keyboardType='phone-pad'
                        onChangeText={value => this.setState({phone : value})}
                        inputContainerStyle={this.state.focused == 'phone' ? styles.inputContainerFocus : styles.inputContainer}
                        inputStyle={styles.inputStyle}
                        onFocus={() => this.setState({ focused: 'phone' })}
                        onBlur={() => this.setState({ focused: '' })}
                    />

                    <Text style={styles.title}>{Language.ROOM_TITLE}</Text>
                    <Input
                        placeholder="Nhập tiêu đề bài đăng"
                        onChangeText={value => this.setState({title : value})}
                        inputContainerStyle={this.state.focused == 'title' ? styles.inputContainerFocus : styles.inputContainer}
                        inputStyle={styles.inputStyle}
                        onFocus={() => this.setState({ focused: 'title' })}
                        onBlur={() => this.setState({ focused: '' })}
                        maxLength={60}
                    />

                    <Text style={styles.title}>{Language.ROOM_DESCRIPTION}</Text>
                    <Input
                        placeholder="Môi trường sống sạch, khu phố an ninh..."
                        onChangeText={value => this.setState({description : value})}
                        inputContainerStyle={this.state.focused == 'description' ? styles.inputContainerFocus : styles.inputContainer}
                        inputStyle={styles.inputStyle}
                        onFocus={() => this.setState({ focused: 'description' })}
                        onBlur={() => this.setState({ focused: '' })}
                    />

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={styles.title}>{Language.ROOM_TIME_OPEN}</Text>
                            <TouchableOpacity style={this.state.focused === 'open' ? styles.timePickerSelected : styles.timePicker} onPress={() => this.showTimePicker('open')}>
                                <Text style={this.state.isTimeOpen ? styles.inputStyle : styles.inputEmptyStyle}>{this.state.isTimeOpen ? this.state.timeOpen.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Giở mở cửa'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={styles.title}>{Language.ROOM_TIME_CLOSE}</Text>
                            <TouchableOpacity style={this.state.focused === 'close' ? styles.timePickerSelected : styles.timePicker} onPress={() => this.showTimePicker('close')}>
                            <Text style={this.state.isTimeClose ? styles.inputStyle : styles.inputEmptyStyle}>{this.state.isTimeClose ? this.state.timeClose.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Giở đóng cửa'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text>{'\n'}</Text>
                    {(this.state.focused === 'open' || this.state.focused === 'close') && (
                        
                        <DateTimePicker
                        textColor={Colors.grayLabel}
                        testID="dateTimePicker"
                        value={this.state.focused === 'open' ? this.state.timeOpen : this.state.timeClose}
                        mode='time'
                        onChange={this.onChangeTime}
                        style={{height: 150}}
                        />
                    )}
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
    inputEmptyStyle: {fontSize: 16, color: grayLabel},
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
        timePicker:{borderBottomColor: grayBackground, borderBottomWidth: 1, paddingVertical: 5, marginHorizontal: 10},
        timePickerSelected:{borderBottomColor: Colors.primary, borderBottomWidth: 1, paddingVertical: 5, marginHorizontal: 10},
})
export default CreateConfirmRoom;