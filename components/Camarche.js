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

export default class Camarche extends Component{
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
                        borderBottomWidth:4,
                        borderBottomColor:'#20c997'
                    }}>Comment ??a marche</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>

                Last-Chance-dating?? vient r??cemment de faire son entr??e en sc??ne en se pla??ant aux c??t??s des <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}> sites de rencontre en ligne s??rieux</Text>  les plus r??put??s. Nous visons tr??s haut en proposant aux c??libataires, un accompagnement et une assistance compl??te d??s leur inscription, jusqu????? la conclusion finale qui les a amen??s sur notre site. Un <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}> coach en s??duction</Text>  efficace et sympathique, des services innovants et des milliers de profils d???hommes et de femmes compatibles ?? toutes les attentes font de Last-Chance-dating?? une v??ritable r??f??rence en mati??re de site de rencontre en ligne. D??couvrez <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}> comment ??a marche</Text>  en 3 ??tapes seulement.
                </Text>

                <View style={{
                    alignItems:'center',
                    backgroundColor:'white',
                    paddingVertical:35
                }}>
                    <Text style={{
                        paddingVertical:10,
                        fontSize:30,
                        color:'#0066ff'
                    }}>Je m???inscris gratuitement</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Avec Last-Chance-dating??, vivez une exp??rience in??dite sur une plateforme ludique qui vous met en relation avec les personnes qui vous sont compatibles afin de les rencontrer dans le monde r??el. Comme presque la plupart des 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> applications de rencontres</Text> 
                    , l???inscription sur Last-Chance-dating?? est enti??rement gratuite. Il n???y a pas d???engagement et vous ne paierez pas le moindre sou. Tout ce que vous avez ?? faire, c???est de compl??ter les cases par les informations qui vous concernent. Cela nous permet de savoir qui vous ??tes, quelles sont vos attentes et ce que nous pouvons faire pour vous aider en cas de besoin. Vous n???avez rien ?? craindre, vos donn??es sont enti??rement s??curis??es et nous n???avons pas l???intention de les utiliser ?? des fins commerciales (voir politique de confidentialit?? ) Apr??s votre inscription, vous pouvez d??sormais cr??er votre propre 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> profil </Text> 
                 en y ajoutant des photos, une petite description sur vous et publier votre annonce pour chercher et trouver rapidement une personne qui vous correspond. Ne laissez rien au hasard et demandez assistance ?? notre 
                 <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> coach </Text> 
                 si vous ne trouvez pas quoi ??crire et quoi mettre sur votre profil. Last-Chance-dating?? prend soin de ses abonn??s. Soucieux de vous offrir la meilleure prestation qui soit, apr??s votre inscription, vous b??n??ficiez d'une consultation en illimit?? de profils, de 7 messages dating gratuits ainsi que de 5 minutes de consultation coaching. Du jamais vu sur les autres sites de rencontre ! Profitez-en pour d??nicher la perle rare mais si vous voulez conqu??rir son c??ur, il va cependant falloir vous souscrire ?? un abonnement qui vous fera profiter d???innombrables avantages.
                </Text>

                <View style={{
                    alignItems:'center',
                    backgroundColor:'white',
                    paddingVertical:35
                }}>
                    <Text style={{
                        paddingVertical:10,
                        fontSize:30,
                        color:'#0066ff'
                    }}>Je d??couvre les profils</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Une fois inscrit, vous avez le choix si vous voulez faire ou non le 
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}> test de personnalit?? </Text>
                , mais il est tout de m??me conseill?? d???y avoir recours pour optimiser vos chances de trouver la perle rare dans les meilleurs d??lais. En r??pondant ?? une vingtaine de questionnaires qui portent sur votre personnalit?? et vos traits de caract??re, le syst??me de matchmaking de Last-Chance-dating?? se charge de vous dresser une liste de profils de membres qui poss??dent les m??mes appartenances sociales et culturelles que vous. Les m??mes centres d???int??r??ts et plus encore, les m??mes attentes que ce soit pour une relation durable, passag??re ou amicale. Son efficacit?? a ??t?? test??e et approuv??e par nos sp??cialistes en psychologie et c???est le meilleur moyen d?????tablir un premier contact prometteur, plut??t que de perdre votre temps ?? scruter chaque profil, en sachant que plus d???une centaine de membres viennent nous rejoindre chaque jour. Choisissez la personne qui vous semble parfaite et commencez ?? discuter en toute s??curit?? sur notre site en vous faisant aider par notre coach si vous rencontrez des difficult??s, quelles qu???elles soient.    
                </Text>

                <View style={{
                    alignItems:'center',
                    backgroundColor:'white',
                    paddingVertical:35
                }}>
                    <Text style={{
                        paddingVertical:10,
                        fontSize:30,
                        color:'#0066ff',
                        marginHorizontal:30
                    }}>Je rencontre la personne id??ale</Text>
                </View>

                <Text style={{
                    marginHorizontal:20,
                    textAlign:'justify',
                    marginTop:20,
                    fontSize:20
                }}>
                    Avec Last-Chance-dating??, vivez une exp??rience in??dite sur une plateforme ludique qui vous met en relation avec les personnes qui vous sont compatibles afin de les rencontrer dans le monde r??el. Comme presque la plupart des applications de rencontres, l???inscription sur Last-Chance-dating?? est enti??rement gratuite. Il n???y a pas d???engagement et vous ne paierez pas le moindre sou. Tout ce que vous avez ?? faire, c???est de compl??ter les cases par les informations qui vous concernent. Cela nous permet de savoir qui vous ??tes, quelles sont vos attentes et ce que nous pouvons faire pour vous aider en cas de besoin. Vous n???avez rien ?? craindre, vos donn??es sont enti??rement s??curis??es et nous n???avons pas l???intention de les utiliser ?? des fins commerciales (voir politique de confidentialit??) Apr??s votre inscription, vous pouvez d??sormais cr??er votre propre profil en y ajoutant des photos, une petite description sur vous et publier votre annonce pour chercher et trouver rapidement une personne qui vous correspond. Ne laissez rien au hasard et demandez assistance ?? notre coach si vous ne trouvez pas quoi ??crire et quoi mettre sur votre profil.
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