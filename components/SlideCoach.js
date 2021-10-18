import React, { Component, useState, useEffect } from 'react'
import { TouchableOpacity, Text, View, FlatList, Image, ScrollView, Dimensions } from 'react-native';

export default class SlideCoach extends Component{

    constructor(props){
        super(props);
        this.state = {
            list_coach : [],
            data: []
        }
        this.fetchCoach()
    }

    fetchCoach = async()=>{
        let response = await fetch('https://last-chance-dating.com/getSlide_coach');
        let jsonResp = await response.json();
        this.setState({list_coach:jsonResp.slid_coach});
     }
  
     renderItemComponent(item){
        
        return(
        
            
                <View style={{
                    width:Dimensions.get("window").width,
                    height:350,
                    alignItems:'center',
                    backgroundColor:'#f8f9fa',
                    opacity:0.9
                }}>
                    
                    <Image style={{
                        marginTop:50,
                        width:200,
                        height:200,
                        borderRadius:100
                    }} source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar}` }} />
                    <Text style={{
                        color:'#ff3384'
                    }}>{item.item.nom_user}</Text>
                    <Text style={{
                        fontSize:20,
                        marginTop:10
                    }}>{item.item.profession_user}</Text>
                </View>
            
                
            );
        }
        
        
    

    render(){
        return(
            
            <FlatList
            horizontal={true}
            
            data={this.state.list_coach}
            keyExtractor={({ id }, userid) => userid.toString()}
            renderItem={item => 
               this.renderItemComponent(item)
            } />
         
        );
    }
}