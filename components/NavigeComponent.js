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
     Pressable
    } from 'react-native'

export default class NavigeComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
        timePassed: false,
        exText:null,
        avatar_session: []
        };
    }

    Intervall=()=>{
        setTimeout(()=>{
            this.setState({timePassed: false})}, 3000
        ); 
      
    }

    ConnectUser = async() => {
        let response = await fetch('https://last-chance-dating.com/api/connexionmobile');
        let respJson = await response.json();
        this.setState({avatar_session:respJson});
        //console.log(this.state.avatar_session)
    }

    render(){
        const { navigation } = this.props;
        if(this.state.timePassed=="true"){
            this.setState({exText:<Text>AAAA</Text>})
        }
        return(
            <View style={{marginTop:50}}>
                <TouchableOpacity onPress={()=>{ 
                        this.ConnectUser(); 
                        setTimeout(()=>{
                            //console.log(this.state.avatar_session);
                            navigation.navigate("Con", {avatar:this.state.avatar_session});
                        } , 5000); 
                        //console.log(this.state.avatar_session);
                        
                    }}>
                    <Text>BLABLA</Text>
                </TouchableOpacity>

                {this.state.exText}
            </View>
        );
    }
}