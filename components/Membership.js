import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TextInput,
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
class reduxMembership extends Component {

    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {};
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
    
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
                <StatusBar backgroundColor='#fff' translucent={true} barStyle='dark-content'/>
                <View style={{
                    elevation:  1,
                    backgroundColor: '#EFB879',
                    height: 80,
                    justifyContent: 'center',
                    width: '100%',
                    marginBottom: 20
                }}>
            <View style={{
                flexDirection: 'row', flex: 1, alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableNativeFeedback onPress={() => this.props.navigation.goBack(null)}>
                        <MaterialCommunityIcons style={{position: 'absolute',left: 10,top: 35
                        }} name="arrow-left" size={25} color="#fff"/>
                    </TouchableNativeFeedback>
                <Text style={styles.headerCenter}>
                 Membership Plans
                </Text>
                </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableNativeFeedback>
            <LinearGradient colors={['#EFB879', '#f2ac88']}
                                style={{width: '86.39%', height: 120,borderRadius: 3,alignItems: 'center', marginBottom: 10,
                                alignSelf: 'center', flexDirection: 'row',elevation: 1, paddingLeft: 20}}>
                        <View style={{height: 60, width: 60}}>
                        <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={require('../free.png')}/>
                                    </View>
                                    <View style={{height: 90, backgroundColor: 'transparent', flexDirection: 'column', 
                                    justifyContent: 'space-around', marginLeft: 12}}>
                                    <View style={{height: 25, flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Text style={{fontFamily: 'mont-bold', fontSize: 18, color: '#fefefe'}}>
                                     FREE
                                    </Text>
                                    <View style={{backgroundColor: '#fff', borderWidth: 1, borderColor: '#fff', width: 39, height: 0}}>
                                    </View>
                                    </View>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      Bid on up to 15 jobs in a month
                                    </Text>
                                    </View>
                                </LinearGradient></TouchableNativeFeedback>
            <TouchableNativeFeedback>
            <LinearGradient colors={['#EFB879', '#f2ac88']}
                                style={{width: '86.39%', height: 120,borderRadius: 3,alignItems: 'center', marginBottom: 10,
                                alignSelf: 'center', flexDirection: 'row',elevation: 1, paddingLeft: 20}}>
                        <View style={{height: 60, width: 60}}>
                        <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={require('../fresher.png')}/>
                                    </View>
                                    <View style={{height: 90, backgroundColor: 'transparent', flexDirection: 'column', 
                                    justifyContent: 'space-between', marginLeft: 12}}>
                                    <View style={{height: 25, flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Text style={{fontFamily: 'mont-bold', fontSize: 18, color: '#fefefe'}}>
                                     FRESHER
                                    </Text>
                                    <View style={{backgroundColor: '#fff', borderWidth: 1, borderColor: '#fff', width: 39, height: 0}}>
                                    </View>
                                    </View>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      250 naira/month   
                                    </Text>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      Bid on up to 20 jobs in a month
                                    </Text>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      Post 1 job in a month for free
                                    </Text>
                                    </View>
                                </LinearGradient></TouchableNativeFeedback>
                                <TouchableNativeFeedback>
                                <LinearGradient colors={['#EFB879', '#f2ac88']}
                                style={{width: '86.39%', height: 120,elevation: 1,borderRadius: 3,alignItems: 'center', marginBottom: 10,
                                alignSelf: 'center', flexDirection: 'row', paddingLeft: 20}}>
                        <View style={{height: 60, width: 60}}>
                        <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={require('../stalite.png')}/>
                                    </View>
                                    <View style={{height: 90, backgroundColor: 'transparent', flexDirection: 'column', 
                                    justifyContent: 'space-between', marginLeft: 12}}>
                                    <View style={{height: 25, flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Text style={{fontFamily: 'mont-bold', fontSize: 18, color: '#fefefe'}}>
                                     STALLITE
                                    </Text>
                                    <View style={{backgroundColor: '#fff', borderWidth: 1, borderColor: '#fff', width: 39, height: 0}}>
                                    </View>
                                    </View>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      500 naira/month   
                                    </Text>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      Bid on up to 40 jobs in a month
                                    </Text>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      Post 2 jobs in a month for free
                                    </Text>
                                    </View>
                                </LinearGradient></TouchableNativeFeedback>
                                <TouchableNativeFeedback>
                                <LinearGradient colors={['#EFB879', '#f2ac88']}
                                style={{width: '86.39%', height: 120,elevation: 1,borderRadius: 3,alignItems: 'center', marginBottom: 10,
                                alignSelf: 'center', flexDirection: 'row', paddingLeft: 20}}>
                        <View style={{height: 60, width: 60}}>
                        <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={require('../masters.png')}/>
                                    </View>
                                    <View style={{height: 90, backgroundColor: 'transparent', flexDirection: 'column', 
                                    justifyContent: 'space-between', marginLeft: 12}}>
                                    <View style={{height: 25, flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Text style={{fontFamily: 'mont-bold', fontSize: 18, color: '#fefefe'}}>
                                     MASTERS
                                    </Text>
                                    <View style={{backgroundColor: '#fff', borderWidth: 1, borderColor: '#fff', width: 39, height: 0}}>
                                    </View>
                                    </View>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      700 naira/month   
                                    </Text>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      Bid on up to 50 jobs in a month
                                    </Text>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      Post 3 jobs in a month for free
                                    </Text>
                                    </View>
                                </LinearGradient></TouchableNativeFeedback>
                                <TouchableNativeFeedback>
                                <LinearGradient colors={['#EFB879', '#f2ac88']}
                                style={{width: '86.39%', height: 120,elevation: 1,borderRadius: 3,alignItems: 'center', marginBottom: 10,
                                alignSelf: 'center', flexDirection: 'row', paddingLeft: 20}}>
                        <View style={{height: 60, width: 60}}>
                        <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={require('../doctorate.png')}/>
                                    </View>
                                    <View style={{height: 90, backgroundColor: 'transparent', flexDirection: 'column', 
                                    justifyContent: 'space-between', marginLeft: 12}}>
                                    <View style={{height: 25, flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Text style={{fontFamily: 'mont-bold', fontSize: 18, color: '#fefefe'}}>
                                     DOCTORATE
                                    </Text>
                                    <View style={{backgroundColor: '#fff', borderWidth: 1, borderColor: '#fff', width: 39, height: 0}}>
                                    </View>
                                    </View>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      1000 naira/month   
                                    </Text>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      Bid on up to 1000 jobs in a month
                                    </Text>
                                    <Text style={{fontFamily: 'mont', fontSize: 10, color: '#fefefe'}}>
                                      Post 4 jobs in a month for free
                                    </Text>
                                    </View>
                                </LinearGradient></TouchableNativeFeedback>
                                </ScrollView>
                </View>
        );
    } 

}
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    headerCenter: {
        fontFamily: 'mont-semi',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 14,
        color: '#fff'
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
const Membership = connect(mapStateToProps, mapDispatchToProps)(reduxMembership);
export default Membership;