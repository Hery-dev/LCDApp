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

export default class Last extends Component{
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
                    
                }}>
                    <Image source={{
                        uri:'https://last-chance-dating.com/public/assets/img/home-01.png'
                    }} style={{
                        width:Dimensions.get("window").width-20,
                        height:600
                    }}></Image>

                <View style={{
                    alignItems:'center',
                    backgroundColor:'white',
                    paddingVertical:50
                }}>
                    <Text style={{
                        paddingVertical:10,
                        fontSize:30,
                        fontWeight:'bold',
                        borderBottomWidth:4,
                        borderBottomColor:'#20c997',
                        marginHorizontal:20,
                        textAlign:'justify'
                    }}>Last-chance-dating.com : un site de rencontres conçu pour les célibataires qui ont besoin de conseils des professionnels en séduction</Text>
                
                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Lancé récemment sur le marché des love dating ou rencontres amoureuses, 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> last-Chance-dating.com </Text>  est un  
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> site de rencontres </Text>  sérieux à fortes potentialités qui déploie une large gamme de fonctionnalités: tchat rencontre géolocalisée, coaching en séduction, tchat vidéo en privée, etc. pour vous permettre de trouver la perle rare en un temps record ! Plongez au cœur de 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> last-Chance-dating.com </Text> , découvrez tous nos 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> professionnels en séduction </Text>  qui vont vous aider à franchir le pas. Vous pourriez enfin dire adieu à votre vie de 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> célibataire </Text> ... dès aujourd'hui !
                
                </Text>

                <Text style={{
                        marginTop:20,
                        paddingVertical:10,
                        fontSize:30,
                        fontWeight:'bold',
                        borderBottomWidth:4,
                        borderBottomColor:'#20c997',
                        marginHorizontal:20,
                        textAlign:'justify'
                    }}>Last-chance-dating.com : une expérience hors du commun avec nos coaches en séduction</Text>
                
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}> 
                    Depuis quelque temps, les 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> sites de rencontres </Text>  constituent pour la plupart des Français et même pour toutes les personnes du monde entier, un bon moyen de trouver l'amour d'une autre manière que le contact physique. Ils permettent de créer une autre forme d'échanges en se basant sur l'interaction à distance et favorisent la création de liens qui se développent au fur et à mesure que les 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> affinités  </Text> prennent de l'ampleur entre les deux parties.!
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Cependant, malgré cette complicité, différents facteurs peuvent entrer en jeu, rendant ainsi la rencontre avec la personne voulue plus ou moins compliquée selon les circonstances. Les contraintes géographiques, le manque de temps ou tout simplement le blocage dans les expressions sont autant de freins qui ralentissent l'épanouissement de la relation pour finir, un peu plus tard, dans les oubliettes !
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Ayant pris conscience du désespoir des utilisateurs qui n'arrivent pas à trouver leur part du bonheur sur les autres 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> sites de rencontre  </Text> ,
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> last-chance-dating.com  </Text>  a décidé de prendre les devants et de mettre à votre disposition, la meilleure expérience qui soit pour vous assister dans votre quête de l'amour : nos 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> coaches en séduction ou nos conseillers en séduction   </Text>
                
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Ils auront pour tâche principale de vous assister dans votre démarche afin de trouver votre future(e) partenaire. Ils vous prodigueront les meilleurs conseils et approches. Ils seront en quelque sorte votre compagnon d'arme ! Vous aider à avoir un rendez-vous amoureux sera votre leitmotiv !
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Nous mettons donc à votre disposition des personnes spécialisées dans les 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> relations amoureuses </Text>  qui possèdent les qualifications requises pour vous assister, vous écouter, vous accompagner. Si vous rencontrez des difficultés pour conclure, pour lui dire les mots-justes ou pour trouver une idée originale lors d'une première rencontre, nos 
                
                <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                }}> coaches en séduction </Text>  prendront le temps d’examiner vos besoins et ceux de votre partenaire pour mieux cerner la problématique.

                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Ensuite, nos 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> coaches en love dating </Text>  vous fourniront des conseils avisés qui vont dégager les nuages noirs porteurs de mauvaises ondes. Si vous suivez bien leurs conseils, votre relation n'en sera que plus épanouie. Ce sera pour vous, le début d'une belle histoire d'amour que vous pouvez témoigner, à votre tour,sur 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> last-Chance-dating.com</Text>.
                </Text>

                <Image source={{
                    uri:'https://last-chance-dating.com/public/assets/img/femme-01.png'
                }} style={{
                    width:Dimensions.get("window").width-20,
                    height:600
                }}></Image>

                <Text style={{
                        paddingVertical:10,
                        fontSize:30,
                        fontWeight:'bold',
                        marginHorizontal:20,
                        textAlign:'justify'
                }}>Last-chance-dating.com : un site de rencontres conçu pour les célibataires qui ont besoin de conseils des professionnels en séduction</Text>
                
                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Que serait un site de rencontre sans les principales fonctionnalités qui, avec le soutien de nos 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> coaches en séduction </Text> , augmenteront davantage vos chances de faire de belles rencontres ?
                
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Si c'est votre premier pas sur last-Chance-dating.com, découvrez sans attendre, comment ça marche en 3 étapes seulement. C'est très facile de cerner les bases, même pour les débutants. Vous vous apercevrez très vite qu'il n'y a rien de compliquer à s'inscrire gratuitement sur le site ou à créer un bon profil qui vous met réellement en valeur.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Pour faciliter encore plus votre recherche, vous avez également à votre disposition, le test de personnalité. Véritable révolution dans l'univers du love dating, ce système de mise en relation très performant se base sur les affinités des membres pour leur permettre de perdre moins de temps à visiter tous les autres profils.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    En répondant de la manière la plus sincère possible aux questionnaires établis par nos spécialistes en psychologie, notre site se chargera de vous dresser une liste de profils-type qui vous correspondent au mieux en fonction de vos réelles motivations et de votre personnalité.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Last-Chance-dating®, c’est aussi une vaste encyclopédie pour les célibataires qui regroupe les conseils de séduction les plus efficaces. Elle a ainsi permis à nos membres, d'établir le premier contact dans les meilleures conditions et d'instaurer un climat de confiance pour bien démarrer une relation. Découvrez-les et devenez un véritable bourreau des cœurs !
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