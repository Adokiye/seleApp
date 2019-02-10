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

export default class UpdateProfile extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    constructor(props) {
        super(props);
        this.state = {
            value: 'Jane'
        };
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fafafa'}}>
                <StatusBar backgroundColor='#F2C490' translucent={true} barStyle='dark-content'/>
                <View>
                    
                </View>
                <TouchableNativeFeedback onPress={() => this.props.navigation.goBack(null)}>
                        <MaterialCommunityIcons style={{
                            position: 'absolute', left: 10, top: 40,
                        }} name="arrow-left" size={30} color={"#EFB879"}/>
                    </TouchableNativeFeedback>
                    <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.headText}>UPDATE PROFILE</Text>
                <Text style={styles.enterNow}>Enter details and update your profile</Text>
                <View style={styles.imageChange}>
                <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1,}}
                                   source={require('../changeImage.png')}/>
                                   </View>
                                   <View style={styles.textField}>
                                       <TextInput
                                        underlineColorAndroid={'transparent'}
                                        placeholderStyle={{fontSize: 14, fontFamily: 'mont'}}
                                        placeholderTextColor="#615D5D"
                                        style={{backgroundColor:'#fff', flex:1,
                                        color:'#000', fontFamily:'mont-medium', fontSize:14,
                                       }}
                                       value={this.state.value}
onChangeText={(text) => this.setState({value: text})}/>
                                   </View>
                                   <View style={styles.underTextField}>
                                   <TextInput
                                        underlineColorAndroid={'transparent'}
                                        
                                        placeholderStyle={{fontSize: 14, fontFamily: 'mont'}}
                                        placeholderTextColor="#615D5D"
                                        
                                        style={{backgroundColor:'#fff', flex:1,
                                        color:'#000', fontFamily:'mont-medium', fontSize:14,
                                       }}
                                       placeholder="Last Name"/>
                                   </View></ScrollView>
                                   <TouchableNativeFeedback>   
                    <View style={styles.bottomButton}>
                        <Text style={{fontFamily: 'mont-medium', color: '#fff', fontSize: 14}}>
                            SAVE & CONTINUE
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  headText:{
  marginTop: 60,
  alignSelf: 'center',
  fontSize: 16,
  fontFamily: 'mont-semi',
  color: '#000'  
  }, 
  enterNow:{
      color: '#615D5D',
      fontSize: 12,
      fontFamily: 'mont',
      marginTop: 13,
      alignSelf: 'center',
  },
  imageChange: {
    width: 105,
    height: 105,
    borderRadius: 105/2,
    backgroundColor: '#e0e0e0',
    alignSelf: 'center',
    marginTop: 30 
  },
  textField:{
      borderWidth: 0.7,
      backgroundColor: '#fff',
      borderColor: '#d9d8d8',
      marginTop: 30,
      borderRadius: 5,
      width: '83.33%',
      height: 50,
      alignSelf: 'center'
  },
  underTextField:{
    borderWidth: 0.7,
    backgroundColor: '#fff',
    borderColor: '#d9d8d8',
    marginTop: 15,
    borderRadius: 5,
    width: '83.33%',
    height: 50,
    alignSelf: 'center'
  }, 
  bottomButton: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efb879',
},
});