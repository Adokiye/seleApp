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
import { trueBrowse,trueCart,trueGoods,falseGoods, trueHome, trueMessages, trueServices,falseBrowse,
    falseCart, falseHome,falseMessages, falseServices} from "../actions/index";

const mapStateToProps = state => {
    return { home: state.home, goods: state.goods,browse: state.browse,cart: state.cart, messages: state.messages };
};
const mapDispatchToProps = dispatch => {
    return {
        trueBrowse: browse => dispatch(trueBrowse(browse)),
        trueServices: services => dispatch(trueServices(services)),
        trueHome: home => dispatch(trueHome(home)),
        trueMessages: messages => dispatch(trueMessages(messages)),
        trueCart: cart => dispatch(trueCart(cart)),
        trueGoods: goods => dispatch(trueGoods(goods)),
        falseGoods: goods => dispatch(falseGoods(goods)),
        falseServices: services => dispatch(falseServices(services)),
        falseMessages: messages => dispatch(falseMessages(messages)),
        falseHome: home => dispatch(falseHome(home)),
        falseCart: cart => dispatch(falseCart(cart)),
        falseBrowse: browse => dispatch(falseBrowse(browse))
    };

};
 class reduxServicesCategory extends Component {

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'

    };
    stateChanger(header_serve) {
        this.props.trueHome("home");
        this.props.falseMessages("messages");
        this.props.falseBrowse("soo");
        this.props.falseCart("cart");
        this.props.trueServices("services");
        this.props.falseGoods("goods");
        this.props.navigation.navigate('Land', {
            headerS: header_serve,
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            search: false
        };
    }
    showSearch(){

        this.setState({search: true},);
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row',height: 80,backgroundColor: '#fcfcfc',
                    marginBottom: 15,
                    justifyContent: 'center',width: '100%',alignItems: 'center' }}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.goBack(null)}>
                        <MaterialCommunityIcons style={{position: 'absolute',left: 10,top: StatusBar.currentHeight
                        }} name="arrow-left" size={30} color="#535461"/>
                    </TouchableNativeFeedback>
                    {this.state.search?
                        <TextInput
                            autoFocus={true}
                            ref="search"
                            placeholder="Search..."
                            returnKeyType={'search'}
                            placeholderStyle={{fontSize: 20, fontFamily: 'mont-semi',}}
                            placeholderTextColor="#000"
                            underlineColorAndroid={'transparent'}
                            style={{
                                position: 'absolute',top: StatusBar.currentHeight-5,
                                backgroundColor: '#fcfcfc',width: '65%',alignSelf: 'center',
                                fontSize: 20, fontFamily: 'mont-medium', color: '#000',
                            }}/>:<Text style={{fontFamily: 'mont-semi',
                            fontSize: 20,marginTop: StatusBar.currentHeight-5,
                            color: '#000',}}>
                            Service Category
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
                    onPress={this.stateChanger.bind(this, "WRITING AND CONTENT")}>
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
                        onPress={this.stateChanger.bind(this, "FASHION DESIGN")}>
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
                            onPress={this.stateChanger.bind(this, "TRANSPORT")}>
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
                            onPress={this.stateChanger.bind(this, "LAUNDRY & CLEANING")}>
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
                            onPress={this.stateChanger.bind(this, "ELECTRONICS & REPAIR")}>
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
                            onPress={this.stateChanger.bind(this, "PROJECT & ASSIGNMENT HANDLING")}>
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
                            onPress={this.stateChanger.bind(this, "GRAPHICS, WEB & UX DESIGNS")}>
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
                            onPress={this.stateChanger.bind(this, "PHOTOGRAPHY & VIDEO PRODUCTION")}>
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
                            onPress={this.stateChanger.bind(this, "OTHER")}>
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
      width:  50,
        height: 50,
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
const ServiceCategory = connect(mapStateToProps, mapDispatchToProps)(reduxServicesCategory);
export default ServiceCategory;