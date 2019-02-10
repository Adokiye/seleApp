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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class MyAccount extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#Fff'}}>
                <StatusBar backgroundColor='#fff' translucent={true} barStyle='dark-content'/>
                <View style={styles.head}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.goBack()}>
                        <MaterialCommunityIcons style={{
                            position: 'absolute', left: 10, top: 40,
                        }} name="arrow-left" size={30} color={"#EFB879"}/>
                    </TouchableNativeFeedback>
                    <Text style={{
                        fontFamily: 'mont-semi',
                        fontSize: 20, marginTop: 27,
                        color: '#000',
                    }}>
                        Profile & Settings
                    </Text>
                </View>
                <TouchableNativeFeedback onPress={() =>
                    this.props.navigation.navigate('MyProfile', {})}>
                <View style={styles.box}>
                    <Text style={{fontFamily: 'mont-medium', position: 'absolute',left: 26,
                        fontSize: 14, color: '#000'}}>
                        My Profile
                    </Text>
                    <MaterialIcons style={{
                        position: 'absolute',right: 0
                    }} name="chevron-right" size={30} color="#EFB879"/>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={() =>
                        this.props.navigation.navigate('Membership', {})}>
                    <View style={styles.box}>
                        <Text style={{fontFamily: 'mont-medium', position: 'absolute',left: 26,
                            fontSize: 14, color: '#000'}}>
                            Membership & Payment
                        </Text>
                        <MaterialIcons style={{
                            position: 'absolute',right: 0
                        }} name="chevron-right" size={30} color="#EFB879"/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Terms', {})}>
                    <View style={styles.box}>
                        <Text style={{fontFamily: 'mont-medium', position: 'absolute',left: 26,
                            fontSize: 14, color: '#000'}}>
                            Terms of use
                        </Text>
                        <MaterialIcons style={{
                            position: 'absolute',right: 0
                        }} name="chevron-right" size={30} color="#EFB879"/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={styles.box}>
                        <Text style={{fontFamily: 'mont-medium', position: 'absolute',left: 26,
                            fontSize: 14, color: '#000'}}>
                            Help & Support
                        </Text>
                        <MaterialIcons style={{
                            position: 'absolute',right: 0
                        }} name="chevron-right" size={30} color="#EFB879"/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('Login', {})}>
                    <View style={styles.box}>
                        <Text style={{fontFamily: 'mont-medium', position: 'absolute',left: 26,
                            fontSize: 14, color: '#000'}}>
                            Institute{'\n'}
                            <Text style={{fontFamily: 'mont', position: 'absolute',left: 26,
                            fontSize: 10, color: '#000'}}>University of Ilorin</Text>
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        justifyContent: 'space-between',
        marginTop: 27,
        width: '85%',
        height: 55,
        paddingRight: 26,
        backgroundColor: '#fdfdfd',
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        elevation: 0.6,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    head: {
        height: 80,
        flexDirection: 'row', elevation: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fcfcfc'
    },
});