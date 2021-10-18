import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'

import {Picker} from '@react-native-picker/picker';

import NetInfo from '@react-native-community/netinfo';

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
     ActivityIndicator,
    } from 'react-native';

    import {Input} from 'react-native-elements';

    import SelectInput from 'react-native-select-input-ios';

    const options = [
        {value : 0, label: 'Homme'},
        {value: 1, label: 'Femme'}
    ];

    import SlideCoach from './SlideCoach';

    import Slide from './Slide';

    import SlideTemoin from './SlideTemoin';
    

export default class Accueil extends Component{

    constructor(props){
        super(props);
        this.state = {
            timePassed: false,
            modalVisible: false,
            erreurText : false,
            text: "",
            text1:"",
            isLogged:true,
            avatar_session: [],
            activity : false,
            erreur : false,
            boutonEnable : false,
            avatar_session_trouve:[],
            info:false
        };
    }

    componentDidMount(){
         
        /*const pusher = new Pusher('8660a8cd48176b9c1e7d', {
            cluster: 'ap2',
            disableStats:true,
            enabledTransports: ['ws', 'wss'],
            forceTLS: true,
            options:{
                
            }
        });

        Pusher.logToConsole = true;

        pusher.connection.bind('state_change', function(states) {
            console.log("Channels current state is " + states.current);
        });

        const chanel= pusher.subscribe('my-channel');

        chanel.bind('pusher:subscription_succeeded', function(members) {
            console.log('successfully subscribed!');
        });*/

      /*  let echo = new Echo({
            broadcaster: 'socket.io',
            host: '102.16.9.75:8080',  
            client: Socketio,
        });

        console.log(echo);*/
        /*
        echo.channel('my-channel').listen('updateOnlineStatus', (e)=>{
            console.log(e);
        })*/

        //chanel.bind('updateOnlineStatus', function(data) {
            //console.log("aaaaaaaaaaaa");
            //$scope.get_online_profil(data.userId);
        //});
        //console.log(chanel);
        /*
        pusher.channel('mes').listen('MesEvents', function(e){
            console.log("AAA");
        })

        console.log(pusher);
       
        echo.channel('mes').listen('App\Events\MesEvent', (e) => {
            console.log(e);
        });
        */  
       
       
      /*  NetInfo.addEventListener(networkState => {
            console.log("Connection type - ", networkState.type);
            this.setState({info:networkState.isConnected.toString()});
            console.log("Is connected? - ", this.state.info);
        });*/
        this.isNetworkAvailable();
        
    }

    isNetworkAvailable = async()=>{
        const response = await NetInfo.fetch();
        this.setState({info:response.isConnected});
        return response.isConnected;
    }

    Intervall=()=>{
        setTimeout(()=>{this.setState({isLogged: false})}, 5000); 
    }

    LoadPage(status){
        if(status==true){
            return  <ActivityIndicator size="large" color="white" />
        }
    }

    ErreurLogin(status){
        if(status==true){
            return  <Text style={{
                color:'red'
            }}>Identifiant ou mot de passe incorrect</Text>
        }
    }

    Bouton(status){
        if(status==true){
            return (<Button title="Mon Compte" onPress={()=>{}}></Button>);
        }
        else{
            return (<Button title="Connctez-vous" onPress={()=>{
                this.setState({modalVisible:true});
            }}></Button>);
        }
    }

    ConnectionUser(nom, mdp){
        fetch('https://last-chance-dating.com/api/connexionmobile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            nom_user: nom,
            mdp_user: mdp
        })
    })
    .then(res=>res.json())
    .then((json) => {
        
        this.setState({erreurText:json.message});
        this.setState({avatar_session:json});
        this.setState({avatar_session_trouve:json.avatar_session});
        //console.log(this.state.avatar_session_trouve);
        
      })
    .catch((error) => {
        console.error(error);
    });
    }

    choiseComponent(status){
        const { navigation } = this.props;
        if(status==false){
            return (
                <View style={{
                        alignItems:'center',
                        marginTop:Dimensions.get("window").height/2,
                    
                    }}>
                        <View style={{
                            borderWidth:1,
                            padding:50
                        }}>
                            <Text style={{
                                fontSize:20
                            }}>Verifier votre connection!</Text>
                            <TouchableOpacity onPress={()=>this.isNetworkAvailable()} style={{
                                borderWidth:1,
                                borderRadius:10,
                                marginHorizontal:20,
                                marginTop:20,
                                alignItems:'center'
                            }}>
                            <Text style={{
                                fontSize:20
                            }}>Réessayer</Text>
                            </TouchableOpacity>
                        </View>
                        
                </View>
            );
            
        }
        else{
            return this.renderComponentAvailable();
        }
    }

    

    renderComponentAvailable(){
        const { navigation } = this.props;
        return(
            <View>
        {/* ************************* début modal ***************** */}
    <Modal
        style={{

            height:Dimensions.get("window").height,
            
        }}
        animationType="slide"
        visible={this.state.modalVisible}>
          <View style={{
            
        }}>
            <ScrollView style={{
                backgroundColor:"black",
            }}>
            <View style={{
                    width:50,
                    marginTop:10,
                    marginLeft:180, 
                    
                }}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.setState({modalVisible:false})}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/homme.png'}} style={{
                        width:50,
                        height:50
                    }}></Image>
                </TouchableOpacity>
                        
                </View>

                <View style={{
                    alignItems:'center' }}>
                    <View style={{
                        borderBottomColor:'white',
                        borderBottomWidth:1,
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white', 
                            fontWeight:'bold', 
                            fontSize:40,
                            marginTop:20 
                        }}>
                            SE CONNECTER
                        </Text>                        
                    </View>
                    <View style={{marginTop:10}}>
                        <Image
                            source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone-inscrit.png'}}
                            style={{
                                width:30,
                                height:30
                            }}
                        >
                        </Image>
                    </View>

                    <View style={{
                       marginTop:50,
             
                    }}>
                        <Text style={{
                            color : 'white',
                            fontSize : 20
                        }}>
                                Nom d'utilisateur ou pseudo:
                        </Text>
                        <TextInput
                        onChangeText={text => this.setState({text:text})}
                        style={{
                            width : 300,
                            height : 40,
                            borderWidth: 2,
                            marginTop : 20,
                            color : 'white',
                            borderRadius: 10,
                            borderColor : 'white',
                            fontSize : 20,
                            paddingHorizontal : 10
                        }}>
                        
                        </TextInput>

                    </View>

                    <View style={{
                       marginTop:30,
                       
             
                    }}>
                        <Text style={{
                            color : 'white',
                            fontSize : 20
                        }}>
                                Mot de passe:
                        </Text>
                        <TextInput 
                        onChangeText={text1=>this.setState({text1:text1})}
                        secureTextEntry={true} style={{
                        width : 300,
                        height : 40,
                        borderWidth: 2,
                        marginTop : 20,
                        color : 'white',
                        borderRadius: 10,
                        borderColor : 'white',
                        fontSize : 20,
                        paddingHorizontal : 10
                        }}>
                        
                        </TextInput>
                        { /* erreurText? 
                            <Text visible={false} style={{ marginTop:10, fontSize : 18, color:'red'}}>
                                Identifiant ou mot de pass incorrect!
                            </Text> :
                            <Text style={{ marginTop:10, fontSize : 18, color:'white'}}>
                                Mot de passe oublié?
                            </Text>
                        */}
                        

                        

                    </View>
                    <View style={{
                        marginTop: 20,
                        borderBottomWidth : 1,
                        borderBottomColor : 'white',
                        alignItems:'center'
                    }}>
                    <TouchableOpacity 
                    onPress={()=>{
                        this.ConnectionUser(this.state.text, this.state.text1); 
                        this.setState({activity:true});
                        
                        setTimeout(()=>{
                            this.setState({activity:false});
                            this.setState({modalVisible:false});
                            /*navigation.navigate("User", {
                                avatar:this.state.avatar_session,
                                session:this.state.avatar_session_trouve
                            });*/
                        }, 5000);
                      
                        console.log("AAAA");
                    }}>
                       <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/submit.png'}} style={{
                            marginBottom : 10,
                            width:170,
                            height:40
                        }}></Image>
                    </TouchableOpacity>
                    {this.LoadPage(this.state.activity)}
                    {this.ErreurLogin(this.state.erreur)}

                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                        <Image style={{
                            width:Dimensions.get("window").width-60,
                            height:42
                        }} source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/fb.png'}}></Image>
                    </TouchableOpacity>
                    
                </View> 
                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                        <Image style={{
                            width:Dimensions.get("window").width-60,
                            height:42,
                            marginBottom:50
                        }} source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/google.png'}}></Image>
                    </TouchableOpacity>
                </View>
                    </View>
                    </View>
            </ScrollView> 
          </View> 
      </Modal>
      {/* ************** fin modal ****************** */}
    <View>

      <ScrollView
        style={{
        backgroundColor : 'transparent',                   
      }}>

            <Image source = {{uri:'https://last-chance-dating.com/public/assets/image_mobile/back2.png'}} style={{
                    position : 'absolute',
                    top : 0,
                    left : 0,
                    right : 0,
                    bottom : 0,
                    width : Dimensions.get("window").width,
                    height : 1530
            }}></Image>
            
                <View style={{
                        flexDirection:'row', 
                        backgroundColor:'#f8f9fa',
                        opacity: 0.7,
                        width:Dimensions.get("window").width
                }}>
                    <View style={{
                        width:Dimensions.get("window").width/2
                    }}>
                        <Image
                            source={{
                                uri:'https://last-chance-dating.com/public/assets/image_mobile/logo2.png'
                            }}
                            style={{
                                marginTop:30,
                                width:130,
                                height:100
                            }}>
                        </Image>
                    </View>
                    <View style={{
                        width:Dimensions.get("window").width/2-20,
                        marginTop:Dimensions.get("window").height/12,
                        marginHorizontal:10
                    }}>
                            <Button title='Connectez-vous'
                                onPress={()=>{
                                    this.setState({modalVisible:true});
                                }}
                                style={{
                                    
                                }}>
                            </Button>                     
                    </View>
                </View>

                <View style={{
                    marginTop:30,
                    borderRadius: 10,
                    marginHorizontal:10,
                    backgroundColor:'#000000',
                    height:(1+1/7)*(Dimensions.get("window").height),
                    opacity:0.6,
                }}>
                    <View style={{
                    alignItems:'center' }}>
                    <View style={{
                        borderBottomColor:'white',
                        borderBottomWidth:1,
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white', 
                            fontWeight:'bold', 
                            fontSize:40,
                            marginTop:20 
                        }}>
                            INSCRIVEZ-VOUS
                        </Text>
                        <Text style={{
                            marginTop:10,
                            color:'#ec008a',
                            fontSize:25,
                            fontWeight:'bold',
                            paddingBottom:10
                        }}>
                            C'est gratuit
                        </Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Image
                            source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone-inscrit.png'}}
                            style={{
                                width:30,
                                height:30
                            }}
                        >
                        </Image>
                    </View>
                    <Text
                        style={{
                            paddingLeft:40,
                            color: 'white',
                            fontSize: 20
                        }}
                    >
                        Bonjour, je suis votre guide virtuel. Veuillez nous indiquer si vous êtes un homme ou une femme?Que recherchez-vous?
                    </Text>
                    </View>

                    

                    <View style={{
                        marginTop: 50,
                        marginLeft: 40,
                        flexDirection : 'row',
                    }}>
                        <Text style={{
                            color:'white',
                            marginTop: 15,
                            fontSize: 20
                        }}>
                             Je suis
                        </Text>
                        {/* Select input reto 
                        <SelectInput value={0} options={options} color = "white" style={{
                            width : 200,
                            borderWidth : 2,
                            borderColor : 'white',
                            borderRadius: 10,
                            marginLeft : 55
                        }} ></SelectInput> */}
                        
                        
                    </View>

                    <View style={{
                        marginTop: 50,
                        marginLeft: 40,
                        flexDirection : 'row',
                    }}>
                        <Text style={{
                            color:'white',
                            marginTop: 15,
                            fontSize: 20
                        }}>
                             Je cherche
                        </Text>
                        {/* Select input reto 
                        <SelectInput value={0} options={options} style={{
                            width : 200,
                            borderWidth : 2,
                            borderColor : 'white',
                            borderRadius: 10,
                            marginLeft : 20
                        }} ></SelectInput> */}
                        
                        
                    </View>

                    <View style={{ 
                        marginTop: 50,
                        marginLeft : 40
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize: 20
                        }}>
                            Nom d'utilisateur ou pseudo :</Text>

                        <TextInput  style={{
                        height : 40,
                        borderWidth: 2,
                        marginRight : 35,
                        marginTop : 10,
                        paddingHorizontal : 15,
                        color : 'white',
                        borderRadius: 10,
                        borderColor : 'white',
                        fontSize : 20
                        }}>
                        
                        </TextInput>        
                    </View>
                    <View style={{ 
                        
                        marginLeft : 40
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize: 20
                        }}>
                            Mot de passe :</Text>

                        <TextInput secureTextEntry={true}  style={{
                        height : 40,
                        borderWidth: 2,
                        marginRight : 35,
                        marginTop : 10,
                        paddingHorizontal : 15,
                        color : 'white',
                        borderRadius: 10,
                        borderColor : 'white',
                        fontSize : 20
                        }}>
                        
                        </TextInput>    
                        <View style={{height:10, width:200, marginTop:20, marginLeft:50}}>
                        <Button title='Je tente ma chance'
                            onPress={() => {}}
                            color='#e6005c'
                        ></Button>
                    </View>    
                    </View>
                    
                </View>  

                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/fb.png'}} style={{
                            width:Dimensions.get("window").width-(Dimensions.get("window").width/4),
                            height:Dimensions.get("window").height-((1/2+1/4+1/8+1/16+1/55)*Dimensions.get("window").height)
                        }}></Image>
                    </TouchableOpacity>
                    
                </View> 
                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/google.png'}} style={{
                            width:Dimensions.get("window").width-(Dimensions.get("window").width/4),
                            height:Dimensions.get("window").height-((1/2+1/4+1/8+1/16+1/55)*Dimensions.get("window").height)
                        }}></Image>
                    </TouchableOpacity>
                    
                </View> 

                <View style={{
                    flexDirection:'row',
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center',
                    borderRadius: 25,
                    backgroundColor:'#00aeef',
                }}>
                    <View style={{
                        paddingVertical:40,
                        width:Dimensions.get("window").width/6,
                        alignItems:'center'
                    }}>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone1.png'}} style={{
                            width:40,
                            height:40
                        }}></Image>
                    </View>

                    <View style={{
                        paddingVertical:20,
                        alignItems:'center',
                        width:2*Dimensions.get("window").width/3,
                    }}>
                        <View style={{
                            flexDirection:'row',
                            marginBottom:10
                        }}>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:3
                            }}>2</Text>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:3
                            }}>8</Text>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:3
                            }}>6</Text>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:3
                            }}>6</Text>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:2
                            }}>2</Text>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:3
                            }}>1</Text>
                        </View>
                        <Text style={{color:'white', fontSize:18}}>Personnes déja inscrites sur </Text>
                        <Text style={{color:'white', fontSize:18}}>Last-chance-dating </Text>
                    </View>     
                </View> 

                <View style={{
                    flexDirection:'row',
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center',
                    borderRadius: 25,
                    backgroundColor:'#00aeef',
                }}>
                    <View style={{
                        paddingVertical:20,
                        width:Dimensions.get("window").width/6,
                        alignItems:'center',
                    }}>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone2.png'}} style={{
                            width:30,
                            height:40
                        }}></Image>
                    </View>

                    <View style={{
                        paddingVertical:10,
                        alignItems:'center',
                        alignItems:'center',
                        width:2*Dimensions.get("window").width/3,
                    }}>
                        <View style={{
                            marginBottom:10,
                            alignItems:'center'
                        }}>
                            <Text style={{
                                color:'white', 
                                fontSize:30,
                                fontWeight:'bold'
                            }}>111 . 408</Text>
                               <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/line2.png'}} style={{
                            width:40,
                            height:2
                        }}></Image>
                        </View>
                        <Text style={{color:'white', fontSize:17}}>Personnes connectées sur Last-</Text>
                        <Text style={{color:'white', fontSize:17}}>chance-dating en ce moment </Text>
                    </View>     
                </View> 

                <View style={{
                    flexDirection:'row',
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center',
                    borderRadius: 25,
                    backgroundColor:'#00aeef',
                    marginBottom:20
                }}>
                    <View style={{
                        paddingVertical:40,
                        width:Dimensions.get("window").width/2,
                        alignItems:'center'
                    }}>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/Verifi3.png'}} style={{
                            width:150,
                            height:50
                        }}></Image>
                    </View>
                    <View style={{
                        width:Dimensions.get("window").width/3,
                        alignItems:'center'
                    }}>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/securite.png'}} style={{
                            width:100,
                            height:100
                        }}></Image>
                    </View>

                        
                </View>  
                <View style={{
                    marginHorizontal:10,
                    marginVertical:50,
                    alignItems:'center',
                    width:Dimensions.get("window").width-20,
                    height:Dimensions.get("window").height-(Dimensions.get("window").height/3)
                    
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/imgpsh_fullsize_anim.png'}} style={{
                        borderRadius:10,
                        width:Dimensions.get("window").width-20,
                        height:Dimensions.get("window").height-(Dimensions.get("window").height/3)
                    }}></Image>
                    <View style={{
                        position:'absolute',
                        alignItems:'center'
                    }}>
                    <View>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone-celibataire.png'}} style={{
                            marginVertical:20,
                            width:40,
                            height:40
                        }}></Image>

                        
                    </View>

                    
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:30
                        }}>Vous êtes célibataires?</Text>
                        <View style={{
                            marginVertical:20,
                            marginHorizontal:10,
                            alignItems:'stretch'
                        }}>
                        <Text adjustsFontSizeToFit={true} style={{
                            color:'white',
                            fontSize:20,
                            textAlign:'justify'
                        }}>
                            Vous êtes du genre timide ? La vie de célibataire ne vous convient plus ? Vous cherchez un peu de compagnie pour casser la monotonie de vos quotidiens ? Peu importe les raisons qui vous ont poussées à sauter le pas et d’essayer les sites de rencontres, mais une chose est sure, si vous êtes sur Last-Chance-dating®, ce n’est pas par hasard et vous avez bien fait !
                        </Text>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate('Celiba')}
                        style={{
                            alignItems:'center',
                            marginTop:20
                        }}>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/btnensavoir.png'}} style={{
                                width:150,
                                height:40
                            }}></Image>
                        </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                        
                    </View>
                
                </View>

                <View style={{
                    marginHorizontal:10,
                    alignItems:'center',
                    width:Dimensions.get("window").width-20,
                    height:Dimensions.get("window").height-(Dimensions.get("window").height/3)
                    
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/img2.png'}} style={{
                        borderRadius:10,
                        width:Dimensions.get("window").width-20,
                        height:Dimensions.get("window").height-(Dimensions.get("window").height/3)
                    }}></Image>
                <View style={{
                    position:'absolute',
                    alignItems:'center'
                 }}>
                    <View>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone-33.png'}} style={{
                            marginVertical:10,
                            width:40,
                            height:30
                        }}></Image>

                        
                    </View>

                    
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:30
                        }}>Votre profil?</Text>
                        <View style={{
                            marginVertical:20,
                            marginHorizontal:10,
                            alignItems:'stretch'
                        }}>
                        <Text adjustsFontSizeToFit={true} style={{
                            color:'white',
                            fontSize:20,
                            textAlign:'justify'
                        }}>
                            Ça y est, vous avez enfin décidé de prendre les choses en main et de partir à la conquête de l’amour, ou une histoire éphémère ? Avant de vous inscrire sur Last-Chance-dating®, vous devez penser à bien remplir votre profil, mais ce n’est pas chose facile. Qu’est-ce que vous allez y mettre ? Quelles sont les choses essentielles à écrire sur vous pour vous mettre en valeur
                        </Text>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate("Profile")}
                        style={{
                            alignItems:'center',
                            marginTop:20
                        }}>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/btnensavoir.png'}} style={{
                                width:150,
                                height:40
                            }}></Image>
                        </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                        
                    </View>
                
                </View>

                <View style={{
                    marginHorizontal:10,
                    alignItems:'center',
                    marginVertical:50,
                    width:Dimensions.get("window").width-20,
                    height:Dimensions.get("window").height-(Dimensions.get("window").height/3)
                    
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/img3.png'}} style={{
                        borderRadius:10,
                        width:Dimensions.get("window").width-20,
                        height:Dimensions.get("window").height-(Dimensions.get("window").height/3)
                    }}></Image>
                    <View style={{
                        position:'absolute',
                        alignItems:'center'
                    }}>
                    <View>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone-help.png'}} style={{
                            marginVertical:10,
                            width:20,
                            height:39
                        }}></Image>

                        
                    </View>

                    
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:30
                        }}>Comment ça marche?</Text>
                        <View style={{
                            marginVertical:20,
                            marginHorizontal:10,
                            alignItems:'stretch'
                        }}>
                        <Text adjustsFontSizeToFit={true} style={{
                            color:'white',
                            fontSize:20,
                            textAlign:'justify'
                        }}>
                            Last-Chance-dating® vient récemment de faire son entrée en scène en se plaçant aux côtés des sites de rencontre en ligne sérieux les plus réputés. Nous visons très haut en proposant aux célibataires, un accompagnement et une assistance complète dès leur inscription, jusqu’à la conclusion finale qui les a amenés sur notre site. Un coach en séduction efficace et sympathique...
                        </Text>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate("Camarche")}
                        style={{
                            alignItems:'center',
                            marginTop:15
                        }}>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/btnensavoir.png'}} style={{
                                width:150,
                                height:40
                            }}></Image>
                        </TouchableOpacity>
                        </View> 
                    </View>  
                    </View>
                </View>

                <View style={{
                    marginHorizontal:10,
                    backgroundColor:'#bdb8b8',
                    alignItems:'center',
                    height:Dimensions.get("window").height+(Dimensions.get("window").height/5),
                    width:Dimensions.get("window").width-20,
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/img-block2.png'}} style={{
                        height:Dimensions.get("window").height+(Dimensions.get("window").height/5),
                        width:Dimensions.get("window").width-10,
                        opacity:0.5
                    }}>
                    </Image>
                    <View style={{
                        position:'absolute'
                    }}>
                    <Text style={{
                        marginVertical:40,
                        fontSize:30,
                        fontWeight:'bold',
                        textAlign:'center'
                    }}>
                        Last Chance Dating
                    </Text>
                    <Text style={{
                        color:'#c1edff',
                        fontSize:35,
                        fontWeight:'bold',
                        textAlign:'center'
                    }}>
                        Un Site de rencontre
                    </Text>
                    <View style={{
                        marginHorizontal:20,
                        marginTop:20,
                        
                    }}>
                    <View style={{
                        borderBottomWidth:2,
                        borderBottomColor:'#2faadd'
                    }}>
                    <Text style={{
                        textAlign:'center',
                        fontSize:21,
                        marginBottom:20
                    }}>
                        SITE DE RENCONTRES POUR LES CELIBATAIRES QUI ONT BESOIN DE CONSEILS DES PROFESSIONNELS EN SEDUCTION
                    </Text>
                    </View>
                    
                    </View>
                    <View style={{
                        marginTop:20,
                        marginHorizontal:20
                    }}>
                        <Text style={{
                            fontSize:22,
                            textAlign:'justify'
                        }}>
                            Lancé récemment sur le marché des love dating ou rencontres amoureuse, last-chance-dating.com est un site de rencontre sérieux à fortes potentialités qui déploie une large gamme de fonctionnalités pour vous permettre de trouver la perle rare en un temps record! Plonger au coeur de last-chance-dating.com, découvrer tous nos professionnels en séduction qui vont vous aider à franchir le pas. Vous pourriez enfin dire à dieu votre vie de célibataire...dès aujourd'hui
                        </Text>
                        <TouchableOpacity style={{
                            alignItems:'center',
                            marginTop:15
                        }} onPress={()=>navigation.navigate("Last")}>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/btnensavoir.png'}} style={{
                                width:150,
                                height:40
                            }}></Image>
                        </TouchableOpacity>
                    </View>  
                    </View>        
                </View>  
                <View style={{
                    marginVertical:10,
                    marginHorizontal:12,
                    alignItems:'center',
                    width:Dimensions.get("window").width-20,
                    height:Dimensions.get("window").height+(Dimensions.get("window").height/11)
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/img_back.png'}} style={{
                        width:Dimensions.get("window").width-20,
                        height:Dimensions.get("window").height+(Dimensions.get("window").height/11)
                    }}>
                    </Image>

                    <View style={{
                        position:'absolute',
                        marginTop:20
                    }}>
                        <Text style={{
                            textAlign:'center',
                            fontSize:40,
                            fontWeight:'bold',
                            color:'white',
                            marginHorizontal:20
                        }}>Une expérience hors du commun 
                        </Text> 
                        <Text style={{
                            textAlign:'center',
                            fontSize:30,
                            fontWeight:'bold',
                            color:'white',
                            marginHorizontal:20
                        }}>
                            AVEC NOS COACHES EN SEDUCTION
                        </Text> 
                        <Text style={{
                            marginHorizontal:20,
                            textAlign:'justify',
                            fontSize:24,
                            color:'white'
                        }}>
                            Depuis quelques temps, les sites de rencontres constituent pour la plupart des Français et même pour toutes les personnes du monde entier, un bon moyen de trouver l'amour d'une autre manière que le contact phisique. Ils permettent de créer une autre forme d'échanges en se basant sur l'interaction à la distance et favorisent la création de liens qui se développent au fur et à mesure que les affinités prennent de l'ampleur entre les deux parties.
                        </Text> 
                        <TouchableOpacity style={{
                            alignItems:'center'
                        }} onPress={()=>navigation.navigate("Experience")}>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/btnensavoir.png'}} style={{
                                width:150,
                                height:40
                            }}></Image>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View style={{
                    backgroundColor:'#000',
                    opacity:0.5,
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:30,
                        color:'#fff',
                        fontWeight:'bold'
                    }}> NOS COACHES</Text>
                    <Text style={{
                        fontSize:30,
                        color:'#fff'
                    }}>EN SEDUCTION</Text>
                    </View>
                    <SlideCoach></SlideCoach>

                <View style={{
                    marginTop:10,
                    marginHorizontal:12,
                    alignItems:'center',
                    height:Dimensions.get("window").height-(Dimensions.get("window").height/5),
                    width:Dimensions.get("window").width-20
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/carte-monde.png'}} style={{
                        height:Dimensions.get("window").height-(Dimensions.get("window").height/5),
                        width:Dimensions.get("window").width-20
                    }}></Image>
                    <View style={{
                        position:'absolute',
                        alignItems:'center',
                    }}>
                        <View style={{
                            borderBottomWidth:1,
                            borderBottomColor:'black',
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontSize:30,
                                color:'#28a9e0',
                                fontWeight:'bold',
                                textAlign:'justify'
                            }}>
                            Choisissez les membres de last-chance-dating de votre région et commencez à discuter</Text>
                            
                        </View>
                       <Slide></Slide>
                    </View> 
                </View>

                <View style={{
                    marginTop:10,
                    alignItems:'center',
                    marginHorizontal:12,
                    width:Dimensions.get("window").width-20,
                    height:Dimensions.get("window").height+(Dimensions.get("window").height/3),
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/img10.png'}} style={{
                        width:Dimensions.get("window").width-20,
                        height:Dimensions.get("window").height+(Dimensions.get("window").height/3),
                        opacity:0.8
                    }}></Image>

                    <View style={{
                        position:'absolute'
                    }}>
                        <Text style={{
                            marginTop:20,
                            color:'white',
                            fontSize:20,
                            marginHorizontal:20,
                            textAlign:'justify'
                        }}>On ne rencontre pas quelqu'un en 2021 comme on faisant, il y a une plus d'une décennie. Les contraintes géographiques, un rythme de vie effréné sont autant d'obstacles qui nous empêchent de vivre une belle histoire d'amour. Et bien que les sorties entre amis offrent de belles opportunnités de rencontre, internet est devenu de nos jours, un moyen incontournable de dire "je t'aime" autrement. Simple, rapide, efficace et fiable, Last-Chance vous propose un service haut de gamme en coaching and dating pour que vous puissiez, à votre tour, rencontre la perle rare parmi les milliers de célibataires qui nous rejoignent chaque jour.</Text>
                        
                        <View style={{
                            marginHorizontal:50,
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius:10,
                            padding:20
                            
                        }}>
                            <Text style={{
                                color:'white',
                                fontSize:30,
                                fontWeight:'bold'
                            }}>Des rencontres sérieuses</Text>
                            <Text style={{
                                marginTop:20,
                                color:'white',
                                fontSize:30,
                                fontWeight:'bold'
                            }}>POUR VOUS AIDER A CONSTRUIRE DES RELATIONS APOUREUSES ET DURABLES</Text>
                        </View>
                        <TouchableOpacity style={{
                            alignItems:'center',
                            marginTop:20
                        }} onPress={()=>{}}>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/btnensavoir.png'}} style={{
                                width:150,
                                height:40
                            }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    marginTop:20,
                    marginHorizontal:10,
                    alignItems:'center',
                    width:Dimensions.get("window").width-20,
                    height:Dimensions.get("window").height-(Dimensions.get("window").height/3)
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/coup_pouce.png'}} style={{
                        width:Dimensions.get("window").width-20,
                        height:Dimensions.get("window").height-(Dimensions.get("window").height/3)
                    }}></Image>

                    <View style={{
                        position:'absolute'
                    }}>
                    <Text style={{
                        marginTop:20,
                        marginHorizontal:50,
                        color:'#FF3384',
                        fontWeight:'bold',
                        fontSize:30,
                        textAlign:'center'
                    }}>BESOIN D'UN COUP DE POUCE?</Text>
                    <Text style={{
                        color:'white',
                        fontSize:20,
                        textAlign:'justify'
                    }}>Vous recherchez déséspérément votre âme soeur depuis fort longtemps et que êtes las(ses) de dépenser vos sous sans aucun résultat probant? Last-chance-dating a mis au point pour vous, deux systèmes infaillibles: Le système de matching et le test de personnalité qui vous feront gagner du temps, et qui vous proposeront les bonnes personnes qui vous correspondent mieux</Text>
                    
                    <TouchableOpacity style={{
                            alignItems:'center',
                            marginTop:20
                        }}>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/btnensavoir.png'}} style={{
                                width:150,
                                height:40
                            }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    marginHorizontal:10,
                    marginTop:20,
                    width:Dimensions.get("window").width-20,
                    height:Dimensions.get("window").height-(Dimensions.get("window").height/9),
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/test_perso2.png'}} style={{
                       width:Dimensions.get("window").width-20,
                       height:Dimensions.get("window").height-(Dimensions.get("window").height/9),
                       opacity:0.9
                    }}></Image>

                    <View style={{
                        position:'absolute',
                        alignItems:'center'
                    }}>
                        <Text style={{
                            marginTop:20,
                            fontSize:35,
                            color:'white',
                            marginHorizontal:20,
                            fontWeight:'bold'
                        }}>
                            Test de personnalité sur last-chance-dating.com
                        </Text>
                        <Text style={{
                            fontSize:27,
                            color:'white',
                            marginTop:10,
                            marginHorizontal:20
                        }}>
                            Il n'y a sans aucun doute aucune quête plus important que celle de son âme-soeur. Et en ces temps où le monde a plus besoin d'amour que autre richesse, il va sans dire que tous, ou du moins les plus romantiques et utopiques sur la question, veulent tout tenter pour le trouver.
                        </Text>
                        <TouchableOpacity style={{
                            alignItems:'center',
                            marginTop:20
                        }}>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/btnensavoir.png'}} style={{
                                width:150,
                                height:40
                            }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    marginTop:20,
                    marginHorizontal:10,
                    alignItems:'center',
                    width:Dimensions.get("window").width-20,
                    height:Dimensions.get("window").height-(Dimensions.get("window").height/4)
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/bg_temoin.png'}} style={{
                        marginTop:30,
                        width:Dimensions.get("window").width-20,
                        height:Dimensions.get("window").height-(Dimensions.get("window").height/4)
                    }}></Image>

                    <View style={{
                        position:'absolute',
                        alignItems:'center'
                    }}>
                    <Image style={{ 
                        width:150,
                        height:100,
                        borderRadius:10
                    }} source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/temoin.png'}}></Image>
                       <SlideTemoin></SlideTemoin>
                    </View>
                </View> 

                <View style={{
                    marginTop:20,
                    marginHorizontal:10,
                    width:Dimensions.get("window").width-20,
                    height:(2*Dimensions.get("window").height)-(Dimensions.get("window").height/3)
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/affilation2.png'}} style={{
                        width:Dimensions.get("window").width-20,
                        height:(2*Dimensions.get("window").height)-(Dimensions.get("window").height/3)
                    }}></Image>

                    <View style={{
                        position:'absolute'
                    }}>
                        <Text style={{
                            fontSize:30,
                            textAlign:'center',
                            marginTop:180,
                            marginHorizontal:20
                        }}>Gagner de l'argent avec notre programme d'affilation</Text>

                <View style={{
                    marginTop:20,
                    marginHorizontal:12,
                    alignItems:'center'
                }}>
                    <View style={{
                        backgroundColor:'black',
                        marginHorizontal:50,
                        padding:50,
                        marginTop:50,
                        borderRadius:10
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:20,
                            textAlign:'center'
                        }}>Inscrivez-vous gratuitement sur notre plate-forme</Text>

                    </View>

                    <View style={{
                        position:'absolute',
                        alignItems:'center'
                    }}>
                    <Image style={{ 
                        width:80,
                        height:80,
                        borderRadius:10
                    }} source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone1affil.png'}}></Image>
                       
                    </View>
                </View>

                <View style={{
                    marginTop:20,
                    marginHorizontal:12,
                    alignItems:'center'
                }}>
                    <View style={{
                        backgroundColor:'black',
                        marginHorizontal:50,
                        padding:50,
                        marginTop:50,
                        borderRadius:10
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:20,
                            textAlign:'center'
                        }}>Recevez une commission important sur les abonnements pris par vos leads</Text>

                    </View>

                    <View style={{
                        position:'absolute',
                        alignItems:'center'
                    }}>
                    <Image style={{ 
                        width:80,
                        height:80,
                        borderRadius:10
                    }} source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone3affil.png'}}></Image>
                       
                    </View>
                </View>

                <View style={{
                    marginTop:20,
                    marginHorizontal:12,
                    alignItems:'center'
                }}>
                    <View style={{
                        backgroundColor:'black',
                        marginHorizontal:50,
                        padding:50,
                        marginTop:50,
                        borderRadius:10
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:20,
                            textAlign:'center'
                        }}>Insérez sur vos sites / blogs nos bannières</Text>

                    </View>

                    <View style={{
                        position:'absolute',
                        alignItems:'center'
                    }}>
                    <Image style={{ 
                        width:80,
                        height:80,
                        borderRadius:10
                    }} source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone2affil.png'}}></Image>
                       
                    </View>
                </View>
            </View>
        </View>

                <View style={{
                    marginTop:20,
                    alignItems:'center',
                    height:(2*Dimensions.get("window").height)-(Dimensions.get("window").height/3),
                    width:Dimensions.get("window").width,
                }}>
                    <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/bg_derne.png'}} style={{
                        height:(2*Dimensions.get("window").height)-(Dimensions.get("window").height/3),
                        width:Dimensions.get("window").width,
                
                    }}></Image>
                    <View style={{
                        position:'absolute'
                    }}>
                <View style={{
                    marginTop:20,
                    marginHorizontal:12,
                    backgroundColor:'black',
                }}>
                   <Text style={{
                       color:'white',
                       fontSize:35,
                       fontWeight:'bold',
                       marginLeft:40,
                       marginTop:50
                   }}>INFO</Text>
                   <Text style={{
                       color:'white',
                       fontSize:35,
                       fontWeight:'bold',
                       marginLeft:40,
                       marginTop:50
                   }}>COURRIER</Text>
                   <Text style={{
                       color:'white',
                       fontSize:20,
                       marginHorizontal:40,
                       marginTop:50
                   }}>250 Bis Boulevard Saint Gremain 75007 Paris France</Text>
                   <Text style={{
                       color:'white',
                       fontSize:35,
                       fontWeight:'bold',
                       marginLeft:40,
                       marginTop:50
                   }}>TELEPHONE</Text>
                   <Text style={{
                       color:'white',
                       fontSize:20,
                       marginHorizontal:40,
                       marginTop:50
                   }}>de 8à 17 heures, heure française +33(0)973036128</Text>
                </View>  

                <Text style={{
                       fontSize:20,
                       marginHorizontal:40,
                       marginTop:20,
                       color:'white'
                   }}>Vous pouvez soit nous adresser directement votre courrier au
                   <Text style={{
                       fontSize:20,
                       fontWeight:'bold',
                       color:'white' 
                   }}> serviceclient@last-chance-dating.com</Text>
                    , soit remplir le formulaire ci dessous
                   </Text>
                   <TextInput placeholder="Votre nom *" placeholderTextColor='white' style={{
                        height : 40,
                        borderBottomWidth: 2,
                        marginTop : 30,
                        marginHorizontal:12,
                        paddingHorizontal : 15,
                        color : 'white',
                        borderColor : 'white',
                        fontSize : 20,
                        marginBottom:10
                    }}></TextInput> 
                    <TextInput placeholder="Votre adresse email *" placeholderTextColor='white' style={{
                        height : 40,
                        borderBottomWidth: 2,
                        marginTop : 30,
                        marginHorizontal:12,
                        paddingHorizontal : 15,
                        color : 'white',
                        borderColor : 'white',
                        fontSize : 20,
                        marginBottom:10
                    }}></TextInput> 
                    <TextInput placeholder="Votre objet du mail *" placeholderTextColor='white' style={{
                        height : 40,
                        borderBottomWidth: 2,
                        marginTop : 30,
                        marginHorizontal:12,
                        paddingHorizontal : 15,
                        color : 'white',
                        borderColor : 'white',
                        fontSize : 20,
                        marginBottom:10
                    }}></TextInput> 
                    <TextInput placeholder="Votre message *" placeholderTextColor='white' style={{
                        height : 40,
                        borderBottomWidth: 2,
                        marginTop : 30,
                        marginHorizontal:12,
                        paddingHorizontal : 15,
                        color : 'white',
                        borderColor : 'white',
                        fontSize : 20,
                        marginBottom:10
                    }}></TextInput> 
                    <View style={{
                        flexDirection:'row',
                        marginTop:20,
                        marginHorizontal:20,
                        borderBottomWidth:1,
                        borderColor:'white',
                        marginBottom:10
                    }}>

                        <TouchableOpacity style={{
                            alignItems:'center',
                            borderWidth:2,
                            borderRadius:10,
                            borderColor:'white',
                            padding:10,
                            marginBottom:20,
                            
                        }}>
                            <Text style={{fontSize:17,color:'white'}}>Choose File</Text>
                            
                    </TouchableOpacity>
                    <Text style={{
                        marginTop:10,
                        marginLeft:20,
                        fontSize:17,
                        marginBottom:20,
                        color:'white'
                    }}>No file chosen</Text>
                    </View>
                    <TouchableOpacity style={{
                            alignItems:'center',
                            marginTop:20
                        }}>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/Envoyez.png'}} style={{
                                width:150,
                                height:40
                            }}></Image>
                    </TouchableOpacity>                
                    </View>
                </View>

                <View style={{
                    marginTop:20,
                    backgroundColor:'black',
                    opacity:0.8
                }}>
                    <TouchableOpacity style={{
                            marginTop:20,
                            borderBottomWidth:2,
                            borderBottomColor:'white',
                            marginHorizontal:20
                        }}>
                            <Text style={{
                                fontSize:30,
                                marginBottom:20,
                                color:'white'
                            }}>CGUV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                            marginTop:20,
                            borderBottomWidth:2,
                            borderBottomColor:'white',
                            marginHorizontal:20
                        }}>
                            <Text style={{
                                fontSize:30,
                                marginBottom:20,
                                color:'white'
                            }}>Mentions légales</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                            marginTop:20,
                            borderBottomWidth:2,
                            borderBottomColor:'white',
                            marginHorizontal:20
                        }}>
                            <Text style={{
                                fontSize:30,
                                marginBottom:20,
                                color:'white'
                            }}>PDC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                            marginTop:20,
                            borderBottomWidth:2,
                            borderBottomColor:'white',
                            marginHorizontal:20
                        }}>
                            <Text style={{
                                fontSize:30,
                                marginBottom:20,
                                color:'white'
                            }}>Blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                            marginTop:20,
                            borderBottomWidth:2,
                            borderBottomColor:'white',
                            marginHorizontal:20
                        }}>
                            <Text style={{
                                fontSize:30,
                                marginBottom:20,
                                color:'white'
                            }}>Contact</Text>
                    </TouchableOpacity>

                    <Text style={{
                       color:'white',
                       fontSize:20,
                       marginHorizontal:40,
                       marginTop:50
                   }}>PAR TELEPHONE :de 8à 17 heures, heure française +33(0)973036128</Text>

                    <TouchableOpacity style={{
                            marginTop:20,
                            borderBottomWidth:2,
                            borderBottomColor:'white',
                            marginHorizontal:20
                        }}>
                            <Text style={{
                                fontSize:30,
                                marginBottom:20,
                                color:'white'
                            }}>Réseaux Sociaux</Text>
                    </TouchableOpacity>

                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        marginTop:20,
                        marginHorizontal:12
                    }}>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/youtube.png'}} style={{
                            marginHorizontal:20,
                            width:50,
                            height:50
                        }}></Image>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/Instagram.png'}} style={{
                            marginHorizontal:20,
                            width:50,
                            height:50
                        }}></Image>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/twitter.png'}} style={{
                            marginHorizontal:20,
                            width:50,
                            height:50
                        }}></Image>
                        <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/facebook.png'}} style={{
                            marginHorizontal:20,
                            width:50,
                            height:50
                        }}></Image>
                    </View>
                    <Image style={{
                        width:180,
                        height:60,
                        marginLeft:50,
                        marginVertical:20,
                    }} source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/googlePlay2.png'}}></Image>
                </View>
                 
                
            </ScrollView>
    </View>
</View>
        );
    }

    render(){          

        
{/* 
     const [modalVisible, setModalVisible] = useState(false);

     setModalVisible(!modalVisible)

    const [erreurText, setErreurText] = useState(false);

    const [text, setText] = useState('');

    const [text1, setText1] = useState('');

    const [isLogged, setIsLogged] = useState(false); 
*/}
      

        return this.choiseComponent(this.state.info);
    }
}
