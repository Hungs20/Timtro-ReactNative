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
            default:
                break;
        }
    }

    /// Render
    render() {
        return (
            <ScrollView>
                <ThemeProvider>
                    <Card><Step currentStep={this.state.currentStep} maxStep={4}/></Card>
                    {this.renderSwitch(this.state.currentStep)}
                    <Text>{'\n'}</Text>
                    <Button
                        title="Tiếp theo"
                        type="solid"
                        containerStyle={{paddingHorizontal: 15}}
                        onPress={
                            ()=>this.setState({
                                currentStep: this.state.currentStep < 3 ? this.state.currentStep+1 : 3
                            })
                        }
                    />
            </ThemeProvider>
            
            </ScrollView>
        )
        
    }
}
export default CreateRoom;
