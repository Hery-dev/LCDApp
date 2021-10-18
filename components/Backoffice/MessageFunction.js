import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, SafeAreaView, TextInput, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ImagePicker from 'react-native-image-picker'
export default class MessageFunction extends Component{
    /*
    const [initialElements, changeEl]  = useState([
        { id : "0", text : "Object 1"},
        { id : "1", text : "Object 2"},
      ]);

    const [exampleState, setExampleState] = useState(initialElements);
    const [idx, incr] = useState(2);

    const addElement = () => {
        var newArray = [...initialElements , {id : idx, text: "Object " + (idx+1) }];
        incr(idx + 1);
        console.log(initialElements.length);
        setExampleState(newArray);
        changeEl(newArray);
      }

      <FlatList
        keyExtractor = {item => item.id}  
        data={exampleState}
        renderItem = {item => (<Text>{item.item.text}</Text>)} />
      */

        state = {
            photo: null,
          }

          handleChoosePhoto = () => {
            const options = {
              noData: true,
            }
            ImagePicker.launchImageLibrary(options, response => {
              if (response.assets) {
                this.setState({ photo: response })
              }
            })
          }


render(){
    const { photo } = this.state
    return(
    <View>
    
    <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
    </View>
    );
}
}