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

export default class JobBid extends Component {

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
                <View style={styles.head}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.goBack()}>
                        <MaterialCommunityIcons style={{
                            position: 'absolute', left: 10, top: 40,
                        }} name="arrow-left" size={30} color="#EFB879"/>
                    </TouchableNativeFeedback>
                    <Text style={{
                        fontFamily: 'mont-semi',
                        fontSize: 20, marginTop: 27,
                        color: '#000',
                    }}>
                        Job Bid
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.desc}>
                        Website Design
                    </Text>
                    <Text style={styles.desck}>
                        Place Bid on this Project
                    </Text>
                    <Text style={styles.paid}>
                        AMOUNT TO BE PAID
                    </Text>
                    <View style={styles.box}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={{backgroundColor: '#fff',
                            color: '#000',
                            letterSpacing: 2,
                            fontSize: 12,
                            fontFamily: 'mont',width: (Width*(83.33/100))-90}}/>
                        <View style={styles.semiBox}>
                          <Text style={{fontFamily: 'mont-medium', fontSize: 18, color: '#fff'}}>
                              NGN
                          </Text>
                        </View>
                    </View>
                    <Text style={styles.paid}>
                        TO BE DELIVERED
                    </Text>
                    <View style={styles.box}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={{backgroundColor: '#fff',
                            color: '#000',
                            letterSpacing: 2,
                            fontSize: 12,
                            fontFamily: 'mont',width: (Width*(83.33/100))-90}}/>
                        <View style={styles.semiBox}>
                            <Text style={{fontFamily: 'mont-medium', fontSize: 18, color: '#fff'}}>
                                DAYS
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <TouchableNativeFeedback>
                    <View style={styles.bottomButton}>
                        <Text style={{fontFamily: 'mont-medium', color: '#fff', fontSize: 14}}>
                            SUBMIT BID
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
    reviewText: {
        fontFamily: 'mont-medium',
        fontSize: 10,
        color: '#efb879',
    },
    semiBox: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 90,
        height: 60,
        backgroundColor: '#efb879',
        borderWidth: 1,
        borderColor: '#f2c490',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: '83.33%',
        height: 61,
        borderWidth: 1,
        borderColor: '#f2c490',
        backgroundColor: '#fff',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        alignSelf: 'center',
        marginTop: 13
    },
    paid: {
        marginTop: 41,
        color: '#000',
        letterSpacing: 2,
        fontSize: 12,
        fontFamily: 'mont',
        left: '8%',
    },
    reviewCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#efb879',
        backgroundColor: '#fff',
        elevation: 1,
        marginTop: 8,
        left: '8%',
    },
    text11: {
        width: '83.33%',
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 8
    },
    textl: {
        fontFamily: 'mont-light',
        fontSize: 12,
        color: '#615d5d',
        textAlign: 'left'
    },
    desck: {
        marginTop: 8,
        left: '8%',
        fontFamily: 'mont',
        color: '#615d5d',
        fontSize: 12
    },
    desc: {
        marginTop: 24,
        left: '8%',
        fontFamily: 'mont-medium',
        fontSize: 14,
        color: '#000'
    },
    head: {
        height: 80,
        flexDirection: 'row', elevation: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fcfcfc'
    },
    bottomButton: {
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efb879',
    },

});