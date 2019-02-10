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

export default class ServiceDetail extends Component {

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'

    };
    componentDidMount(){
        const {params} = this.props.navigation.state;
        const description     = params? params.description : "";
        const budget_low     = params? params.budget_low : "";
        const budget_high     = params? params.budget_high : "";
        const duration     = params? params.duration : "";
        const bids     = params? params.bids : "";
        const rating     = params? params.rating : "";
        const service_id     = params? params.service_id : "";
        this.setState({
            description: description,
            budget_low: budget_low,
            budget_high: budget_high,
            duration: duration,
            bids: bids,
            rating: rating,
            service_id: service_id
        });

}
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            budget_low: '',
            budget_high: '',
            duration: '',
            bids: '',
            rating: '',
            service_id: ''
        };
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
                        <MaterialCommunityIcons style={{position: 'absolute',left: 10, top: 40,
                        }} name="arrow-left" size={30} color="#EFB879"/>
                    </TouchableNativeFeedback>
                    <Text style={{fontFamily: 'mont-semi',
                        fontSize: 20, marginTop: 27,
                        color: '#000',}}>
                        Service Details
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.desc}>
                    DESCRIPTION
                </Text>
                <View style={styles.text11}>
                <Text style={styles.textl}>
                    {this.state.description}
                </Text>
                </View>
                <Text style={styles.desc}>
                    PRICE
                </Text>
                <View style={styles.text11}>
                    <Text style={styles.textl}>
                        ₦{this.state.budget_low} - ₦{this.state.budget_high}
                    </Text>
                </View>
                <Text style={styles.desc}>
                    DURATION
                </Text>
                <View style={styles.text11}>
                    <Text style={styles.textl}>
                        {this.state.duration} DAYS 
                    </Text>
                </View>
                <Text style={styles.desc}>
                    CURRENT BID
                </Text>
                <View style={styles.text11}>
                    <Text style={styles.textl}>
                        {this.state.bids} BIDS
                    </Text>
                </View>
                <Text style={styles.desc}>
                    EMPLOYER RATING
                </Text>
                    <View style={styles.reviewCircle}>
                        <Text style={styles.reviewText}>
                           {this.state.rating}
                        </Text>
                    </View>
                </ScrollView>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('JobBid', {})}>
                    <View style={styles.bottomButton}>
                        <Text style={{fontFamily: 'mont-medium',color: '#fff',fontSize: 14}}>
                            APPLY FOR THIS JOB
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
    reviewText:{
        fontFamily: 'mont-medium',
        fontSize: 10,
        color: '#efb879',

    },
    reviewCircle:{
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
    text11:{
        width: '83.33%',
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 8
    },
    textl:{
        fontFamily: 'mont-light',
        fontSize: 12,
        color: '#615d5d',
        textAlign: 'left'
    },
    desc:{
        marginTop: 24,
        left: '8%',
       fontFamily: 'mont',
       fontSize: 12,
       color: '#000'
    },
    head:{
        height: 80,
        flexDirection: 'row',elevation: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fcfcfc'
    },
    bottomButton:{
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efb879',
     /*   position:'absolute',
        bottom: 0*/
    },

});