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

export default class VotreProfile extends Component{
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
                    alignItems:'center',
                    backgroundColor:'white',
                    paddingVertical:50
                }}>
                    <Text style={{
                        paddingVertical:10,
                        fontSize:35,
                        color:'#EE82EE',
                        borderTopWidth:4,
                        borderBottomWidth:4,
                        borderTopColor:'#20c997',
                        borderBottomColor:'#20c997'
                    }}>Votre profile?</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>Ça y est, vous avez enfin décidé de prendre les choses en main et de partir à la <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}> conquête de l'amour</Text> , ou une histoire éphémère ? Avant de vous inscrire sur Last-Chance-dating®, vous devez penser à bien remplir votre profil, mais ce n’est pas chose facile. Qu’est-ce que vous allez y mettre ? Quelles sont les choses essentielles à écrire sur vous pour vous mettre en valeur ? Un profil bien structuré devra refléter au mieux vos attentes, mais également vos traits de caractères. Voici quelques astuces pour que votre profil soit le plus attractif possible.
                
                </Text>

                <View style={{
                    marginTop:20,
                    flexDirection:'row',
                    marginHorizontal:20,
                    alignItems:'center'
                }}>
                    <Image source={{
                        uri:'https://last-chance-dating.com/public/assets/img/icones-01.png'
                    }} style={{
                        width:70,
                        height:70
                    }}></Image>
                    <Text style={{
                        fontSize:28,
                        color:'#00ccff',
                        marginHorizontal:15
                    }}>Les essentiels à savoir</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Un profil bien rempli est le garant d’une rencontre réussie ! C’est la première étape à franchir sur Last-Chance-dating® si vous voulez mettre toutes les chances de votre côté.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Il est tout de même important de noter que cette rédaction ne se fait pas à la légère et ne s’improvise pas. En effet, élaborer un profil attirant demande du temps et de la patience car vous êtes sur le point de montrer aux autres membres qui vous êtes réellement.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    La clé, c’est de mettre en avant votre personnalité en écrivant une brève description qui démontre vos valeurs. Parlez de vos expériences, de vos vécus, de vos ambitions et de vos attentes, le tout agrémenté d’émotions que l’on doit ressentir au fil de la lecture.
                </Text>

               <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Cependant, il est inutile de surcharger votre description. Soyez bref et gardez une part de mystère qui pousseront les visiteurs à vous contacter pour en apprendre davantage sur vous. Cela fait partie des jeux de séduction !
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Si vous bloquez sur cette étape cruciale, demandez de l’aide à notre coach virtuel qui mettra toute son expertise à votre disposition pour vous conseiller à élaborer un profil qui se distingue des autres.
                </Text>

                <View style={{
                    marginTop:20,
                    flexDirection:'row',
                    marginHorizontal:20,
                    alignItems:'center'
                }}>
                    <Image source={{
                        uri:'https://last-chance-dating.com/public/assets/img/icones-01-01.png'
                    }} style={{
                        width:70,
                        height:70
                    }}></Image>
                    <Text style={{
                        fontSize:25,
                        color:'#00ccff',
                        marginHorizontal:15,
                        textAlign:'center'
                    }}>Respectez l’aspect visuel</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    La première chose que l’on regarde en premier sur un profil, c’est de voir si celui-ci possède une photo ou pas. Il est toujours plus intéressant de contacter une personne qui a mis une photo sur son profil, plutôt que de discuter avec un avatar vide qui n’a ni illustration, ni description.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Gardez à l’esprit que les membres inscrits sur Last-Chance-dating® sont tous des profils authentiques, soigneusement vérifiés par nos modérateurs dès leur inscription. Par conséquent, si vous ne mettez pas de photo, vous réduisez vos chances de faire une belle rencontre sur le site.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Ne soyez pas timide et mettez une photo simple et naturelle sur laquelle, on vous voit bien. C’est encore mieux si vous souriez sur la photo car cela démontre votre engouement et votre motivation à rencontrer la personne idéale.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Il est également important de noter que les photos qui sont hors charte ne seront pas admises et seront tout de suite supprimées par nos modérateurs. Vous pouvez vous faire aider par notre coach si vous ne parvenez pas à choisir la photo qui vous va le mieux.
                </Text>

                <View style={{
                    marginTop:20,
                    flexDirection:'row',
                    marginHorizontal:20,
                    alignItems:'center'
                }}>
                    <Image source={{
                        uri:'https://last-chance-dating.com/public/assets/img/icones-01-01-01.png'
                    }} style={{
                        width:70,
                        height:70
                    }}></Image>
                    <Text style={{
                        fontSize:25,
                        color:'#00ccff',
                        marginHorizontal:15,
                       
                    }}>Le pseudo, un élément important</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Le choix du nom de l’utilisateur est aussi un élément crucial dans l’aspect visuel de votre profil car après la photo, c’est ce qu’on regarde en second lieu. Bien que vous recherchiez une histoire sans lendemain, il est cependant inutile de mettre un pseudo trop révélateur au risque de vous faire passer pour un prédateur sexuel.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Il faut que votre nom d’utilisateur vous représente le mieux possible. Jouez sur les mots et n’hésitez pas non plus à miser sur la carte de l’humour.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                   On ne vous recommande pas de mettre des chiffres sur votre pseudo. Ce n’est plus à la mode et c’est ennuyeux ! Essayez de trouver des noms hybrides en ajoutant à votre prénom, votre film préféré par exemple (Philippeavengers) C’est un excellent moyen aussi d’attirer l’attention des autres sur cette préférence et de démarrer la conversation sur une belle entente.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                   Maintenant que vous savez comment bien remplir un profil, il ne vous reste plus qu’à vous inscrire gratuitement sur Last-Chance-dating® de faire ensuite, le test de personnalité et de découvrir les avantages que nous mettons à votre service, grâce à notre coach qui vous soutiendra tout au long de votre quête de l’amour.
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

            </ScrollView>
            </View>
 
            </View>
        );
    }
}