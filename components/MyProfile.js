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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {BoxShadow} from 'react-native-shadow';
import {DrawerNavigator} from "react-navigation";

export default class MyProfile extends Component {

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const shadowOpt = {
            width: Dimensions.get('window').width * (83.33 / 100),
            height: 150,
            color: "#000",
            border: 10,
            opacity: '0.1',
            radius: 10,
            x: 0,
            y: 5,
        };
        return (
            <View style={{flex: 1, backgroundColor: '#Fff'}}>
                <StatusBar backgroundColor='#fff' translucent={true} barStyle='dark-content'/>
                <View style={styles.headerProfile}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.goBack(null)}>
                    <MaterialCommunityIcons
                        style={{position: 'absolute', top: 80 - (StatusBar.currentHeight), left: '7%'}}
                        name="arrow-left" size={25} color="#fff"/>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.smallView}>
                    <View style={styles.profilePix}>
                        <Image
                            resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                            source={require('../serviceProfile.png')}/>
                    </View>
                    <Text style={styles.name}>
                        Jane Doe
                    </Text>
                    <Text style={styles.career}>
                        University of Lagos
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bottom}>
                    <View style={{width: '83.33%', alignSelf: 'center'}}>
                        <Text style={styles.description}>
                        <Text style={styles.name}>USERNAME:</Text>  DUSTY-DOE{'\n'}{'\n'}
                        <Text style={styles.name}>EMAIL:</Text>  dustydoe@gmail.com{'\n'}{'\n'}
                        <Text style={styles.name}>CITY:</Text>  IKEJA{'\n'}{'\n'}
                        <Text style={styles.name}>STATE:</Text>  LAGOS{'\n'}{'\n'}

                        </Text>
                    </View>
                    <View style={styles.Line}>
                    </View>
                    <View style={styles.reviews}>
                        <Text style={styles.reviewBold}>
                            PORTFOLIO
                        </Text>
                    </View>
                    <View style={styles.does}>
                        <View style={styles.doeImage}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../doe_image.png')}/>
                        </View>
                        <View style={styles.doeImage}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../doe_image.png')}/>
                        </View>
                        <View style={styles.doeImage}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../doe_image.png')}/>
                        </View>
                        <View style={styles.doeImage}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../doe_image.png')}/>
                        </View>
                        <View style={styles.doeImage}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../doe_image.png')}/>
                        </View>
                        <View style={styles.doeImage}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../doe_image.png')}/>
                        </View>
                    </View>
                </View>
                </ScrollView>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('UpdateProfile')}>
                <View style={styles.bottomButton}>
                    <Text style={{fontFamily: 'mont-medium',color: '#fff',fontSize: 14}}>
                     UPDATE PROFILE
                    </Text>
                </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

}
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    bottomButton:{
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efb879',
      /*  position:'absolute',
        bottom: 0*/
    },
    reviewers:{
        width: 26,
        height: 26,
        borderRadius: 13
    },
    reviewers2:{
        width: 26,
        height: 26,
        borderRadius: 13,
        position: 'absolute',
        left: 13
    },
    reviewers3:{
        width: 26,
        height: 26,
        borderRadius: 13,
        position: 'absolute',
        left: 26
    },
    imagePlenty:{
        left: '7%',
        width: 50,
        marginRight: 10
    },
    reviewBottom: {
        width: 170,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        left: '10%'
    },
    doeImage: {
        width: 38,
        height: 38,
        borderRadius: 19
    },
    bottomReview: {
        marginTop: 10,
        fontFamily: 'mont-light',
        fontSize: 12,
        textAlign: 'left',
        color: '#000'
    },
    does: {
        marginTop: 9,
        flexDirection: 'row',
        width: 115,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '7%'
    },
    star: {
        width: 15,
        height: 15
    },
    reviews: {
        marginTop: 16,
        flexDirection: 'row',
        width: 135,
        justifyContent: 'space-between',
        marginLeft: '7%'
    },
    decimal: {
        fontFamily: 'mont',
        fontSize: 10,
        color: '#000'
    },
    reviewBold: {
        color: '#EFB879',
        fontFamily: 'mont-semi',
        fontSize: 14
    },
    bottom: {
        flexDirection: 'column',
        marginTop: 40 + (80 - (StatusBar.currentHeight)) + 80
    },
    description: {
        fontFamily: 'mont-light',
        fontSize: 12,
        color: '#000',
        alignSelf: 'center',
        textAlign: 'center',
    },
    name: {
        fontFamily: 'mont-semi',
        fontSize: 14,
        color: '#000',
        alignSelf: 'center'
    },
    career: {
        fontFamily: 'mont',
        fontSize: 12,
        color: '#000',
        alignSelf: 'center'
    },
    headerProfile: {
        backgroundColor: '#EFB879',
        height: 80 + (80 - (StatusBar.currentHeight)),
        width: '100%',
    },
    Line: {
        height: 0,
        width: '83.33%',
        borderBottomWidth: 0.4,
        borderColor: '#CBCDDA',
        alignSelf: 'center',
        marginTop: 20
    },
    smallView: {
        height: (70 - (StatusBar.currentHeight)) + 151,
        width: '83.33%',
        paddingBottom: 11,
        paddingTop: 22,
        backgroundColor: '#FDFDFD',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        justifyContent: 'space-evenly',
        borderBottomRightRadius: 4,
        alignSelf: 'center',
        position: 'absolute',
        top: 40 + (80 - (StatusBar.currentHeight)),
        elevation: 1,
        marginBottom: 17
    },
    /*  smallViewBottom: {
          height: 151,
          width: '83.33%',
          backgroundColor: '#FDFDFD',
          borderBottomLeftRadius: 4,
          flexDirection: 'column',
          borderBottomRightRadius: 4,
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          position: 'absolute',
          top: 80 + (80 - (StatusBar.currentHeight))
      },*/
    profilePix: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#FDFDFD'
    },
});