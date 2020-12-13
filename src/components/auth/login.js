import React from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text, Card  } from 'react-native-elements';
import * as Colors from '../../styles/colors'
import { SliderBox } from "react-native-image-slider-box";
import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
export default class Login extends React.Component {
  state = { 
    email: '', password: '', errorMessage: null, focused: '',
    images: [
      require('../../data/img/intro1.jpg'),
      require('../../data/img/intro2.png'),          // Local image
    ],
    isSignup: false,
    loading: false,
  }
  handleLogin = () => {
    // TODO: Firebase stuff...
    const { email, password } = this.state
    this.setState({loading: true})
    if(email == '' || password == ''){
      this.setState({errorMessage: 'Bạn phải nhập đủ thông tin'})
      return
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>  this.props.navigation.navigate('Main') )
      .catch(error => this.setState({ errorMessage: error.message }))
    console.log('handleLogin')
  }
  handleSignUp = () => {
      const { email, password } = this.state
      this.setState({loading: true})
      if(email == '' || password == ''){
        this.setState({errorMessage: 'Bạn phải nhập đủ thông tin'})
        return
      }
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main') )
      .catch(error => this.setState({ errorMessage: error.message }))
    console.log('handleSignUp')
  }


  render() {
    return (
      <ScrollView>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={300}
          dotColor={Colors.blue}
          inactiveDotColor={Colors.white}
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
        />
        <Card>
          <Card.Title><Text h5>{this.state.isSignup ? 'Đăng kí tài khoản' : 'Đăng nhập'}</Text></Card.Title>
          <Card.Divider/>
        {this.state.errorMessage &&
           Alert.alert("Lỗi", this.state.errorMessage, [
            {
              text: "Đồng ý",
              onPress: () => this.setState({errorMessage: null, loading: false}),
              style: "cancel"
            }
          ],
          { cancelable: false })
          }
         
          <Input
            label="Tài khoản"
            placeholder="Nhập địa chỉ email"
            autoCapitalize="none"
            leftIcon={{ type: 'font-awesome', name: 'envelope', size: 20 }}
            onChangeText={value => this.setState({ email: value })}
            value={this.state.email}
            onFocus={() => this.setState({ focused: 'email' })}
            onBlur={() => this.setState({ focused: '' })}
            inputStyle={styles.inputStyle}
            selectionColor={Colors.blue}
            inputContainerStyle = {this.state.focused == 'email' ? styles.inputContainerFocus : styles.inputContainerStyle}
            
            />

          <Input
            label="Mật khẩu"
            secureTextEntry={true}
            placeholder="Nhập mật khẩu"
            autoCapitalize="none"
            leftIcon={{ type: 'font-awesome', name: 'lock', size: 20}}
            onChangeText={value => this.setState({ password: value })}
            value={this.state.password}
            onFocus={() => this.setState({ focused: 'password' })}
            onBlur={() => this.setState({ focused: '' })}
            inputStyle={styles.inputStyle}
            selectionColor={Colors.blue}
            inputContainerStyle = {this.state.focused == 'password' ? styles.inputContainerFocus : styles.inputContainerStyle}
            />
        </Card>
          <Text>{'\n'}</Text>

        
        <Button 
          title={this.state.isSignup ? "Đăng kí" : "Đăng nhập"}
          type="clear"
          loading={this.state.loading}
          loadingProps={{color: Colors.pink}}
          titleStyle={{color: Colors.primary}}
          containerStyle={{marginHorizontal: 35, borderColor: Colors.primary, borderWidth: 1, borderRadius: 10}}
          onPress={this.state.isSignup ? this.handleSignUp : this.handleLogin} />
        <TouchableOpacity style={{marginVertical: 15, alignItems: 'center'}} onPress={()=>this.setState({isSignup: !this.state.isSignup, errorMessage: null})}>
          <Text>{this.state.isSignup ? "Bạn đã có tài khoản ?" : "Bạn chưa có tài khoản ?"}</Text>
          <Text style={{color: Colors.pink}}>{this.state.isSignup ? "Đăng nhập thôi nào!" : "Tạo tài khoản mới!"}</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: Colors.grayBackground,
    marginVertical: 0, 
    paddingVertical: 0
  },
  inputContainerFocus: {
      borderBottomColor: Colors.blue
  },
  inputStyle: {fontSize: 16},
})