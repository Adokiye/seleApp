import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    StatusBar,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
    ImageBackground,
    ActivityIndicator,
    Picker,
    Alert,
    NetInfo,
    View
} from 'react-native';
var SharedPreferences = require('react-native-shared-preferences');
import {connect} from "react-redux";
import {
    trueBrowse, trueCart, trueHome, trueMessages, trueServices, falseBrowse,
    falseCart, falseHome, falseMessages, falseServices,trueGoods,
    falseGoods, changeName
} from "../actions/index";

const mapStateToProps = state => {
    return {
        home: state.home,
        browse: state.browse,
        cart: state.cart,
        messages: state.messages,
        services: state.services,
        goods: state.goods,
        name: state.name
    };
};
const mapDispatchToProps = dispatch => {
    return {
        trueBrowse: browse => dispatch(trueBrowse(browse)),
        trueServices: services => dispatch(trueServices(services)),
        trueHome: home => dispatch(trueHome(home)),
        trueMessages: messages => dispatch(trueMessages(messages)),
        trueCart: cart => dispatch(trueCart(cart)),
        falseServices: services => dispatch(falseServices(services)),
        falseMessages: messages => dispatch(falseMessages(messages)),
        falseHome: home => dispatch(falseHome(home)),
        falseCart: cart => dispatch(falseCart(cart)),
        falseBrowse: browse => dispatch(falseBrowse(browse)),
        trueGoods: goods => dispatch(trueGoods(goods)),
        falseGoods: goods => dispatch(falseGoods(goods)),
        changeName: name => dispatch(changeName(name))
    };

};
const window = Dimensions.get('window');

 class reduxSignup extends Component {
    handleEmail(email) {
        this.setState({email});
    }
    handlePassword(password){
        this.setState({password}); 
    }
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
    reg(){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if((this.state.isConnected)){
            if(!this.state.gender){
                Alert.alert(
                    'Error',
                    'Please Select your gender',
                    [
                      {text: 'OK'},
                    ],  );    
            }
            else if(!this.state.id){
                Alert.alert(
                    'Error',
                    'Please Select An institute from the list provided',
                    [
                      {text: 'OK'},
                    ],  );  
            }
            else if(reg.test(this.state.email) === false)
            {
            Alert.alert(
                'Error',
                'Valid Email address is required',
                [
                  {text: 'OK'},
                ],  ); 
           }
           else if (this.state.password.length < 8) {
            Alert.alert(
                'Error',
                'Password is too short, It must be up to 8 characters',
                [
                  {text: 'OK'},
                ],  ); 
        } else if (this.state.password.length > 50) {
            Alert.alert(
                'Error',
                'Password is too long, It must not be up to 50 characters',
                [
                  {text: 'OK'},
                ],  ); 
        } else if (this.state.password.search(/\d/) == -1) {
            Alert.alert(
                'Error',
                'Password must contain at least one digit',
                [
                  {text: 'OK'},
                ],  ); 
        } else if (this.state.password.search(/[a-zA-Z]/) == -1) {
            Alert.alert(
                'Error',
                'Password must contain at least one letter',
                [
                  {text: 'OK'},
                ],  ); 
        } else if (this.state.password.search(/[^a-zA-Z0-9]/) != -1) {
            Alert.alert(
                'Error',
                'Password must contain digit and letters',
                [
                  {text: 'OK'},
                ],  ); 
        } else if(this.state.email.length < 1){
            Alert.alert(
                'Error',
                'Email cannot be empty and must contain a valid Email Address',
                [
                  {text: 'OK'},
                ],  ); 
        }
        else{
        this.setState({loading: true})
        var bodyParameters = {
            email: this.state.email,
            password: this.state.password,
            school_id: this.state.id
        }
     /*  axios.post(
           'http://10.0.2.2:8000/api/register',
           bodyParameters
       ).then((response) => {
        this.setState({loading: false})
        SharedPreferences.setItem("key1",response.data.success.token);
        SharedPreferences.setItem("key2", JSON.stringify(response.data.success.id));
        this.props.changeName(this.state.email);
        this.props.navigation.navigate('Land', {
            name: this.state.email
        });      
       }).catch((error) => {
        this.setState({loading: false});
        if(error.response && typeof error.response !== "undefined"){
         Alert.alert(
            'Error',
            (error.response.data.error.school_id?JSON.stringify(error.response.data.error.school_id)+'\n':'\n')+
            (error.response.data.error.email?JSON.stringify(error.response.data.error.email)+'\n':'\n')+
            (error.response.data.error.password?JSON.stringify(error.response.data.error.password)+'\n':'\n'),
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
                console.log(error); 
        }
              
       });*/
       
    }
}
    }
    constructor(props, ctx) {
        super(props, ctx);
        this.items = ["Abubakar Tafawa Balewa University, Bauchi", "Ahmadu Bello University, Zaria", "Bayero University, Kano", "Federal University Gashua, Yobe", "Federal University of Petroleum Resources, Effurun", "Federal University of Technology, Akure", "Federal University of Technology, Minna", "Federal University of Technology, Owerri", "Federal University, Dutse, Jigawa State", "Federal University, Dutsin-Ma, Katsina", "Federal University, Kashere, Gombe State", "Federal University, Lafia, Nasarawa State", "Federal University, Lokoja, Kogi State", "Alex Ekweme University, Ndufu-Alike, Ebonyi State", "Federal University, Otuoke, Bayelsa", "Federal University, Oye-Ekiti, Ekiti State", "Federal University, Wukari, Taraba State", "Federal University, Birnin Kebbi", "Federal University, Gusau Zamfara", "Michael Okpara University of Agriculture, Umudike", "Modibbo Adama University of Technology, Yola", "National Open University of Nigeria, Lagos", "Nigeria Police Academy Wudil", "Nigerian Defence Academy Kaduna", "Nnamdi Azikiwe University, Awka", "Obafemi Awolowo University,Ile-Ife", "University of Abuja, Gwagwalada", "Federal University of Agriculture, Abeokuta", "University of Agriculture, Makurdi", "University of Benin", "University of Calabar", "University of Ibadan", "University of Ilorin", "University of Jos", "University of Lagos", "University of Maiduguri", "University of Nigeria, Nsukka", "University of Port-Harcourt", "University of Uyo", "Usumanu Danfodiyo University", "Nigerian Maritime University Okerenkoko, Delta State", "Abia State University, Uturu", "Adamawa State University Mubi", "Adekunle Ajasin University, Akungba", "Akwa Ibom State University, Ikot Akpaden", "Ambrose Alli University, Ekpoma", "Chukwuemeka Odumegwu Ojukwu University, Uli", "Bauchi State University, Gadau", "Benue State University, Makurdi", "Yobe State University, Damaturu", "Cross River State University of  Technology, Calabar", "Delta State University Abraka", "Ebonyi State University, Abakaliki", "Ekiti State University", "Enugu State University of Science and Technology, Enugu", "Gombe State Univeristy, Gombe", "Ibrahim Badamasi Babangida University, Lapai", "Ignatius Ajuru University of Education,Rumuolumeni", "Imo State University, Owerri", "Sule Lamido University, Kafin Hausa, Jigawa", "Kaduna State University, Kaduna", "Kano University of Science & Technology, Wudil", "Kebbi State University of Science and Technology, Aliero", "Kogi State University Anyigba", "Kwara State University, Ilorin", "Ladoke Akintola University of Technology, Ogbomoso", "Ondo State University of Science and Technology Okitipupa", "River State University of Science and Technology", "Olabisi Onabanjo University, Ago Iwoye", "Lagos State University, Ojo", "Niger Delta University Yenagoa", "Nasarawa State University Keffi", "Plateau State University Bokkos", "Tai Solarin University of Education Ijebu Ode", "Umar Musa Yar' Adua University Katsina", "Osun State University Osogbo", "Taraba State University, Jalingo", "Sokoto State University", "Yusuf Maitama Sule University Kano", "Oyo State Technical University Ibadan", "Ondo State University of Medical Sciences", "Edo University Iyamo", "Eastern Palm University Ogboko, Imo State", "University of Africa Toru Orua, Bayelsa State", "Bornu State University, Maiduguri", "Moshood Abiola University of Science and Technology Abeokuta", "Gombe State University of Science and Technology", "Zamfara State University", , "Achievers University, Owo", "Adeleke University, Ede", "Afe Babalola University, Ado-Ekiti - Ekiti State", "African University of Science & Technology, Abuja", "Ajayi Crowther University, Ibadan", "Al-Hikmah University, Ilorin", "Al-Qalam University, Katsina", "American University of Nigeria, Yola", "Augustine University", "Babcock University,Ilishan-Remo", "Baze University", "Bells University of Technology, Otta", "Benson Idahosa University, Benin City", "Bingham University, New Karu", "Bowen University, Iwo", "Caleb University, Lagos", "Caritas University, Enugu", "Chrisland University", "Covenant University Ota", "Crawford University Igbesa", "Crescent University", "Edwin Clark University, Kaigbodo", "Elizade University, Ilara-Mokin", "Evangel University, Akaeze", "Fountain Unveristy, Oshogbo", "Godfrey Okoye University, Ugwuomu-Nike - Enugu State", "Gregory University, Uturu", "Hallmark University, Ijebi Itele, Ogun", "Hezekiah University, Umudi", "Igbinedion University Okada", "Joseph Ayo Babalola University, Ikeji-Arakeji", "Kings University, Ode Omu", "Kwararafa University, Wukari", "Landmark University, Omu-Aran.", "Lead City University, Ibadan", "Madonna University, Okija", "Mcpherson University, Seriki Sotayo, Ajebo", "Micheal & Cecilia Ibru University", "Mountain Top University", "Nile University of Nigeria, Abuja", "Novena University, Ogume", "Obong University, Obong Ntak", "Oduduwa University, Ipetumodu - Osun State", "Pan-Atlantic University, Lagos", "Paul University, Awka - Anambra State", "Redeemer's University, Mowe", "Renaissance University, Enugu", "Rhema University, Obeama-Asa - Rivers State", "Ritman University, Ikot Ekpene, Akwa Ibom", "Salem University, Lokoja", "Samuel Adegboyega University, Ogwa.", "Southwestern University, Oku Owa", "Summit University", "Tansian University, Umunya", "University of Mkar, Mkar", "Veritas University, Abuja", "Wellspring University, Evbuobanosa - Edo State", "Wesley University. of Science & Technology, Ondo", "Western Delta University, Oghara Delta State", "Christopher University Mowe", "Kola Daisi University Ibadan, Oyo State", "Anchor University Ayobo Lagos State", "Dominican University Ibadan Oyo State", "Legacy University, Okija Anambra State", "Arthur Javis University Akpoyubo Cross river State", "Crown Hill University Eiyenkorin, Kwara State", "Coal City University Enugu State", "Clifford University Owerrinta Abia State", "Admiralty University, Ibusa Delta State", "Spiritan University, Nneochi Abia State", "Precious Cornerstone University, Oyo", "PAMO University of Medical Sciences, Portharcourt", "Atiba University Oyo", "Eko University of Medical and Health Sciences Ijanikin, Lagos", "Skyline University, Kano"];
        this.items = this.items.sort();
        this.state = {
            items: this.items,
            visible: false,
            index: -1,
            id: null,
            picked: 'Institute',
            text: '',
            pressed: false,
            isConnected: true,
            showPassword: true,
            email: '',
            password: '',
            loading: false,
            gender: 'male'
        };
    }

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    update(index) {
        console.log(index);
    }
    onP(){
        this.props.navigation.navigate('Login', {
        })};

    handlePressedIn(index) {
        this.props.navigation.navigate('Land', {});
        this.setState({index}, () => {
            this.update(this.state.index)
        })
    }schoolChange(text){
        const items = this.items.filter(school => school.toUpperCase().includes(text.toUpperCase()));
        this.setState({
            items,
        });
    }
    handleChange(text){
        this.setState({text}, () => {
            this.schoolChange(this.state.text)
        });
        this.setState({institute: true});
    }
    handleIn(school, index){
        this.setState({text: school});
        this.setState({visible: false});
        this.setState({institute: false});
        this.setState({id: index+1});
    }

    render() {
        const schools = this.state.items.map((school, index) =>
            <TouchableNativeFeedback
                onPress = {this.handleIn.bind(this, school, index)}
                key={index}>
                <View style={styles.minis}>
                    <Text style={styles.text}>{school}</Text>
                </View></TouchableNativeFeedback>
        );
        const view = <TouchableNativeFeedback>
            <ScrollView overScrollMode={'never'} keyboardShouldPersistTaps='always'>
            {schools}
        </ScrollView>
        </TouchableNativeFeedback>;
        const {visible, picked} = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' translucent={true} barStyle='dark-content'/>
                <View style={{ width: '100%',
                    height: this.state.visible? 300 :'50%',
                    backgroundColor: '#EFB879'}}>
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
                    backgroundColor: '#EFB879', marginTop: '15.15%',
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
                        height: this.state.institute? 290: 230,
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
                            <TextInput placeholder="Email"
                                       onFocus={() => this.setState({visible: true})}
                                       onBlur={() => this.setState({visible: false})}
                                       value={this.state.email}
                                       onChangeText={(email) => this.handleEmail(email)}
                                       placeholderStyle={{fontSize: 14, fontFamily: 'mont'}}
                                       placeholderTextColor="#615D5D"
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
                        <Picker
                            selectedValue={this.state.gender}
                            style={{ height: 50, width: '10%' }}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            </Picker>
                            <View style={{
                            width: '100%',
                            height: 60,
                            backgroundColor: '#fff',
                            borderBottomWidth: 0.7,
                            borderColor: '#d9d8d8',
                        }}>
                            <TextInput placeholder={picked}
                                       value={this.state.text}
                                       onChangeText={(text) => this.handleChange(text)}
                                       onFocus={() => this.setState({institute: true, visible: true})}
                                       onBlur={() => this.setState({institute: false, visible: false})}
                                       placeholderStyle={{fontSize: 14, fontFamily: 'mont'}}
                                       placeholderTextColor="#615D5D"
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
                                       }}
                            contextMenuHidden={true}/>
                        </View>

                        {this.state.institute ? <View style={{
                            justifyContent: 'flex-end',
                            height: 200,
                            width: '100%',
                        }}>
                            <Text  style={styles.textHead}>
                                Select your Institute
                            </Text>
                            {view}
                        </View> : <View hide={true} style={{
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
                            }><View style={{
                            width: 18, height: 11,backgroundColor: this.state.showPassword?'transparent':'black',
                            position: 'absolute', right: 25
                        }}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../eye.png')}/>
                        </View>
                            </TouchableNativeFeedback>
                        </View>}
                    </View>
                </View>
                <TouchableNativeFeedback onPress={this.reg.bind(this)}>     
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
                        SIGN UP
                    </Text>}
                </View>
                </TouchableNativeFeedback>
                <View
                    style={{
                        height: 0,
                        width: 120,
                        borderBottomWidth: 1.2,
                        borderColor: '#d9d8d8',
                        alignSelf: 'center',
                        marginTop: '50%'
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
                        Already have an account? </Text>
                    <TouchableNativeFeedback
                        onPressIn={() => this.setState({pressed: !this.state.pressed})}
                        onPressOut={() => this.setState({pressed: !this.state.pressed})}
                        onPress={this.onP.bind(this)}>
                        <Text
                            style={{
                                color: '#EFB779',
                                fontFamily: 'mont-medium',
                                fontSize: this.state.pressed? 16: 14,
                                alignSelf: 'center',}}>
                            SIGN IN
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
    onShow = () => {
        this.setState({ visible: true });
    }

    onSelect = (picked) => {
        this.setState({
            picked: picked,
            visible: false
        })
    }

    onCancel = () => {
        this.setState({
            visible: false
        });
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
    minis: {
        width: '100%',
        //  height: '8.6%',
        backgroundColor: '#FDFDFD',
        borderColor: '#888584',
        borderBottomWidth: 0.5,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * (5 / 100),
    },
    minis_first: {
        width: '100%',
        backgroundColor: '#FDFDFD',
        borderColor: '#888584',
        borderBottomWidth: 0.5,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * (8.6 / 100),
    },
    hover: {
        width: '100%',
        //  height: '8.6%',
        backgroundColor: '#fff',
        borderColor: '#888584',
        borderBottomWidth: 0.5,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0.8,
        height: Dimensions.get('window').height * (8.6 / 100),
    },
    textHover: {
        fontFamily: 'mont',
        fontSize: 12,
        textAlign: 'center'
    },
    text: {
        fontFamily: 'mont',
        fontSize: 12,
        color: '#000',
        textAlign: 'center'
    },
    textHead: {
        fontFamily: 'mont-semi',
        fontSize: 12,
        color: '#000',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
        //  alignItems: 'center',
    },
});
const Signup = connect(mapStateToProps, mapDispatchToProps)(reduxSignup);
export default Signup;