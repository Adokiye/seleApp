import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TextInput,
    Modal,
    TouchableNativeFeedback,
    ScrollView,
    View, ViewPagerAndroid, StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from "react-redux";
import PhotoView from 'react-native-photo-view';

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
        goods: state.goods
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
class reduxImageView extends Component {
   
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            amount: '',
            description: '',
            qty: '',
            images: [],
            activeSlide: 0,
            modalVisible: false
        };
    }
    onPageSelected(e) {
        
    }
    cartChanger(){
    this.props.trueCart("cart");
    this.props.falseBrowse("browse");
    this.props.falseHome("home");
    this.props.falseMessages("messages");
    this.props.navigation.navigate('Land', {
    });
    }
    messageSeller(){
        this.props.falseCart("cart");
        this.props.falseBrowse("browse");
        this.props.falseHome("home");
        this.props.trueMessages("messages");    
        this.props.navigation.navigate('Land', {
        });
    }
  /*  componentDidUpdate(){
        const {params} = this.props.navigation.state;
        const name     = params? params.name : "";
        const amount     = params? params.amount : "";
        const description     = params? params.description : "";
        const images     = params? params.images : "";
        const qty     = params? params.qty : "";
        this.setState({
            name: name,
            amount: amount,
            description: description,
            qty: qty
        })
        var len = images.length;
        for (let i = 0; i < len; i++) {
            let row = images[i];
            this.setState(prevState => ({
                images: [...prevState.images, row],
            }));
        }
    }*/
    componentDidMount(){
        const {params} = this.props.navigation.state;
        const image     = params? params.image : "";
        if(image !== ""){
        this.setState({
            image: image
        }); 
        }else{
        this.props.navigation.goBack(null); 
        }
        
       
    }
    render() {
        if(this.state.image){
            body = (
                <PhotoView
                resizeMode={"contain"}
                minimumZoomScale={1.0}
  maximumZoomScale={2}
  //androidScaleType="center"
  onLoad={() => console.log("Image loaded!")}
                  style={{flex: 1}}
                                                     source={this.state.image}/>
            );
        }else{
            body = (
                <View></View>
            );
      //      
        }
        return (
            <View style={{flex: 1, backgroundColor: '#000'}}>
                <StatusBar backgroundColor='#000' translucent={true} barStyle='light-content'/>
                <View style={{flexDirection: 'column',flex: 1}}>
                <TouchableNativeFeedback onPress={() => this.props.navigation.goBack(null)}>
                        <MaterialCommunityIcons style={{marginLeft: 10,marginTop: 35
                        }} name="arrow-left" size={30} color="#fff"/>
                    </TouchableNativeFeedback>
                    {body}
                    </View>
                                  </View>
        );
    } 

}
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    headerCenter: {
        fontFamily: 'mont-bold',
        fontSize: 34,
        alignSelf: 'center',
        marginTop: 27,
        marginBottom: 14,
        letterSpacing: 0.7,
    },
    inactiveCircle:{
    width: 9,
    height: 9,
    borderRadius: 9/2,
    backgroundColor: '#dadada',
    marginRight: 14,
    alignSelf: 'center'
    },
    activeCircle:{
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#fff',
    marginRight: 14,
    alignSelf: 'center',
    borderColor: '#dadada',
    borderWidth: 0.5
    },
    circler:{
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 50,
    top: 185+(80-22),
    flexDirection: 'row',
    },
    qty: {
    width:  140,
    height: 60,
    backgroundColor: '#fff',
    borderColor: '#dadada',
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
    },
    qtyHolder:{
    marginTop: 12,
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'transparent'
    },
    chatSeller: {
        width: '100%',
        height: 45,
        backgroundColor: '#fff',
        borderColor: '#dadada',
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12
    },
    addToCart:{
    borderRadius: 6,
    width: '83.33%',
    height: 45,
    backgroundColor: '#F2C490',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
    },
});
const sliderWidth = Dimensions.get('window').width;
//const itemHeight = Dimensions.get('window').height;
const ImageView = connect(mapStateToProps, mapDispatchToProps)(reduxImageView);
export default ImageView;