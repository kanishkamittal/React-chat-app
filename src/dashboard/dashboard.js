import React, { Component } from 'react'
import ChatListComponent from '../chatList/ChatList';
import styles from './styles';
import { Button, withStyles } from '@material-ui/core';
const firebase = require("firebase");

export class Dashboard extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       selectedChat: null,
       newChatFormVisible: false,
       email: null,
       chats: []
    }
  }
  

  render() {

    const { classes } = this.props;

    return (
      <div>
        <ChatListComponent history={this.props.history} 
        newChatBtnFn={this.newChatBtnClicked}
        selectChatFn={this.selectChat}
        chats={this.state.chats}
        userEmail={this.state.email}
        selectChatIndex={this.state.selectedChat} />
      <Button onClick={this.signOut} className={classes.signOutBtn}>Sign Out</Button>
        
      </div>
    )
  }

  signOut = () => firebase.auth().signOut();

  selectChat = (chatIndex) => {
    console.log('selected a chat',chatIndex)
  }

  newChatBtnClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null });

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async _usr => {
      if(!_usr)
        this.props.history.push('/login');
      else {
        await firebase
          .firestore()
          .collection('chats')
          .where('users', 'array-contains', _usr.email)
          .onSnapshot(async res => {
            const chats = res.docs.map(_doc => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats
            });
            console.log(this.state)
          })
      }
  });
}
}

export default withStyles(styles)(Dashboard)
