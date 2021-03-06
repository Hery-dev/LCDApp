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
                    }}>Last-chance-dating.com : un site de rencontres con??u pour les c??libataires qui ont besoin de conseils des professionnels en s??duction</Text>
                
                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Lanc?? r??cemment sur le march?? des love dating ou rencontres amoureuses, 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> last-Chance-dating.com </Text>  est un  
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> site de rencontres </Text>  s??rieux ?? fortes potentialit??s qui d??ploie une large gamme de fonctionnalit??s: tchat rencontre g??olocalis??e, coaching en s??duction, tchat vid??o en priv??e, etc. pour vous permettre de trouver la perle rare en un temps record ! Plongez au c??ur de 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> last-Chance-dating.com </Text> , d??couvrez tous nos 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> professionnels en s??duction </Text>  qui vont vous aider ?? franchir le pas. Vous pourriez enfin dire adieu ?? votre vie de 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> c??libataire </Text> ... d??s aujourd'hui !
                
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
                    }}>Last-chance-dating.com : une exp??rience hors du commun avec nos coaches en s??duction</Text>
                
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
                    }}> sites de rencontres </Text>  constituent pour la plupart des Fran??ais et m??me pour toutes les personnes du monde entier, un bon moyen de trouver l'amour d'une autre mani??re que le contact physique. Ils permettent de cr??er une autre forme d'??changes en se basant sur l'interaction ?? distance et favorisent la cr??ation de liens qui se d??veloppent au fur et ?? mesure que les 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> affinit??s  </Text> prennent de l'ampleur entre les deux parties.!
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Cependant, malgr?? cette complicit??, diff??rents facteurs peuvent entrer en jeu, rendant ainsi la rencontre avec la personne voulue plus ou moins compliqu??e selon les circonstances. Les contraintes g??ographiques, le manque de temps ou tout simplement le blocage dans les expressions sont autant de freins qui ralentissent l'??panouissement de la relation pour finir, un peu plus tard, dans les oubliettes !
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Ayant pris conscience du d??sespoir des utilisateurs qui n'arrivent pas ?? trouver leur part du bonheur sur les autres 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> sites de rencontre  </Text> ,
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> last-chance-dating.com  </Text>  a d??cid?? de prendre les devants et de mettre ?? votre disposition, la meilleure exp??rience qui soit pour vous assister dans votre qu??te de l'amour : nos 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> coaches en s??duction ou nos conseillers en s??duction   </Text>
                
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Ils auront pour t??che principale de vous assister dans votre d??marche afin de trouver votre future(e) partenaire. Ils vous prodigueront les meilleurs conseils et approches. Ils seront en quelque sorte votre compagnon d'arme ! Vous aider ?? avoir un rendez-vous amoureux sera votre leitmotiv !
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Nous mettons donc ?? votre disposition des personnes sp??cialis??es dans les 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> relations amoureuses </Text>  qui poss??dent les qualifications requises pour vous assister, vous ??couter, vous accompagner. Si vous rencontrez des difficult??s pour conclure, pour lui dire les mots-justes ou pour trouver une id??e originale lors d'une premi??re rencontre, nos 
                
                <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                }}> coaches en s??duction </Text>  prendront le temps d???examiner vos besoins et ceux de votre partenaire pour mieux cerner la probl??matique.

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
                    }}> coaches en love dating </Text>  vous fourniront des conseils avis??s qui vont d??gager les nuages noirs porteurs de mauvaises ondes. Si vous suivez bien leurs conseils, votre relation n'en sera que plus ??panouie. Ce sera pour vous, le d??but d'une belle histoire d'amour que vous pouvez t??moigner, ?? votre tour,sur 
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
                }}>Last-chance-dating.com : un site de rencontres con??u pour les c??libataires qui ont besoin de conseils des professionnels en s??duction</Text>
                
                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Que serait un site de rencontre sans les principales fonctionnalit??s qui, avec le soutien de nos 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> coaches en s??duction </Text> , augmenteront davantage vos chances de faire de belles rencontres ?
                
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Si c'est votre premier pas sur last-Chance-dating.com, d??couvrez sans attendre, comment ??a marche en 3 ??tapes seulement. C'est tr??s facile de cerner les bases, m??me pour les d??butants. Vous vous apercevrez tr??s vite qu'il n'y a rien de compliquer ?? s'inscrire gratuitement sur le site ou ?? cr??er un bon profil qui vous met r??ellement en valeur.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Pour faciliter encore plus votre recherche, vous avez ??galement ?? votre disposition, le test de personnalit??. V??ritable r??volution dans l'univers du love dating, ce syst??me de mise en relation tr??s performant se base sur les affinit??s des membres pour leur permettre de perdre moins de temps ?? visiter tous les autres profils.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    En r??pondant de la mani??re la plus sinc??re possible aux questionnaires ??tablis par nos sp??cialistes en psychologie, notre site se chargera de vous dresser une liste de profils-type qui vous correspondent au mieux en fonction de vos r??elles motivations et de votre personnalit??.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Last-Chance-dating??, c???est aussi une vaste encyclop??die pour les c??libataires qui regroupe les conseils de s??duction les plus efficaces. Elle a ainsi permis ?? nos membres, d'??tablir le premier contact dans les meilleures conditions et d'instaurer un climat de confiance pour bien d??marrer une relation. D??couvrez-les et devenez un v??ritable bourreau des c??urs !
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