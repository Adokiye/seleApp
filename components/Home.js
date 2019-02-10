import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    NetInfo,
    Animated,
    Image,
    Alert,
    Dimensions,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback,
    View, ViewPagerAndroid, StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BoxShadow} from 'react-native-shadow';
import {DrawerNavigator} from "react-navigation";
import Messages from "./Messages";
import Services from "./Services";
import Cart from "./Cart";
import Goods from "./Goods";
import Browse from "./Browse"
import Find from "./Find";
import {connect} from "react-redux";
import axios from 'axios';
var SharedPreferences = require('react-native-shared-preferences');
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
    trueBrowse, trueCart, trueHome, trueMessages, trueServices, falseBrowse,
    falseCart, falseHome, falseMessages, falseServices,trueGoods,
    falseGoods
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
    };

};

class reduxHome extends Component {
    componentDidMount() {
        const {params} = this.props.navigation.state;
        contact_id = 18;
        //const name     = params.name? params.name : "";
        console.log(name);
        const id     = params? params.id : 2;
        this.setState({school_id: id});
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);                
            SharedPreferences.getItem("key2", function(value){
                if(value){
                this.setState({user_id: value})    
                }   
              }.bind(this));
            SharedPreferences.getItem("key1", function(value){
                if(value){
                this.setState({token: value})    
                }   
              }.bind(this));
              
              if(this.state.isConnected){
            setTimeout(function(){
            Animated.timing(                  // Animate over time
                this.state.fadeAnim,            // The animated value to drive
                {
                  toValue: 1,                   // Animate to opacity: 1 (opaque)
                  duration: 500,              // Make it take a while
                }
              ).start();                        // Starts the animation
        }.bind(this), 5000);
        this.setState({contacts: {
            receiver: {first_name: "Jane", last_name: "Doe"}, 
            sender_id: 4, receiver_id: 2, last_message: {read: 1, message: "books"}   
        }})
        this.setState({hnrA: {amount: 15000, description: "I like this product", 
        images: [], quantity: 2, id: 5}})
        this.setState({rfuA: {amount: 15000, description: "I like this product", 
        images: [], quantity: 2, id: 5}})
        this.setState({tsi: {amount: 15000, description: "I like this product", 
        images: [], quantity: 2, id: 5}})
     //   setTimeout(function(){
    /*        if(this.state.token && this.state.user_id){
                this.setState({loading1: true})
                this.setState({loading2: true})
                this.setState({loading3: true})
                var bodyParameters = {
                    id: this.state.user_id,
                }
                var config = {
                    headers: {'Authorization': "Bearer " + this.state.token}
               };
               axios.post(
                   'http://10.0.2.2:8000/api/LoggedLand',
                   bodyParameters,
                   config
               ).then((response) => {
                this.setState({loading1: false});
                this.setState({loading2: false});
                this.setState({loading3: false});
                console.log(response);   
                var lenhnr = response.data.success.hnr.length;
                for (let i = 0; i < lenhnr; i++) {
                    let row = response.data.success.hnr[i];
                    this.setState(prevState => ({
                        hnrA: [...prevState.hnrA, row],
                    }));
                }
                var lenrfu = response.data.success.rfu.length;
                for (let i = 0; i < lenrfu; i++) {
                    let row = response.data.success.rfu[i];
                    this.setState(prevState => ({
                        rfuA: [...prevState.rfuA, row],
                    }));
                }
                var lentsi = response.data.success.tsi.length;
                for (let i = 0; i < lentsi; i++) {
                    let row = response.data.success.tsi[i];
                    this.setState(prevState => ({
                        tsi: [...prevState.tsi, row],
                    }));
                }
               }).catch((error) => {
                this.setState({loading: false});
                    Alert.alert(
                        'Error',
                         'Internal Server Error, please try again later',
                        [
                          {text: 'OK'},
                        ],  );    
                        console.log(error); 
                       });    
            }else if(id){
                this.setState({loading1: true})
                this.setState({loading2: true})
                this.setState({loading3: true})
                var bodyParameters = {
                    id: id,
                }
               axios.post(
                   'http://10.0.2.2:8000/api/unLoggedLand',
                   bodyParameters
               ).then((response) => {
                this.setState({loading1: false});
                this.setState({loading2: false});
                this.setState({loading3: false});
                console.log(response);  
                var lenhnr = response.data.success.hnr.length;
                for (let i = 0; i < lenhnr; i++) {
                    let row = response.data.success.hnr[i];
                    this.setState(prevState => ({
                        hnrA: [...prevState.hnrA, row],
                    }));
                }
                var lenrfu = response.data.success.rfu.length;
                for (let i = 0; i < lenrfu; i++) {
                    let row = response.data.success.rfu[i];
                    this.setState(prevState => ({
                        rfuA: [...prevState.rfuA, row],
                    }));
                }
                var lentsi = response.data.success.tsi.length;
                for (let i = 0; i < lentsi; i++) {
                    let row = response.data.success.tsi[i];
                    this.setState(prevState => ({
                        tsi: [...prevState.tsi, row],
                    }));
                }
              //  this.setState({hnr: response.success.hnr});
          //      console.log(response);      
               }).catch((error) => {
                this.setState({loading: false});
                    Alert.alert(
                        'Error',
                         'Internal Server Error, please try again later',
                        [
                          {text: 'OK'},
                        ],  );    
                        console.log(error); 
                       });    
            }else{
                this.props.navigation.navigate('Find', {});
           //  id = 2;
            }
            if(contact_id){
                console.log("mmm");
                console.log(contact_id);
                console.log("mmm");
                this.setState({loading: true});
                var bodyParameters = {
                    id: contact_id,
                }
            /*    var config = {
                    headers: {'Authorization': "Bearer " + this.state.token}
               };
               axios.post(
                   'http://10.0.2.2:8000/api/contacts',
                   bodyParameters,
             //      config
               ).then((response) => {
                this.setState({loading: false});
                console.log(response);   
                var len = response.data.success?response.data.success.length:null;
                for (let i = 0; i < len; i++) {
                    let row = response.data.success[i];
                    console.log(row);console.log(i);console.log("djdn")
                    this.setState(prevState => ({
                        contacts: [...prevState.contacts, row],
                    }), console.log(this.state.contacts[0]));
                    console.log(i);console.log("cont")
                };
               }).catch((error) => {
                this.setState({loading: false});
                    Alert.alert(
                        'Error',
                         'Internal Server Error, please try again later',
                        [
                          {text: 'OK'},
                        ],  );    
                        console.log(error); 
                       });    
            }
  //      }.bind(this), 100);*/
    }
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
    componentDidUpdate(){
        const {params} = this.props.navigation.state;
     /*  const name     = params.name? params.name : "";
        console.log(name);
   //     const id     = params? params.id : '';
        {name!==""?this.timer =   setTimeout(function(){
                Animated.timing(                  // Animate over time
                    this.state.fadeAnimName,            // The animated value to drive
                    {
                      toValue: 1,                   // Animate to opacity: 1 (opaque)
                      duration: 500,              // Make it take a while
                    }
                  ).start();                        // Starts the animation
            }.bind(this), 3500)
            :null}
            {name!==""?setTimeout(function(){
                Animated.timing(                  // Animate over time
                    this.state.fadeAnimName,            // The animated value to drive
                    {
                      toValue: 0,                   // Animate to opacity: 1 (opaque)
                      duration: 500,              // Make it take a while
                    }
                  ).start();                        // Starts the animation
            }.bind(this), 12000): null};*/
             
        if((this.props.home && this.props.services && !this.props.messages && !this.props.cart && !this.props.browse) || (this.props.home && this.props.goods && !this.props.messages && !this.props.cart && !this.props.browse)){
            this.viewPager.setPage(0);
        }
        if(this.props.messages && !this.props.home && !this.props.cart && !this.props.browse){
            this.viewPager.setPage(1);
        }
        if(!this.props.messages && !this.props.home && this.props.cart && !this.props.browse){
            this.viewPager.setPage(3);
        }
        if(!this.props.messages && !this.props.home && !this.props.cart && this.props.browse){
            this.viewPager.setPage(2);
        }
        
    }
    static navigationOptions = {
        header: null,
    };
    onPageSelected(e) {
        let currentPage = e.nativeEvent.position;
        let n = currentPage.toString();
        console.log(currentPage);
        this.setState({n});
        this.setState({no: currentPage});
        if (currentPage == 0) {
            this.props.trueHome("home");
            this.props.falseBrowse("browse");
            this.props.falseMessages("messages");
            this.props.falseCart("cart");
            //   this.setState({home: true});this.setState({messages: false});this.setState({browse: false});
        } else if (currentPage == 1) {
            this.props.falseHome("home");
            this.props.falseBrowse("browse");
            this.props.trueMessages("messages");
            this.props.falseCart("cart");
            //  this.setState({home: false});this.setState({messages: true});this.setState({browse: false});
        } else if (currentPage == 2) {
            this.props.falseHome("home");
            this.props.trueBrowse("browse");
            this.props.falseMessages("messages");
            this.props.falseCart("cart");
            //   this.setState({home: false});this.setState({messages: false});this.setState({browse: true});
        } else if (currentPage == 3) {
            this.props.falseHome("home");
            this.props.falseBrowse("browse");
            this.props.falseMessages("messages");
            this.props.trueCart("cart");
            //   this.setState({home: false});this.setState({messages: false});this.setState({browse: true});
        }
    }
    servicesChanger(header_serve, id) {
        
        this.props.trueHome("home");
        this.props.falseMessages("messages");
        this.props.falseBrowse("soo");
        this.props.falseCart("cart");
        this.props.trueServices("services");
        this.props.falseGoods("goods");
        console.log("loops");
        this.setState({header: header_serve});
    }
    goodsChanger(header_serve, id) {
        this.setState({goodsLoader: true, goodsCat: id});
        this.props.trueHome("home");
        this.props.falseMessages("messages");
        this.props.falseBrowse("soo");
        this.props.falseCart("cart");
        this.props.falseServices("services");
        this.props.trueGoods("goods");
        this.setState({header: header_serve});
      
    }
    constructor(props) {
        const Width = Dimensions.get('window').width;
        super(props);
        this.state = {
            n: '0',
            no: 0,
            width: Width / 3,
            contacts: [],
            pressed: null,
            soc: true,
            rfu: false,
            hnr: false,
            tss: true,
            header: null,
            cancel: false,
            fadeAnim: new Animated.Value(0),
            fadeAnimName: new Animated.Value(0),
            isConnected: true,
            loading1: false,
            loading2: false,
            loading3: false,
            token: '',
            user_id: '',
            hnrA: [],
            rfuA: [],
            tsi: [],
            goodsCat: '',
            servicesCat: '',
            goodsLoader: false,
            school_id: ''
        };
        this.categoryPresser = this.categoryPresser.bind(this);
    }
    categoryPresser(handleType){
    this.setState({pressed: handleType});
    } 
    homey() {
        this.props.trueHome("home");
        this.props.falseBrowse("browse");
        this.props.falseMessages("messages");
        this.props.falseCart("cart");
        this.viewPager.setPage(0);
    }

    messy() {
        this.props.falseHome("home");
        this.props.falseBrowse("browse");
        this.props.trueMessages("messages");
        this.props.falseCart("cart");
        this.viewPager.setPage(1);
    }
    cartey(){
        this.props.falseHome("home");
        this.props.falseBrowse("browse");
        this.props.trueCart("cart");
        this.props.falseMessages("messages");
        this.viewPager.setPage(3); 
    }
    browsey() {
        this.props.falseHome("home");
        this.props.trueBrowse("browse");
        this.props.falseCart("cart");
        this.props.falseMessages("messages");
        this.viewPager.setPage(2);
    }

    navig(setter) {
        let set = ["home", "messages", "browse", "cart",];
        let page = set.indexOf(setter);
        console.log(page + 1);
        for (let value in set) {
            if (set[value] != setter) {
                // this.setState({[set[value]]: false})
                console.log(this.props.home)
            }
        }
        this.viewPager.setPage(page);
    }

    render() {
        const {params} = this.props.navigation.state;
        const headerS = params? params.headerS: this.state.header;
        const name     = params? params.name : "";
        const shadowOpt = {
            width: Dimensions.get('window').width,
            height: 75,
            color: "#000",
            border: 10,
            opacity: '0.1',
            radius: 10,
            x: 0,
            y: 5,
        };
        const shadowNew = {
            width: 140,
            height: 120,
            color: "#000",
            border: 10,
            opacity: '0.05',
            radius: 20,
            x: 0,
            y: 5,
        };
        const shadowFooter = {
            width: Dimensions.get('window').width,
            height: 56,
            color: "#000",
            border: 10,
            opacity: '0.3',
            radius: 10,
            x: 0,
            y: 5,
        };
        const dimensions = Dimensions.get('window');
        const Height = (dimensions.height);
        const Width = dimensions.width;
        let home = "home";
        let messages = "messages";
        let browse = "browse";
        let cart = "cart";
        let header, body;
        const contacts =             <FlatList          
            data={this.state.contacts}          
            renderItem={({ item }) => ( 
                <TouchableNativeFeedback 
                onPress={() =>
                    this.props.navigation.navigate('Chat', {
                        header: item.receiver.first_name+' '+
item.receiver.last_name,id: item.sender_id, 
                    receiver_id: item.receiver_id})}>
                        <View 
                      style={styles.chats}
                        >
                    <View style={styles.profiles}>
                        <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1,}}
                               source={require('../teeth.png')}/>
                    </View>
                    <View style={styles.chatTexts}>
                        <Text style={styles.profileName}>
                            {item.receiver.first_name} {item.receiver.last_name}
                            {'\n'}{'\n'}
                           {!item.last_message.read?
                            <Text style={{fontSize: 12}}>
                            {item.last_message.message}
                            </Text>:<Text style={{fontSize: 12, color: '#ADA5A5'}}>
                                {item.last_message?item.last_message.message :null}
                            </Text>} 
                        </Text>
                    </View>
                    <Text style={{fontSize: 12,
                        position: 'absolute',
                        right: '8.33%',fontFamily: 'mont-medium',
                        color: '#000',
                        textAlign: 'left',
                        marginTop: 14,}}>
                        12:15
                    </Text>
                </View>
                        </TouchableNativeFeedback>          
             )}          
             keyExtractor={(item, index) => index}                       
          />            
        if (this.props.home && !this.props.messages &&
            !this.props.browse && !this.props.services && !this.props.goods&& !this.props.cart) {
            header = (
                <View style={{
                    flexDirection: 'row', flex: 1, alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.toggleDrawer()}>
                        <View style={{width: 45, height: 45, position: 'absolute', left: 0}}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1, marginTop: 26}}
                                   source={require('../menu.png')}/>
                        </View>
                    </TouchableNativeFeedback>
                    <LinearTextGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        locations={[0, 1, 0]} style={styles.headerCenter}
                        colors={['#E5473F', '#EE8F62', '#EFC07C']}>sẹlẹ
                    </LinearTextGradient></View>
            );
        const hnrA = (
            <FlatList          
            data={this.state.hnrA}          
            renderItem={({ item }) => ( 
                <TouchableNativeFeedback 
                onPress={() =>
                    this.props.navigation.navigate('ProductDetail', {name: item.name,
                amount: item.amount,
                description: item.description,
                images: item.images,
                qty: item.quantity,
                id: item.id}
                )}>
                        <View style={styles.arrange}>
                            <View style={styles.miniPictures}>
                            {item.image?
                                <Image resizeMode="cover"
                                   style={{alignSelf: 'center', flex: 1, width: 120, height: 130}}
                                   source={{uri: 'http://10.0.2.2:8000/'+item.image.location_url}}/>
                                   :
                                    <Image resizeMode="cover"
                                       style={{alignSelf: 'center', flex: 1}}
                                       source={require('../laptop.png')}/>   
                                   }
                            </View>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Text style={styles.price}>
                             ₦{item.amount}
                            </Text>
                        </View>
                        </TouchableNativeFeedback>          
             )}          
             keyExtractor={item => item.id}  
             horizontal={true}                           
          />            );
        const rfuA = (
            <FlatList          
            data={this.state.rfuA}          
            renderItem={({ item }) => ( 
                <TouchableNativeFeedback 
                onPress={() =>
                    this.props.navigation.navigate('ProductDetail', {name: item.name,
                amount: item.amount,
                description: item.description,
                images: item.images,
                qty: item.quantity,
                id: item.id}
                )}>
                        <View style={styles.arrange}>
                            <View style={styles.miniPictures}>
                            {item.image?
                                <Image resizeMode="cover"
                                   style={{alignSelf: 'center', flex: 1, width: 120, height: 130}}
                                   source={{uri: 'http://10.0.2.2:8000/'+item.image.location_url}}/>
                                   :
                                    <Image resizeMode="cover"
                                       style={{alignSelf: 'center', flex: 1}}
                                       source={require('../laptop.png')}/>   
                                   }
                            </View>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Text style={styles.price}>
                             ₦{item.amount}
                            </Text>
                        </View>
                        </TouchableNativeFeedback>          
             )}          
             keyExtractor={item => item.id}  
             horizontal={true}                           
          />            );
        const tsi = (
        <FlatList          
        data={this.state.tsi}          
        renderItem={({ item }) => ( 
            <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('ProductDetail', 
                {name: item.name,
                amount: item.amount,
                description: item.description,
                images: item.images,
                qty: item.quantity,
                id: item.id}
                )}>
                    <View style={styles.arrange}>
                        <View style={styles.miniPictures}>
                            {item.image?
                                <Image resizeMode="cover"
                                   style={{alignSelf: 'center', flex: 1, width: 120, height: 130}}
                                   source={{uri: 'http://10.0.2.2:8000/'+item.image.location_url}}/>
                                   :
                                    <Image resizeMode="cover"
                                       style={{alignSelf: 'center', flex: 1}}
                                       source={require('../laptop.png')}/>   
                                   }
                        </View>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                        <Text style={styles.price}>
                         ₦{item.amount}
                        </Text>
                    </View>
                    </TouchableNativeFeedback>          
         )}          
         keyExtractor={item => item.id}  
         horizontal={true}                           
      />            );
            body = (<View style={styles.ox}>
                {this.state.tsi.length > 0 ? 
                <View style={styles.firstColumn}>
                    <Text style={styles.columnText}>
                        Top Sold Items in your School{'\n'}
                    </Text>
                    <View style={styles.pictures}>
                                        {tsi}
                    </View>
                </View>
                :null}           
                <View style={this.state.tss?styles.fourthColumn:styles.manner}>
                    <TouchableNativeFeedback onPress={()=> this.setState({tss: !this.state.tss})}>
                    <View style={{
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                        paddingRight: 29,
                        height: 30
                    }}><Text style={styles.columnText}>
                        Top Services in your School{'\n'}{'\n'}
                    </Text>
                        <MaterialCommunityIcons style={{}} name={this.state.tss?"chevron-down":"chevron-right"} size={25}
                                                color="#615D5D"/>
                    </View></TouchableNativeFeedback>
                    {this.state.tss?<View style={styles.pictures}>
                        <TouchableNativeFeedback>
                            <ScrollView contentContainerstyle={{
                                flexGrow: 1,
                                flexDirection: 'row',
                            }} horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        automaticallyAdjustContentInsets={false}
                                        directionalLockEnabled={true}
                                        bounces={false}
                                        scrollsToTop={false}>
                                         <View style={styles.arrange}>
                                         
                                    <BoxShadow setting={shadowNew}>
                                    <TouchableNativeFeedback onPressIn={() => this.categoryPresser("wc")}
                                    onPress={this.servicesChanger.bind(this, "Writing and Content", 1)}>
                                        <View style={this.state.pressed === "wc" ?styles.miniKitchen:styles.minicats}>
                                            <View style={{height: 66, width: 71}}><Image
                                                resizeMode="contain"
                                                style={{alignSelf: 'center', flex: 1}}
                                                source={this.state.pressed==="wc"?require('../writing_&_content_white.png'):require('../writing_&_content_yellow.png')}/></View>
                                        </View>
                                   </TouchableNativeFeedback></BoxShadow>
                
                                    <Text style={{
                                        fontFamily: 'mont-medium',
                                        fontSize: 8,
                                        color: '#000',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Writing and Content
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                
                                    <BoxShadow setting={shadowNew}>
                                    <TouchableNativeFeedback onPressIn={() => this.categoryPresser("fg")}
                                    onPress={this.servicesChanger.bind(this, "Fashion Design", 2)}>
                                        <View style={this.state.pressed === "fg" ?styles.miniKitchen:styles.minicats}>
                                            <View style={{height: 66, width: 71}}><Image
                                                resizeMode="contain"
                                                style={{alignSelf: 'center', flex: 1}}
                                                source={this.state.pressed==="fg"?require('../fashion_design_white.png'):require('../fashion_design_yellow.png')}/></View>
                                        </View>
                                    </TouchableNativeFeedback></BoxShadow>
                                    
                                    <Text style={{
                                        fontFamily: 'mont-medium',
                                        fontSize: 8,
                                        color: '#000',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Fashion Design
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                
                                    <BoxShadow setting={shadowNew}><TouchableNativeFeedback onPressIn={() => this.categoryPresser("tr")}
                                    onPress={this.servicesChanger.bind(this, "Transport", 3)}>
                                        <View style={this.state.pressed === "tr" ?styles.miniKitchen:styles.minicats}>
                                            <View style={{height: 66, width: 71}}><Image
                                                resizeMode="contain"
                                                style={{alignSelf: 'center', flex: 1}}
                                                source={this.state.pressed==="tr"?require('../transport_white.png'):require('../transport_yellow.png')}/></View>
                                        </View>
                                    </TouchableNativeFeedback></BoxShadow>
                                    <Text style={{
                                        fontFamily: 'mont-medium',
                                        fontSize: 8,
                                        color: '#000',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Transport
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                
                                <BoxShadow setting={shadowNew}><TouchableNativeFeedback 
                                onPress={this.servicesChanger.bind(this, "Laundry & Cleaning", 4)}
                                onPressIn={() => this.categoryPresser("lc")}>
                                        <View style={this.state.pressed === "lc" ?styles.miniKitchen: styles.minicats}>
                                            <View style={{height: 66, width: 71}}><Image
                                                resizeMode="contain"
                                                style={{alignSelf: 'center', flex: 1}}
                                                source={this.state.pressed==="lc"?require('../laundry_&_cleaning_white.png'):require('../laundry_&_cleaning_yellow.png')}/></View>
                                        </View>
                                    </TouchableNativeFeedback></BoxShadow>
                                    <Text style={{
                                        fontFamily: 'mont-medium',
                                        fontSize: 8,
                                        color: '#000',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Laundry and Cleaning
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                
                                    <BoxShadow setting={shadowNew}><TouchableNativeFeedback 
                                    onPress={this.servicesChanger.bind(this, "Electronics & Repairs", 5)}
                                    onPressIn={() => this.categoryPresser("er")}>
                                        <View style={this.state.pressed === "er" ?styles.miniKitchen:styles.minicats}>
                                            <View style={{height: 66, width: 71}}><Image
                                                resizeMode="contain"
                                                style={{alignSelf: 'center', flex: 1}}
                                                source={this.state.pressed==="er"?require('../electronics_&_repairs_white.png'):require('../electronics_&_repairs_yellow.png')}/></View>
                                        </View>
                                    </TouchableNativeFeedback></BoxShadow>
                                    <Text style={{
                                        fontFamily: 'mont-medium',
                                        fontSize: 8,
                                        color: '#000',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Electronics and Repairs
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                
                                    <BoxShadow setting={shadowNew}><TouchableNativeFeedback 
                                    onPress={this.servicesChanger.bind(this, "Photography & Video Production", 6)}
                                    onPressIn={() => this.categoryPresser("pv")}>
                                        <View style={this.state.pressed === "pv" ?styles.miniKitchen:styles.minicats}>
                                            <View style={{height: 66, width: 71}}><Image
                                                resizeMode="contain"
                                                style={{alignSelf: 'center', flex: 1}}
                                                source={this.state.pressed==="pv"?require('../photgraphy_&_video_production_white.png'):require('../photgraphy_&_video_production_yellow.png')}/></View>
                                        </View>
                                    </TouchableNativeFeedback></BoxShadow>
                                    <Text style={{
                                        fontFamily: 'mont-medium',
                                        fontSize: 8,
                                        textAlign: 'center',
                                        color: '#000',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Photography and Video{'\n'} Production
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                
                                    <BoxShadow setting={shadowNew}>
                                    <TouchableNativeFeedback 
                                    onPress={this.servicesChanger.bind(this, "Graphics, web & ux designs", 7)}
                                    onPressIn={() => this.categoryPresser("gw")}>
                                        <View style={this.state.pressed === "gw" ?styles.miniKitchen:styles.minicats}>
                                            <View style={{height: 66, width: 71}}><Image
                                                resizeMode="contain"
                                                style={{alignSelf: 'center', flex: 1}}
                                                source={this.state.pressed==="gw"?require('../graphics_web_ux_designs_white.png'):require('../graphics_web_ux_designs_yellow.png')}/></View>
                                        </View>
                                    </TouchableNativeFeedback></BoxShadow>
                                    <Text style={{
                                        fontFamily: 'mont-medium',
                                        fontSize: 8,
                                        textAlign: 'center',
                                        color: '#000',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Graphics, web &{'\n'} ux designs
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                
                                    <BoxShadow setting={shadowNew}><TouchableNativeFeedback 
                                    onPress={this.servicesChanger.bind(this, "Project & Assignment Handling", 8)}
                                    onPressIn={() => this.categoryPresser("pa")}>
                                        <View style={this.state.pressed === "pa" ?styles.miniKitchen:styles.minicats}>
                                            <View style={{height: 66, width: 71}}><Image
                                                resizeMode="contain"
                                                style={{alignSelf: 'center', flex: 1}}
                                                source={this.state.pressed==="pa"?require('../project_assignment_handling_white.png'):require('../project_assignment_handling_yellow.png')}/></View>
                                        </View>
                                    </TouchableNativeFeedback></BoxShadow>
                                    <Text style={{
                                        fontFamily: 'mont-medium',
                                        fontSize: 8,
                                        textAlign: 'center',
                                        color: '#000',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Project and Assignment{'\n'} Handling
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                
                                    <BoxShadow setting={shadowNew}><TouchableNativeFeedback 
                                    onPress={this.servicesChanger.bind(this, "Other", 9)}
                                    onPressIn={() => this.categoryPresser("ots")}>
                                <View style={this.state.pressed === "ots" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../makeupjpg.jpg')}/></View>
                                </View></TouchableNativeFeedback></BoxShadow>
                                    <Text style={{
                                        fontFamily: 'mont-medium',
                                        fontSize: 8,
                                        textAlign: 'center',
                                        color: '#000',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}OTHER
                                    </Text>
                                </View>
                            </ScrollView>
                        </TouchableNativeFeedback>
                    </View>:null}
                </View>
                <View  style={this.state.soc?styles.secondColumn:styles.manner}>
                    <TouchableNativeFeedback onPress={() => this.setState({soc: !this.state.soc})}>
                    <View style={{
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                        paddingRight: 29,
                        height: 30
                    }}><Text style={styles.columnText}>
                        Shop by Categories{'\n'}{'\n'}
                    </Text>
                    <MaterialCommunityIcons style={{}} name={this.state.soc?"chevron-down":"chevron-right"} size={25}
                                                color="#615D5D"/>
                    </View></TouchableNativeFeedback>
                  {this.state.soc ?  <View style={styles.pictures}>
                        <TouchableNativeFeedback>
                            <ScrollView contentContainerstyle={{
                                flexGrow: 1,
                                flexDirection: 'row',
                            }} horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        automaticallyAdjustContentInsets={false}
                                        directionalLockEnabled={true}
                                        bounces={false}
                                        scrollsToTop={false}>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback 
                                onPress={this.goodsChanger.bind(this, "Clothing & Fashion", 1)}
                                onPressIn={() => this.categoryPresser("cf")}>
                                <View style={this.state.pressed === "cf" ?styles.miniKitchen :styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={this.state.pressed === "cf" ?require('../clothing_&_fashion_white.png') :require('../clothing_&_fashion_yellow.png')}/></View>
                                </View></TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Clothing and Fashion
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback
                                onPress={this.goodsChanger.bind(this, "Arts & Craft", 2)}
                                 onPressIn={() => this.categoryPresser("ac")}>
                                <View style={this.state.pressed === "ac" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={this.state.pressed === "ac" ?require('../arts_&_craft_white.png')
                                :require('../arts_&_craft_yellow.png')}/></View>
                                </View></TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Arts and Craft
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback 
                                onPress={this.goodsChanger.bind(this, "Books & Study Materials", 10)}
                                onPressIn={() => this.categoryPresser("bs")}>
                                <View style={this.state.pressed === "bs" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={this.state.pressed === "bs" ?require('../books_&_study_materials_white.png')
                                        :require('../books_&_study_materials_yellow.png')}/></View>
                                </View></TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Books and Study Materials
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback 
                                onPress={this.goodsChanger.bind(this, "Accomodation", 3)}
                                onPressIn={() => this.categoryPresser("ad")}>
                                <View style={this.state.pressed === "ad" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={this.state.pressed === "ad" ?require('../accomodation_white.png'):
                                        require('../accomodation_yellow.png')}/></View>
                                </View></TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Accomodation
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback 
                                onPress={this.goodsChanger.bind(this, "Vehicles", 4)}
                                onPressIn={() => this.categoryPresser("ve")}>
                                <View style={this.state.pressed === "ve" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={this.state.pressed === "ve" ?require('../vehicles_white.png'):
                                        require('../vehicles_yellow.png')}/></View>
                                </View></TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Vehicles
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback 
                                onPress={this.goodsChanger.bind(this, "Mobile Phones & Computers", 5)}
                                onPressIn={() => this.categoryPresser("mp")}>
                                <View style={this.state.pressed === "mp" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={this.state.pressed === "mp" ?require('../mobile_phones_&_computing_white.png'):
                                        require('../mobile_phones_&_computing_yellow.png')}/></View>
                                </View></TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Mobile Phones and Computers
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback 
                                onPress={this.goodsChanger.bind(this, "Hostel Appliances", 6)}
                                onPressIn={() => this.categoryPresser("ha")}>
                                <View style={this.state.pressed === "ha" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={this.state.pressed === "ha" ?require('../hostel_appliances_white.png'):
                                        require('../hostel_appliances_yellow.png')}/></View>
                                </View></TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Hostel Appliances
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback 
                                onPress={this.goodsChanger.bind(this, "Utensils & Toiletries", 7)}
                                onPressIn={() => this.categoryPresser("ut")}>
                                <View style={this.state.pressed === "ut" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={this.state.pressed === "ut"?require('../utensils_&_toiletries_white.png')
                                        :require('../utensils_&_toiletries_yellow.png')}/></View>
                                </View></TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Utensils and Toiletries
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback 
                                onPress={this.goodsChanger.bind(this, "Food & Drinks", 8)}
                                onPressIn={() => this.categoryPresser("fd")}>
                                <View style={this.state.pressed === "fd" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={this.state.pressed === "fd"?require('../food_&_drinks_white.png')
                                        :require('../food_&_drinks_yellow.png')}/></View>
                                </View>
                                </TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Food and Drinks
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback 
                                onPress={this.goodsChanger.bind(this, "Health & Beauty", 9)}
                                onPressIn={() => this.categoryPresser("hb")}>
                                <View style={this.state.pressed === "hb" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={this.state.pressed==="hb"?require('../health_&_beauty_white.png')
                                        :require('../health_&_beauty_yellow.png')}/></View>
                                </View></TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}Health and Beauty
                                    </Text>
                                </View>
                                <View style={styles.arrange}>
                                <TouchableNativeFeedback 
                                onPress={this.goodsChanger.bind(this, "Other", 11)}
                                onPressIn={() => this.categoryPresser("otg")}>
                                <View style={this.state.pressed === "otg" ?styles.miniKitchen:styles.minicats}>
                                    <View style={{height: 66, width: 71}}><Image
                                        resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../speakerjpg.jpg')}/></View>
                                </View></TouchableNativeFeedback>
                                    <Text style={{
                                        fontFamily: 'mont',
                                        fontSize: 8,
                                        color: '#615D5D',
                                        marginLeft: 5
                                    }}>
                                        {'\n'}OTHER
                                    </Text>
                                </View>
                            </ScrollView>
                        </TouchableNativeFeedback>
                    </View>:null}
                </View>
                {this.state.rfuA.length > 0 ?<View style={this.state.rfu?styles.fourthColumn:styles.manner}>
                <TouchableNativeFeedback onPress={()=> this.setState({rfu: !this.state.rfu})}>
                <View  style={{
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                        paddingRight: 29,
                        height: 30
                    }}>
                    <Text style={{fontFamily: 'mont-medium', fontSize: 12, color: '#000',}}>
                        Recommended for You
                    </Text>
                    <MaterialCommunityIcons style={{}} name={this.state.rfu?"chevron-down":"chevron-right"} size={25}
                                            color="#615D5D"/>
                </View>
                </TouchableNativeFeedback>
                <View style={styles.pictures}>
                                        {rfuA}
                    </View>
                </View>:null}
                {this.state.hnrA.length> 0 ?<View style={this.state.hnr?styles.fourthColumn:styles.manner}>
                <TouchableNativeFeedback onPress={()=> this.setState({hnr: !this.state.hnr})}>
                <View style={{
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                        paddingRight: 29,
                        height: 30
                    }}>
                    <Text style={{fontFamily: 'mont-medium', fontSize: 12, color: '#000'}}>
                        Hot New Releases
                    </Text>
                    <MaterialCommunityIcons style={{}} name={this.state.hnr?"chevron-down":"chevron-right"} size={25}
                                            color="#615D5D"/>
                </View> 
                </TouchableNativeFeedback>
                <View style={styles.pictures}>
                                        {hnrA}
                    </View></View>

                :null}
                
                
            </View>);
        } else if (!this.props.home && this.props.messages
            && !this.props.browse && !this.props.cart) {
            header = (
                <View style={{
                    flexDirection: 'row', flex: 1, alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.toggleDrawer()}>
                        <View style={{width: 45, height: 45, position: 'absolute', left: 0}}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1, marginTop: 26}}
                                   source={require('../menu.png')}/>
                        </View>
                    </TouchableNativeFeedback>
                    <Text style={{
                        fontFamily: 'mont-semi',
                        fontSize: 20,
                        color: '#000',
                        alignSelf: 'center', marginTop: 27,
                    }}>
                        Messages
                    </Text></View>
            )
        } else if (!this.props.home && !this.props.messages
            && this.props.browse && !this.props.cart) {
            header = (
                <View style={{
                    position: 'absolute', bottom: 0, alignSelf: 'center',
                    borderRadius: 6, flexDirection: 'row',
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: '#F6BF80', height: 40, width: '94.94%'
                }}>
                    <MaterialIcons style={{
                        padding: 10,
                    }} name="search" size={25} color="#FCFCFC"/>
                    <TextInput placeholder="Browse Services and Goods"
                               returnKeyType={'search'}
                               placeholderStyle={{fontSize: 10, fontFamily: 'mont-medium'}}
                               placeholderTextColor="#FCFCFC"
                               underlineColorAndroid={'transparent'}
                               style={{
                                   flex: 1,
                                   paddingTop: 10,
                                   paddingRight: 30,
                                   paddingBottom: 10,
                                   width: '65%',
                                   paddingLeft: 0,
                                   padding: 4,
                                   backgroundColor: '#F6BF80',
                                   fontSize: 12, fontFamily: 'mont-medium', color: '#fcfcfc', borderRadius: 6
                               }}/>
                    <View style={{
                        height: 15, width: 15,
                        position: 'absolute', right: 10,
                    }}>
                        <Image
                            resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                            source={require('../filter.png')}/>
                    </View>
                </View>
            )
        } else if (this.props.home && !this.props.messages&& !this.props.cart
            && !this.props.browse && this.props.services && !this.props.goods) {
            header = (
                <View style={{
                    flexDirection: 'row', flex: 1, alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableNativeFeedback onPress={() => this.props.falseServices("services")}>
                        <MaterialCommunityIcons style={{
                            position: 'absolute', left: 10, top: 40,
                        }} name="arrow-left" size={30} color="#535461"/>
                    </TouchableNativeFeedback>
                    <Text style={{
                        fontFamily: 'mont-semi',
                        fontSize: 20, marginTop: 27,
                        color: '#000',
                    }}>
                        {(headerS)}
                    </Text>
                </View>
            );
            body = (<View style={{
                width: '100%',
                marginTop: 10,
            }}>
                <Services navigation={this.props.navigation}
                    cat_id={this.state.servicesCat}
                    school_id={this.state.school_id}
                    token={this.state.token}
                    user_id={this.state.user_id}
                />
            </View>);
        }
        else if (this.props.home && !this.props.messages
            && !this.props.browse && 
            !this.props.services && this.props.goods&& !this.props.cart) {
            header = (
                <View style={{
                    flexDirection: 'row', flex: 1, alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableNativeFeedback onPress={() => this.props.falseGoods("goods")}>
                        <MaterialCommunityIcons style={{
                            position: 'absolute', left: 10, top: 40,
                        }} name="arrow-left" size={30} color="#535461"/>
                    </TouchableNativeFeedback>
                    <Text style={{
                        fontFamily: 'mont-semi',
                        fontSize: 20, marginTop: 27,
                        color: '#000',
                    }}>
                        {(headerS)}
                    </Text>
                </View>
            );
            body = (<View style={{
                width: '100%',
                marginTop: 10,
            }}>
                <Goods navigation={this.props.navigation}
                    cat_id={this.state.goodsCat}
                    school_id={this.state.school_id}
                    token={this.state.token}
                    user_id={this.state.user_id}
                />
            </View>);
        }else if(!this.props.home && !this.props.messages
            && !this.props.browse && this.props.cart){
                header = (
                    <View style={{
                        flexDirection: 'row', flex: 1, alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                            <View style={{width: 45, height: 45, }}>
                                <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1, marginTop: 26}}
                                       source={require('../cart_yellow.png')}/>
                            </View>
                        <Text style={{
                            fontFamily: 'mont-semi',
                            fontSize: 20, marginLeft: 2,
                            color: '#000', marginTop: 27,
                        }}>
                            Cart
                        </Text></View>
                )
            }
        return (
            <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
                <StatusBar backgroundColor='#fff' translucent={true} barStyle='dark-content'/>
                
                <View style={{
                    elevation: (this.props.browse || this.props.services) ? 0 : 1,
                    backgroundColor: this.props.browse ? '#EFB879' : '#fff',
                    height: 80,
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    {header}
                </View>
                <ViewPagerAndroid style={{flex: 1}} initialPage={0}
                                  onPageSelected={this.onPageSelected.bind(this)}
                                  ref={(viewPager) => {
                                      this.viewPager = viewPager
                                  }}>
                    <View style={{flex: 1}} key="1">
                        <ScrollView overScrollMode='never'>
                        {body}
                        </ScrollView>
                        </View>
                    <View style={{flex: 1}} key="2">
                        {contacts?contacts: <Text>dkdkd</Text>}
                    </View>
                    <View style={{flex: 1}} key="3">
                        
                    </View>
                    <View style={{flex: 1}} key="4">
                    <Cart navigation={this.props.navigation}
                    />
                    </View>
                </ViewPagerAndroid>
                
                <BoxShadow setting={shadowFooter}>
                    <View style={styles.footer}>
                        <TouchableNativeFeedback onPress={this.homey.bind(this)}>
                            <View style={{height: 24, width: 26}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={(this.props.home) ? require('../home.jpg') : require('../home_normal.jpg')}/>
                            </View></TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={this.messy.bind(this)}>
                            <View style={{height: 24, width: 30}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={this.props.messages ? require('../message_yellow.jpg') : require('../message.jpg')}/>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={this.browsey.bind(this)}>
                            <View style={{height: 24, width: 26}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={this.props.browse ? require('../search_yellow.png') : require('../searchicon.jpg')}/>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={this.cartey.bind(this)}>
                            <View style={{height: 24, width: 26}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={this.props.cart?require('../cart_yellow.png'):require('../carticon.jpg')}/>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </BoxShadow>
                {this.state.cancel?<View></View>:
                <Animated.View style={{width: '100%', height: 110, position: 'absolute', bottom: 0,opacity: this.state.fadeAnim}}>
                <LinearGradient colors={['#EFB879', '#f2ac88']}
                                style={{flex: 1,
                                paddingTop: 15, flexDirection: 'column', paddingLeft: 18}}>
                  <TouchableWithoutFeedback onPress={() => this.setState({cancel: true})}>
                            <MaterialIcons style={{position: 'absolute',right: 10,top: 10,
                            }}  name="cancel" size={15} color="#fff"/>
                        </TouchableWithoutFeedback>
                        <TouchableNativeFeedback onPress={() =>
                        this.props.navigation.navigate('Membership', {})}>
                        <Text style={{fontFamily: 'mont-semi', fontSize: 14, color: '#fff', width: '80%'}}>
                        Try one of our membership plans now{'\n'}
                        </Text></TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() =>
                        this.props.navigation.navigate('Membership', {})}>
                        <Text style={{fontFamily: 'mont', fontSize: 11,width: '80%', color: '#fff', textAlign: 'left'}}>
                        With any of sele membership plans you get to bid on a large amount of projects in a month
                        </Text></TouchableNativeFeedback>
                                </LinearGradient></Animated.View>}
                                {name === ""?<View></View>:
                <Animated.View style={{width: '100%', height: 50, position: 'absolute', top: 80,opacity: this.state.fadeAnimName}}>
                <LinearGradient colors={['#EFB879', '#f2ac88']}
                                style={{flex: 1,
                                paddingTop: 15, flexDirection: 'column',}}>
                                <View style={{height: 24, width: 30, alignSelf: 'center', position: 'absolute', top: 10, opacity: 0.3}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={require('../logo2.png')}/>
                            </View>
                        <Text style={{fontFamily: 'mont-semi', fontSize: 14, color: '#fff', width: '80%', alignSelf: 'center'}}>
                        Welcome  {name} {'\n'}
                        </Text>
                                </LinearGradient></Animated.View>}
                                {!this.state.isConnected?<View style={styles.internet}>
                 <Text style={styles.intText}>
                     No Internet Connection detected
                 </Text>  
                </View>: null}       
            </View>
            
        );
    }
}

const dimensions = Dimensions.get('window');
const Height = (dimensions.height) / 5;
const Width = dimensions.width;
const styles = StyleSheet.create({
    profileName: {
        fontFamily: 'mont-medium',
        fontSize: 14,
        color: '#000',
        textAlign: 'left',
        marginTop: 14,
    },
    profiles: {
        width: 57,
        height: 57,
        borderRadius: 57/2,
        marginLeft: '8.33%',
        marginTop: 12,
        backgroundColor: '#fff'
    },
    chatTexts: {
        marginLeft: 15,
        width: '50%'
    },
    chats: {
    //   height: '15.75%',
     //   width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 10
    },
    internet: {
        position: 'absolute',
        bottom: 56,
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
    footer: {
        height: 56,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 28,
        paddingRight: 28
    },
    name: {
        fontFamily: 'mont-semi',
        fontSize: 10,
        color: '#615d5d'
    },
    price: {
        fontFamily: 'mont-medium',
        fontSize: 8,
        color: '#615d5d'
    },
    pictures: {
        flex: 1,
    },
    arrange: {
        height: 200,
        flexDirection: 'column',

    },
    miniPictures: {
        height: 120,
        width: 130,
        marginRight: 10,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: '#FAFAFA',
        borderWidth: 0.4,
        borderColor: '#d1d1d1',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 9,
    },
    minicats: {
        height: 120,
        width: 130,
        marginRight: 10,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: '#Fff',
        borderWidth: 0.4,
        borderColor: '#d1d1d1',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    miniKitchen: {
        height: 120,
        width: 130,
        marginRight: 10,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: '#F2C490',
        borderWidth: 0.4,
        borderColor: '#d1d1d1',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    miniCatsPress: {
        height: 120,
        width: 130,
        marginRight: 10,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: '#Fff',
        borderWidth: 0.4,
        borderColor: '#d1d1d1',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    columnText: {
        fontFamily: 'mont-medium',
        fontSize: 12,
        color: '#000'
    },
    firstColumn: {
        flexDirection: 'column',
        paddingLeft: '6%',
        paddingTop: 20,
        width: Width,
        height: 200,
        marginBottom: 25,
    },
    secondColumn: {
        flexDirection: 'column',
        paddingLeft: '6%',
        paddingTop: 15,
        width: Width,
        backgroundColor: '#fff',
        borderWidth: 0.4,
        borderColor: '#dadada',
        height: 200,
    },
    fourthColumn: {
        flexDirection: 'column',
        paddingLeft: '6%',
        marginTop: 15,
        paddingTop: 15,
        width: Width,
        backgroundColor: '#fff',
        borderWidth: 0.4,
        borderColor: '#dadada',
        height: 200,
    },
    manner: {
        flexDirection: 'column',
        paddingLeft: '6%',
        paddingTop: 15,
        width: Width,
        backgroundColor: '#fff',
        borderWidth: 0.4,
        borderColor: '#dadada',
        height: 55,
    },
    thirdColumn: {
        marginTop: 15,
        flexDirection: 'row',
        paddingLeft: '6%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: Width,
        backgroundColor: '#fff',
        borderWidth: 0.4,
        borderColor: '#dadada',
        height: 55,
        paddingRight: 29
    },
    ox: {
        flexDirection: 'column',
        width: '100%',
        marginTop: 10,
    },
    headerCenter: {
        fontFamily: 'mont-bold',
        fontSize: 34,
        alignSelf: 'center',
        marginTop: 27,
        marginBottom: 14,
        letterSpacing: 0.7,
    },
    icons: {
        width: Width * (14.5 / 100),
        height: Width * (14.5 / 100),
        borderRadius: (Width * (14.5 / 100)) / 2,
        backgroundColor: '#F2C490',
        alignContent: 'center'
    },
    iconRow: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row'
    }
});
const Home = connect(mapStateToProps, mapDispatchToProps)(reduxHome);
export default Home;
/**
<TouchableNativeFeedback 
                onPress={() =>
                    this.props.navigation.navigate('Chat', {}
                )}>
                        <View style={styles.chats}>
                    <View style={styles.profiles}>
                        <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1,}}
                               source={require('../teeth.png')}/>
                    </View>
                    <View style={styles.chatTexts}>
                        <Text style={styles.profileName}>
                            {item.receiver.first_name} {item.receiver.last_name}
                            {'\n'}{'\n'}
                           {item.last_message.read?
                            <Text style={{fontSize: 12}}>
                            {item.last_message.message}
                            </Text>:<Text style={{fontSize: 12, color: '#ADA5A5'}}>
                                {item.last_message?item.last_message.message :null}
                            </Text>} 
                        </Text>
                    </View>
                    <Text style={{fontSize: 12,
                        position: 'absolute',
                        right: '8.33%',fontFamily: 'mont-medium',
                        color: '#000',
                        textAlign: 'left',
                        marginTop: 14,}}>
                        12:15
                    </Text>
                </View>
                        </TouchableNativeFeedback>        
 * <Browse navigation={this.props.navigation}
                            rfu={this.state.rfu}
                            
                        />
 icons
 <View style={styles.iconRow}>
 <TouchableNativeFeedback><View style={styles.icons}>
 <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
 source={require('../kitchen.png')}/>
 </View></TouchableNativeFeedback>
 <TouchableNativeFeedback><View style={styles.icons}>
 <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
 source={require('../music.png')}/>
 </View></TouchableNativeFeedback>
 <TouchableNativeFeedback><View style={styles.icons}>
 <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
 source={require('../car.png')}/>
 </View></TouchableNativeFeedback>
 <TouchableNativeFeedback><View style={styles.icons}>
 <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
 source={require('../iphone.png')}/>
 </View></TouchableNativeFeedback>
 </View>
 * */