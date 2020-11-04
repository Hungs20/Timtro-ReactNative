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
class CreateInfoRoom extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            focused: '',
            valueRoom: '',
            listRoom: [
                {'label': 'Kí túc xá/Homestay', 'value' : 'ktx'}, 
                {'label': 'Phòng cho thuê', 'value' : 'pct'}, 
                {'label': 'Phòng ở ghép', 'value' : 'pog'}, 
                {'label': 'Nhà nguyên căn', 'value' : 'nnc'}, 
                {'label': 'Căn hộ', 'value' : 'ch'}
            ],
            listGender: [
                {'label' : 'Tất cả', 'value' : 'all'},
                {'label' : 'Nam', 'value' : 'nam'},
                {'label' : 'Nữ', 'vaule' : 'nu'}
            ],
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
            isCheckedFreeDien: false,
            isCheckedFreeNuoc: false,
            isCheckedFreeMang: false,
            isCheckedXe: false,
        }
    }
    // SET STATE
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
    setGender = (value) => {
        this.setState({
            gender : value
        })
    }
    setArea = (value) => {
        this.setState({
            area : value
        })
    }

    /// Render
    render() {
        return (
                <ThemeProvider>
                    <Card>
                        <Card.Title><Text h5>{Language.ROOM_INFO}</Text></Card.Title>
                        <Card.Divider/>
                        <Text style={styles.title}>{Language.ROOM_TYPE}</Text>
                        {this.state.listRoom.map((data,index) => {
                            return(
                                <CheckBox
                                    left
                                    key={data.value}
                                    title={data.label}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={this.state.valueRoom == data.value}
                                    onPress = {() => this.setValueRoom(data.value)}
                                    containerStyle={styles.radioBackground}
                                    textStyle={this.state.valueRoom == data.value ? styles.radioLabelSelected : styles.radioLabel}
                                />
                            )
                        })}
                
                        <Text style={styles.title}>{"\n" + Language.ROOM_NUM}</Text>
                        <View style={styles.viewRightIcon}>
                            <Input
                                keyboardType="numeric"
                                placeholder="Nhập số lượng phòng"
                                onChangeText={value => this.setState({numRoom : value})}
                                inputContainerStyle={this.state.focused == 'roomnum' ? styles.inputContainerFocus : styles.inputContainer}
                                inputStyle={styles.inputStyle}
                                containerStyle={{marginRight: -300}}
                                onFocus={() => this.setState({ focused: 'roomnum' })}
                                onBlur={() => this.setState({ focused: '' })}
                            />
                            <Text style={styles.rightText}>phòng</Text>
                        </View>

                        <Text style={styles.title}>{Language.ROOM_HAVE}</Text>
                        <View style={styles.viewRightIcon}>
                            <Input
                                keyboardType="numeric"
                                placeholder="Nhập số người/phòng"
                                onChangeText={value => this.setState({numPersonOfRoom : value})}
                                inputContainerStyle={this.state.focused == 'roomhave' ? styles.inputContainerFocus : styles.inputContainer}
                                inputStyle={styles.inputStyle}
                                containerStyle={{marginRight: -300}}
                                onFocus={() => this.setState({ focused: 'roomhave' })}
                                onBlur={() => this.setState({ focused: '' })}
                            />
                            <Text style={styles.rightText}>người/phòng</Text>
                        </View>
                        <Text style={styles.title}>{Language.ROOM_GENDER}</Text>
                        {this.state.listGender.map((data,index) => {
                            return(
                                <CheckBox
                                    key={index}
                                    title={data.label}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={this.state.gender == data.value}
                                    onPress = {() => this.setGender(data.value)}
                                    containerStyle={styles.radioBackground}
                                    textStyle={this.state.gender == data.value ? styles.radioLabelSelected : styles.radioLabel}
                                />
                            )
                        })}

                        <Text style={styles.title}>{"\n" + Language.ROOM_AREA}</Text>
                        <View style={styles.viewRightIcon}>
                            <Input
                                keyboardType="numeric"
                                placeholder="Nhập diện tích phòng"
                                onChangeText={value => this.setState({numRoom : value})}
                                inputContainerStyle={this.state.focused == 'dientich' ? styles.inputContainerFocus : styles.inputContainer}
                                inputStyle={styles.inputStyle}
                                containerStyle={{marginRight: -300}}
                                onFocus={() => this.setState({ focused: 'dientich' })}
                                onBlur={() => this.setState({ focused: '' })}
                            />
                            <Text style={styles.rightText}>m2</Text>
                        </View>
                    </Card>
                    <Card>
                        <Card.Title><Text h5>{Language.ROOM_COST}</Text></Card.Title>
                        <Card.Divider/>
                        <Text style={styles.title}>{Language.ROOM_COST_THUE}</Text>
                        <View style={styles.viewRightIcon}>
                            <Input
                                keyboardType="numeric"
                                placeholder="Nhập giá cho thuê"
                                onChangeText={value => this.setState({giathue : value})}
                                inputContainerStyle={this.state.focused == 'roomcostthue' ? styles.inputContainerFocus : styles.inputContainer}
                                inputStyle={styles.inputStyle}
                                containerStyle={{marginRight: -300}}
                                onFocus={() => this.setState({ focused: 'roomcostthue' })}
                                onBlur={() => this.setState({ focused: '' })}
                            />
                            <Text style={styles.rightText}>VND/người</Text>
                        </View>

                        <Text style={styles.title}>{Language.ROOM_COST_COC}</Text>
                        <View style={styles.viewRightIcon}>
                            <Input
                                keyboardType="numeric"
                                placeholder="Nhập số tiền cọc"
                                onChangeText={value => this.setState({giacoc : value})}
                                inputContainerStyle={this.state.focused == 'roomcostcoc' ? styles.inputContainerFocus : styles.inputContainer}
                                inputStyle={styles.inputStyle}
                                containerStyle={{marginRight: -300}}
                                onFocus={() => this.setState({ focused: 'roomcostcoc' })}
                                onBlur={() => this.setState({ focused: '' })}
                            />
                            <Text style={styles.rightText}>VND</Text>
                        </View>

                        <Text style={styles.title}>{Language.ROOM_COST_DIEN}</Text>
                        <View style={styles.viewRightIcon}>
                            {this.state.isCheckedFreeDien ? 
                            <Input
                                value="Miễn phí"
                                disabled
                                inputContainerStyle={this.state.focused == 'tiendien' ? styles.inputContainerFocus : styles.inputContainer}
                                inputStyle={{ color: "black", fontWeight: 'bold', fontSize: 16}}
                                containerStyle={{marginRight: -200}}
                                
                            />
                            : <Input
                            keyboardType="numeric"
                            placeholder="Nhập số tiền"
                            onChangeText={value => this.setState({tiendien : value})}
                            inputContainerStyle={this.state.focused == 'tiendien' ? styles.inputContainerFocus : styles.inputContainer}
                            inputStyle={styles.inputStyle}
                            containerStyle={{marginRight: -200}}
                            onFocus={() => this.setState({ focused: 'tiendien' })}
                            onBlur={() => this.setState({ focused: '' })}
                        />
                            }
                            <Text style={styles.rightText}>VND</Text>
                            <CheckBox
                                right
                                title='MIỄN PHÍ'
                                checked={this.state.isCheckedFreeDien}
                                onPress={
                                    ()=>{
                                        this.setState({
                                            isCheckedFreeDien : !this.state.isCheckedFreeDien
                                        })
                                    }
                                }
                                containerStyle={{backgroundColor: white, borderColor: white, marginBottom: 30, color: grayLabel, marginRight: -15}}
                                textStyle={{color: grayLabel, fontSize: 12}}
                                />
                        </View>

                    
                        <Text style={styles.title}>{Language.ROOM_COST_NUOC}</Text>
                        <View style={styles.viewRightIcon}>
                            {this.state.isCheckedFreeNuoc ? 
                            <Input
                                value="Miễn phí"
                                disabled
                                inputContainerStyle={this.state.focused == 'tiennuoc' ? styles.inputContainerFocus : styles.inputContainer}
                                inputStyle={{ color: "black", fontWeight: 'bold', fontSize: 16}}
                                containerStyle={{marginRight: -200}}
                                
                            />
                            : <Input
                            keyboardType="numeric"
                            placeholder="Nhập số tiền"
                            onChangeText={value => this.setState({tiennuoc : value})}
                            inputContainerStyle={this.state.focused == 'tiennuoc' ? styles.inputContainerFocus : styles.inputContainer}
                            inputStyle={styles.inputStyle}
                            containerStyle={{marginRight: -200}}
                            onFocus={() => this.setState({ focused: 'tiennuoc' })}
                            onBlur={() => this.setState({ focused: '' })}
                        />
                            }
                            <Text style={styles.rightText}>VND</Text>
                            <CheckBox
                                right
                                title='MIỄN PHÍ'
                                checked={this.state.isCheckedFreeNuoc}
                                onPress={
                                    ()=>{
                                        this.setState({
                                            isCheckedFreeNuoc : !this.state.isCheckedFreeNuoc
                                        })
                                    }
                                }
                                containerStyle={{backgroundColor: white, borderColor: white, marginBottom: 30, color: grayLabel, marginRight: -15}}
                                textStyle={{color: grayLabel, fontSize: 12}}
                                />
                        </View>

                        <Text style={styles.title}>{Language.ROOM_COST_MANG}</Text>
                        <View style={styles.viewRightIcon}>
                            {this.state.isCheckedFreeMang ? 
                            <Input
                                value="Miễn phí"
                                disabled
                                inputContainerStyle={this.state.focused == 'tienmang' ? styles.inputContainerFocus : styles.inputContainer}
                                inputStyle={{ color: "black", fontWeight: 'bold', fontSize: 16}}
                                containerStyle={{marginRight: -200}}
                                
                            />
                            : <Input
                            keyboardType="numeric"
                            placeholder="Nhập số tiền"
                            onChangeText={value => this.setState({tienmang : value})}
                            inputContainerStyle={this.state.focused == 'tienmang' ? styles.inputContainerFocus : styles.inputContainer}
                            inputStyle={styles.inputStyle}
                            containerStyle={{marginRight: -200}}
                            onFocus={() => this.setState({ focused: 'tienmang' })}
                            onBlur={() => this.setState({ focused: '' })}
                        />
                            }
                            <Text style={styles.rightText}>VND</Text>
                            <CheckBox
                                right
                                title='MIỄN PHÍ'
                                checked={this.state.isCheckedFreeMang}
                                onPress={
                                    ()=>{
                                        this.setState({
                                            isCheckedFreeMang : !this.state.isCheckedFreeMang
                                        })
                                    }
                                }
                                containerStyle={{backgroundColor: white, borderColor: white, marginBottom: 30, color: grayLabel, marginRight: -15}}
                                textStyle={{color: grayLabel, fontSize: 12}}
                                />
                        </View>
                        
                        <CheckBox
                            left
                            title={Language.ROOM_HAVE_XE}
                            checked={this.state.isCheckedXe}
                            onPress={
                                ()=>{
                                    this.setState({
                                        isCheckedXe : !this.state.isCheckedXe
                                    })
                                }
                            }
                            containerStyle={{backgroundColor: white, borderColor: white, marginVertical: 0}}
                            textStyle={{color: grayLabel, fontSize: 16}}
                            />

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
        textTransform: 'uppercase'
    },
    radioLabel: {
        color: grayLabel, 
        fontWeight: 'normal',
        fontSize: 16
    },
    radioLabelSelected: {
        color: 'black', 
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
        alignItems: "center" }
})
export default CreateInfoRoom;
