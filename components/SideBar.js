/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    StatusBar,
    ViewPagerAndroid,
    Alert,
    ScrollView,
    TouchableNativeFeedback,
    KeyboardAvoidingView,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Messages from "./Messages";
import Services from "./Services";
import Cart from "./Cart";
import Goods from "./Goods";
import Browse from "./Browse"
import Find from "./Find";
import {BoxShadow} from 'react-native-shadow';
import {createStackNavigator, DrawerNavigator, DrawerItems} from 'react-navigation';
import {connect, Provider} from 'react-redux';


const dimensions = Dimensions.get('window');
const Width = dimensions.width;

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            side: ''
        };
    }
    sideBar(categpry){
    this.setState({side: category})
    }
    render() {
            return (
                <View style={{flex: 1, backgroundColor: '#fcfcfc'}}>
                <LinearGradient colors={['#EE8F62', '#f2ac88']}
                                style={{width: '100%', height: 190}}>
                    <View style={{
                        flex: 1, flexDirection: 'row', alignItems: 'center',
                        paddingTop: 20, justifyContent: 'center', alignContent: 'center'
                    }}>
                        <View style={{
                            width: 150, height: 150,
                            borderRadius: 150 / 2,
                        }}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../profile.png')}/>
                        </View>
                        <View style={{flexDirection: 'column', marginBottom: 13}}>
                            <Text style={{fontFamily: 'mont-semi', color: '#fff', fontSize: 20}}>
                                Jane Doe</Text>
                            <Text style={{fontFamily: 'mont', color: '#fcfcfc', fontSize: 18, marginTop: 10}}>
                                Profile</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View style={{flex: 1, backgroundColor: '#fcfcfc'}}>
                    <TouchableNativeFeedback 
                    onPress={() =>
                        this.props.navigation.navigate('Shop', {})}>
                        <View style={{
                            height: 60,
                            width: '100%',
                            backgroundColor: '#fcfcfc',
                            flexDirection: 'row',
                            paddingLeft: 20,
                            paddingRight: 10,
                            paddingTop: 10,
                            alignItems: 'center',
                            alignContent: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={{
                                flexDirection: 'row', height: 40,
                                width: '100%', backgroundColor: '#f2f2f2', borderRadius: 3,
                                alignItems: 'center', paddingLeft: 10
                            }}>
                                <View style={{height: 21, width: 23}}><Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
    
                                    source={require('../cart.jpg')}/></View>
                                <Text style={{
                                    marginLeft: 23, fontFamily: 'mont-medium', fontSize: 14
                                    , color: '#F3B690'
                                }}>Shop by Category</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() =>
                        this.props.navigation.navigate('SetCat', {})}>
                        <View style={{
                            height: 60, width: '100%', backgroundColor: '#fcfcfc',
                            flexDirection: 'row', paddingLeft: 20, paddingTop: 10
                        }}>
                            <View style={{height: 23, width: 23}}><Image
                                resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                source={require('../recruitment.jpg')}/></View>
                            <Text style={{
                                marginLeft: 23, fontFamily: 'mont-medium', fontSize: 14
                                , color: '#615D5D'
                            }}>Sẹlẹ Services</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() =>
                        this.props.navigation.navigate('Projects', {})}>
                        <View style={{
                            height: 60, width: '100%', backgroundColor: '#fcfcfc',
                            flexDirection: 'row', paddingLeft: 20, paddingTop: 10
                        }}>
                            <View style={{height: 23, width: 23}}><Image
                                resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                source={require('../folder_black.png')}/></View>
                            <Text style={{
                                marginLeft: 23, fontFamily: 'mont-medium', fontSize: 14
                                , color: '#615D5D'
                            }}>My Projects</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() =>
                        this.props.navigation.navigate('Sell', {})}>
                    <View style={{
                        height: 60, width: '100%', backgroundColor: '#fcfcfc',
                        flexDirection: 'row', paddingLeft: 20, paddingTop: 10
                    }}>
                        <View style={{height: 23, width: 23}}><Image
                            resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                            source={require('../payment-method.png')}/></View>
                        <Text style={{
                            marginLeft: 23, fontFamily: 'mont-medium', fontSize: 14
                            , color: '#615D5D'
                        }}>Sell on Sẹlẹ</Text>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() =>
                        this.props.navigation.navigate('PostJob', {})}>
                    <View style={{
                        height: 60, width: '100%', backgroundColor: '#fcfcfc',
                        flexDirection: 'row', paddingLeft: 20, paddingTop: 10
                    }}>
                        <View style={{height: 23, width: 23}}><Image
                            resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                            source={require('../payment-method_yellow.png')}/></View>
                        <Text style={{
                            marginLeft: 23, fontFamily: 'mont-medium', fontSize: 14
                            , color: '#615D5D'
                        }}>Post job</Text>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() =>
                        this.props.navigation.navigate('MyAccount', {})}>
                        <View style={{
                            height: 60, width: '100%', backgroundColor: '#fcfcfc',
                            flexDirection: 'row', paddingLeft: 20, paddingTop: 10
                        }}>
                            <View style={{height: 21, width: 23}}>
                                <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                       source={require('../account.jpg')}/></View>
                            <Text style={{
                                marginLeft: 23, fontFamily: 'mont-medium', fontSize: 14
                                , color: '#615D5D'
                            }}>My Account</Text>
                        </View></TouchableNativeFeedback>
                </View>
            </View>
            );

        }
    
}
const NAVBAR_HEIGHT = Platform.select({
    ios: {marginTop: 0},
    android: {marginTop: window.height / 8}
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EE8F62',
    }
});
/*
  var config = {
        headers: {'Authorization': "bearer " + token}
   };

   var bodyParameters = {
       key: "value"
   }

  Axios.post(
      'http://localhost:8000/api/v1/get_token_payloads',
      bodyParameters,
      config
  ).then((response) => {
      console.log(response)
  }).catch((error) => {
      console.log(error)
  });*/