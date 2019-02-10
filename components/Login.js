import React, {Component} from 'react';
import {
    Platform,
    NetInfo,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    StatusBar,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
    ImageBackground,
    Alert,
    ActivityIndicator,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {BoxShadow} from 'react-native-shadow';
var SharedPreferences = require('react-native-shared-preferences');
import axios from 'axios';

export default class Login extends Component {
    login(){
        if(this.state.isConnected){
        this.setState({loading: true})
        var bodyParameters = {
            email: this.state.email,
            password: this.state.password,
        }
 /*      axios.post(
           'http://10.0.2.2:8000/api/login',
           bodyParameters
       ).then((response) => {
        this.setState({loading: false})
        SharedPreferences.setItem("key1",response.data.success.token);
        SharedPreferences.setItem("key2",JSON.stringify(response.data.success.id));
        this.props.navigation.navigate('Land', {
            name: this.state.email
        });      
       }).catch((error) => {
        this.setState({loading: false});
        if(error.response && typeof error.response !== "undefined"){
         Alert.alert(
            'Error',
             JSON.stringify(error.response.data.error?error.response.data.error:'Connectivity Problems, please try again later'),
            [
              {text: 'OK'},
            ],  ); 
                  
        }else{
            Alert.alert(
                'Error',
                 'Internal Server Error, please try again later',
                [
                  {text: 'OK'},
                ],  );     
        }
              
       });*/
       
    }
    }
   
    constructor(props) {
        super(props);
        this.state = {
            schools: this.schools,
            index: -1,
            text: '',
            pressed: false,
            showPassword: true,
            email: '',
            password: '',
            loading: false,
            isConnected: true,
            token: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.schoolChange = this.schoolChange.bind(this);
    }

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
      //  SharedPreferences.removeItem("key"); 
        SharedPreferences.getItem("key1", function(value){
            console.log(value);
          });
      }
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
      }
    handleConnectivityChange = isConnected => {
        if (isConnected) {
          this.setState({ isConnected });
        } else {
          this.setState({ isConnected });
        }
      };
    update(index) {
        console.log(index);
    }

    handlePressedIn(index) {
        this.props.navigation.navigate('Land', {});
        this.setState({index}, () => {
            this.update(this.state.index)
        })
    }

    schoolChange(text) {
        const schools = this.schools.filter(school => school.toUpperCase().includes(text.toUpperCase()));
        this.setState({
            schools,
        });
    }

    handleChange(email) {
        this.setState({email});
    }
    handlePassword(password){
        this.setState({password}); 
    }
    onP(){

        this.props.navigation.navigate('Signup', {
        })};
    render() {
        const { navigate } = this.props.navigation;
        const shadowOpt = {
            color: "#000",
            border: 12,
            opacity: '0.08',
            radius: 12,
            x: 0,
            y: 1,
        }
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' translucent={true} barStyle='dark-content'/>
                <View style={styles.header}>
                    <View style={{
                        marginTop: 60, width: 79, height: 38, backgroundColor: '#EFB879',
                        position: 'absolute', right: 0
                    }}>
                        <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                               source={require('../frect.png')}>
                        </Image>
                        <View style={{
                            width: 8, height: 14, backgroundColor: '#385C8E',
                            position: 'absolute', left: 0, top: '30%',
                            marginLeft: 20
                        }}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../big_f.png')}/>
                        </View>
                        <TouchableNativeFeedback><View style={{
                            width: 44, height: 38, backgroundColor: '#385C8E',
                            position: 'absolute', right: 0
                        }}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../rect_2.png')}/>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={{
                                width: 18, height: 12, backgroundColor: '#fff',
                                position: 'absolute', right: 10, top: '30%',
                                marginLeft: 10
                            }}>
                                <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                       source={require('../new_gg.png')}/>
                            </View></TouchableNativeFeedback>
                    </View><View style={{
                    height: 42, width: 72,
                    backgroundColor: '#EFB879', marginTop: '29.84%',
                    alignSelf: 'center'
                }}>
                    
                    <Text style={{
                        fontFamily: 'mont-bold',
                        fontSize: 34,
                        color: '#fff'
                    }}>
                        sẹlẹ
                    </Text>
                </View>
                    <View style={{
                        width: '83.33%',
                        height: 120,
                        backgroundColor: '#fff',
                        position: 'absolute',
                        bottom: 0,
                        alignSelf: 'center',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                    }}>
                        <View style={{
                            width: '100%',
                            height: 60,
                            backgroundColor: '#fff',
                            borderBottomWidth: 0.7,
                            borderColor: '#d9d8d8',
                            borderTopRightRadius: 6,
                            borderTopLeftRadius: 6,
                        }}>
                            <TextInput 
                            placeholder="Email"
                                       placeholderStyle={{fontSize: 14, fontFamily: 'mont'}}
                                       placeholderTextColor="#615D5D"
                                       value={this.state.email}
                                       onChangeText={(email) => this.handleChange(email)}
                                       underlineColorAndroid={'transparent'}
                                       style={{
                                           alignSelf: 'center',
                                           flex: 1,
                                           paddingTop: 10,
                                           paddingRight: 10,
                                           paddingBottom: 10,
                                           width: '85%',
                                           paddingLeft: 0,
                                           padding: 4,
                                           backgroundColor: '#fff',
                                           fontSize: 14, fontFamily: 'mont', color: '#615D5D',
                                       }}/>
                        </View>
                        <View style={{
                            width: '100%',
                            height: 60,
                            backgroundColor: '#fff',
                            justifyContent: 'center'
                        }}>
                            <TextInput placeholder="Password"
                                       placeholderStyle={{fontSize: 14, fontFamily: 'mont'}}
                                       placeholderTextColor="#615D5D"
                                       value={this.state.password}
                                       onChangeText={(password) => this.handlePassword(password)}
                                       underlineColorAndroid={'transparent'}
                                       secureTextEntry={this.state.showPassword}
                                       style={{
                                           alignSelf: 'center',
                                           flex: 1,
                                           paddingTop: 10,
                                           paddingRight: 25,
                                           paddingBottom: 10,
                                           width: '85%',
                                           paddingLeft: 0,
                                           padding: 4,
                                           backgroundColor: '#fff',
                                           fontSize: 14, fontFamily: 'mont', color: '#615D5D',
                                       }}/>
                            <TouchableNativeFeedback onPress={
                                () => this.setState({showPassword: !this.state.showPassword})
                            }>
                                <View style={{
                            width: 18, height: 11, backgroundColor: this.state.showPassword?'transparent':'black',
                            position: 'absolute', right: 25
                        }}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../eye.png')}/>
                        </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
                <TouchableNativeFeedback onPress={this.login.bind(this)}>
                <View style={{
                    width: '83.36%',
                    height: 60,
                    backgroundColor: '#EFB879',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomRightRadius: 6,
                    borderBottomLeftRadius: 6,
                }}>
                    {this.state.loading?
                        <ActivityIndicator animating={true} size='large' color="#fff"/>
                    :<Text style={{
                        fontFamily: 'mont-semi',
                        fontSize: 16,
                        color: '#fff'
                    }}>
                        SIGN IN
                    </Text>}
                </View>
                </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('ForgotPassword')}>
                    <Text style={{
                        color: '#615D5D',
                        fontFamily: 'mont-medium',
                        fontSize: 14,
                        alignSelf: 'center',
                        marginTop: '20%'
                    }}>
                        Forgot Password?
                    </Text></TouchableNativeFeedback>
                <View
                style={{
                    height: 0,
                    width: 120,
                    borderBottomWidth: 1.2,
                    borderColor: '#d9d8d8',
                    alignSelf: 'center',
                    marginTop: '30%'
                }}>
                </View>
                <View style={{width: '100%',
                height: 2,flexDirection: 'row',
                  //  alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: '5%'}}>
                    <Text style={{
                    color: '#615D5D',
                    fontFamily: 'mont-medium',
                    fontSize: 14,
                    alignSelf: 'center',
                }}>
                    Don't have an account? </Text>
                <TouchableNativeFeedback
                    onPressIn={() => this.setState({pressed: !this.state.pressed})}
                    onPressOut={() => this.setState({pressed: !this.state.pressed})}
                    onPress={this.onP.bind(this)}>
                    <Text
                    style={{
                        color: '#EFB778',
                        fontFamily: 'mont-medium',
                        fontSize: this.state.pressed? 16: 14,
                        alignSelf: 'center',}}>
                    SIGN UP
                </Text>
                </TouchableNativeFeedback>
                </View>
                {!this.state.isConnected?<View style={styles.internet}>
                 <Text style={styles.intText}>
                     No Internet Connection detected
                 </Text>  
                </View>: null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    internet: {
     position: 'absolute',
     bottom: 0,
     backgroundColor: '#615D5D',
     width: '100%',
     height: 50,
     paddingLeft: 10,
     paddingTop: 10
    },
    intText:{
        color: '#fff',
        fontFamily: 'mont',
        fontSize: 14
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
        //  alignItems: 'center',
    },
    header: {
        width: '100%',
        height: '50%',
        backgroundColor: '#EFB879',
    }
});