import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'

import { 
    StyleSheet,
     Text, 
     View, 
     Image, 
     TouchableWithoutFeedback, 
     StatusBar, 
     TextInput, 
     SafeAreaView, 
     Keyboard, 
     TouchableOpacity, 
     KeyboardAvoidingView,
     ImageBackground, 
     Dimensions,
     Button,
     Alert,
     ScrollView,
     Modal,
     Pressable,
     FlatList,
     ActivityIndicator
    } from 'react-native'

import { useNetInfo } from '@react-native-community/netinfo';

import Pusher from 'pusher-js';



/*const unsubscribe = NetInfo.addEventListener(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
});

const echo = new Echo({
            broadcaster: 'socket.io',
            host:'ws://127.0.0.1:6001',
            client: Socketio,
            auth: {
                headers:{
                    'Autorization': 'Bearer '+ 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzMTg2NjMwNCwiZXhwIjoxNjMxODY5OTA0LCJuYmYiOjE2MzE4NjYzMDQsImp0aSI6InFLM1g2WWdLRU5VQk45YlAiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.J_vaaO4yqC0SQinsel8iKjcdddBGPnPvaGJIRFJEBuE',
                },
            },
        });

            echo.channel('chatevent').listen('ChatEvent', (e)=>{console.log("AAAAAA")});
         

unsubscribe();*/

export default function ConnectPusher  (){

        

           return (
                <View style={{
                    marginTop:50
                }}>
                
                    <Text>AAAAAA</Text>
                </View>
            );
            
        
    
}

