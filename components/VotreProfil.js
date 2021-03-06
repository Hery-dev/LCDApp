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
                }}>??a y est, vous avez enfin d??cid?? de prendre les choses en main et de partir ?? la <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}> conqu??te de l'amour</Text> , ou une histoire ??ph??m??re ? Avant de vous inscrire sur Last-Chance-dating??, vous devez penser ?? bien remplir votre profil, mais ce n???est pas chose facile. Qu???est-ce que vous allez y mettre ? Quelles sont les choses essentielles ?? ??crire sur vous pour vous mettre en valeur ? Un profil bien structur?? devra refl??ter au mieux vos attentes, mais ??galement vos traits de caract??res. Voici quelques astuces pour que votre profil soit le plus attractif possible.
                
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
                    }}>Les essentiels ?? savoir</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Un profil bien rempli est le garant d???une rencontre r??ussie ! C???est la premi??re ??tape ?? franchir sur Last-Chance-dating?? si vous voulez mettre toutes les chances de votre c??t??.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Il est tout de m??me important de noter que cette r??daction ne se fait pas ?? la l??g??re et ne s???improvise pas. En effet, ??laborer un profil attirant demande du temps et de la patience car vous ??tes sur le point de montrer aux autres membres qui vous ??tes r??ellement.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    La cl??, c???est de mettre en avant votre personnalit?? en ??crivant une br??ve description qui d??montre vos valeurs. Parlez de vos exp??riences, de vos v??cus, de vos ambitions et de vos attentes, le tout agr??ment?? d?????motions que l???on doit ressentir au fil de la lecture.
                </Text>

               <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Cependant, il est inutile de surcharger votre description. Soyez bref et gardez une part de myst??re qui pousseront les visiteurs ?? vous contacter pour en apprendre davantage sur vous. Cela fait partie des jeux de s??duction !
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Si vous bloquez sur cette ??tape cruciale, demandez de l???aide ?? notre coach virtuel qui mettra toute son expertise ?? votre disposition pour vous conseiller ?? ??laborer un profil qui se distingue des autres.
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
                    }}>Respectez l???aspect visuel</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    La premi??re chose que l???on regarde en premier sur un profil, c???est de voir si celui-ci poss??de une photo ou pas. Il est toujours plus int??ressant de contacter une personne qui a mis une photo sur son profil, plut??t que de discuter avec un avatar vide qui n???a ni illustration, ni description.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Gardez ?? l???esprit que les membres inscrits sur Last-Chance-dating?? sont tous des profils authentiques, soigneusement v??rifi??s par nos mod??rateurs d??s leur inscription. Par cons??quent, si vous ne mettez pas de photo, vous r??duisez vos chances de faire une belle rencontre sur le site.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Ne soyez pas timide et mettez une photo simple et naturelle sur laquelle, on vous voit bien. C???est encore mieux si vous souriez sur la photo car cela d??montre votre engouement et votre motivation ?? rencontrer la personne id??ale.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Il est ??galement important de noter que les photos qui sont hors charte ne seront pas admises et seront tout de suite supprim??es par nos mod??rateurs. Vous pouvez vous faire aider par notre coach si vous ne parvenez pas ?? choisir la photo qui vous va le mieux.
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
                       
                    }}>Le pseudo, un ??l??ment important</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Le choix du nom de l???utilisateur est aussi un ??l??ment crucial dans l???aspect visuel de votre profil car apr??s la photo, c???est ce qu???on regarde en second lieu. Bien que vous recherchiez une histoire sans lendemain, il est cependant inutile de mettre un pseudo trop r??v??lateur au risque de vous faire passer pour un pr??dateur sexuel.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Il faut que votre nom d???utilisateur vous repr??sente le mieux possible. Jouez sur les mots et n???h??sitez pas non plus ?? miser sur la carte de l???humour.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                   On ne vous recommande pas de mettre des chiffres sur votre pseudo. Ce n???est plus ?? la mode et c???est ennuyeux ! Essayez de trouver des noms hybrides en ajoutant ?? votre pr??nom, votre film pr??f??r?? par exemple (Philippeavengers) C???est un excellent moyen aussi d???attirer l???attention des autres sur cette pr??f??rence et de d??marrer la conversation sur une belle entente.
                </Text>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                   Maintenant que vous savez comment bien remplir un profil, il ne vous reste plus qu????? vous inscrire gratuitement sur Last-Chance-dating?? de faire ensuite, le test de personnalit?? et de d??couvrir les avantages que nous mettons ?? votre service, gr??ce ?? notre coach qui vous soutiendra tout au long de votre qu??te de l???amour.
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