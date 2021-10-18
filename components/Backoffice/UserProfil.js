import React, { Component, useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class UserProfil extends Component{
    constructor(props){
        super(props);
        this.state={
            type:this.props.route.params.type,
            type_abonnement:this.props.route.params.type_abonnement,
            abonnement : this.props.route.params.abonnement,
            abonnement_coach : this.props.route.params.abonnement_coach,
            abonnement_count : this.props.route.params.abonnement_count,
            abonnement_deja_payer : this.props.route.params.abonnement_deja_payer,
            avatar_olona1 : this.props.route.params.avatar_olona1,
            information_profil_olona : this.props.route.params.information_profil_olona,
            session:this.props.route.params.session,
            avatar : this.props.route.params.avatar,
            menu:false,
            activity:false,
        }
    }

    componentDidMount(){
        console.log("Tonga : ",this.state.type);
        console.log(this.state.type_abonnement);
    }

    LoadPage(status){
        if(status==true){
            return  <ActivityIndicator size="large" color="black" />
        }
    }

    showMenu(status){
        const { navigation } = this.props;
        if(status==true){
            //this.setState({status:false})
            return(
            
                <View style={{
                    width:Dimensions.get("window").width,
                    height:Dimensions.get("window").height/12,
                }}>
                    <TouchableOpacity style={{
                        marginLeft:2*Dimensions.get("window").width/3,
                        marginRight:12,
                        marginTop:5
                    }} onPress={()=>{
                        
                        setTimeout(() => {
                            
                            navigation.navigate("Home");
                            this.setState({menu:false});
                            this.setState({avatar:""});
                            this.setState({session:[]});
                        }, 1000);
                    }}>
                    <Text style={{
                        padding:5,
                        borderWidth:1,
                        borderRadius:5,
                        textAlign:'center',
                        fontSize:17
                    }}>Déconnexion</Text>
                    </TouchableOpacity>
                    
                </View>
            );
        }
    }

    render(){
        const { navigation } = this.props;
        
        return(
            <ScrollView>
                <View>
            <View style={{
                        flexDirection:'row', 
                        backgroundColor:'#f8f9fa',
                        opacity: 0.7,
                        height:130,
                        alignItems:'center'
            }}>

                <View style={{
                    width:Dimensions.get("window").width/4,
                    alignItems:"center",
                    marginTop:50
                }}>
                    <Image
                        source={require('../../img/recherche.png')}
                        style={{
                            width:40,
                            height:40
                        }}
                    >
                    </Image>
                </View>

                <View style={{
                    width:Dimensions.get("window").width/4,
                    alignItems:"center",
                    marginTop:50
                }}>
                    <TouchableOpacity onPress={()=>{
                        this.get_tout_message(this.state.session[0]["userid"]);
                        this.setState({activity:true});
                        setTimeout(() => {
                            console.log("AAAA", this.state.tout_message);
                            this.setState({activity:false});
                            navigation.navigate("Message", {
                                avatar:this.state.avatar,
                                tout_message:this.state.tout_message,
                                session:this.state.session,
                                message_vide:this.state.message_vide
                            });
                        }, 3000);

                        }}>
                            <Image
                                source={require('../../img/msg.png')}
                                style={{
                                    width:40,
                                    height:40
                                }}>
                            </Image>
                        </TouchableOpacity>
                </View>

                <View style={{
                    width:Dimensions.get("window").width/4,
                    alignItems:"center",
                    marginTop:50
                }}>
                    <TouchableOpacity onPress={()=>{
                        this.setState({activity:true});
                        setTimeout(() => {
                            this.setState({activity:false});
                            navigation.navigate("User", {avatar:this.state.avatar});
                        }, 3000);
                    }}>
                    <Image
                        source={require('../../img/Membre.png')}
                        style={{
                            width:50,
                            height:40
                        }}
                    >
                    </Image>
                    </TouchableOpacity>
                </View>
                
                    
                <View style={{
                    width:Dimensions.get("window").width/4,
                    alignItems:"center",
                    marginTop:50
                }}>
                    <TouchableOpacity onPress={()=>{
                        //this.setState({activity:true});
                        if(this.state.menu==false){
                            this.setState({menu:true});
                        }
                        else{
                            this.setState({menu:false});
                        }
                    }}>
                    <Image
                        source={{
                            uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${this.state.session[0]["avatar"]}`
                        }}
                        style={{
                            width:60,
                            height:60,
                            borderRadius:30
                        }}
                    >
                    </Image>
                    </TouchableOpacity>
                </View>
                    
                    
                    
                    
            </View>

            <View>
            {this.LoadPage(this.state.activity)}
            </View>

            <View style={{
                alignItems:'center',
            }}>
            {this.showMenu(this.state.menu)}
            </View>

            </View>

            <View style={{
                marginTop:20,
                alignItems:'center'
            }}>
                <Text style={{
                    fontSize:20
                }}>Mes abonnements dating</Text>
            </View>

            <View style={{
                marginHorizontal:50,
                padding:20,
                borderWidth:1,
                marginVertical:10,
                borderRadius:10
            }}>
                <Text style={{
                    fontSize:18,
                    textAlign:'center'
                }}>Type d'abonnement : {this.state.type}</Text>
            </View>

            <View style={{
                alignItems:'center'
            }}>
                <Text style={{
                    fontSize:20
                }}>Mes abonnements coaching</Text>
            </View>

            <View style={{
                marginHorizontal:50,
                padding:20,
                borderWidth:1,
                marginVertical:10,
                borderRadius:10
            }}>
                <Text style={{
                    fontSize:18,
                    textAlign:'center'
                }}>Type d'abonnement : {this.state.type_abonnement}</Text>
            </View>

            </ScrollView>
        );
    }
}