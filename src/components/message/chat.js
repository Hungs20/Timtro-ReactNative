import React, {Component} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebaseSDK from '../../database/firebaseSDK';
class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: [],
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'Chat!'
      });
      componentDidMount() {
        firebaseSDK.loadMessages(message => {
          this.setState(previousState => {
            return {
              messages: GiftedChat.append(previousState.messages, message)
            };
          });
        });
      }
      componentWillUnmount() {
        firebaseSDK.closeChat();
      }
      
    render() {
        return (
            <GiftedChat
        messages={this.state.messages}
        onSend={message => {
            firebaseSDK.sendMessage(message);
        }}
        user={{
          _id: firebaseSDK.getUid(),
          name: this.props.username
        }}
      />
        )
    }
}
export default Chat