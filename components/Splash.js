import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    StatusBar,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {};
export default class Splash extends Component<Props> {
    render() {
        return (
            <LinearGradient colors={['#EE8F62', '#f2ac88']}  style={styles.linearGradient}>
                <View
                    style={styles.container}>
                    <Image style={{marginTop: '35%',
                        marginBottom: '65%', alignSelf: 'center'}} source={require('../logo.png')}/>
                </View></LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        //  alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});