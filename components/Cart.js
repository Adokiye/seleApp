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
    FlatList,
    View
} from 'react-native';
import {connect} from "react-redux";
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
class reduxCart extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props),
        this.state ={
            total: 0
        }
    }
    render() {
        var element = 0;
            for (let index = 0; index < this.props.cartItems.length; index++) {
                var element = element + parseInt(this.props.cartItems[index].amount);         
            }
        
        const cartItems = (
        <FlatList
            data={this.props.cartItems}          
            renderItem={({ item, index }) => ( 
                <View style={styles.productbox}>
                
    <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('ProductDetail', {
                    name: item.name,
                amount: item.amount,
                description: item.description,
                images: item.images,
                qty: item.quantity,
                id: item.id
                })}>
                <Image  resizeMode="contain" style={{borderRadius: 3,
    width: 90,
    height: 69,
    marginLeft: '9%'}}
    source={require('../productPix.png')}/>
    </TouchableNativeFeedback>
    
    <View style={styles.productTextBox}>
     <Text style={styles.productName}>
      {item.name}
     </Text>
     <Text style={styles.productPrice}>
      ₦{item.amount}
     </Text>
    </View>
    
     <View style={styles.chatter}>
     <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
source={require('../chatter.png')}/>
     </View>
     <TouchableNativeFeedback onPress={() =>this.props.removeCart(index)}>
  <View style={styles.chatter2}>
    <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1,}}
source={require('../cancel.png')}/>
     </View></TouchableNativeFeedback>
    </View>    
             )}
             keyExtractor={(item, index) => index}                
        />
        );
  /*      const cartItems = (
            this.props.cartItems.map((item, index) =>
            
    <View style={styles.productbox}>
    <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('ProductDetail', {})}>
                <Image  resizeMode="contain" style={{borderRadius: 3,
    width: 90,
    height: 69,
    marginLeft: '9%'}}
    source={{uri: 'http://10.0.2.2:8000/'+item.image}}/>
    </TouchableNativeFeedback>
    <View style={styles.productTextBox}>
     <Text style={styles.productName}>
      {item.name}
     </Text>
     <Text style={styles.productPrice}>
      ₦{item.amount}
     </Text>
    </View>
    <View style={styles.icons}>
    <TouchableNativeFeedback onPress={() =>console.log("sksk")}>
                <View style={styles.chatter}>
     <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1,}}
source={require('../cancel.png')}/>
     </View></TouchableNativeFeedback>
     <View style={styles.chatter}>
     <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
source={require('../chatter.png')}/>
     </View>
    </View>
    </View>
    
        ));*/
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                {cartItems}
                {element !== 0 ?<View style={styles.footer}>
                 <Text style={{color: '#000', fontFamily: 'mont-medium', fontSize: 12}}>
                 TOTAL{'\n'}
                 PRICE: </Text>
                 <Text style={{color: '#333333', fontFamily: 'mont', fontSize: 24}}>
                  ₦{element}
                 </Text> 
                </View>: null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
    },
    productbox: {
    width: '100%',
    height: 100,
    borderWidth: 0.3,
    borderColor: '#DADADA',
    flexDirection: 'row',
    alignItems: 'center',
    },
    productPix: {
    borderRadius: 3,
    width: 90,
    height: 69,
    marginLeft: '9%',
    },
    productTextBox: {
    flexDirection: 'column',
    height: 69,
    justifyContent: 'center',
    marginLeft: 17,
  //  width: 70
    },
    productName: {
    fontFamily: 'mont-semi',
    color: '#000',
    fontSize: 18
    },
    productPrice: {
        fontFamily: 'mont',
        color: '#333333',
        fontSize: 12
        },
    icons:{
        height: 40,
        width: 20,
        position: 'absolute',
        right: '9%',
        flexDirection: 'column',
        justifyContent: 'space-between'  
    },
    chatter: {
        height: 13,
        width: 15,
        flex: 2,
        
    },
    chatter2: {
        height: 13,
        width: 15,
        flex: 1,
      //  position: 'absolute',
      //  right: '9%',
      //  top: 25
    }  
});
const Cart = connect(mapStateToProps, mapDispatchToProps)(reduxCart);
export default Cart;