import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    StatusBar,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
    ImageBackground,
    View
} from 'react-native';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schools: this.schools,
            index: -1,
            text: '',
            pressed: false,
            showPassword: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.schoolChange = this.schoolChange.bind(this);
    }

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };

    update(index) {
        console.log(index);
    }

    handlePressedIn(index) {
        this.props.navigation.navigate('Land', {});
        this.setState({index}, () => {
            this.update(this.state.index)
        })
    }

    schoolChange(text) {
        const schools = this.schools.filter(school => school.toUpperCase().includes(text.toUpperCase()));
        this.setState({
            schools,
        });
    }

    handleChange(text) {
        this.setState({text}, () => {
            this.schoolChange(this.state.text)
        });
    }
    onP(){

        this.props.navigation.navigate('Signup', {
        })};
    render() {
        const { navigate } = this.props.navigation;
        const shadowOpt = {
            color: "#000",
            border: 12,
            opacity: '0.08',
            radius: 12,
            x: 0,
            y: 1,
        }
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' translucent={true} barStyle='dark-content'/>
                <View style={styles.header}>
                    <View style={{
                        marginTop: 60, width: 79, height: 38, backgroundColor: '#EFB879',
                        position: 'absolute', right: 0
                    }}>
                        <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                               source={require('../frect.png')}>
                        </Image>
                        <View style={{
                            width: 8, height: 14, backgroundColor: '#385C8E',
                            position: 'absolute', left: 0, top: '30%',
                            marginLeft: 20
                        }}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../big_f.png')}/>
                        </View>
                        <TouchableNativeFeedback><View style={{
                            width: 44, height: 38, backgroundColor: '#385C8E',
                            position: 'absolute', right: 0
                        }}>
                            <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                   source={require('../rect_2.png')}/>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={{
                                width: 18, height: 12, backgroundColor: '#fff',
                                position: 'absolute', right: 10, top: '30%',
                                marginLeft: 10
                            }}>
                                <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                       source={require('../new_gg.png')}/>
                            </View></TouchableNativeFeedback>
                    </View><View style={{
                    height: 42, width: 72,
                    backgroundColor: '#EFB879', marginTop: '29.84%',
                    alignSelf: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'mont-bold',
                        fontSize: 34,
                        color: '#fff'
                    }}>
                        sẹlẹ
                    </Text>
                </View>
                    <View style={{
                        width: '83.33%',
                        height: 60,
                        backgroundColor: '#fff',
                        position: 'absolute',
                        bottom: 0,
                        alignSelf: 'center',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                    }}>
                        <View style={{
                            width: '100%',
                            height: 60,
                            backgroundColor: '#fff',
                            borderBottomWidth: 0.7,
                            borderColor: '#d9d8d8',
                            borderTopRightRadius: 6,
                            borderTopLeftRadius: 6,
                        }}>
                            <TextInput placeholder="Email"
                                       placeholderStyle={{fontSize: 14, fontFamily: 'mont'}}
                                       placeholderTextColor="#615D5D"
                                       underlineColorAndroid={'transparent'}
                                       style={{
                                           alignSelf: 'center',
                                           flex: 1,
                                           paddingTop: 10,
                                           paddingRight: 10,
                                           paddingBottom: 10,
                                           width: '85%',
                                           paddingLeft: 0,
                                           padding: 4,
                                           backgroundColor: '#fff',
                                           fontSize: 14, fontFamily: 'mont', color: '#615D5D',
                                       }}/>
                        </View>
                    </View>
                </View>
                <View style={{
                    width: '83.36%',
                    height: 60,
                    backgroundColor: '#EFB879',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomRightRadius: 6,
                    borderBottomLeftRadius: 6,
                }}>
                    <Text style={{
                        fontFamily: 'mont-semi',
                        fontSize: 16,
                        color: '#fff'
                    }}>
                        SEND LINK
                    </Text>
                </View>
                <View
                style={{
                    height: 0,
                    width: 120,
                    borderBottomWidth: 1.2,
                    borderColor: '#d9d8d8',
                    alignSelf: 'center',
                    marginTop: '30%'
                }}>
                </View>
                <View style={{width: '100%',
                height: 2,flexDirection: 'row',
                  //  alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: '5%'}}>
                    <Text style={{
                    color: '#615D5D',
                    fontFamily: 'mont-medium',
                    fontSize: 14,
                    alignSelf: 'center',
                }}>
                    Don't have an account? </Text>
                <TouchableNativeFeedback
                    onPressIn={() => this.setState({pressed: !this.state.pressed})}
                    onPressOut={() => this.setState({pressed: !this.state.pressed})}
                    onPress={this.onP.bind(this)}>
                    <Text
                    style={{
                        color: '#EFB778',
                        fontFamily: 'mont-medium',
                        fontSize: this.state.pressed? 16: 14,
                        alignSelf: 'center',}}>
                    SIGN UP
                </Text>
                </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
        //  alignItems: 'center',
    },
    header: {
        width: '100%',
        height: '50%',
        backgroundColor: '#EFB879',
    }
});