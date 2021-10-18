import React, { Component, useState, useEffect, useRef } from 'react'
import { TouchableOpacity, Text, View, FlatList, Image, ScrollView, Dimensions } from 'react-native';

export default class Slide extends Component{
    constructor(props){
        super(props);
        this.state={
            liste_user : [],
            data: [],
        }
        this.image = React.createRef();
        this.fetchUser();
    }

    fetchUser = async() => {
        let response = await fetch('https://last-chance-dating.com/getSlide');
        let respJson = await response.json();
        this.setState({liste_user:respJson.slid});
    }

    renderItemComponent(item){
        
        return(   
                <View style={{
                    width:Dimensions.get("window").width,
                    height:450,
                    alignItems:'center',
                    opacity:0.9
                }}>
                    <Image
                    
                    style={{
                        position:'absolute',
                        marginTop:50,
                        width:200,
                        height:200,
                        borderRadius:100
                    }} 
                    
                    source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar}`+'/100/100/operateur_image' }} 
                    
                        
                    />
                    <View style={{
                        marginTop:180,
                        padding:40,
                        borderRadius:20,
                        borderRightWidth:2,
                        borderLeftWidth:2,
                        borderBottomWidth:2,
                        alignItems:'center'
                    }}>
                    <Text style={{
                        marginTop:25,
                        fontSize:20,
                        fontWeight:'bold'
                    }}>{item.item.nom_user}, {item.item.age}</Text>
                    <Text style={{marginTop:10}}>online</Text>
                    <Text style={{
                        fontSize:20,
                    }}>{item.item.ville}</Text>
                    <Text>{item.item.pays_inscription}</Text> 
                    </View>
                    
                </View>
            
                
            );
        }
    render(){
        return(
            <FlatList
            horizontal={true}
            
            data={this.state.liste_user}
            keyExtractor={({ id }, userid) => userid.toString()}
            renderItem={item => 
               this.renderItemComponent(item)
            }
            
            />
        );
    }
}