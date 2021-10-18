import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Message extends Component{
    constructor(props){
        super(props);
        this.state = {
            avatar : this.props.route.params.avatar,
            tout_message : [],
            session:this.props.route.params.session,
            message_vide:this.props.route.params.message_vide,
            activity:false,
            menu:false,
            non_lu:false,
            index:"",
            message_non_lu:[],
            inputsearch:false,
            mes_trouve:[]
        };
    }

   

    componentDidMount(){
        this.get_tout_message(this.state.session[0]["userid"]);
        this.setState({index:"index"});
    }

    mesNonLu(userid){
        fetch('https://last-chance-dating.com/api/tout_message_mobile_non_lu', {
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
            console.log(json.liste_message.length);
            if(json.liste_message.length==0){
                this.setState({message_vide:"Aucun(e) message"});
                console.log(this.state.message_vide);
            }
            else{
                this.setState({message_non_lu:json.liste_message});
                this.setState({index:"non"});
            }
            
        }, 2000);
        //return console.log(json.liste_message);
        
        return this.state.tout_message;
        //console.log(this.state.tout_message);
      })
    .catch((error) => {
        console.error(error);
    });
    }

    componentMessageOnline(){
        if(this.state.message_vide!=""){
            return(
                <View style={{
                    alignItems:'center',
                    marginBottom:220
                }}>
                <Text style={{
                    fontSize:17
                }}>{this.state.message_vide}</Text>
                </View>
            );
        }
        else if(this.state.message_vide=="" || this.state.message_vide=="undefined"){
            return(
                <View style={{
                    height:Dimensions.get("window").height/2
                }}>
                    <FlatList
                        data={this.state.tout_message}
                        initialNumToRender={50}
                        keyExtractor={({ id }, chatid) => chatid.toString()}
                        renderItem={item => 
                        this.renderItemComponentOnline(item)
                    }/>
                </View>
            );
        }

    }

    renderItemComponent(item){

        const val=item.item.message_ok.split('<br />').join('\n');
        const { navigation } = this.props;
        if(item.item.typa!=8){
                if(item.item.online_ok==1){
                    if(item.item.typa==2){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                //console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                              
        
                                             //navigation.navigate("MesFunc");
        
                                            }} style={{
                                                height:100
                                            }}>
                                                <View style={{
                                                    position:'absolute'
                                                }}>
                                                    <Image source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar_ok}`+'/200/235/operateur' }} style={{
                                                        width:Dimensions.get("window").height/12,
                                                        height:Dimensions.get("window").height/12,
                                                        borderRadius:50,
                                                    }}></Image>
                                                </View>
                                            
        
                                                <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'#8AC16C',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                    else if(item.item.typa==1){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                        marginTop:20,
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                                
                                            }} style={{
                                              height:100
                                            }}>
                                             <View style={{
                                                    position:'absolute'
                                                }}>
                                                <Image source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar_ok}`}} style={{
                                                    width:Dimensions.get("window").height/12,
                                                    height:Dimensions.get("window").height/12,
                                                    borderRadius:50,
                                                }}></Image>
                                            </View>
        
                                            <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'#8AC16C',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                                fontSize:17,
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                    else if(item.item.typa==3){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                        marginTop:20,
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                //console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                                
                                                 }} style={{
                                              height:100
                                            }}>
                                              <View style={{
                                                    position:'absolute'
                                                }}>
                                                  <Image source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar_ok}`}} style={{
                                                    width:Dimensions.get("window").height/12,
                                                    height:Dimensions.get("window").height/12,
                                                    borderRadius:50,
                                                  }}></Image>
                                              </View>
                                            
                                              <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'#8AC16C',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                                fontSize:17,
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                }
                else if(item.item.online_ok==0){
                    if(item.item.typa==2){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                //console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                              
        
                                             //navigation.navigate("MesFunc");
        
                                            }} style={{
                                                height:100
                                            }}>
                                                <View style={{
                                                    position:'absolute'
                                                }}>
                                                    <Image source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar_ok}`+'/200/235/operateur' }} style={{
                                                        width:Dimensions.get("window").height/12,
                                                        height:Dimensions.get("window").height/12,
                                                        borderRadius:50,
                                                    }}></Image>
                                                </View>
                                            
        
                                                <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'red',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                    else if(item.item.typa==1){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                        marginTop:20,
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                                
                                            }} style={{
                                              height:100
                                            }}>
                                             <View style={{
                                                    position:'absolute'
                                                }}>
                                                <Image source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar_ok}`}} style={{
                                                    width:Dimensions.get("window").height/12,
                                                    height:Dimensions.get("window").height/12,
                                                    borderRadius:50,
                                                }}></Image>
                                            </View>
        
                                            <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'red',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                                fontSize:17,
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                    else if(item.item.typa==3){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                        marginTop:20,
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                //console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                                
                                                 }} style={{
                                              height:100
                                            }}>
                                              <View style={{
                                                    position:'absolute'
                                                }}>
                                                  <Image source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar_ok}`}} style={{
                                                    width:Dimensions.get("window").height/12,
                                                    height:Dimensions.get("window").height/12,
                                                    borderRadius:50,
                                                  }}></Image>
                                              </View>
                                            
                                              <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'red',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                                fontSize:17,
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                }
                
            
            }
        
        
      
    }

    componentMessageListe(){
        
            if(this.state.message_vide!=""){
                return(
                    <View style={{
                        alignItems:'center',
                        marginBottom:220
                    }}>
                    <Text style={{
                        fontSize:17
                    }}>{this.state.message_vide}</Text>
                    </View>
                );
            }
            else if(this.state.message_vide=="" || this.state.message_vide=="undefined"){
                return(
                    <View style={{
                        height:Dimensions.get("window").height/2
                    }}>
                        <FlatList
                            data={this.state.tout_message}
                            initialNumToRender={50}
                            keyExtractor={({ id }, chatid) => chatid.toString()}
                            renderItem={item => 
                            this.renderItemComponent(item)
                        }/>
                    </View>
                );
            }
        
        
    }

    LoadPage(status){
        if(status==true){
            return  <ActivityIndicator size="large" color="black" />
        }
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
                this.setState({message_vide:"Aucun(e) message"});
            }
            else{
                
                this.setState({tout_message:json.liste_message});
            }
            
        }, 2000);
        //return console.log(json.liste_message);
        
        return this.state.tout_message;
        //console.log(this.state.tout_message);
      })
    .catch((error) => {
        console.error(error);
    });
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

    choiseComponent(status){
        if(status=="index"){
            return this.componentMessageListe();
        }
        else if(status=="rec"){
            return this.componentMessageTrouve();

        }
        else if(status=="non"){
            return this.compnentNonLu();
        }
        else if(status=="online"){
            console.log("online", status);
            
            return this.componentMessageOnline();
        }
        
    }

    componentMessageTrouve(){
        if(this.state.message_vide!=""){
            return(
                <View style={{
                    alignItems:'center',
                    marginBottom:220
                }}>
                <Text style={{
                    fontSize:17
                }}>{this.state.message_vide}</Text>
                </View>
            );
        }
        else if(this.state.message_vide=="" || this.state.message_vide=="undefined"){
            return(
                <View style={{
                    height:Dimensions.get("window").height/2
                }}>
                    <FlatList
                        data={this.state.mes_trouve}
                        initialNumToRender={50}
                        keyExtractor={({ id }, chatid) => chatid.toString()}
                        renderItem={item => 
                        this.renderItemComponent(item)
                    }/>
                </View>
            );
        }
    }

    renderItemComponentOnline(item){
        if(item.item.online_ok==1){
            if(item.item.typa==2){
                return(
                    <View>
                        <ScrollView>
                        <View style={{
                                flexDirection:'row',
                            }}>
                                <View style={{
                                    alignItems:'center',
                                    marginHorizontal:10
                                }}>
                                    <TouchableOpacity onPress={()=>{
                                        //console.log(item.item.chatid);
                                        this.setState({activity:true});
                                        setTimeout(() => {
                                            this.setState({activity:false});
                                            navigation.navigate("MesContent", {
                                                avatar:this.state.avatar,
                                                useridok:item.item.userid_ok,
                                                chatidok:item.item.chatid_ok,
                                                session:this.state.session,
                                                chatid:item.item.chatid,
                                              });
                                        }, 3000);
                                      

                                     //navigation.navigate("MesFunc");

                                    }} style={{
                                        height:100
                                    }}>
                                        <View style={{
                                            position:'absolute'
                                        }}>
                                            <Image source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar_ok}`+'/200/235/operateur' }} style={{
                                                width:Dimensions.get("window").height/12,
                                                height:Dimensions.get("window").height/12,
                                                borderRadius:50,
                                            }}></Image>
                                        </View>
                                    

                                        <View style={{
                                                width:15,
                                                height:15,
                                                borderRadius:10,
                                                backgroundColor:'#8AC16C',
                                                marginTop:50,
                                                marginLeft:50
                                    }}></View>
                                    
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    marginTop:5,
                                    marginLeft:20,
                                    width:200
                                }}>
                                    <Text  style={{
                                        fontSize:20,
                                        fontWeight:'bold'
                                    }}>{item.item.nom_destinataire}</Text>
                                    <Text numberOfLines={1} style={{
                                    }}>{item.item.message_ok}</Text>
                                </View>
                                
                                
                            </View>
                        </ScrollView>
                    </View>
                );
            }
            else if(item.item.typa==1){
                return(
                    <View>
                        <ScrollView>
                        <View style={{
                                flexDirection:'row',
                                marginTop:20,
                            }}>
                                <View style={{
                                    alignItems:'center',
                                    marginHorizontal:10
                                }}>
                                    <TouchableOpacity onPress={()=>{
                                        console.log(item.item.chatid);
                                        this.setState({activity:true});
                                        setTimeout(() => {
                                            this.setState({activity:false});
                                            navigation.navigate("MesContent", {
                                                avatar:this.state.avatar,
                                                useridok:item.item.userid_ok,
                                                chatidok:item.item.chatid_ok,
                                                session:this.state.session,
                                                chatid:item.item.chatid,
                                              });
                                        }, 3000);
                                        
                                    }} style={{
                                      height:100
                                    }}>
                                     <View style={{
                                            position:'absolute'
                                        }}>
                                        <Image source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar_ok}`}} style={{
                                            width:Dimensions.get("window").height/12,
                                            height:Dimensions.get("window").height/12,
                                            borderRadius:50,
                                        }}></Image>
                                    </View>

                                    <View style={{
                                                width:15,
                                                height:15,
                                                borderRadius:10,
                                                backgroundColor:'#8AC16C',
                                                marginTop:50,
                                                marginLeft:50
                                    }}></View>
                                    
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    marginTop:5,
                                    marginLeft:20,
                                    width:200
                                }}>
                                    <Text  style={{
                                        fontSize:20,
                                        fontWeight:'bold'
                                    }}>{item.item.nom_destinataire}</Text>
                                    <Text numberOfLines={1} style={{
                                        fontSize:17,
                                    }}>{item.item.message_ok}</Text>
                                </View>
                                
                                
                            </View>
                        </ScrollView>
                    </View>
                );
            }
            else if(item.item.typa==3){
                return(
                    <View>
                        <ScrollView>
                        <View style={{
                                flexDirection:'row',
                                marginTop:20,
                            }}>
                                <View style={{
                                    alignItems:'center',
                                    marginHorizontal:10
                                }}>
                                    <TouchableOpacity onPress={()=>{
                                        //console.log(item.item.chatid);
                                        this.setState({activity:true});
                                        setTimeout(() => {
                                            this.setState({activity:false});
                                            navigation.navigate("MesContent", {
                                                avatar:this.state.avatar,
                                                useridok:item.item.userid_ok,
                                                chatidok:item.item.chatid_ok,
                                                session:this.state.session,
                                                chatid:item.item.chatid,
                                              });
                                        }, 3000);
                                        
                                         }} style={{
                                      height:100
                                    }}>
                                      <View style={{
                                            position:'absolute'
                                        }}>
                                          <Image source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar_ok}`}} style={{
                                            width:Dimensions.get("window").height/12,
                                            height:Dimensions.get("window").height/12,
                                            borderRadius:50,
                                          }}></Image>
                                      </View>
                                    
                                      <View style={{
                                                width:15,
                                                height:15,
                                                borderRadius:10,
                                                backgroundColor:'#8AC16C',
                                                marginTop:50,
                                                marginLeft:50
                                    }}></View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    marginTop:5,
                                    marginLeft:20,
                                    width:200
                                }}>
                                    <Text  style={{
                                        fontSize:20,
                                        fontWeight:'bold'
                                    }}>{item.item.nom_destinataire}</Text>
                                    <Text numberOfLines={1} style={{
                                        fontSize:17,
                                    }}>{item.item.message_ok}</Text>
                                </View>
                                
                                
                            </View>
                        </ScrollView>
                    </View>
                );
            }
        }
    }

    compnentNonLu(){
        if(this.state.message_vide!=""){
            return(
                <View style={{
                    alignItems:'center',
                    marginBottom:220
                }}>
                <Text style={{
                    fontSize:17
                }}>{this.state.message_vide}</Text>
                </View>
            );
        }
        else if(this.state.message_vide=="" || this.state.message_vide=="undefined"){
            return(
                <View style={{
                    height:Dimensions.get("window").height/2
                }}>
                    <FlatList
                        data={this.state.tout_message}
                        initialNumToRender={50}
                        keyExtractor={({ id }, chatid) => chatid.toString()}
                        renderItem={item => 
                        this.renderItemComponentNonLu(item)
                    }/>
                </View>
            );
        }
    }

    renderItemComponentNonLu(item){
        
        if(item.item.lu_ok==0){
            
        }
        if(item.item.lu_ok==1){
        const val=item.item.message_ok.split('<br />').join('\n');
        const { navigation } = this.props;
        if(item.item.typa!=8){
                if(item.item.online_ok==1){
                    if(item.item.typa==2){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                //console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                              
        
                                             //navigation.navigate("MesFunc");
        
                                            }} style={{
                                                height:100
                                            }}>
                                                <View style={{
                                                    position:'absolute'
                                                }}>
                                                    <Image source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar_ok}`+'/200/235/operateur' }} style={{
                                                        width:Dimensions.get("window").height/12,
                                                        height:Dimensions.get("window").height/12,
                                                        borderRadius:50,
                                                    }}></Image>
                                                </View>
                                            
        
                                                <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'#8AC16C',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                    else if(item.item.typa==1){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                        marginTop:20,
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                                
                                            }} style={{
                                              height:100
                                            }}>
                                             <View style={{
                                                    position:'absolute'
                                                }}>
                                                <Image source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar_ok}`}} style={{
                                                    width:Dimensions.get("window").height/12,
                                                    height:Dimensions.get("window").height/12,
                                                    borderRadius:50,
                                                }}></Image>
                                            </View>
        
                                            <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'#8AC16C',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                                fontSize:17,
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                    else if(item.item.typa==3){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                        marginTop:20,
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                //console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                                
                                                 }} style={{
                                              height:100
                                            }}>
                                              <View style={{
                                                    position:'absolute'
                                                }}>
                                                  <Image source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar_ok}`}} style={{
                                                    width:Dimensions.get("window").height/12,
                                                    height:Dimensions.get("window").height/12,
                                                    borderRadius:50,
                                                  }}></Image>
                                              </View>
                                            
                                              <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'#8AC16C',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                                fontSize:17,
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                }
                else if(item.item.online_ok==0){
                    if(item.item.typa==2){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                //console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                              
        
                                             //navigation.navigate("MesFunc");
        
                                            }} style={{
                                                height:100
                                            }}>
                                                <View style={{
                                                    position:'absolute'
                                                }}>
                                                    <Image source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar_ok}`+'/200/235/operateur' }} style={{
                                                        width:Dimensions.get("window").height/12,
                                                        height:Dimensions.get("window").height/12,
                                                        borderRadius:50,
                                                    }}></Image>
                                                </View>
                                            
        
                                                <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'red',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                    else if(item.item.typa==1){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                        marginTop:20,
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                                
                                            }} style={{
                                              height:100
                                            }}>
                                             <View style={{
                                                    position:'absolute'
                                                }}>
                                                <Image source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar_ok}`}} style={{
                                                    width:Dimensions.get("window").height/12,
                                                    height:Dimensions.get("window").height/12,
                                                    borderRadius:50,
                                                }}></Image>
                                            </View>
        
                                            <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'red',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                                fontSize:17,
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                    else if(item.item.typa==3){
                        return(
                            <View>
                                <ScrollView>
                                <View style={{
                                        flexDirection:'row',
                                        marginTop:20,
                                    }}>
                                        <View style={{
                                            alignItems:'center',
                                            marginHorizontal:10
                                        }}>
                                            <TouchableOpacity onPress={()=>{
                                                //console.log(item.item.chatid);
                                                this.setState({activity:true});
                                                setTimeout(() => {
                                                    this.setState({activity:false});
                                                    navigation.navigate("MesContent", {
                                                        avatar:this.state.avatar,
                                                        useridok:item.item.userid_ok,
                                                        chatidok:item.item.chatid_ok,
                                                        session:this.state.session,
                                                        chatid:item.item.chatid,
                                                      });
                                                }, 3000);
                                                
                                                 }} style={{
                                              height:100
                                            }}>
                                              <View style={{
                                                    position:'absolute'
                                                }}>
                                                  <Image source={{ uri: 'https://last-chance-dating.com/public/assets/photo_users/'+`${item.item.avatar_ok}`}} style={{
                                                    width:Dimensions.get("window").height/12,
                                                    height:Dimensions.get("window").height/12,
                                                    borderRadius:50,
                                                  }}></Image>
                                              </View>
                                            
                                              <View style={{
                                                        width:15,
                                                        height:15,
                                                        borderRadius:10,
                                                        backgroundColor:'red',
                                                        marginTop:50,
                                                        marginLeft:50
                                            }}></View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            marginTop:5,
                                            marginLeft:20,
                                            width:200
                                        }}>
                                            <Text  style={{
                                                fontSize:20,
                                                fontWeight:'bold'
                                            }}>{item.item.nom_destinataire}</Text>
                                            <Text numberOfLines={1} style={{
                                                fontSize:17,
                                            }}>{item.item.message_ok}</Text>
                                        </View>
                                        
                                        
                                    </View>
                                </ScrollView>
                            </View>
                        );
                    }
                }
                
            
            }
        }
    }

    compnentOnline(){

        if(this.state.message_vide!=""){
            return(
                <View style={{
                    alignItems:'center',
                    marginBottom:220
                }}>
                <Text style={{
                    fontSize:17
                }}>{this.state.message_vide}</Text>
                </View>
            );
        }
        else if(this.state.message_vide=="" || this.state.message_vide=="undefined"){
            return(
                <View style={{
                    height:Dimensions.get("window").height/2
                }}>
                    <FlatList
                        data={this.state.tout_message}
                        initialNumToRender={50}
                        keyExtractor={({ id }, chatid) => chatid.toString()}
                        renderItem={item => 
                        this.renderItemComponentNonLu(item)
                    }/>
                </View>
            );
        }
    }

    showInputRec(status){
        if(status==false){
        }
        else{
            return (
                <TextInput 
                onChangeText={text => {
                    this.searchMessage(text, this.state.session[0]["userid"]); 
                }}
                style={{
                    width : 2*Dimensions.get("window").width/3,
                    height : 40,
                    borderWidth: 1,
                    marginTop : 10,
                    color : 'black',
                    borderRadius: 10,
                    borderColor : 'black',
                    fontSize : 20,
                    paddingHorizontal : 10
                }}></TextInput>
            );
        }
        
    }

    searchMessage(text, userid){
       
            fetch('https://last-chance-dating.com/api/tout_message_search_mobile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            session_id:userid,
            mess_sea:text
        })
        })
    .then(res=>res.json())
    .then((json) => {
        if(json==0){
            console.log("tsa nahita");
            this.setState({message_vide:"Aucun(e) message"});

        }
        else{
            this.setState({mes_trouve:json.liste_message});
            this.setState({message_vide:""});
            this.setState({index:'rec'});
            console.log(this.state.mes_trouve);
        }
      })
    .catch((error) => {
        console.error(error);
    });
        
        
    }

    render(){
        //console.log(this.state.session[0]["userid"]);
        const { navigation } = this.props;
        return(
            <View>

                <View>
                                    
                <View style={{
                        flexDirection:'row', 
                        backgroundColor:'#f8f9fa',
                        opacity: 0.7,
                        height:Dimensions.get("window").height/6,
                        alignItems:'center',
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
                            //this.get_tout_message(this.state.session[0]["userid"]);
                        this.setState({index:"index"});
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
                        }, 2000);
                            
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
                    backgroundColor:'white',
                    marginTop:20,
                    marginHorizontal:12,
                    height:500
                }}>
                    <View style={{
                        alignItems:'center',
                        flexDirection:'row'
                    }}>
                        <View style={{
                            alignItems:'center',
                            marginHorizontal:20
                        }}>
                            {this.showInputRec(this.state.inputsearch)}
                        </View>
                        
                        <View style={{
                            alignItems:'center',
                        }}>
                        <TouchableOpacity style={{
                            backgroundColor:'#e8e8e8',
                            marginTop : 10,
                            alignItems:'center',
                            borderRadius:50,
                            width:50,
                            height:50,
                        }} onPress={()=>{
                            if(this.state.inputsearch==false){
                                this.setState({inputsearch:true});
                            }
                            else{
                                this.setState({inputsearch:false});
                            }
                        }}>
                        <Image source={{
                            uri:'https://dating-4-free.com/public/assets/img/recherche.png'
                        }} style={{
                            width:30,
                            height:30,
                            marginTop:10,
                        }}></Image>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                        {this.choiseComponent(this.state.index)}

                    </View> 
               
                    <View style={{
                        alignItems:'center'
                    }}>
                    <View style={{
                        position:'absolute',
                        bottom:0,
                        borderTopWidth:2,
                        borderTopColor:'gray',
                        flexDirection:'row',
                        width:Dimensions.get("window").width-30
                    }}>
                        <View style={{
                            
                            alignItems:'center',
                            borderRightWidth:2,
                            borderRightColor:'gray'
                        }}>
                            <TouchableOpacity onPress={()=>{
                                    //this.setState({index:"non"});
                                    this.mesNonLu(this.state.session[0]["userid"]);
                                }}>
                            <Image source={{
                                uri:'https://en-toute-discretion.com/public/assets/img/Chat_left.png'
                            }} style={{
                                width:55,
                                height:50,
                                marginHorizontal:70,
                            }}></Image>
                            </TouchableOpacity>
                            
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>{
                                    this.setState({message_vide:""});
                                    this.setState({index:"online"});
                                }}>
                            <Image source={{
                                uri:'https://en-toute-discretion.com/public/assets/img/enligne_sidebar.png'
                            }} style={{
                                width:70,
                                height:50,
                                marginHorizontal:70,
                            }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                    </View>
                 
            </View>
        );
    }
}