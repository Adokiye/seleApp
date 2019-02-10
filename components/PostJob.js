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
    View, ViewPagerAndroid, StatusBar, Alert, NetInfo
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {BoxShadow} from 'react-native-shadow';
import {DrawerNavigator} from "react-navigation";
var SharedPreferences = require('react-native-shared-preferences');
import axios from 'axios';

export default class PostJob extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    postJob(){
    this.setState({loading: true});
    var bodyParameters = {
        name: this.state.job_title,
        description: this.state.description,
        category: this.state.cat_id,
        minimum: this.state.budget_low,
        maximum: this.state.budget_high
    }
 /*   var config = {
        headers: {'Authorization': "Bearer " + this.state.token}
   };*/
   axios.post(
       'http://10.0.2.2:8000/api/postJob',
       bodyParameters,
   //    config
   ).then((response) => {
    this.setState({loading: false});
    console.log(response);   
    Alert.alert(
        'Success',
         'Job posted Successfully',
        [
          {text: 'OK', onPress: this.props.navigation.navigate('Land', {})},
        ],  );    
   }).catch((error) => {
    this.setState({loading: false});
        Alert.alert(
            'Error',
             'Internal Server Error, please try again later',
            [
              {text: 'OK'},
            ],  );    
            console.log(error); 
           });   
    }
    nextButton(cat_id) {
        if (this.state.no == 1) {
      //      this.postJob();
            this.props.navigation.navigate('ServiceDetail', {})
        }
        this.setState({cat_id: cat_id});
        this.viewPager.setPage(this.state.no != 1 ? this.state.no + 1 : 1);
        let value = this.state.no != 1 ? this.state.no + 1 : 1;
        this.setState({no: value});
        if (value == 0) {
            this.setState({category: true});
    }else{ 
        this.setState({category: false});
    }
    }
    onPageSelected(e) {
        let currentPage = e.nativeEvent.position;
        this.setState({no: currentPage});
        if (currentPage == 0) {
            this.setState({category: true});
    }
    }
    prev() {
        if (this.state.no == 0) {
            this.props.navigation.goBack();
        }
        this.viewPager.setPage(this.state.no != 0 ? this.state.no - 1 : 0);
        let value = this.state.no != 0 ? this.state.no - 1 : 0;
        this.setState({no: value});
        if (value == 0) {
            this.setState({category: true})
        }else{
            this.setState({category: false});
        }
    }
    handleJob(job_title){
    this.setState({job_title});
    }
    handleDescription(description){
        this.setState({description
        });
    }
    handleBudget_low(budget_low){
        this.setState({budget_low});
    }
    handleBudget_high(budget_high){
        this.setState({budget_high});
    }
    constructor(props) {
        super(props);
        this.state = {
            category: true,
            no: 0,
            cat_id: '',
            job_title: '',
            description: '',
            budget_low: '',
            budget_high: '', 
            token: '',
            isConnected: true, 
            loading: false, 
            user_id: ''
        };
        this.postJob = this.postJob.bind(this);
    }
    componentDidMount() {
         NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
         SharedPreferences.getItem("key1", function(value){
                        if(value){
                        this.setState({token: value})    
                        }   
                      }.bind(this));
                      SharedPreferences.getItem("key2", function(value){
                        if(value){
                        this.setState({user_id: value})    
                        }   
                      }.bind(this));
        }
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }
    handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#Fff'}}>
                <StatusBar backgroundColor='#fff' translucent={true} barStyle='dark-content'/>
                <View style={styles.head}>
                    <TouchableNativeFeedback onPress={this.prev.bind(this)}>
                        <MaterialCommunityIcons style={{
                            position: 'absolute', left: 10, top: 40,
                        }} name="arrow-left" size={30} color={"#EFB879"}/>
                    </TouchableNativeFeedback>
                    <Text style={{
                        fontFamily: 'mont-semi',
                        fontSize: 20, marginTop: 27,
                        color: '#000',
                    }}>
                        Post Job
                    </Text>
                </View>
                <ViewPagerAndroid style={{flex: 1}} initialPage={0}
                                  onPageSelected={this.onPageSelected.bind(this)}
                                  ref={(viewPager) => {
                                      this.viewPager = viewPager
                                  }}>
                                  <View style={{flex: 1}} key="1">
                            <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{flexDirection: 'row',marginBottom: 25,
                    justifyContent: 'space-evenly'}}>
                    <TouchableNativeFeedback
                    onPress={this.nextButton.bind(this, 1)}>
                    <View style={styles.cats}>
                     <View style={styles.icon}>
                         <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                 source={require('../writing_&_content_yellow.png')}/>
                     </View>
                     <Text style={styles.iconDes}>
                         {'\n'}WRITING AND CONTENT
                     </Text>
                 </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this.nextButton.bind(this, 2)}>
                    <View style={styles.cats}>
                        <View style={styles.icon}>
                            <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={require('../fashion_design_yellow.png')}/>
                        </View>
                        <Text style={styles.iconDes}>
                            {'\n'}FASHION DESIGN
                        </Text>
                    </View>
                    </TouchableNativeFeedback>
                </View>
                    <View style={{flexDirection: 'row',marginBottom: 25,
                        justifyContent: 'space-evenly'}}>
                        <TouchableNativeFeedback
                            onPress={this.nextButton.bind(this, 3)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../transport_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                                {'\n'}TRANSPORT
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={this.nextButton.bind(this, 4)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../laundry_&_cleaning_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                                {'\n'}LAUNDRY & CLEANING
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flexDirection: 'row',marginBottom: 25,
                        justifyContent: 'space-evenly'}}>
                        <TouchableNativeFeedback
                            onPress={this.nextButton.bind(this, 5)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../electronics_&_repairs_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                                {'\n'}ELECTRONICS AND REPAIRS
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                            onPress={this.nextButton.bind(this, 8)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../project_assignment_handling_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                            {'\n'}Project and Assignment{'\n'} Handling
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flexDirection: 'row',marginBottom: 25,
                        justifyContent: 'space-evenly'}}>
                        <TouchableNativeFeedback
                            onPress={this.nextButton.bind(this, 7)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../graphics_web_ux_designs_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                            {'\n'}Graphics, web &{'\n'} ux designs
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={this.nextButton.bind(this, 6)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../photgraphy_&_video_production_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                            {'\n'}Photography and Video{'\n'} Production
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flexDirection: 'row',marginBottom: 25,
                        justifyContent: 'space-evenly'}}>
                        
                        <TouchableNativeFeedback
                            onPress={this.nextButton.bind(this, 9)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../makeupjpg.jpg')}/>
                            </View>
                            <Text style={styles.iconDes}>
                            {'\n'}OTHER
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                            </ScrollView>
                        </View>
                        <View style={{flex: 1}} key="2">
                            <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.multiTextBox}>
                                <View style={styles.ourTextBox}>
                                 <TextInput 
                                 underlineColorAndroid={'transparent'}
                                 value={this.state.job_title}
                                 onChangeText={(job_title) => this.handleJob(job_title)}
                                 placeholderTextColor={'#615d5d'}
                                 placeholder={"Job Title"}
                                 placeholderStyle={{color: '#615D5D', fontFamily: 'mont',fontSize: 15}}
                                 style={{height: 48, width: '84%'}}>
                                 </TextInput>
                                </View>
                                <View style={styles.description}>
                                <TextInput 
                                 underlineColorAndroid={'transparent'}
                                 value={this.state.description}
                                 onChangeText={(description) => this.handleDescription(description)}
                                 placeholderTextColor={'#615d5d'}
                                 placeholder={"Description"}
                                 multiline={true}
                                 placeholderStyle={{color: '#615D5D', fontFamily: 'mont',fontSize: 15}}
                                 style={{width: '84%'}}>
                                 </TextInput>       
                                </View>
                                <View style={styles.budget}>
                                <TextInput 
                                 underlineColorAndroid={'transparent'}
                                 value={this.state.budget_low}
                                 onChangeText={(budget_low)=>  this.handleBudget_low(budget_low)}
                                 placeholderTextColor={'#615d5d'}
                                 placeholder={"Budget Low"}
                                 placeholderStyle={{color: '#615D5D', fontFamily: 'mont',fontSize: 15}}
                                 style={{height: 48, width: '34%'}}>
                                 </TextInput> 
                                </View>
                                <View style={styles.budget}>
                                <TextInput 
                                 value={this.state.budget_high}
                                 onChangeText={(budget_high)=> this.handleBudget_high(budget_high)}
                                 underlineColorAndroid={'transparent'}
                                 placeholderTextColor={'#615d5d'}
                                 placeholder={"Budget High"}
                                 placeholderStyle={{color: '#615D5D', fontFamily: 'mont',fontSize: 15}}
                                 style={{height: 48, width: '34%'}}>
                                 </TextInput>
                                </View>
                            </View>
                            </ScrollView>
                        </View>
                        
                </ViewPagerAndroid>
                {this.state.category ? <View></View> :
                    <TouchableNativeFeedback onPress={this.nextButton.bind(this)}>
                        <View style={styles.bottomButton}>
                        {this.state.loading?
                        <ActivityIndicator animating={true} size='large' color="#fff"/>
                    :
                      <Text style={{fontFamily: 'mont-medium', color: '#fff', fontSize: 14}}>
                                Post Job
                            </Text>}
                        </View>
                    </TouchableNativeFeedback>}
                    {!this.state.isConnected?<View style={styles.internet}>
                 <Text style={styles.intText}>
                     No Internet Connection detected
                 </Text>  
                </View>: null}    

            </View>
        );
    }

}
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    internet: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#615D5D',
        width: '100%',
        height: 50,
        paddingLeft: 10,
        paddingTop: 10
       },
       intText:{
           color: '#fff',
           fontFamily: 'mont',
           fontSize: 14
       },
    iconDes: {
        color: '#535461',
        fontFamily: 'mont',
        fontSize: 10,
        alignSelf: 'center',
    },
    cats:{
        width: Width*(39.16/100),
        height: Height*(20/100),
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: '#Fff',
        borderWidth: 1,
        borderColor: '#EFB879',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icon: {
        alignSelf: 'center',
        width:  50,
        height: 50,
        backgroundColor: '#fff'
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
        marginTop: 25
    },
    multiTextBox: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',   
    },
    multi: {
        backgroundColor: '#f6f7f7',
        borderWidth: 0.6,
        borderColor: '#cfcece',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        width: '85.55%',
        height: 258,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        marginTop: 25
    },
    head: {
        height: 80,
        flexDirection: 'row', elevation: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fcfcfc',
        marginBottom: 10,
    },
    bottomButton: {
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efb879',
        /*   position:'absolute',
           bottom: 0*/
    },
    ourTextBox:{
        width: '85.56%',
        height: 50,
        backgroundColor: '#F6F7F7',
        borderColor: '#cfcece',
        borderWidth: 0.4,
        marginBottom: 21,
        alignSelf: 'center'
    },
    description:{
        width: '85.56%',
        height: 166,
        backgroundColor: '#F6F7F7',
        borderColor: '#cfcece',
        borderWidth: 0.4,
        marginBottom: 21,
        alignSelf: 'center'
    },
    budget:{
        width: '84%',
        height: 50,
        backgroundColor: '#F6F7F7',
        borderColor: '#cfcece',
        borderWidth: 0.4,
        marginBottom: 21,
        alignSelf: 'center'
    }
});