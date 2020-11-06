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
class CreateRoom extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 0
        }
    }
    
    renderSwitch(step){
        switch (step) {
            case 0:
                return <CreateInfoRoom/>
            case 1:
                return <CreateAddressRoom/>
            case 2:
                return <CreateExtensionRoom/>
            case 3:
                return <CreateConfirmRoom/>
            default:
                break;
        }
    }

    /// Render
    render() {
        return (
            
                <ThemeProvider>
                    <Card><Step currentStep={this.state.currentStep} maxStep={4}/></Card>
                    <ScrollView>
                        {this.renderSwitch(this.state.currentStep)}
                        <Text>{'\n'}</Text>
                        <Button
                            title="Tiếp theo "
                            type="clear"
                            iconRight
                            icon={
                                <Icon name='chevron-right'color={Colors.primary} size={14}/>
                            }
                            titleStyle={{color: Colors.primary}}
                            containerStyle={{marginHorizontal: 35, borderColor: Colors.primary, borderWidth: 1, borderRadius: 10}}
                            onPress={
                                ()=>this.setState({
                                    currentStep: this.state.currentStep < 3 ? this.state.currentStep+1 : 3
                                })
                            }
                        />
                    </ScrollView>
                </ThemeProvider>
            
        )
        
    }
}
export default CreateRoom;
