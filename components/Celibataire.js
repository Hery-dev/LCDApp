import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'

import {Picker} from '@react-native-picker/picker';

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
     FlatList
    } from 'react-native'

    import SelectInput from 'react-native-select-input-ios';

    const options = [
        {value : 0, label: 'Homme'},
        {value: 1, label: 'Femme'}
    ];

export default class Celibataire extends Component{
    constructor(props){
        super(props);
        this.state = {
            timePassed: false,
            modalVisible: false,
            erreurText : false,
            text: "",
            text1:"",
            isLogged:true,
            avatar_session: []
        };
    }
    render(){
        const { navigation } = this.props;
        return(
            <View>
                {/*************** MODAL ********************* */}
        <Modal
        animationType="slide"
        visible={this.state.modalVisible}>
          <View style={{
            backgroundColor:"black",
            opacity:0.9
        }}>
            <ScrollView>
            <View style={{
                    width:50,
                    marginTop:10,
                    marginLeft:180, 
                }}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.setState({modalVisible:false})}>
                    <Image source={require('../img/homme.png')} ></Image>
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
                            source={require('../img/icone-inscrit.png')}
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
                                Mot de passe oubli???
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
                        if(this.state.text=="vonjy" && this.state.text1=="123456"){
                            //setIsLogged(!isLogged);
                            this.ConnectUser(); 
                            setTimeout(()=>{
                            //console.log(this.state.avatar_session);
                                navigation.navigate("User", {avatar:this.state.avatar_session});
                                } , 5000); 
                        }
                        else{
                            //setErreurText(!erreurText);
                        }
                    }}>
                    {/* Login({navigation, text, text1}) onPress={()=>navigation.navigate('user')}> */}
                        <Image source={require('../img/submit.png')} style={{
                            marginBottom : 10
                        }}></Image>
                    </TouchableOpacity>
                    

                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                        <Image source={require('../img/fb.png')}></Image>
                    </TouchableOpacity>
                    
                </View> 
                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                        <Image source={require('../img/google.png')}></Image>
                    </TouchableOpacity>
                </View>
                    </View>
                    </View>
            </ScrollView> 
          </View> 
      </Modal>

{/**************************** FIN MODAL *********************************** */}

            <View>
            <ScrollView
                style={{
                backgroundColor : 'transparent',                   
            }}>
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
                    marginTop:50
                }}>
                <Text style={{
                    textAlign:'center',
                    color:'#3399ff',
                    fontSize:35
                }}>C??libataires : essayez Last-Chance-dating??</Text>
                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                Si vous avez d??j?? essay?? les autres <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}>sites de rencontre </Text>sans avoir trouv?? votre bonheur, alors vous vous dites s??rement que rien qu???avec le nom, ce site devra ??tre votre derni??re chance de trouver l???amour de votre vie ou l???ami fid??le sur qui vous pouvez toujours compter dans les moments les plus difficiles de votre vie.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Oui, vous avez raison ! Last-Chance-dating?? est un site de rencontre ambitieux, ayant pour vocation de mettre en relation tous les c??libataires ayant perdu tout espoir de faire une vraie <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}>rencontre s??rieuse en ligne</Text>. Parmi la panoplie de site de rencontres qui existe actuellement sur le net, Last-Chance-dating?? se d??marque des autres puisqu???il met ?? la disposition des c??libataires, des conseils avis??s et un grand soutien d???accompagnement dans leur qu??te de l???amour ou de l???amiti??, gr??ce ?? nos
                </Text>

                </View>

                <View style={{
                    marginTop:30,
                    alignItems:'center'
                }}>
                    <View style={{
                        backgroundColor:'white',
                        padding:50
                    }}>
                        <Text style={{
                            color:'#ff8fcc',
                            fontSize:25
                        }}>Vous ??tes c??libataires</Text>
                    </View>
                    
                </View>

                <View style={{
                    marginTop:30
                }}>
                    <Image style={{
                        width:Dimensions.get("window").width-10,
                        height:350
                    }} source={{
                        uri:'https://last-chance-dating.com/public/assets/img/celiba.jpg'
                    }}></Image>

                <Text style={{
                    textAlign:'center',
                    color:'#3399ff',
                    fontSize:35,
                    marginTop:20
                }}>C??libataires : notre coach est l?? pour vous !</Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Jamais dans votre vie, il n???a ??t?? plus facile de faire une <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}>rencontre s??rieuse </Text>  qu???avec Last-Chance-dating?? ! Les membres inscrits sur notre site savent ce qu???ils recherchent et ne veulent pas se perdre dans des longues discussions qui n???aboutissement ?? rien. C???est pour cette raison que nous offrons aux 
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}>c??libataires </Text> , l???occasion unique de b??n??ficier de nos <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}> services coaching and dating  </Text> pour leur permettre de trouver rapidement des profils compatibles et de faire beaucoup de rencontres s??rieuses, ?? la hauteur de leurs attentes.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Last-Chance-dating?? dispose d???une base de donn??es importante qui rassemble les profils les plus ambitieux partout en France, d??sireux tout autant que vous, de trouver l???amour de leur vie.                    
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Apr??s avoir fait le <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}> test de personnalit?? </Text> , vous aurez ?? votre disposition, une liste non exhaustive de c??libataires dont les attentes et les affinit??s vous correspondent au mieux. A vous de choisir la personne avec qui, vous voulez ??tre mis en relation et que vous souhaiteriez rencontrer rapidement avec le soutien de notre 
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}> coach</Text>
                
                </Text>
                <TouchableOpacity style={{
                    alignItems:'center',
                    marginVertical:20
                }} onPress={()=>navigation.navigate("Home")}>
                    <Text style={{
                        backgroundColor:'#2faadd',
                        paddingVertical:10,
                        paddingHorizontal:8,
                        color:'white',
                        fontSize:20,
                        borderRadius:5
                    }}>Inscrivez-vous</Text>
                </TouchableOpacity>
                </View>

            </ScrollView>
            </View>
 
            </View>
        );
    }
}