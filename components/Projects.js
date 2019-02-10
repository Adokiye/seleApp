/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    Animated,
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
    TouchableWithoutFeedback,
    TextInput,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { trueGoods } from '../actions';



const dimensions = Dimensions.get('window');
const Width = dimensions.width;

export default class Projects extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'

    };
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            tab: 'all', 
            cancel: false,
            fadeAnim: new Animated.Value(0),
        };
    }
    showSearch(){
        this.setState({search: true},);
    };
    allSetter(it){
        this.setState({tab: it}); 
    };
    fader(){
        
    }
    componentDidMount() {
    this.timer =   setTimeout(function(){
            Animated.timing(                  // Animate over time
                this.state.fadeAnim,            // The animated value to drive
                {
                  toValue: 1,                   // Animate to opacity: 1 (opaque)
                  duration: 500,              // Make it take a while
                }
              ).start();                        // Starts the animation
        }.bind(this), 5000)
      }
    render() {
        if(this.state.tab === "all"){
            body = (
                <ScrollView keyboardShouldPersistTaps='always'
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',flexWrap: 'wrap',
                        alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',flexWrap: 'wrap',
                        alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',flexWrap: 'wrap',
                        alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',flexWrap: 'wrap',
                        alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',flexWrap: 'wrap',
                        alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',
                    alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',
                        alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                </TouchableNativeFeedback>
                </ScrollView> 
            );
        }else if(this.state.tab == "inp"){
            body = (
                <ScrollView keyboardShouldPersistTaps='always'
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',flexWrap: 'wrap',
                        alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',
                    alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',
                        alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                </TouchableNativeFeedback>
                </ScrollView>
            );
        }else if(this.state.tab === "act"){
            body = (
                <ScrollView keyboardShouldPersistTaps='always'
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',
                    alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',
                        alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                </TouchableNativeFeedback>
                </ScrollView>
            );
        }else{
            body = (
               <View>

               </View>
            );
        }
            return (
                <View style={{flex: 1, backgroundColor: '#fcfcfc'}}>
                <StatusBar backgroundColor='#fff' translucent={true} barStyle='dark-content'/>
                <View style={{flexDirection: 'row',height: 70,backgroundColor: '#fcfcfc',marginTop: 10,
               //     marginBottom: 15,
                    justifyContent: 'center',width: '100%',alignItems: 'center' }}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.goBack(null)}>
                        <MaterialCommunityIcons style={{position: 'absolute',left: 10,top: StatusBar.currentHeight-5
                        }} name="arrow-left" size={30} color="#535461"/>
                    </TouchableNativeFeedback>
                    {this.state.search?
                        <TextInput
                            autoFocus={true}
                            ref="search"
                            placeholder="Search..."
                            returnKeyType={'search'}
                            placeholderStyle={{fontSize: 20, fontFamily: 'mont-semi',}}
                            placeholderTextColor="#000"
                            underlineColorAndroid={'transparent'}
                            style={{
                                position: 'absolute',top: StatusBar.currentHeight-5,
                                backgroundColor: '#fcfcfc',width: '65%',alignSelf: 'center',
                                fontSize: 20, fontFamily: 'mont-medium', color: '#000',
                            }}/>:<Text style={{fontFamily: 'mont-semi',
                            fontSize: 20,top: StatusBar.currentHeight-5,position: 'absolute',
                            color: '#000',}}>
                            My Projects
                        </Text>}
                    {this.state.search?
                        <TouchableNativeFeedback onPress={() => this.setState({search: false})}>
                            <MaterialIcons style={{position: 'absolute',right: 10,
                                top: StatusBar.currentHeight-5
                            }}  name="cancel" size={30} color="#EFB879"/>
                        </TouchableNativeFeedback>:
                        <TouchableNativeFeedback onPress={this.showSearch.bind(this)}>
                            <MaterialIcons style={{position: 'absolute',right: 10,
                                top: StatusBar.currentHeight-5
                            }}  name="search" size={30} color="#EFB879"/>
                        </TouchableNativeFeedback>}
                </View>
                <View style={styles.navBar}>
                    <TouchableNativeFeedback onPress={this.allSetter.bind(this, "all")}><Text style={this.state.tab ==="all"?styles.activeText:styles.inactiveText}>All</Text></TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.allSetter.bind(this, "myp")}><Text style={this.state.tab ==="myp"?styles.activeText:styles.inactiveText}>My Posts</Text></TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.allSetter.bind(this, "act")}><Text style={this.state.tab ==="act"?styles.activeText:styles.inactiveText}>Active Bids</Text></TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.allSetter.bind(this, "inp")}><Text style={this.state.tab ==="inp"?styles.activeText:styles.inactiveText}>In Progress</Text></TouchableNativeFeedback>
                </View>
                {body}
                {this.state.cancel?<View></View>:
                <Animated.View style={{width: '100%', height: 110, position: 'absolute', top: StatusBar.currentHeight,opacity: this.state.fadeAnim}}>
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
            </View>
            );

        }
    
}
const NAVBAR_HEIGHT = Platform.select({
    ios: {marginTop: 0},
    android: {marginTop: window.height / 8}
});
const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        height: 40,
        backgroundColor: '#EFB879',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10  ,
        marginBottom: 10  
    },
    unselected: {
        width: 5, height: 5, borderRadius: 5 / 2, backgroundColor: '#DADADA',
    },
    activeText: {
        fontFamily: 'mont-semi',
        color: '#fff',
        fontSize: 12, 
    },
    inactiveText:{
        color: '#F7F2F2',
        fontFamily: 'mont',
        fontSize: 12, 
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