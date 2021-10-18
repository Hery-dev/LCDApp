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
     Pressable,
     FlatList,
     ActivityIndicator
    } from 'react-native'

export default class Connect extends Component{
    constructor(props){
        super(props);
        this.state = {
            activity : false,
            boutonEnable : false
        };
        
    }
/*
    renderItemComponent(item){
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
        }
    }
*/
    
LoadPage(status){
    if(status==true){
        return  <ActivityIndicator size="large" color="#0000ff" />
    }
}

Bouton(status){
    if(status==true){
        return (<Button title="Mon Compte" onPress={()=>{}}></Button>);
    }
    else{
        return (<Button title="Connctez-vous" onPress={()=>{}}></Button>);
    }
}

userInfo(token){
    fetch('http://192.168.1.29:8000/api/me',{
        method:'POST',
        headers:{
            Authorization: 'Bearer '+token
        }
    }).then(response=>response.json())
    
    .then((json)=>{
        return console.log(json);
    }).catch((err)=>{
        console.log(err);
    });
}

login(){
        fetch('http://192.168.1.29:8000/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            name: 'andrana',
            password: '123456'
        })
    })
    .then(res=>res.json())
    .then((json) => {
         console.log(json.access_token);
         return this.userInfo(json.access_token);
      })
    .catch((error) => {
        console.error(error);
    });
    
}

render()
    {
         return(
            <View style={{
                marginTop:50
            }}>
                <TouchableOpacity onPress={()=>{
                    this.setState({activity:true});
                    this.setState({boutonEnable:true});
                    setTimeout(() => {
                        this.setState({activity:false});
                        this.setState({boutonEnable:false});
                    }, 5000)
                   
                }}>
                    <Text>AAAAAAAA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    marginVertical:50,
                }} onPress={()=>{
                    this.login()
                    //console.log("tokony");
                }}>
                    <Text>Test Login JWT</Text>
                </TouchableOpacity>

                {this.LoadPage(this.state.activity)}

                {this.Bouton(this.state.boutonEnable)}
                
            

            </View>
        );
    }
}