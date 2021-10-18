import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import ListUser from './ListUser';

export default class User extends Component{

    constructor(props){
        super(props);
        this.state = {
            avatar : this.props.route.params.avatar,
            tout_message : [],
            session:this.props.route.params.session,
            message_vide:"",
            activity:false,
            menu:false,
            show1:0,
            show2:0,
            liste_user:[],
            abonnement:[],
            abonnement_coach:[],
            abonnement_count:0,
            abonnement_deja_payer:[],
            avatar_olona1:[],
            information_profil_olona:[],
            type:"",
            type_abonnement:""
        };
    }

    componentDidMount(){
        this.fetchUser();
    }

    renderItemComponentVip(item){
        return (
            <View>
            <Image source={{
                uri: 'https://last-chance-dating.com/public/assets/operateur/'+`${item.item.avatar}`
            }} style={{
                width:130,
                height:230,
                borderRadius:25,
                marginHorizontal:5
            }}></Image>
            <View style={{
                position:'absolute',
                marginTop:100,
                
            }}>
            <Text style={{
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
                    <Image source={require('../../img/Coeur_new.png')} style={{
                        marginLeft:10,
                        width:25,
                        height:20
                    }}></Image>
                    <Image source={require('../../img/message_vip.png')} style={{
                        marginLeft:5,
                        width:25,
                        height:20
                    }}></Image>
                    <Image source={require('../../img/fleur_new.png')} style={{
                        marginLeft:5,
                        width:25,
                        height:40
                    }}></Image>
                    <Image source={require('../../img/Kiss.png')} style={{
                        marginLeft:5,
                        width:25,
                        height:20
                    }}></Image>
                </View>
            </View>
        </View>
        );
    }

    renderItemComponentListUser(item){
        if(item.item.type_profil==2){
            if(item.item.suis_je==0){
                return (
                    <View>
                    <Image
                        style={{
                            borderRadius:5,
                            width:170,
                            height:230,
                            marginHorizontal:5
                        }} 
                        source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar}`+'/200/235/operateur' }}    
                    />

                    <View style={{
                        position:'absolute',
                        
                    }}>
                        <View style={{
                            flexDirection:'row'
                        }}>
                            
                            <Image source={{
                                uri:"https://en-toute-discretion.com/public/assets/new_integration/triangle_homme.png"
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
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>


                    </View>

                );
            }
            else if(item.item.suis_je==1){
                return (
                    <View>
                    <Image
                        style={{
                            borderRadius:5,
                            width:170,
                            height:230,
                            marginHorizontal:5
                        }} 
                        source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar}`+'/200/235/operateur' }}    
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
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>


                    </View>

                );
            }
            else if(item.item.suis_je==5){
                return (
                    <View>
                    <Image
                        style={{
                            borderRadius:5,
                            width:170,
                            height:230,
                            marginHorizontal:5
                        }} 
                        source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar}`+'/200/235/operateur' }}    
                    />

                    <View style={{
                        position:'absolute',
                        
                    }}>
                        <View style={{
                            flexDirection:'row'
                        }}>
                            
                            <Image source={{
                                uri:"https://en-toute-discretion.com/public/assets/new_integration/heterro.png"
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
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>


                    </View>

                );
            }
            else{
                return (
                    <View>
                    <Image
                        style={{
                            borderRadius:5,
                            width:170,
                            height:230,
                            marginHorizontal:5
                        }} 
                        source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar}`+'/200/235/operateur' }}    
                    />

                    <View style={{
                        position:'absolute',
                        
                    }}>
                        <View style={{
                            flexDirection:'row'
                        }}>
                            
                            <Image source={{
                                uri:"https://en-toute-discretion.com/public/assets/new_integration/ARC.png"
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
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>


                    </View>

                );
            }
            
        }
        else{

            if(item.item.suis_je==0){
                return(
                    <View>
                    <Image
                        style={{
                            borderRadius:5,
                            width:170,
                            height:230,
                            marginHorizontal:5
                        }} 
                        source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar}`+'/200/235/photo_users' }}    
                    />
    
                    <View style={{
                        position:'absolute',
                        
                    }}>
                        <View style={{
                            flexDirection:'row'
                        }}>
                            
                            <Image source={{
                                uri:"https://en-toute-discretion.com/public/assets/new_integration/triangle_homme.png"
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
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>
    
                    </View>
                );                

            }
            else if(item.item.suis_je==1){
                return(
                    <View>
                    <Image
                        style={{
                            borderRadius:5,
                            width:170,
                            height:230,
                            marginHorizontal:5
                        }} 
                        source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar}`+'/200/235/photo_users' }}    
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
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>
    
                    </View>
                );
            }
            else if(item.item.suis_je==5){
                return(
                    <View>
                    <Image
                        style={{
                            borderRadius:5,
                            width:170,
                            height:230,
                            marginHorizontal:5
                        }} 
                        source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar}`+'/200/235/photo_users' }}    
                    />
    
                    <View style={{
                        position:'absolute',
                        
                    }}>
                        <View style={{
                            flexDirection:'row'
                        }}>
                            
                            <Image source={{
                                uri:"https://en-toute-discretion.com/public/assets/new_integration/heterro.png"
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
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>
    
                    </View>
                );
            }
            else{
                return(
                    <View>
                    <Image
                        style={{
                            borderRadius:5,
                            width:170,
                            height:230,
                            marginHorizontal:5
                        }} 
                        source={{ uri: 'https://last-chance-dating.com/image/'+`${item.item.avatar}`+'/200/235/photo_users' }}    
                    />
    
                    <View style={{
                        position:'absolute',
                        
                    }}>
                        <View style={{
                            flexDirection:'row'
                        }}>
                            
                            <Image source={{
                                uri:"https://en-toute-discretion.com/public/assets/new_integration/ARC.png"
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
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>
    
                    </View>
                );
            }
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
                //console.log(json.liste_message);
            }
            
        }, 3000);
        //return console.log(json.liste_message);
        //console.log(this.state.tout_message);
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

    fetchUser = async() => {
        let response = await fetch('https://last-chance-dating.com/api/affiche_membre_ville_slide_mobile');
        let respJson = await response.json();
        this.setState({liste_user:respJson.liste_user_ville});
    }

    voirProfil(session_id, id){
        
        const url = 'https://last-chance-dating.com/api/userprofil_mobile/'+id+'/'+session_id;
        
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        
    .then(res=>res.json())
    .then((json) => {
        console.log(json.abonnement_count);
        if(json.abonnement_deja_payer[0]["abonnement_simple_coach"]==1){
            if(json.abonnement_deja_payer[0]["type_abonnement"]==5){
                this.setState({type:"VIP"});
                console.log("Abonnement dating : ", this.state.type);
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==4){
                this.setState({type:"EMOTION"});
                console.log("Abonnement dating : ", this.state.type);
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==3){
                this.setState({type:"SENSUALITY"});
                console.log("Abonnement dating : ", this.state.type);
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==2){
                this.setState({type:"Bronze"});
                console.log("Abonnement dating : ", this.state.type);
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==1){
                this.setState({type:"DISCOVERY"});
                console.log("Abonnement dating : ", this.state.type);
            }
        }
        /*if(json.abonnement_deja_payer[0]["abonnement_simple_coach"]==2){
            if(json.abonnement_deja_payer[0]["type_abonnement"]==6){
                this.setState({type_abonnement:"VIP"});
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==7){
                this.setState({type_abonnement:"Confidence"});
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==8){
                this.setState({type_abonnement:"Liberty"});
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==9){
                this.setState({type_abonnement:"Bronze"});
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==10){
                this.setState({type_abonnement:"Action"});
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==5){
                this.setState({type:"VIP"});
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==4){
                this.setState({type:"EMOTION"});
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==3){
                this.setState({type:"SENSUALITY"});
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==2){
                this.setState({type:"Bronze"});
            }
            else if(json.abonnement_deja_payer[0]["type_abonnement"]==1){
                this.setState({type:"DISCOVERY"});
            }
        }
        else if(json.abonnement_deja_payer[0]["abonnement_simple_coach"]==1){
            this.setState({type_abonnement:"Tentation"});
            console.log(this.state.type_abonnement);
        }
        
        console.log(this.state.type_abonnement);
        this.setState({abonnement:json.abonnement});
        this.setState({abonnement_coach:json.abonnement_coach});
        this.setState({abonnement_count:json.abonnement_count});
        this.setState({abonnement_deja_payer:json.abonnement_deja_payer});
        this.setState({avatar_olona1:json.avatar_olona1});
        this.setState({information_profil_olona:json.information_profil_olona}); */
      })
    .catch((error) => {
        console.error(error);
    });
    }

    renderItemComponent(item){
        const { navigation } = this.props;
        return(
            <View>
                <TouchableOpacity onPress={()=>{
                    this.setState({activity:true});
                    this.voirProfil(item.item.id_inscription, this.state.session[0]["userid"]);
                    setTimeout(() => {
                        this.setState({activity:false});
                        /*navigation.navigate("UserProfil", {
                            abonnement:this.state.abonnement,
                            abonnement_coach:this.state.abonnement_coach,
                            abonnement_count:this.state.abonnement_count,
                            abonnement_deja_payer:this.state.abonnement_deja_payer,
                            avatar_olona1:this.state.avatar_olona1,
                            information_profil_olona:this.state.information_profil_olona,
                            session:this.state.session,
                            avatar:this.state.avatar,
                            type:this.state.type,
                            type_abonnement:this.state.type_abonnement
                        })*/
                        
                    }, 3000);
                }}>
                    <Image
                        style={{
                            borderRadius:5,
                            width:170,
                            height:230,
                            marginHorizontal:5
                        }} 
                        source={{ uri: 'https://last-chance-dating.com/public/assets/operateur_image/'+`${item.item.avatar}` }} />
                </TouchableOpacity>
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
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
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
        const { navigation } = this.props;
    return(
        <View>
            <ScrollView style={{
                    backgroundColor : 'transparent',                   
            }}>

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
                    flexDirection:'row', 
                    marginVertical:20,
                    justifyContent:'center'
                }}>

                <Image source={require('../../img/vip.png')} style={{
                        width:75,
                        height:50
                }}></Image>

                <View style={{
                    flexDirection: 'column',
                    alignItems:'center'
                }}>
                    <Text style={{marginHorizontal:40,fontSize:30}}>Devenez V.I.P</Text>
                    <Image source={require('../../img/couronne.png')} style={{
                        width:75,
                        height:50
                    }}></Image>
                </View>
            </View>

            <View style={{
                    flexDirection:'row',
                    marginVertical:20,
                    marginHorizontal:12
                }}>

            <ScrollView >

                <FlatList horizontal={true}
                    data={this.state.avatar.vip}
                    keyExtractor={({ id }, userid) => userid.toString()}
                    renderItem={item => 
                this.renderItemComponentVip(item)
                }
            
            />
                
            </ScrollView>        
            
            </View>
            <View>
                <Text style={{marginLeft:20, fontSize:30, fontWeight:'bold'}}>En ligne</Text>
            </View>

            <View style={{
                alignItems:'center',
                height:50,
                marginTop:12
            }}>
                
                <Image source={require('../../img/Button_enable.png')} style={{
                    position:'absolute',
                    
                }}></Image>
                <Text style={{
                    marginTop:12,
                    color:'#e70083',
                    fontWeight:'bold'
                }}>Près de votre région</Text>
            </View>

            <View style={{
                alignItems:'center',
                height:50
            }}>
                
                <Image source={require('../../img/Boutton_disable.png')} style={{
                    position:'absolute',
                    
                }}></Image>
                <Text style={{
                    marginTop:5,
                    color:'#007bff',
                    fontWeight:'bold'
                }}>Vos personnalités</Text>
            </View>

            <View style={{
                marginTop:-20,
                alignItems:'center',
                height:50,
            }}>
                <Image source={require('../../img/voir_tous.png')} style={{
                    
                }}></Image>
                
            </View>
{/* ---------------------------- slide membre ville ------------------------------------ */}
                <FlatList
                    horizontal={true}
                    data={this.state.liste_user}
                    keyExtractor={({ id }, userid) => userid.toString()}
                    renderItem={item => 
                    this.renderItemComponent(item)
                }/>
{/* ---------------------------- 
<ListUser id={this.state.session[0]["userid"]}/> slide tous membre ------------------------------------ */}
            <View>
                <Text style={{marginTop:20,marginLeft:20, fontSize:30, fontWeight:'bold', color:'#007bff'}}>Membres</Text>
            </View>
        
            <ScrollView style={{
                marginBottom:20
            }}>
            
            <FlatList
                horizontal={true}
            
                data={this.state.avatar.list_tout_user.data}
                keyExtractor={({ id }, userid) => userid.toString()}
                renderItem={item => 
                this.renderItemComponentListUser(item)
                }

                style={{
                    marginLeft:20,
                    marginTop:10
                }}
            
            />
             </ScrollView>

            </ScrollView>
        </View>
    );
}
}
