import React, { Component, useState, useEffect, useRef } from 'react'
import { TouchableOpacity, Text, View, FlatList, Image, ScrollView, Dimensions } from 'react-native';

export default class SlideTemoin extends Component{
    constructor(props){
        super(props);
        this.state={
            liste_temoin : [],
            data: [],
        }
        this.image = React.createRef();
        this.fetchUser();
    }

    fetchUser = async() => {
        let response = await fetch('https://last-chance-dating.com/get_slide_temoignage');
        let respJson = await response.json();
        this.setState({liste_temoin:respJson.liste_genre});
        //console.log(this.state.liste_temoin);
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
                        marginTop:50,
                        width:200,
                        height:200,
                        borderRadius:100
                    }} 
                    
                    source={{ uri: 'https://last-chance-dating.com/public/assets/temoignage/'+`${item.item.photos}` }} 
                    />
                    
                    <Text style={{
                        marginTop:25,
                        fontSize:20,
                        fontWeight:'bold',
                        color:'white'
                    }}>{item.item.nom_user}, {item.item.age_ville}</Text>
                    <Text style={{
                        marginTop:10,
                        fontSize:17,
                        textAlign:'center',
                        color:'white'                     
                    }}>{item.item.a_propos}</Text> 
                    <TouchableOpacity style={{
                            alignItems:'center',
                            marginTop:20,
                            borderWidth:2,
                            borderRadius:10,
                            borderColor:'#fd94ce',
                            padding:10
                        }}>
                            <Text style={{color:'white', fontSize:17}}>Lire le suite</Text>
                            
                    </TouchableOpacity>
                    
                </View>
            
                
            );
        }
    render(){
        return(
            <FlatList
            horizontal={true}
            
            data={this.state.liste_temoin}
            keyExtractor={({ id }, userid) => userid.toString()}
            renderItem={item => 
               this.renderItemComponent(item)
            }
            
            />
        );
    }
}