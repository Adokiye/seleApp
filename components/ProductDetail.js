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
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {BoxShadow} from 'react-native-shadow';
import {DrawerNavigator} from "react-navigation";
import {connect} from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Carousel, { Pagination } from 'react-native-snap-carousel';

import {
    trueBrowse, trueCart, trueHome, trueMessages, trueServices, falseBrowse,removeCart,
    falseCart, falseHome, falseMessages, falseServices,trueGoods,addCart,
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
        cartItems: state.cartItems
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
        addCart: newItem => dispatch(addCart(newItem)),
        removeCart: newItem => dispatch(removeCart(newItem))
    };

};
class reduxProductDetail extends Component {
    _renderItem ({item, index}) { 
      return ( <TouchableNativeFeedback onPress={() =>
        this.props.navigation.navigate('ImageView', {image: item})
    }><Image  
      resizeMode={"cover"}
        style={{alignSelf: 'center', flex: 1,height: 180, width: '100%'}}
                                           source={item}/></TouchableNativeFeedback>);
    };
    _rerender(){
      return  <View style={{height: 24, width: 30, alignSelf: 'center', position: 'absolute', top: 10, opacity: 0.}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={require('../logo2.png')}/>
                            </View>  
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    get pagination () {
        const { images, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={images.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor:  'transparent',  }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: '#000'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.imagesY = ["require('../laptop.png')", "require('../productPix.png')", "require('../ps4.png')"]
        this.state = {
            name: '',
            amount: '',
            description: '',
            qty: '',
            images: this.imagesY,
            activeSlide: 0,
            modalVisible: false,
            id: '',
            inCart: false,
            key: ''
        };
        this._renderItem = this._renderItem.bind(this);
    }
    carter(){
        this.props.addCart(
            {image: this.state.images[0],
            images: this.state.images,
            name: this.state.name,amount: 
            this.state.amount,
            id: this.state.id, 
            });
    }
    onPageSelected(e) {
        
    }
    remover(index){
        this.props.removeCart(index);
        this.setState({inCart: false})
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
        const name     = params? params.name : "";
        const id     = params? params.id : "";
        const amount     = params? params.amount : "";
        const description     = params? params.description : "";
    //    const images     = params? params.images : "";
        const qty     = params? params.qty : "";
        this.setState({
            name: name,
            amount: amount,
            description: description,
            qty: qty,
            id: id
        })
        console.log(id);
     //   var len = images.length;
        
    //    this.setState({images: ["require('../laptop.png')"]})
        var result = this.search(id, this.props.cartItems); 
        console.log(this.props.cartItems);
        console.log(result);  
        if(result !== -1){
            this.setState({inCart: true});
            this.setState({key: result});
        }else{
            this.setState({inCart: false});
        }   
    }
    search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].id === nameKey) {
                return i;
            }else{
                return -1
            }
        }
    }
  /*  componentDidUpdate(){
        const {params} = this.props.navigation.state;
        const id     = params? params.id : "";
        var result = this.search(id, this.props.cartItems); 
                console.log(this.props.cartItems);
                console.log(result);  
                if(result){
                    this.setState({inCart: true});
                    this.setState({key: result});
                }else{
                    this.setState({inCart: false});
                }      
    }*/
    render() {
        let button;
        button = (
            <TouchableNativeFeedback onPress={this.carter.bind(this) }>
            <View style={styles.addToCart}>
            <Text style={{fontSize: 14, fontFamily: 'mont-medium', color: '#fff'}}>
                ADD TO CART
            </Text>
            </View>    
           </TouchableNativeFeedback>  
        );
        
        return (
            <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
                <StatusBar backgroundColor='#fff' translucent={true} barStyle='dark-content'/>
                <View style={{
                    elevation:  1,
                    backgroundColor: '#fff',
                    height: 80,
                    justifyContent: 'center',
                    width: '100%'
                }}>
            <View style={{
                flexDirection: 'row', flex: 1, alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableNativeFeedback onPress={() => this.props.navigation.goBack(null)}>
                        <MaterialCommunityIcons style={{position: 'absolute',left: 10,top: 35
                        }} name="arrow-left" size={30} color="#EFB879"/>
                    </TouchableNativeFeedback>
                <LinearTextGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    locations={[0, 1, 0]} style={styles.headerCenter}
                    colors={['#E5473F', '#EE8F62', '#EFC07C']}>sẹlẹ
                </LinearTextGradient>
                <TouchableNativeFeedback onPress={this.cartChanger.bind(this)}>
                        <View style={{width: 45, height: 45, position: 'absolute', right: 0}}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1, marginTop: 26}}
                                   source={require('../cart_yellow.png')}/>
                        </View>
                    </TouchableNativeFeedback>
                </View></View><ScrollView showsVerticalScrollIndicator={false}><View style={{flex: 1}}>    
                <View style={{width: '100%', height: 185}}>
                                  <Carousel
                  data={this.state.images}
                  sliderWidth={sliderWidth}
                  itemWidth={sliderWidth}
                  itemHeight={185}
                  renderItem={this._renderItem}
                  windowSize={1}
                  layout={'default'} 
                  onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />
                {this.pagination}
                </View> 
                
                                  
                                  <Text style={{marginTop: 20, color: '#000', fontSize: 18, fontFamily: 'mont-semi', marginLeft: 30}}>
                                      {this.state.name}
                                  </Text>
                                  <Text style={{marginTop: 2, color: '#333333', fontSize: 12, fontFamily: 'mont', marginLeft: 30}}>
                                   ₦{this.state.amount}
                                  </Text> 
                                  <Text style={{marginTop: 12, color: '#615D5D', fontSize: 12, fontFamily: 'mont', marginLeft: 30, alignSelf: 'center'}}>
                                  {this.state.description}
                                  </Text> 
                                  <View style={styles.qtyHolder}>
                                      <View style={styles.qty}>
                                   <Text style={{marginLeft: 10,color: '#000', fontFamily: 'mont', fontSize: 12}}>
                                       QTY:
                                   </Text>
                                   <Text style={{marginLeft: 34, fontSize: 24,color: '#000', fontFamily: 'mont', }}>
                                       {this.state.qty}
                                   </Text>
                                  </View>
                                  <View style={styles.qty}>
                                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                  <Text style={{marginLeft: 10,color: '#000', fontFamily: 'mont', fontSize: 12}}>
                                       AMOUNT:
                                   </Text>
                                   <Text style={{marginLeft: 3, fontSize: 14,color: '#000', fontFamily: 'mont', }}>
                                    ₦{this.state.amount}
                                   </Text>
                                   </ScrollView>
                                  </View>
                                  </View>
                                  <TouchableNativeFeedback onPress={this.messageSeller.bind(this)}>
                                  <View style={styles.chatSeller}>
                                  <View style={{height: 24, width: 30}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={require('../message_yellow.jpg')}/>
                                </View>
                                <Text style={{fontSize: 10, color: '#000', fontFamily: 'mont', marginLeft: 15}}>
                                    CHAT SELLER
                                </Text>
                                  </View>
                                  </TouchableNativeFeedback>
                                  {button}
                                  </View>
                                  </ScrollView>
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
const ProductDetail = connect(mapStateToProps, mapDispatchToProps)(reduxProductDetail);
export default ProductDetail;