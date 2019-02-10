import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TextInput,
    FlatList,
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



export default class ServiceProfile extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    componentDidMount(){
        const {params} = this.props.navigation.state;
        const first_name     = params? params.first_name : "";
        const last_name     = params? params.last_name : "";
        const job_title     = params? params.job_title : "";
        const profile_description     = params? params.profile_description : "";
        const rating     = params? params.rating : "";
        const user_name     = params? params.user_name : "";
        const profile_id     = params? params.profile_id : "";
        const reviews     = params? params.reviews : "";
        this.setState({
            first_name: first_name,
            last_name : last_name ,
            job_title: job_title,
            profile_description: profile_description,
            rating: rating,
            user_name: user_name,
            profile_id: profile_id,
            reviews: reviews
        });
}
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            job_title: '',
            profile_description: '',
            rating: '',
            user_name: '',
            message: '',
            reviews: [],
            profile_id: ''

        };
    }
    render() {
        const reviews = (
    <FlatList
    data={this.state.reviews}
    renderItem={({ item }) => ( 
       <View><View style={styles.does}>
                        <View style={styles.doeImage}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={{uri: 'http://10.0.2.2:8000/'+item.user.image.location_url}}/>
                        </View>
                        <Text style={{fontFamily: 'mont-medium', fontSize: 12, color: '#000'}}>
                            {item.user.user_name}
                        </Text>
                    </View>
                    <View style={{width: '83.33%', alignSelf: 'center'}}>
                        <Text style={styles.bottomReview}>
                            {item.message}
                        </Text>
                    </View> </View>
    )}          
    keyExtractor={item => item.id}
/>
);
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
                        {this.state.first_name} {this.state.last_name}
                    </Text>
                    <Text style={styles.career}>
                        {this.state.job_title}
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bottom}>
                    <View style={{width: '83.33%', alignSelf: 'center'}}>
                        <Text style={styles.description}>
                            {this.state.profile_description}
                        </Text>
                    </View>
                    <View style={styles.Line}>
                    </View>
                    <View style={styles.reviews}>
                        <Text style={styles.reviewBold}>
                            REVIEWS
                        </Text>
                        <View style={styles.star}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../star_yellow.png')}/>
                        </View>
                        <Text style={styles.decimal}>
                            {this.state.rating}/5.0
                        </Text>
                    </View>
                    {reviews}
                </View>
                </ScrollView>
                <TouchableNativeFeedback>
                <View style={styles.bottomButton}>
                    <Text style={{fontFamily: 'mont-medium',color: '#fff',fontSize: 14}}>
                     HIRE TALENT
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