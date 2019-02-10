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

import { connect } from "react-redux";
import { trueGoods,trueBrowse,trueCart, trueHome, trueMessages, trueServices,falseBrowse,
    falseCart, falseHome,falseMessages,falseGoods, falseServices} from "../actions/index";

const mapStateToProps = state => {
    return { home: state.home,services: state.services, browse: state.browse,cart: state.cart, messages: state.messages };
};
const mapDispatchToProps = dispatch => {
    return {
        trueBrowse: browse => dispatch(trueBrowse(browse)),
        trueServices: services => dispatch(trueServices(services)),
        trueHome: home => dispatch(trueHome(home)),
        trueGoods: goods => dispatch(trueGoods(goods)),
        trueMessages: messages => dispatch(trueMessages(messages)),
        trueCart: cart => dispatch(trueCart(cart)),
        falseGoods: goods => dispatch(falseGoods(goods)),
        falseServices: services => dispatch(falseServices(services)),
        falseMessages: messages => dispatch(falseMessages(messages)),
        falseHome: home => dispatch(falseHome(home)),
        falseCart: cart => dispatch(falseCart(cart)),
        falseBrowse: browse => dispatch(falseBrowse(browse))
    };

};
class reduxShop extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    constructor(props) {
        const Width = Dimensions.get('window').width;
        super(props);
        this.state = {
            search: false
        };
    }
    stateChanger(header_serve) {
        this.props.trueHome("home");
        this.props.falseMessages("messages");
        this.props.falseBrowse("soo");
        this.props.falseCart("cart");
        this.props.falseServices("services");
        this.props.trueGoods("goods");
        this.props.navigation.navigate('Land', {
            headerS: header_serve,
        });
    }
    showSearch(){
    this.setState({search: true},);
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row',height: 80,backgroundColor: '#fcfcfc',
                    justifyContent: 'center',width: '100%',alignItems: 'center' }}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.goBack()}>
                        <MaterialCommunityIcons style={{position: 'absolute',left: 10,top: StatusBar.currentHeight
                        }} name="arrow-left" size={30} color="#535461"/>
                    </TouchableNativeFeedback>
                    {this.state.search?
                            <TextInput
                                autoFocus={true}
                                ref="search"
                                placeholder="Search for categories"
                                   returnKeyType={'search'}
                                   placeholderStyle={{fontSize: 20, fontFamily: 'mont-semi',}}
                                   placeholderTextColor="#000"
                                   underlineColorAndroid={'transparent'}
                                   style={{
                                       position: 'absolute',top: StatusBar.currentHeight-5,
                                       backgroundColor: '#fcfcfc',width: '65%',alignSelf: 'center',
                                       fontSize: 20, fontFamily: 'mont-medium', color: '#000',
                                   }}/>:<Text style={{fontFamily: 'mont-semi',marginTop: StatusBar.currentHeight-5,
                        fontSize: 20,
                        color: '#000',}}>
                        Shop by Categories
                    </Text>}
                    {this.state.search?
                        <TouchableNativeFeedback onPress={() => this.setState({search: false})}>
                        <MaterialIcons style={{position: 'absolute',right: 10,
                            top: StatusBar.currentHeight
                        }}  name="cancel" size={30} color="#535461"/>
                    </TouchableNativeFeedback>:
                        <TouchableNativeFeedback onPress={this.showSearch.bind(this)}>
                            <MaterialIcons style={{position: 'absolute',right: 10,
                                top: StatusBar.currentHeight
                            }}  name="search" size={30} color="#535461"/>
                        </TouchableNativeFeedback>}
                </View>
                <ScrollView>
                <View style={{flexDirection: 'row',marginBottom: 25,
                    justifyContent: 'space-evenly'}}>
                    <TouchableNativeFeedback
                    onPress={this.stateChanger.bind(this, "Clothing and Fashion")}>
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
                        onPress={this.stateChanger.bind(this, "Arts and Craft")}>
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
                            onPress={this.stateChanger.bind(this, "Books and Study Materials")}>
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
                            onPress={this.stateChanger.bind(this, "Accomodation")}>
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
                            onPress={this.stateChanger.bind(this, "ELECTRONICS & REPAIR")}>
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
                            onPress={this.stateChanger.bind(this, "Mobile Phones and Computers")}>
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
                            onPress={this.stateChanger.bind(this, "Hostel Appliances")}>
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
                            onPress={this.stateChanger.bind(this, "Utensils and Toiletries")}>
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
                            onPress={this.stateChanger.bind(this, "Food and Drinks")}>
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
                            onPress={this.stateChanger.bind(this, "Health and Beauty")}>
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
                            onPress={this.stateChanger.bind(this, "Other")}>
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
        );
    }

}const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
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
    cats_:{
        width: Width*(39.16/100),
        height: Height*(20/100),
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: '#EFB879',
        flexDirection: 'column',
        justifyContent: 'center',
        elevation: 2
    },
    icon: {
      alignSelf: 'center',
      width:  70,
        height: 70,
        backgroundColor: '#fff'
    },
    icon_: {
        alignSelf: 'center',
        width:  65,
        height: 50,
        backgroundColor: '#EFB879'
    },
    iconDes: {
        color: '#535461',
        fontFamily: 'mont',
        fontSize: 10,
        alignSelf: 'center',

    },
    iconDes_: {
        color: '#fff',
        fontFamily: 'mont-semi',
        fontSize: 10,
        alignSelf: 'center',

    }
});
const Shop = connect(mapStateToProps, mapDispatchToProps)(reduxShop);
export default Shop;