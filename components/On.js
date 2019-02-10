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
    ActivityIndicator,
    TouchableNativeFeedback,
    View
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';

export default class On extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    constructor(props) {
        const Width = Dimensions.get('window').width;
        super(props);
        this.state = {
            n: '0',
            no: 0,
            width: Width / 3,
            pressed: false,
            spinnerVisible: false
        };
        this.onCode = this.onCode.bind(this);
    }

    onPageSelected(e) {
        const Width = Dimensions.get('window').width;
        let currentPage = e.nativeEvent.position;
        let n = currentPage.toString();
        console.log(currentPage);
        this.setState({n});
        this.setState({no: currentPage});
        if (currentPage == 0) {
            this.setState({width: Width / 3});
        } else if (currentPage == 1) {
            this.setState({width: Width / 1.5});
        } else if (currentPage == 2) {
            this.setState({width: Width});
        }
    }
    onCode() {
        this.setState({spinnerVisible: true});
        setTimeout(() => {
            this.props.navigation.navigate('Find', {
            })
        }, 100);
    }
    update() {
        const Width = Dimensions.get('window').width;
        this.viewPager.setPage(this.state.no != 2 ? this.state.no + 1 : 2);
        let value = this.state.no != 2 ? this.state.no + 1 : 2;
        if(this.state.no == 2){
            this.onCode()
        }
        this.setState({no: value});
        if (value == 0) {
            this.setState({width: Width / 3});
        } else if (value == 1) {
            this.setState({width: Width / 1.5});
        } else if (value == 2) {
            this.setState({width: Width});
        }
    }
    skip(){
        this.onCode()
    }
    render() {
        const shadowOpt = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 10,
            color: "#000",
            border: 10,
            opacity: '0.15',
            radius: 20,
            x: 0,
            y: 5,
        }
        const dimensions = Dimensions.get('window');
        const Height = (dimensions.height);
        const Width = dimensions.width;
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor='#F2C490' translucent={true} barStyle='light-content'/>
                {this.state.spinnerVisible ? <View style={{flex: 1, backgroundColor: '#fff'}}>
                    <ActivityIndicator animating={this.state.spinnerVisible} color='#EFB879' size="large"
                    style={{flex: 1, justifyContent: 'center',
                        alignItems: 'center',
                        height: 80}}/>
                    </View>:
                <View style={{flex:1}}>
                <View style={{flexDirection: 'row',width: '100%',height: '5%',backgroundColor: '#cbcdda'}}>
                <View style={{
                    backgroundColor: '#EFB879',
                    width: (this.state.width),
                }}>
                </View>
            </View>
                <ViewPagerAndroid
                    onPageSelected={this.onPageSelected.bind(this)}
                    ref={(viewPager) => {
                        this.viewPager = viewPager
                    }}
                    style={{height: '87.5%'}}
                    initialPage={0}>
                    <View style={{
                        backgroundColor: 'white',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }} key="1">
                        <Image style={{marginBottom: 50,}} source={require('../on1.png')}/>
                        <Text style={{
                            fontFamily: 'mont-semi',
                            color: '#000',
                            fontSize: 22,
                            letterSpacing: 0.5,
                            marginBottom: 12
                        }}>
                            Welcome to Sẹlẹ
                        </Text>
                        <Text style={{
                            fontFamily: 'mont',
                            color: '#615D5D',
                            fontSize: 16,
                            letterSpacing: 1,
                            textAlign: 'center'
                        }}>
                            Save cash as you find incredible deals {'\n'} on campus from Sẹlẹ
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }} key="2">
                        <Image style={{marginBottom: 50, }}
                               source={require('../on2.png')}/>
                        <Text style={{
                            fontFamily: 'mont-semi',
                            color: '#000',
                            fontSize: 22,
                            letterSpacing: 0.5,
                            marginBottom: 12
                        }}>
                            With Sẹlẹ, you can
                        </Text>
                        <Text style={{
                            fontFamily: 'mont',
                            color: '#615D5D',
                            fontSize: 16,
                            letterSpacing: 1,
                            textAlign: 'center'
                        }}>
                            Get stuff done with the trusted services {'\n'} rendered on our platform
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }} key="3">
                        <Image style={{marginBottom: 50, }}
                               source={require('../on3.png')}/>
                        <Text style={{
                            fontFamily: 'mont-semi',
                            color: '#000',
                            fontSize: 22,
                            letterSpacing: 0.5,
                            marginBottom: 12
                        }}>
                            Simply select your school
                        </Text>
                        <Text style={{
                            fontFamily: 'mont',
                            color: '#615D5D',
                            fontSize: 16,
                            letterSpacing: 1,
                            textAlign: 'center'
                        }}>
                            List  your goods/services on Sẹlẹ {'\n'} and we'll connect you with other students {'\n'} in demand of your skills/items, {'\n'} Select your school on the next page {'\n'} and let's get
                            started
                        </Text>
                    </View>
                </ViewPagerAndroid>
                <BoxShadow setting={shadowOpt}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flex: 1,
                        backgroundColor: 'white',
                    }}>
                        <TouchableNativeFeedback
                            onPress={this.skip.bind(this)}>
                            <Text style={{
                                fontSize: 18,
                                marginLeft: 25,
                                fontFamily: 'mont-medium',
                                color: '#615D5D',
                                marginBottom: 10
                            }}>Skip</Text>
                        </TouchableNativeFeedback>
                        <View style={{flexDirection: 'row'}}>
                        <View
                            style={{marginRight: 14, alignSelf: 'center'}}>
                            <View style={this.state.no == "0" ? styles.selected : styles.unselected}>
                            </View>
                        </View>
                            <View style={{marginRight: 14, alignSelf: 'center'}}>
                                <View
                                    style={this.state.no == "1" ? styles.selected : styles.unselected}>
                                </View>
                            </View>
                            <View style={{alignSelf: 'center'}}>
                            <View
                                style={this.state.no == "2" ? styles.selected : styles.unselected}>
                            </View>
                            </View></View>
                        <TouchableNativeFeedback
                            onPress={this.update.bind(this)}>
                            <Text style={{
                                fontFamily: 'mont-medium',
                                color: '#EFB879',
                                fontSize: 18,
                                marginRight: 25,
                                marginBottom: 10
                            }}>Next</Text>
                        </TouchableNativeFeedback>
                    </View>
                </BoxShadow>
                </View>}
            </View>
        );
    }
}
const dimensions = Dimensions.get('window');
const Height = (dimensions.height) / 5;
const Width = dimensions.width;
const styles = StyleSheet.create({

    selected: {
        width: Width / 40, height: Width / 40, borderRadius: Width / 40 / 2, backgroundColor: '#615D5D'
    },
    unselected: {
        width: Width / 51, height: Width / 51, borderRadius: Width / 51 / 2, backgroundColor: '#888584'
    }
});
