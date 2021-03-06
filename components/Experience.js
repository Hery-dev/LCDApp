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

export default class Experience extends Component{
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
                    <View style={{
                        alignItems:'center',
                        backgroundColor:'white',
                        paddingVertical:50
                    }}>
                    <Text style={{
                        paddingVertical:10,
                        fontSize:35,
                        color:'#EE82EE',
                        borderBottomWidth:4,
                        borderBottomColor:'#20c997',
                        borderTopWidth:4,
                        borderTopColor:'#20c997',
                        textAlign:'center',
                        marginHorizontal:70
                    }}>CONSEILS DE SEDUCTION</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Sur les 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> sites de rencontre</Text>, il ne suffit pas de dire que sa photo vous pla??t ou que la couleur de ses yeux vous s??duit pour que la personne qui vous int??resse vous tombe dans les bras. Au-del?? de la simple attirance physique, il existe d???autres param??tres ?? prendre en consid??ration et ?? respecter pour maximiser vos chances de faire une belle rencontre. D??couvrez-les dans cette rubrique et devenez un grand s??ducteur, et pourquoi pas une grande s??ductrice !
                </Text>

                <View style={{
                    alignItems:'center',
                    backgroundColor:'#eeeeee',
                    borderWidth:2,
                    borderColor:'black'
                }}>
                    <Image source={{
                        uri:'https://last-chance-dating.com/public/assets/img/img_cercle_1-01.png'
                    }} style={{
                        width:300,
                        height:300,
                        borderRadius:150,
                        marginTop:50
                    }}></Image>
                    <Image source={{
                        uri:'https://last-chance-dating.com/public/assets/img/img_cercle_1-01-01.png'
                    }} style={{
                        width:300,
                        height:300,
                        borderRadius:150
                    }}></Image>
                    <Image source={{
                        uri:'https://last-chance-dating.com/public/assets/img/img_1.png'
                    }} style={{
                        width:300,
                        height:300,
                        borderRadius:150
                    }}></Image>
                    <Image source={{
                        uri:'https://last-chance-dating.com/public/assets/img/image_2.png'
                    }} style={{
                        width:300,
                        height:300,
                        borderRadius:150
                    }}></Image>
                </View>

                <Text style={{
                    fontWeight:'bold',
                    fontSize:25,
                    marginHorizontal:20,
                    marginTop:50
                }}>Meisez sur l'originalit?? !
                </Text>
                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Avec plus de 12 millions de c??libataires en France, les 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> sites de rencontre </Text> sont devenus depuis quelques ann??es, le principal outil de s??duction pour draguer et rencontrer la personne id??ale. Quand on s???inscrit sur un site, on se demande toujours quel genre d???approche adopter pour ??tre au top et se distinguer des autres.

                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    La premi??re ??tape, c???est de bien s??r, mettre un profil original qui devrait envoyer un signal positif aux visiteurs. Choisissez un pseudo coquet et ayez le sens de l?????criture en ??laborant une br??ve description qui vous met en valeur et qui traduit une part de votre personnalit?? tout en laissant un peu de myst??re derri??re vous.

                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Dans la drague, le myst??re est bien connu de tous et c???est un excellent moyen pour ajouter une touche d???originalit?? ?? vos conversations. Le but ici ??tant d?????merveiller votre interlocuteur par des phrases qui vous sont propres, des phrases accrocheuses et sans fautes d???orthographe qui r??veillent sa curiosit?? et lui oblige ?? en savoir un peu plus sur vous.
                </Text>

                <Text style={{
                    fontWeight:'bold',
                    fontSize:25,
                    marginHorizontal:20,
                    marginTop:50
                }}>Donnez vie au dialogue !
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Sur les sites de rencontre, parler de la pluie et du beau temps est un bon moyen d???introduire la conversation, mais s?????terniser sur des sujets anodins n???est pas la meilleure mani??re de conclure une 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> rencontre s??rieuse </Text> en ligne sur 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> Last-Chance-dating?? </Text>
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Les membres inscrits sur notre plateforme sont pour la plupart, des 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> c??libataires  </Text> qui ne veulent pas perdre leur temps et sont r??ellement engag??s dans leur qu??te. Que ce soit pour rencontrer l?????me-s??ur ou une histoire ??ph??m??re, ils n???ont qu???un seul objectif : Rencontrer rapidement l?????tre ??lu !
                
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    La recette ? Donnez vie ?? vos conversations et mettez en valeur vos atouts romantiques et po??tiques. Certes, trouver les expressions id??ales n???est pas ?? la port??e de tout le monde. C???est pour cette raison que nous mettons ?? votre disposition, notre 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> coach en love dating  </Text>  qui fera ressortir en vous, le meilleur de vous-m??me et de s??duire la personne qui vous int??resse vraiment parmi les profils compatibles qui vous seront propos??s apr??s avoir fait le 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> test de personnalit??.  </Text>
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Un dialogue qui a de l???importance vis-??-vis des deux parties, c???est un dialogue qui parle des int??r??ts communs, des attentes mutuelles et des ambitions que l???on partage dans une vraie vie ?? deux.
                </Text>

                <Text style={{
                    fontWeight:'bold',
                    fontSize:25,
                    marginHorizontal:20,
                    marginTop:50
                }}>Ce qu'il faut et ce qu'il ne faut pas faire
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Quand on s???inscrit sur un 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> site de rencontre</Text>, bien s??r, l???objectif principal est de conclure une belle rencontre dans un laps de temps tr??s bref. Autrement dit, passer rapidement du monde virtuel au monde r??el.

                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    C???est compr??hensible quand on tient compte du manque de temps et des difficult??s impos??es par le rythme du quotidien auquel nous sommes tous confront??s. C???est ce qu???il y a de plus normal et cela permet de faire avancer une relation beaucoup plus rapidement. Toutefois, les circonstances peuvent changer en fonction des personnes qui s???adressent ?? vous.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Ne forcez pas la rencontre quand vous sentez que votre interlocuteur n???est pas encore pr??t ?? franchir le pas, mais sachez ??galement imposer vos propres limites. L???id??al c???est de lui faire comprendre que vous n???avez pas de temps ?? perdre, mais d???une mani??re courtoise.

                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Le harc??lement est votre pire ennemi ! ??vitez d???envoyer des messages ?? tonalit?? n??gative et essayez d???accorder de l???importance ?? ses sentiments et ?? ses v??cus.

                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Essayez de trouver un terrain d???entente qui ne devrait pas d??passer les 15 jours, suivant le d??but de vos ??changes sur Last-Chance-dating??. Misez vos meilleurs atouts dans ce laps de temps et faites-lui comprendre ce que vous d??sirez vraiment et ce que vous souhaitez vivre avec lui (elle)
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Si vous sentez que la perle rare est en train de vous ??chapper, pas de panique ! Notre 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> coach </Text>  virtuel est l?? pour vous assister et vous aider ?? adopter le comportement id??al pour ne pas laisser filer l???amour de votre vie.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Ne baissez pas les bras aussi vite ! Last-Chance-dating?? met ?? votre disposition, notre savoir-faire et notre expertise pour que vous ne vous sentirez jamais plus seul et que vous rencontreriez rapidement l?????lu(e) de votre c??ur aussi vite que possible. Faites-nous confiance !
                </Text>

                <Text style={{
                    fontWeight:'bold',
                    fontSize:25,
                    marginHorizontal:20,
                    marginTop:50
                }}>Restez vous-m??me !
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Malgr?? tous les conseils qu???on vous a prodigu??s jusqu???ici, vous devez tenir compte que le secret de la s??duction sur un 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> site de rencontre en ligne</Text>, c???est que vous restiez fid??le ?? vous-m??me !

                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Les conseils et astuces fournis par notre 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> coach </Text>virtuel servent uniquement de r??f??rence pour vous mettre en confiance. Il n???y a pas de recette miracle, ni de proc??d??s parfaits pour que votre interlocuteur tombe sous votre charme.

                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    L???unique obstacle qui vous emp??che de vous d??voiler et d?????tre sinc??re envers vous-m??me, c???est la crainte de ne pas ??tre ?? la hauteur. N???h??sitez surtout pas ?? poser des questions intrigantes, m??me si elles portent sur des sujets sensibles et r??pondez sinc??rement ?? votre tour si on vous en pose.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Gardez ?? l???esprit que la franchise est le garant d???une relation ??panouie. Plus vous ouvrez votre c??ur, plus grandes sont vos chances d?????tablir un lien profond avec la personne qui est en contact avec vous.

                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    Une complicit?? durable se construit autour du partage des int??r??ts communs. N???essayez surtout pas de jouer un r??le et de vous faire passer pour quelqu???un que vous n?????tes pas. Soyez franc envers vous-m??me et restez fid??le ?? vos principes.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    fontSize:20,
                    marginTop:20,
                    textAlign:'justify'
                }}>
                    C???est le secret pour r??ussir sur Last-Chance-dating?? et de t??moigner un amour naissant dont vous seul, en poss??dez les secrets !
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