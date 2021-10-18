import React, { Component, useState, useEffect, useRef } from 'react'
import { TouchableOpacity, Text, View, FlatList, Image, ScrollView, Dimensions } from 'react-native';

export default class Membre extends Component{
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
        let response = await fetch('https://last-chance-dating.com/api/affiche_membre_ville_slide_mobile');
        let respJson = await response.json();
        this.setState({liste_user:respJson.liste_user_ville});
        //console.log(this.state.liste_user);
    }

    renderItemComponent(item){
    
        return(
            <View>
            <Image
            style={{
                borderRadius:5,
                width:170,
                height:230,
                marginHorizontal:5
            }} 
            source={{ uri: 'https://last-chance-dating.com/public/assets/operateur_image/'+`${item.item.avatar}` }}    
            />

                    <View style={{
                        position:'absolute',
                        
                    }}>
                        <View style={{
                            flexDirection:'row'
                        }}>
                            
                            <Image source={{
                                uri:"https://en-toute-discretion.com/public/assets/new_integration/triangle_femme.png"
                            }} style={{
                                width:40,
                                height:40,
                                marginLeft:135
                            }}></Image>
                        </View>
                    <Text style={{
                            marginTop:65,
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20
                    }}>{item.item.nom_user}</Text>

                        <Text style={{
                            marginTop:15,
                            color:'white',
                            marginLeft:20,
                            
                        }}>{item.item.ville}</Text>

                        <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20,
                        }}>{item.item.pays_inscription}</Text>

                        <View style={{
                            flexDirection:'row',
                            marginTop:15
                        }}>
                            <Image source={require('../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>


        </View>
        );
    
    }

    render(){
        return(
            <View style={{
                marginTop:50
            }}>
                <FlatList
                    horizontal={true}
            
                    data={this.state.liste_user}
                    keyExtractor={({ id }, userid) => userid.toString()}
                    renderItem={item => 
                    this.renderItemComponent(item)
                }/>

            </View>
        );
    }
}