/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native'


import Pusher from 'pusher-js/react-native';
   


//import socketIO, { Socket } from 'socket.io-client';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NetInfo from '@react-native-community/netinfo';
import Accueil from './components/Accueil';
import User from './components/Backoffice/User';
import NavigeComponent from './components/NavigeComponent';
import Connect from './components/Connect';
import Membre from './components/Membre';
import Celibataire from './components/Celibataire';
import VotreProfile from './components/VotreProfil';
import Camarche from './components/Camarche';
import Last from './components/Last';
import Experience from './components/Experience';
import Rencontre from './components/Rencontre';
import ConnectPusher from './components/ConnectPusher';
import Message from './components/Backoffice/Message';
import MessageContent from './components/Backoffice/MessageContent';
import MessageFunction from './components/Backoffice/MessageFunction';
import ListUser from './components/Backoffice/ListUser';
import UserProfil from './components/Backoffice/UserProfil';

import Echo from 'laravel-echo';

import Socketio from 'socket.io-client';

const echo = new Echo({
  broadcaster:'socket.io',
  host:"https://last-chance-dating.com:8080",
  client:Socketio
});
console.log(echo);
echo.channel('my-channel')
.listen('.sendMessageEvent', (data) => {
    console.log(data);
});

echo.channel('my-channel')
.listen('.updateOnlineStatus', (data) => {
    console.log(data);
});

const Stack = createNativeStackNavigator();

const options = [
  {value : 0, label: 'Homme'},
  {value: 1, label: 'Femme'}
];

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        isconected:""
    };
}

  render(){


    
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="Home" component={Accueil}></Stack.Screen>
          <Stack.Screen name="User" component={User}></Stack.Screen>
          <Stack.Screen name="Nav" component={NavigeComponent}></Stack.Screen>
          <Stack.Screen name="Con" component={Connect}></Stack.Screen>
          <Stack.Screen name="Mem" component={Membre}></Stack.Screen>
          <Stack.Screen name="Celiba" component={Celibataire}></Stack.Screen>
          <Stack.Screen name="Profile" component={VotreProfile}></Stack.Screen>
          <Stack.Screen name="Camarche" component={Camarche}></Stack.Screen>
          <Stack.Screen name="Last" component={Last}></Stack.Screen>
          <Stack.Screen name="Experience" component={Experience}></Stack.Screen>
          <Stack.Screen name="Rencontre" component={Rencontre}></Stack.Screen>
          <Stack.Screen name="Pus" component={ConnectPusher}></Stack.Screen>
          <Stack.Screen name="Message" component={Message}></Stack.Screen>
          <Stack.Screen name="MesContent" component={MessageContent}></Stack.Screen>
          <Stack.Screen name="MesFunc" component={MessageFunction}></Stack.Screen>
          <Stack.Screen name="ListUser" component={ListUser}></Stack.Screen>
          <Stack.Screen name="UserProfil" component={UserProfil}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
}