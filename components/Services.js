import React, {Component} from 'react';
import {
    Platform,
    FlatList,
    ActivityIndicator,
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


export default class Services extends Component {
    
    static navigationOptions = {
        header: null,
    };
     
    async componentDidMount() {
       
        const cat_id     = this.props.cat_id;
        const school_id     = this.props.school_id;
        const user_id     = this.props.user_id;
        const token     = this.props.token;
        this.setState({loader: true, cat_id: cat_id,token: token,user_id:user_id, school_id: school_id});
        if(token && user_id){
            var bodyParameters = {
                id: user_id,
                cat_id: cat_id,
            }
            var config = {
                headers: {'Authorization': "Bearer " + this.state.token}
           };
    /*       axios.post(
               'http://10.0.2.2:8000/api/servicesByCatLoggedIn',
               bodyParameters,
               config
           ).then((response) => {
            this.setState({loader: false});
            console.log(response);   
           var len = response.data.success.goods.length;
            for (let i = 0; i < len; i++) {
                let row = response.data.success.services[i];
                this.setState(prevState => ({
                    services: [...prevState.services, row],
                }));
            }
            var len1 = response.data.success.talents.length;
            for (let i = 0; i < len1; i++) {
                let row = response.data.success.talents[i];
                this.setState(prevState => ({
                    talents: [...prevState.talents, row],
                }));
            }           
           }).catch((error) => {
            this.setState({loader: false});
                Alert.alert(
                    'Error',
                     'Internal Server Error, please try again later',
                    [
                      {text: 'OK'},
                    ],  );    
                    console.log(error); 
                   });    
        }else if(cat_id){
            var bodyParameters = {
                id: school_id,
                cat_id: cat_id
            }
           axios.post(
               'http://10.0.2.2:8000/api/servicesByCatUnLoggedIn',
               bodyParameters
           ).then((response) => {
            this.setState({loader: false});
            console.log(response); 
            var len = response.data.success.services.length;
            for (let i = 0; i < len; i++) {
                let row = response.data.success.services[i];
                this.setState(prevState => ({
                    services: [...prevState.services, row],
                }));
            }   
            var len1 = response.data.success.talents.length;
            for (let i = 0; i < len1; i++) {
                let row = response.data.success.talents[i];
                this.setState(prevState => ({
                    talents: [...prevState.talents, row],
                }));
            }   
           }).catch((error) => {
            this.setState({loader: false});
                Alert.alert(
                    'Error',
                     'Internal Server Error, please try again later',
                    [
                      {text: 'OK'},
                    ],  );    
                    console.log(error); 
                   });    */
        };
        
    }
    constructor(props) {
        const Width = Dimensions.get('window').width;
        super(props);
        this.state = {
            search: false,
            talents: true,
            loader: false,
            cat_id: '',
            school_id: '',
            token: '',
            user_id: '', 
            services: [],
            talents: []
        };
    }
    render() {
        const services = (
            <FlatList
                data={this.state.services}
                renderItem={({ item }) => ( 
                    <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ServiceDetail', {
                                services: this.state.services,
                                description : item.description,
                                budget_low : item.budget_low,
                                budget_high : item.budget_high,
                                duration : item.duration,
                                bids :  item.bids.length,
                                rating : item.employer.rating,
                                service_id : item.id
                            })}>
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
                                {item.name}{'\n'}
                            </Text>
                            <View style={{flexDirection: 'row', width: '100%',
                                height: 20,alignSelf: 'center',flexWrap: 'wrap',
                                alignItems: 'flex-start', justifyContent: 'space-between'}}>
                                <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                                    marginRight: '2%'}}>
                                    ₦{item.budget_low} - ₦{item.budget_high}</Text>
                                <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                    <View
                                        style={styles.unselected}>
                                    </View>
                                </View>
                                <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                                    {item.no_of_bids} Bids
                                </Text>
                            </View>
                        </View>
                        </TouchableNativeFeedback>    
                )}          
                keyExtractor={item => item.id}
            />
        );
        const talents = (
            <FlatList
            data={this.state.services}
            renderItem={({ item }) => ( 
                <TouchableNativeFeedback onPress={() =>
                                this.props.navigation.navigate('ServiceProfile', {
                                    first_name : item.first_name,
        last_name: item.last_name,
        job_title: item.job_title,
        profile_description: item.profile_description,
        rating: item.rating,
        user_name: item.user_name,
        profile_id: item.id,
        reviews: item.reviews
                                })}>
                                <View style={styles.mins}>
                        <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1,
                        width: 50, borderRadius: 25,
        height: 50,
        marginLeft: 14,
        marginRight: 12}}
                               source={require('../case_.png')}/>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                        <View style={styles.reviewInfo}>
                        <Text style={styles.doe}>
                            {item.first_name} {item.last_name}
                        </Text>
                        <View style={styles.reviews}>
                            <View style={styles.star}>
                                <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                       source={require('../star.png')}/>
                            </View>
                            <Text style={styles.decimal}>
                            {item.rating}/5.0
                            </Text>
                            <Text style={styles.reviewNo}>
                                ({item.reviews.length} reviews)
                            </Text>
                        </View>
                        </View>
                        </ScrollView>
                    <MaterialIcons style={{
                        position: 'absolute',right: 0
                    }} name="chevron-right" size={30} color="#EFB879"/>
                </View>
                            </TouchableNativeFeedback>   
            )}          
            keyExtractor={item => item.id}
        />
        );
        return (
            <View style={styles.container}>
                <View style={styles.tab}>
                    <TouchableNativeFeedback
                        onPress={() => this.setState({talents: true})}>
                        <View style={this.state.talents ?
                            styles.talents : styles.talents__}>
                            <Text style={this.state.talents ?
                                styles.talentsText : styles.talentsText_}>
                                Sẹlẹ Talents
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={() => this.setState({talents: false})}>
                        <View style={this.state.talents ?
                            styles.talents_ : styles.services}>
                            <Text style={this.state.talents ?
                                styles.talentsText_ : styles.talentsText}>
                                Services
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                {this.state.talents?
                        {talents}
                :
                  {services}  }
            </View>
        );
    }

}
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    unselected: {
        width: 5, height: 5, borderRadius: 5 / 2, backgroundColor: '#DADADA',
    },
    amount: {
        color: '#EFB879',
        fontFamily: 'mont-medium',
        fontSize: 8
    },
    reviewNo: {
        fontFamily: 'mont-light',
        fontSize: 10,
        color: '#000'
    },
    decimal: {
        fontFamily: 'mont',
        fontSize: 10,
        color: '#000'
    },
    star: {
        width: 15,
        height: 15
    },
    reviews: {
        flexDirection: 'row',
        width: 135,
        justifyContent: 'space-between'
    },
    doe: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'mont-semi'
    },
    reviewInfo: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: 60
    },
    picture: {
        width: 50,
        height: 50,
        marginLeft: 14,
        marginRight: 12
    },
    mins: {
        backgroundColor: '#FDFDFD',
        width: '85.57%',
        flexDirection: 'row',
        height: 80,
        alignSelf: 'center',
        alignItems: 'center',
        elevation: 1,
        marginBottom: 17,
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    tab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 10
    },
    talents: {
        width: Width * (42.78 / 100),
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFB879',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    services: {
        width: Width * (42.78 / 100),
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFB879',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    talents_: {
        width: Width * (42.78 / 100),
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderColor: '#EFB879',
        borderWidth: 0.7
    },
    talents__: {
        width: Width * (42.78 / 100),
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderColor: '#EFB879',
        borderWidth: 0.7
    },
    talentsText: {
        fontFamily: 'mont-medium',
        color: '#fff',
        fontSize: 13
    },
    talentsText_: {
        fontFamily: 'mont-medium',
        color: '#EFB879',
        fontSize: 13
    },
});