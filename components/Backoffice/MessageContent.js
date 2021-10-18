import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'
import { View, ActivityIndicator, Text, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, Dimensions, SafeAreaView, TextInput, Modal, KeyboardAvoidingViewComponent } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import MessageFunction from './MessageFunction';


import Echo from 'laravel-echo';

import Socketio from 'socket.io-client';

const echo = new Echo({
    broadcaster:'socket.io',
    host:"https://last-chance-dating.com:8080",
    client:Socketio
});

export default class MessageContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            avatar : this.props.route.params.avatar,
            userid_ok : this.props.route.params.useridok,
            chatid_ok : this.props.route.params.chatidok,
            chatid:this.props.route.params.chatid,
            avatar:"",
            nom_user:"",
            pays_inscription:"",
            age:"",
            ville:"",
            session:this.props.route.params.session,
            tout_message:[],
            textmsg:"",
            liste_discussion:[],
            message_vide:"",
            modalVisible: false,
            modalVisibleCoaching:false,
            modalVisible3:false,
            modalVisible4:false,
            modalVisiblebizou:false,
            activity:false,
            menu:false
        };
      // this.listmessage();
    }

    
    
    componentDidMount(){

    echo.channel('my-channel')
        .listen('.sendMessageEvent', (data) => {
            this.getListMessage();
    });
        
    fetch('https://last-chance-dating.com/api/getUserDetails_mobile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            userId:this.state.userid_ok
        })
    })
    .then(res=>res.json())
    .then((json) => {
        this.setState({avatar:json.info_user[0]["avatar"]});
        this.setState({nom_user:json.info_user[0]["nom_user"]});
        this.setState({pays_inscription:json.info_user[0]["pays_inscription"]});
        this.setState({ville:json.info_user[0]["ville"]});
        this.setState({age:json.info_user[0]["age"]});
      })
    .catch((error) => {
        console.error(error);
    });

        this.getListMessage();
    
    }

    getListMessage(){
        const url = 'https://last-chance-dating.com/api/getUserChat_mobile/'+this.state.session[0]["userid"]+'/'+this.state.userid_ok;
        console.log("update");
        fetch(url, {
            method: 'GET',
            headers: {
            Accept: 'application/json',
                'Content-Type': 'application/json'
        },
       
    })
    .then(res=>res.json())
    .then((json) => {
        setTimeout(()=>{
            this.setState({liste_discussion:json.liste_discussion});
            //console.log(this.state.liste_discussion);
        }, 1000);
      })
    .catch((error) => {
        console.error(error);
    });
    }

    get_tout_message(userid){
        fetch('https://last-chance-dating.com/api/tout_message_mobile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            userid:userid
        })
    })
    .then(res=>res.json())
    .then((json) => {
        setTimeout(()=>{
            
            if(json==0){
                console.log("Tsisy :", json);
                this.setState({message_vide:"Aucun(e) message"});
            }
            else{
                console.log("reto: ", json); 
                this.setState({tout_message:json.liste_message});
            }
            
        }, 3000);
        //return console.log(json.liste_message);
        //console.log(this.state.tout_message);
      })
    .catch((error) => {
        console.error(error);
    });
    }


    renderItemComponentMessage(item){
        //console.log(item.item.badge);
        const val=item.item.message.split('<br />').join('\n');
        console.log(val);
        if(item.item.message=='@bisous'){
            if(item.item.badge=='gauche'){
                return(
                    <View>
                    <Text style={{
                        marginLeft:30
                    }}>{item.item.date}</Text>
                    <View style={{
                        flexDirection:'row',  
                        marginVertical:10
                    }}>
                            <View style={{
                                alignItems:'center',
                                marginHorizontal:10,
                            }}>
                                
                                <Image source={{
                                    uri:'https://last-chance-dating.com/image/'+`${this.state.avatar}`+'/200/235/operateur' 
                                    }} style={{
                                    width:60,
                                    height:60,
                                    borderRadius:30,
                                    marginTop:15
                                }}></Image>
                                
                            </View>
                            
                            <View style={{
                                borderRadius:20,
                                maxWidth:200,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    backgroundColor:'#c3c3c3',
                                    borderRadius:10,
                                    fontWeight:'600',
                                    padding:10,
                                    fontSize:17
                                }}>Bizou</Text>
                            
                            </View>
                    </View>
                    </View>
                );
            }
            else if(item.item.badge=="droite"){
                return(
                    <View style={{
                        marginLeft:180
                    }}>
                    <Text style={{
                        marginLeft:30
                    }}>{item.item.date}</Text>
                    <View style={{
                        flexDirection:'row-reverse',  
                        marginVertical:10,
                        marginLeft:20
                    }}>
                            
                            <View style={{
                                alignItems:'center',
                                marginHorizontal:10,
                            }}>
                                
                                <Image source={{
                                    uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${this.state.session[0]["avatar"]}`
                                    }} style={{
                                    width:60,
                                    height:60,
                                    borderRadius:30,
                                    marginTop:15
                                }}></Image>
                                
                            </View>     
                            <View style={{
                                
                                borderRadius:20,
                                maxWidth:200,
                                justifyContent:'center'
                            }}>

                            <Image source = {{ uri: "https://last-chance-dating.com/public/assets/img/kiss.png"}} style={{
                                width:50,
                                height:50,
                            }}/>
                            </View>
    
                            
                    </View>
                    </View>
                );
            }
        }
        else{
            if(item.item.badge=='gauche'){
                return(
                    <View>
                    <Text style={{
                        marginLeft:30
                    }}>{item.item.date}</Text>
                    <View style={{
                        flexDirection:'row',  
                        marginVertical:10
                    }}>
                            <View style={{
                                alignItems:'center',
                                marginHorizontal:10,
                            }}>
                                
                                <Image source={{
                                    uri:'https://last-chance-dating.com/image/'+`${this.state.avatar}`+'/200/235/operateur' 
                                    }} style={{
                                    width:60,
                                    height:60,
                                    borderRadius:30,
                                    marginTop:15
                                }}></Image>
                                
                            </View>
                            
                            <View style={{
                                borderRadius:20,
                                maxWidth:200,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    backgroundColor:'#c3c3c3',
                                    borderRadius:10,
                                    fontWeight:'600',
                                    padding:10,
                                    fontSize:17
                                }}>{val}</Text>
                            
                            </View>
                    </View>
                    </View>
                );
            }
            else if(item.item.badge=="droite"){
                return(
                    <View style={{
                        marginLeft:180
                    }}>
                    <Text style={{
                        marginLeft:30
                    }}>{item.item.date}</Text>
                    <View style={{
                        flexDirection:'row-reverse',  
                        marginVertical:10,
                        marginLeft:20
                    }}>
                            
                            <View style={{
                                alignItems:'center',
                                marginHorizontal:10,
                            }}>
                                
                                <Image source={{
                                    uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${this.state.session[0]["avatar"]}`
                                    }} style={{
                                    width:60,
                                    height:60,
                                    borderRadius:30,
                                    marginTop:15
                                }}></Image>
                                
                            </View>     
                            <View style={{
                                
                                borderRadius:20,
                                maxWidth:200,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    backgroundColor:'#0c89ce',
                                    fontWeight:'600',
                                    padding:10,
                                    fontSize:17,
                                    borderRadius:10
                                }}>{val}</Text>
                            
                            </View>
    
                            
                    </View>
                    </View>
                );
            }
        }
        
    }

    envoiemessage(chatid, userid_ok, session_id, val){

        var action = "insert_chat";

        fetch('https://last-chance-dating.com/api/send_message_mobile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chatid:chatid,
                to_user_id:userid_ok,
                session_userid:session_id,
                chat_message:val,
                action:action
            })
        })
        .then(res=>res.json())
        .then((json) => {
            setTimeout(()=>{
                //this.setState({tout_message:json.liste_message});
                if(json.data==0 && json.offre=='offre_prenium'){
                    this.setState({modalVisible:true});
                }
                else if(json.data==0 && json.offre=='achat_credit_coach'){
                    this.setState({modalVisibleCoaching:true});
                }
                else if(json.data==1){
                    this.setState({modalVisible3:true});
                }
                else if(json.data==3){
                    this.setState({modalVisible4:true});
                }
                else if(json.data=='success_send'){
                    this.getListMessage();
                }
                    //console.log(json);
                    
            }, 1000);
        })
        .catch((error) => {
            console.error(error);
        });
        
    }

    envoyeBizou(){

        fetch('https://last-chance-dating.com/api/inserbisou_mobile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to_user_id:this.state.userid_ok,
                session_userid:this.state.session[0]["userid"],
                chat_message:'@bisous',
                action:'insert_bisou'
            })
        })
        .then(res=>res.json())
        .then((json) => {
            setTimeout(()=>{
                //this.setState({tout_message:json.liste_message});
               /* if(json.data==0 && json.offre=='offre_prenium'){
                    this.setState({modalVisible:true});
                }
                else if(json.data==0 && json.offre=='achat_credit_coach'){
                    this.setState({modalVisibleCoaching:true});
                }
                else if(json.data==1){
                    this.setState({modalVisible3:true});
                }
                else if(json.data==3){
                    this.setState({modalVisible4:true});
                }
                else if(json.data=='success_send'){
                    this.getListMessage();
                }*/
                console.log(json);
                    
            }, 1000);
        })
        .catch((error) => {
            console.error(error);
        });
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

    showIndice(){
        return(
            <View style={{
                position:'absolute',
                marginLeft:40,
                
            }}>
                <Text style={{
                    fontSize:18,
                    color:'red',
                    fontWeight:'bold'
                }}>
                1
                </Text>
            </View>
        );
    }

    componentRef = {};

    render(){
        const { navigation } = this.props;
        console.log("Update ndray");
        return (
                
            <View style={{
            }}>
                {/* Modal offre coaching*/}
                <Modal
                    animationType="slide"
                    visible={this.state.modalVisible}>
                        <View style={{
                            backgroundColor:"white",
                            width:Dimensions.get("window").width,
                            height:Dimensions.get("window").height,
                            alignItems:'center'
                        }}>
                            <Text style={{
                                fontSize:17,
                                marginHorizontal:50,
                                color:'black',
                                marginTop:Dimensions.get("window").height-500,
                            }}>
                                Vous ne voulez pas rater la chance de votre vie dans votre quête de l'amour.
                                Pensez à souscrire à un abonnement pour parler en illimité, aussi longtemps 
                                que vous le voudriez avec votre futur(e) partenaire.
                            </Text>
                            <View style={{
                                flexDirection:'row'
                            }}>
                                <TouchableOpacity style={{
                                    alignItems:'center',
                                    marginHorizontal:20
                                }} onPress={()=>this.setState({modalVisible:false})}>
                                    <Text style={{
                                        color:'white',
                                        marginVertical:50,
                                        padding:10,
                                        backgroundColor:'blue',
                                        borderRadius:10
                                    }}>Souscrire un abonnement</Text>
                                </TouchableOpacity>
                            
                                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.setState({modalVisible:false})}>
                                    <Text style={{
                                        color:'white',
                                        marginVertical:50,
                                        padding:10,
                                        backgroundColor:'red',
                                        borderRadius:10
                                    }}>Quitter</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                </Modal>
                {/* Modal offre dating*/}

                <Modal
                    animationType="slide"
                    visible={this.state.modalVisibleCoaching}>
                        <View style={{
                            backgroundColor:"white",
                            width:Dimensions.get("window").width,
                            height:Dimensions.get("window").height,
                            alignItems:'center'
                        }}>
                            <Text style={{
                                fontSize:17,
                                marginHorizontal:50,
                                color:'black',
                                marginTop:Dimensions.get("window").height-500,
                            }}>
                                Vous ne voulez pas rater la chance de votre vie dans votre quête de l'amour.
                                Pensez à souscrire à un abonnement pour parler en illimité, aussi longtemps 
                                que vous le voudriez avec votre futur(e) partenaire.
                            </Text>
                            <View style={{
                                flexDirection:'row'
                            }}>
                                <TouchableOpacity style={{
                                    alignItems:'center',
                                    marginHorizontal:20
                                }} onPress={()=>this.setState({modalVisibleCoaching:false})}>
                                    <Text style={{
                                        color:'white',
                                        marginVertical:50,
                                        padding:10,
                                        backgroundColor:'blue',
                                        borderRadius:10
                                    }}>Souscrire un abonnement</Text>
                                </TouchableOpacity>
                            
                                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.setState({modalVisibleCoaching:false})}>
                                    <Text style={{
                                        color:'white',
                                        marginVertical:50,
                                        padding:10,
                                        backgroundColor:'red',
                                        borderRadius:10
                                    }}>Quitter</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                </Modal>
 

                {/* Modal offre dating*/}

                <Modal
                    animationType="slide"
                    visible={this.state.modalVisible3}>
                        <View style={{
                            backgroundColor:"white",
                            width:Dimensions.get("window").width,
                            height:Dimensions.get("window").height,
                            alignItems:'center'
                        }}>
                            <Text style={{
                                fontSize:17,
                                marginHorizontal:50,
                                color:'black',
                                marginTop:Dimensions.get("window").height-500,
                            }}>
                                Oups ! Si vous voulez continuer à discuter avec {this.state.nom_user} pensez à acheter plus de crédits.Ne laissez pas filer la chance de votre vie ! 
                            </Text>
                            <View style={{
                                flexDirection:'row'
                            }}>
                                <TouchableOpacity style={{
                                    alignItems:'center',
                                    marginHorizontal:20
                                }} onPress={()=>this.setState({modalVisible3:false})}>
                                    <Text style={{
                                        color:'white',
                                        marginVertical:50,
                                        padding:10,
                                        backgroundColor:'blue',
                                        borderRadius:10
                                    }}>Souscrire un abonnement</Text>
                                </TouchableOpacity>
                            
                                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.setState({modalVisible3:false})}>
                                    <Text style={{
                                        color:'white',
                                        marginVertical:50,
                                        padding:10,
                                        backgroundColor:'red',
                                        borderRadius:10
                                    }}>Quitter</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                </Modal>

                {/* Modal offre bizou*/}

                <Modal
                    animationType="slide"
                    visible={this.state.modalVisible4}>
                        <View style={{
                            backgroundColor:"white",
                            width:Dimensions.get("window").width,
                            height:Dimensions.get("window").height,
                            alignItems:'center'
                        }}>
                            <Text style={{
                                fontSize:17,
                                marginHorizontal:50,
                                color:'black',
                                marginTop:Dimensions.get("window").height-500,
                            }}>
                                Cette conversation étant déjà terminée, veuillez reprendre rendez-vous avec votre coach.
                                A très bientôt  
                            </Text>
                            <View style={{
                                flexDirection:'row'
                            }}>
                                <TouchableOpacity style={{
                                    alignItems:'center',
                                    marginHorizontal:20
                                }} onPress={()=>this.setState({modalVisible4:false})}>
                                    <Text style={{
                                        color:'white',
                                        marginVertical:50,
                                        padding:10,
                                        backgroundColor:'blue',
                                        borderRadius:10
                                    }}>Souscrire un abonnement</Text>
                                </TouchableOpacity>
                            
                                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.setState({modalVisible4:false})}>
                                    <Text style={{
                                        color:'white',
                                        marginVertical:50,
                                        padding:10,
                                        backgroundColor:'red',
                                        borderRadius:10
                                    }}>Quitter</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                </Modal>
                                    
                <Modal
                style={{

                    width:Dimensions.get("window").width,
                    height:Dimensions.get("window").height,
                    alignItems:'center'
                }}
                    animationType="slide"
                    visible={this.state.modalVisiblebizou}>
                        <View style={{
                            backgroundColor:"white",
                            alignItems:'center',
                            
                        }}>
                           
                            <Text style={{
                                textAlign:'center',
                                fontSize:19,
                                marginHorizontal:30,
                                color:'black',
                                marginTop:Dimensions.get("window").height-500,
                            }}>
                                Envoyez à {this.state.nom_user} un bisou et montrez que vous l'aime.  
                            </Text>
                            <View style={{
                                flexDirection:'row',
                                marginTop:20
                            }}>
                                <TouchableOpacity style={{
                                    alignItems:'center',
                                    marginRight:20
                                }} onPress={()=>{
                                    console.log("action : insert_bisou");
                                    console.log("touserid :" ,this.state.userid_ok);
                                    console.log("session_id :",this.state.session[0]["userid"]);
                                    console.log("chat_message:@bisous");
                                    this.envoyeBizou();
                                }
                                        //this.setState({modalVisiblebizou:false})}
                                }>
                                    <Text style={{
                                        color:'white',
                                        padding:10,
                                        backgroundColor:'blue',
                                        borderRadius:10,
                                        fontSize:17
                                    }}>Envoyer</Text>
                                </TouchableOpacity>
                            
                                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.setState({modalVisiblebizou:false})}>
                                    <Text style={{
                                        color:'white',
                                        padding:10,
                                        backgroundColor:'red',
                                        borderRadius:10,
                                        fontSize:17
                                    }}>Quitter</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                </Modal>
            
            {/* **************** header flat lis */}
            {/* Tchat index */} 
                    {/* Tchat menu admin menu*/} 
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
                            }}>
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
                            setTimeout(()=>{
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
                        setTimeout(()=>{
                            this.setState({activity:false});
                            navigation.navigate("User", {
                                avatar:this.state.avatar,
                                session:this.state.session
                            });
                            
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
                            if(this.state.menu==false){
                                this.setState({menu:true});
                            }
                            else{
                                this.setState({menu:false});
                            }
                        //navigation.navigate("Home");
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

                    {/* Tchat index*/}
                        
                <View style={{
                    backgroundColor:'white',
                    marginTop:10,
                    marginHorizontal:12,
                    height:Dimensions.get("window").height-(Dimensions.get("window").height/5)
                }}>
                    {/* Tchat detail olona idirana */} 
                    <View style={{
                        flexDirection:'row'
                    }}>
                        <View style={{
                            alignItems:"center"
                        }}>
                            <Image source={{
                                uri:'https://last-chance-dating.com/image/'+`${this.state.avatar}`+'/200/235/operateur' 
                            }} style={{
                                width:Dimensions.get("window").height/12,
                                height:Dimensions.get("window").height/12,
                                borderRadius:50,
                                marginLeft:20,
                                marginTop:20
                            }}></Image>

                        </View>
                           <View style={{
                                marginHorizontal:20,
                                marginTop:10
                            }}>
                                <Text style={{
                                    fontWeight:'bold',
                                    fontSize:20
                                }}>{this.state.nom_user}</Text>
                                <Text style={{
                                    fontSize:17,
                                    fontWeight:'700'
                                }}>{this.state.pays_inscription}, {this.state.ville}, {this.state.age} ans</Text>
                                <Text style={{
                                    fontSize:17,
                                }}>offline</Text>
                        </View>
                       
                       
                    </View>

                   {/* Tchat resaka */} 
               
                    <FlatList
                        ref={(ref)=>this.componentRef.FlatList = ref}
                        style={{
                            borderWidth:1,
                            borderRadius:10,
                            marginHorizontal:10,
                            marginTop:10
                        }}
                        data={this.state.liste_discussion}
                        keyExtractor={({ id }, id_temp) => id_temp.toString()}
                        renderItem={item => 
                        this.renderItemComponentMessage(item)}
                    />
                 
                    
                        {/* Tchat bouton samyhafa */} 
                    <View style={{
                        flexDirection:'row',
                    }}>
                        <TouchableOpacity onPress={()=>{
                            console.log('@bizou');
                            this.setState({modalVisiblebizou:true});
                        }}>
                            <Image source = {{ uri: "https://last-chance-dating.com/public/assets/img/kiss.png"}} style={{
                                width:50,
                                height:50,
                                marginLeft:20,
                                marginTop:10
                            }}>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            console.log("Signaler");
                        }}>
                        <Image source = {{ uri: "https://en-toute-discretion.com/public/assets/new_integration/Signaler.png"}} style={{
                                width:100,
                                height:30,
                                marginLeft:20,
                                marginTop:20
                            }}>
                        </Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            console.log("Photo");
                        }}>
                        <Image source = {{ uri: "https://last-chance-dating.com/public/assets/img/camera_tchat.png"}} style={{
                                width:40,
                                height:30,
                                marginLeft:20,
                                marginTop:20
                            }}>
                        </Image>
                        </TouchableOpacity>
                    </View>
                 
                 
                        {/* Tchat text input sy bouton envoyée*/} 
                
                    <View style={{
                        borderTopColor:'gray',
                        flexDirection:'row',
                        marginTop : 10,
                    }}>
                        <TouchableOpacity >
                        
                            <TextInput  
                                onPress={()=>{
                                    console.log("Touche input");
                                }}
                                showSoftInputOnFocus={true}
                                multiline={true}
                                placeholder="Ecrire un message..."
                                onChangeText={textmsg=>this.setState({textmsg:textmsg})}
                                style={{
                                width:Dimensions.get("window").width-170,
                                marginHorizontal:27,
                                borderWidth: 1,
                        
                                borderRadius: 20,
                                fontSize : 17,
                                paddingHorizontal : 10,
                                height:80,
                            }}></TextInput>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            const val=this.state.textmsg.split('\n').join('<br />');
                            /*console.log("Chatid :",this.state.chatid);
                            console.log("touserid :" ,this.state.userid_ok);
                            console.log("session_id :",this.state.session[0]["userid"]);
                            console.log("action : insert_chat");
                            console.log("message : ", val);*/
                            this.envoiemessage(this.state.chatid, this.state.userid_ok, this.state.session[0]["userid"], val);
                        }} style={{
                            backgroundColor:'#0c89ce',
                            height:40,
                            padding:10,
                            alignItems:'center',
                            marginTop:15,
                            borderRadius:10,
                            
                        }}>
                            <Text style={{color:'white'}}>Envoyer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
            </ScrollView>
            </View>    
                    
        );
    }
}