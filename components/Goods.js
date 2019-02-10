import React, {Component} from 'react';
import {
    Platform,
    ActivityIndicator,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
    Alert,
    View, ViewPagerAndroid, StatusBar
} from 'react-native';

export default class Goods extends Component {

    static navigationOptions = {
        header: null,
    };
    async componentDidMount() {
        const cat_id     = this.props.cat_id;
        const school_id     = this.props.school_id;
        const user_id     = this.props.user_id;
        const token     = this.props.token;
        this.setState({loader: true, cat_id: cat_id,token: token,user_id:user_id, school_id: school_id});

    /*    if(token && user_id){
            var bodyParameters = {
                id: user_id,
                cat_id: cat_id,
            }
            var config = {
                headers: {'Authorization': "Bearer " + this.state.token}
           };
           axios.post(
               'http://10.0.2.2:8000/api/goodsByCatLoggedIn',
               bodyParameters,
               config
           ).then((response) => {
            this.setState({loader: false});
            console.log(response);   
           var len = response.data.success.goods.length;
            for (let i = 0; i < len; i++) {
                let row = response.data.success.goods[i];
                this.setState(prevState => ({
                    goods: [...prevState.goods, row],
                }));
            }
            
            const goods = (
            <View></View>
            );
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
               'http://10.0.2.2:8000/api/goodsByCatUnLoggedIn',
               bodyParameters
           ).then((response) => {
            this.setState({loader: false});
            console.log(response); 
            var len = response.data.success.goods.length;
            for (let i = 0; i < len; i++) {
                let row = response.data.success.goods[i];
                this.setState(prevState => ({
                    goods: [...prevState.goods, row],
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
        };*/
        
    }
    constructor(props) {
        const Width = Dimensions.get('window').width;
        super(props);
        this.state = {
            loader: false,
            cat_id: '',
            school_id: '',
            token: '',
            user_id: '', 
            goods: []
        };
    }
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps='always'
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}>
                    {this.state.loader?
                        <ActivityIndicator animating={this.state.loader} color='#EFB879' size="large"
                    style={{flex: 1, justifyContent: 'center',
                        alignItems: 'center',
                        height: 80}}/>
                    :<View style={{flex: 1,
                        flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row',height: 180,width: '83.33%',
                        alignSelf: 'center', justifyContent: 'center'}}>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {})}>
                            <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-evenly'}}>
                            <View style={{height: Height*(17.19/100),
                                width: Width*(40/100),
                                marginRight: 10,
                                borderTopRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                backgroundColor: '#FAFAFA',
                                borderWidth: 0.4,
                                borderColor: '#DADADA',
                                elevation: 0}}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../headset.png')}/>
                            </View>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                        paddingLeft: 10}}>
                                        Headset
                                    </Text>
                                    <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                        ,paddingLeft: 10}}>
                                        ₦230,000.00
                                    </Text>
                                </View>
                            </View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {})}>
                            <View style={{height:180, flexDirection: 'column', justifyContent: 'space-evenly'}}>
                                <View style={{height: Height*(17.19/100),
                                    width: Width*(40/100),
                                    marginRight: 10,
                                    borderTopRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    backgroundColor: '#FAFAFA',
                                    borderWidth: 0.4,
                                    borderColor: '#DADADA',
                                    elevation: 0}}>
                                    <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                            source={require('../case_.png')}/>
                                </View>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                        paddingLeft: 10}}>
                                        Headset
                                    </Text>
                                    <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                        ,paddingLeft: 10}}>
                                        ₦230,000.00
                                    </Text>
                                </View>
                            </View></TouchableNativeFeedback>
                    </View>
                    </View>}
                    </ScrollView>
        );
    }

}
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    
});