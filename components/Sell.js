import React, {Component} from 'react';
import {
    Alert,
    Platform,
    NetInfo,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TextInput,
    TouchableNativeFeedback,
    ScrollView, ActivityIndicator,
    View, ViewPagerAndroid, StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {BoxShadow} from 'react-native-shadow';
import {DrawerNavigator} from "react-navigation";
import ImagePicker from 'react-native-image-crop-picker';
var SharedPreferences = require('react-native-shared-preferences');
import axios from 'axios';

export default class Sell extends Component {
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
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };

    nextButton(cat_id) {
        if (this.state.no == 3) {
            this.seller();
        }
        if(this.state.no == 1){
            this.setState({cat_id: cat_id});
        }
        this.viewPager.setPage(this.state.no != 3 ? this.state.no + 1 : 3);
        let value = this.state.no != 3 ? this.state.no + 1 : 3;
        this.setState({no: value});
        if (value == 0) {
            this.setState({home: true, category: false, amount: false, upload: false})
        } else if (value == 1) {
            this.setState({home: false, category: true, amount: false, upload: false})
        } else if (value == 2) {
            this.setState({home: false, category: false, amount: false, upload: true})
        } else if (value == 3) {
            this.setState({home: false, category: false, amount: true, upload: false})
        }
    }
    seller(){
        this.setState({loader: true});
        var isAmount = /^\d+$/.test(this.state.amountT);
        var isQty    = /^\d+$/.test(this.state.qty);
        if(this.state.images_array.length < 1){
            Alert.alert(
                'Error',
                'At least one Image of the product is required',
                [
                  {text: 'OK'},
                ],  ); 
                this.setState({loader: false});
        } else if(!this.state.cat_id){
            Alert.alert(
                'Error',
                'Please select a category for the product',
                [
                  {text: 'OK'},
                ],  ); 
                this.setState({loader: false});
        }
        else if(!this.state.name){
            Alert.alert(
                'Error',
                'A name is required for the product',
                [
                  {text: 'OK'},
                ],  ); 
                this.setState({loader: false});
        }
        else if(!this.state.description){
            Alert.alert(
                'Error',
                'Please enter a brief description of the product',
                [
                  {text: 'OK'},
                ],  ); 
                this.setState({loader: false});
        }else if(!this.state.qty){
            Alert.alert(
                'Error',
                'Please enter the quantity of products you intend to sell',
                [
                  {text: 'OK'},
                ],  ); 
                this.setState({loader: false});
        }
        else if(!this.state.amountT){
            Alert.alert(
                'Error',
                'The amount is required',
                [
                  {text: 'OK'},
                ],  ); 
                this.setState({loader: false});
        }
        else if(!isQty){
            Alert.alert(
                'Error',
                'Quantity must contain only digits',
                [
                  {text: 'OK'},
                ],  ); 
                this.setState({loader: false});
        }else if(!isAmount){
            Alert.alert(
                'Error',
                'Amount must contain only digits',
                [
                  {text: 'OK'},
                ],  ); 
                this.setState({loader: false});
        }else{
   /*     const data = new FormData();
        data.append('name', this.state.name);
    //    data.append('user_id', this.state.user_id);
        data.append('user_id', 18);
        data.append('description', this.state.description);
        data.append('amount', this.state.amountT);
        data.append('qty', this.state.qty);
        data.append('cat_id', this.state.cat_id);
        const photos = this.state.images_array;
        photos.forEach((photo) => {
        data.append('photo[]', {
        uri: photo.uri,
        type: photo.type, // or photo.type
        name: photo.name,
    //    data: photo.data
        });  
        });
         /*   var config = {
        headers: {'Authorization': "Bearer " + this.state.token}
         };
        axios.post(
        'http://10.0.2.2:8000/api/sell',
        data,
        //    config
        ).then((response) => {
        this.setState({loader: false});
        console.log(response);   
        Alert.alert(
        'Success',
        'Product posted Successfully',
        [
        {text: 'OK', onPress: this.props.navigation.navigate('Land', {})},
        ],  );    
        }).catch((error) => {
        this.setState({loader: false});
        Alert.alert(
         'Error',
          'Internal Server Error, please try again later',
         [
           {text: 'OK'},
         ],  );    
         console.log(error); 
        });*/   
        };
    }
    
    handleDescription(description){
    this.setState({description});
    }
    handleCat(cat_id){
    this.setState({cat_id});    
    }
    handleAmount(amountT){
    this.setState({amountT});    
    }
    handleQty(qty){
    this.setState({qty})    
    }
    handleName(name){
    this.setState({name})    
    }
    imageUpload(){
        ImagePicker.openPicker({
            multiple: true,
            cropping: true,
            includeExif: true,
            mediaType: 'photo'
          }) .then(images => {
            console.log(images);  
            const imagesArray = [];
            if(images){
            images.map(i => {  
                   imagesArray.push({uri: i.path, type: i.mime, name: i.path, data: i.data});
             } );
             }
            this.setState({
                images_array: imagesArray
            });
            console.log(imagesArray);
            console.log(this.state.images_array);
         }).catch(e => console.log(e));
    } 
    onPageSelected(e) {
        let currentPage = e.nativeEvent.position;
        this.setState({no: currentPage});
        if (currentPage == 0) {
            this.setState({home: true, category: false, amount: false, upload: false})
        } else if (currentPage == 1) {
            this.setState({home: false, category: true, amount: false, upload: false})
        } else if (currentPage == 2) {
            this.setState({home: false, category: false, amount: false, upload: true})
        } else if (currentPage == 3) {
            this.setState({home: false, category: false, amount: true, upload: false})
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
            this.setState({home: true, category: false, amount: false, upload: false})
        } else if (value == 1) {
            this.setState({home: false, category: true, amount: false, upload: false})
        } else if (value == 2) {
            this.setState({home: false, category: false, amount: false, upload: true})
        } else if (value == 3) {
            this.setState({home: false, category: false, amount: true, upload: false})
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            upload: false,
            home: true,
            category: false,
            amount: false,
            no: 0,
            cat_id: '', 
            images_array: [],
            description: '',
            amountT: '',
            loader: false,
            qty: '',
            name: '', 
            token: '',
            isConnected: true,
            user_id: ''
        };
        this.seller = this.seller.bind(this);
    }

    render() {
        let header, footer, images;
        if (this.state.home && !this.state.upload && !this.state.category && !this.state.amount) {
            header = "Sell on Sẹlẹ";
            footer = "Next";
        } else if (!this.state.home && !this.state.upload && this.state.category && !this.state.amount) {
            header = "Select Category";
        } else if (!this.state.home && this.state.upload && !this.state.category && !this.state.amount) {
            header = "Upload Photos";
            footer = "Upload";
        } else if (!this.state.home && !this.state.upload && !this.state.category && this.state.amount) {
            header = "Enter Amount";
            footer = "Sell now";
        }
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
        images = 
        this.state.images_array.map((image, index)=>{
            <Image resizeMode="contain" style={{width: 38,
        height: 38,
        borderRadius: 19}}
                   source={{uri: image.uri}}/>;
        });
        return (
            <View style={{flex: 1, backgroundColor: '#Fff'}}>
                <StatusBar backgroundColor='#fff' translucent={true} barStyle='dark-content'/>
                <View style={styles.head}>
                    <TouchableNativeFeedback onPress={this.prev.bind(this)}>
                        <MaterialCommunityIcons style={{
                            position: 'absolute', left: 10, top: 40,
                        }} name="arrow-left" size={30} color={this.state.home ? "#000" : "#EFB879"}/>
                    </TouchableNativeFeedback>
                    <Text style={{
                        fontFamily: 'mont-semi',
                        fontSize: 20, marginTop: 27,
                        color: '#000',
                    }}>
                        {header}
                    </Text>
                </View>
                <ViewPagerAndroid style={{flex: 1}} initialPage={0}
                                  onPageSelected={this.onPageSelected.bind(this)}
                                  ref={(viewPager) => {
                                      this.viewPager = viewPager
                                  }}>
                        <View style={{flex: 1}} key="1">
                            <ScrollView showsVerticalScrollIndicator={false}>       
                            <View style={styles.box}>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    value={this.state.name}
                                    placeholder={'Name...'}
                                    placeholderStyle={{fontFamily: 'mont', color: '#615d5d', fontSize: 12}}
                                    onChangeText={(name) => this.handleName(name)}
                                    style={{backgroundColor: '#fff',
                                        color: '#000',
                                        letterSpacing: 2,
                                        fontSize: 12,      
                                        fontFamily: 'mont',width: (Width*(83.33/100))-90}}/>

                            </View>
                            <View style={styles.box}>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    value={this.state.qty}
                                    placeholder={'Quantity...'}
                                    keyboardType={'numeric'}
                                    placeholderStyle={{fontFamily: 'mont', color: '#615d5d', fontSize: 12}}
                                    onChangeText={(qty) => this.handleQty(qty)}
                                    style={{backgroundColor: '#fff',
                                        color: '#000',
                                        letterSpacing: 2,
                                        fontSize: 12,      
                                        fontFamily: 'mont',width: (Width*(83.33/100))-90}}/>

                            </View>
                            <View style={styles.multiTextBox}>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    placeholderTextColor={'#615d5d'}
                                    multiline={true}
                                    style={{
                                        width: '90%', alignSelf: 'center', fontFamily: 'mont',
                                        color: '#615d5d', fontSize: 12
                                    }}
                                    value={this.state.description}
                                    onChangeText={(description) => this.handleDescription(description)}
                                    placeholder={'Goods Description...'}
                                    placeholderStyle={{fontFamily: 'mont', color: '#615d5d', fontSize: 12}}
                                />
                            </View>
                            </ScrollView>
                        </View>
                        <View style={{flex: 1}} key="2">
                            <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{flexDirection: 'row',marginBottom: 25,
                    justifyContent: 'space-evenly'}}>
                    <TouchableNativeFeedback
                    onPress={this.nextButton.bind(this, 1)}>
                    <View style={styles.cats}>
                     <View style={styles.icon}>
                         <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                 source={require('../clothing_&_fashion_yellow.png')}/>
                     </View>
                     <Text style={styles.iconDes}>
                         {'\n'}Clothing and Fashion
                     </Text>
                 </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={this.nextButton.bind(this, 2)}>
                    <View style={styles.cats}>
                        <View style={styles.icon}>
                            <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                    source={require('../arts_&_craft_yellow.png')}/>
                        </View>
                        <Text style={styles.iconDes}>
                            {'\n'}Arts and Craft
                        </Text>
                    </View>
                    </TouchableNativeFeedback>
                </View>
                    <View style={{flexDirection: 'row',marginBottom: 25,
                        justifyContent: 'space-evenly'}}>
                        <TouchableNativeFeedback
                            onPress={this.nextButton.bind(this, 10)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../books_&_study_materials_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                                {'\n'}Books and Study materials
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                        onPress={this.nextButton.bind(this, 3)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../accomodation_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                                {'\n'}Accomodation
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flexDirection: 'row',marginBottom: 25,
                        justifyContent: 'space-evenly'}}>
                        <TouchableNativeFeedback
                        onPress={this.nextButton.bind(this, 4)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../vehicles_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                                {'\n'}Vehicles
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={this.nextButton.bind(this, 5)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../mobile_phones_&_computing_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                            {'\n'}Mobile Phones and Computers
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flexDirection: 'row',marginBottom: 25,
                        justifyContent: 'space-evenly'}}>
                        <TouchableNativeFeedback
                        onPress={this.nextButton.bind(this, 6)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../hostel_appliances_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                            {'\n'}Hostel Appliances
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                        onPress={this.nextButton.bind(this, 7)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../utensils_&_toiletries_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                            {'\n'}Utensils and Toiletries
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flexDirection: 'row',marginBottom: 25,
                        justifyContent: 'space-evenly'}}>
                        
                        <TouchableNativeFeedback
                        onPress={this.nextButton.bind(this, 8)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../food_&_drinks_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                            {'\n'}Food and Drinks
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                        onPress={this.nextButton.bind(this, 9)}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../health_&_beauty_yellow.png')}/>
                            </View>
                            <Text style={styles.iconDes}>
                            {'\n'}Health and Beauty
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flexDirection: 'row',marginBottom: 25,
                        justifyContent: 'space-evenly'}}>
                        
                        <TouchableNativeFeedback
                        onPress={this.nextButton.bind(this, 11 )}>
                        <View style={styles.cats}>
                            <View style={styles.icon}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../speakerjpg.jpg')}/>
                            </View>
                            <Text style={styles.iconDes}>
                            {'\n'}Other
                            </Text>
                        </View>
                        </TouchableNativeFeedback>
                    
                    </View>
                            </ScrollView>
                        </View>
                        <View style={{flex: 1}} key="3">
                            <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style={{
                                fontFamily: 'mont-medium', fontSize: 14, color: '#000',
                                marginTop: 39, textAlign: 'center'
                            }}>
                                Upload at least one picture{'\n'} of your product
                            </Text>
                            <TouchableNativeFeedback onPress={this.imageUpload.bind(this)}>
                            <View style={styles.multi}>
                                <View style={{height: 111, width: 123,alignSelf: 'center',}}>
                                    <Image
                                        resizeMode="contain"
                                        style={{alignSelf: 'center', flex: 1}}
                                        source={require('../upload.png')}/></View>
                                <Text style={{fontFamily: 'mont', fontSize: 12,
                                    color: '#b3b1b1',alignSelf: 'center',}}>
                                    Attach photos...
                                </Text>
                            </View>
                            </TouchableNativeFeedback>
                            <View style={styles.does}>
                            {images}
                    </View>
                            </ScrollView>
                        </View>
                        <View style={{flex: 1}} key="4">
                            <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.box}>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    value={this.state.amountT}
                                    onChangeText={(amount) => this.handleAmount(amount)}
                                    keyboardType={'numeric'}
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
                            </ScrollView>
                        </View>
                </ViewPagerAndroid>
                {this.state.category ? <View></View> :
                    <TouchableNativeFeedback onPress={this.nextButton.bind(this)}>
                        <View style={styles.bottomButton}>
                        {this.state.loader?
                        <ActivityIndicator animating={true} size='large' color="#fff"/>
                    :<Text style={{fontFamily: 'mont-medium', color: '#fff', fontSize: 14}}>
                            {footer}
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
        marginTop: 25
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
        backgroundColor: '#fcfcfc'
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
    doeImage: {
        width: 38,
        height: 38,
        borderRadius: 19
    },
    does: {
        marginTop: 9,
        flexDirection: 'row',
        width: 115,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '7%'
    },
});