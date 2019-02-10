/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    StatusBar,
    ViewPagerAndroid,
    Alert,
    ScrollView,
    TouchableNativeFeedback,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Splash from './components/Splash';
import On from './components/On';
import Find from './components/Find';
import Home from './components/Home';
import Shop from './components/Shop';
import Signup from './components/Signup';
import ServiceProfile from './components/ServiceProfile';
import JobBid from './components/JobBid';
import Login from './components/Login';
import SideBar from './components/SideBar';
import ServicesCategory from './components/ServicesCategory';
import ServiceDetail from './components/ServiceDetail';
import Sell from './components/Sell';
import MyProfile from './components/MyProfile';
import Terms from './components/Terms';
import ProductDetail from './components/ProductDetail';
import MyAccount from './components/MyAccount';
import Projects from './components/Projects';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import ImageView from './components/ImageView';
import Membership from './components/Membership';
import PostJob from './components/PostJob';
import Chat from './components/Chat';
import {BoxShadow} from 'react-native-shadow';
import {createStackNavigator, DrawerNavigator, DrawerItems} from 'react-navigation';
import store from "./store/index";
import {connect, Provider} from 'react-redux';
import {changeName
} from "./actions/index";

const mapStateToProps = state => {
    return {
        name: state.name
    };
};
const mapDispatchToProps = dispatch => {
    return {
        changeName: name => dispatch(changeName(name))
    };

};
const dimensions = Dimensions.get('window');
const Width = dimensions.width;
const screens = createStackNavigator({
    
    Home: {
        screen: Home,
    },
    PostJob: {
        screen: PostJob
    },
    Chat: {
        screen: Chat
    },
    ImageView: {
        screen: ImageView
    },
    Membership: {
        screen: Membership
    },
    Projects: {
     screen: Projects
    },
    UpdateProfile: {
        screen: UpdateProfile,
    },
    ProductDetail: {
        screen: ProductDetail
    },
    MyProfile: {
        screen: MyProfile
    },
    ForgotPassword: {
        screen: ForgotPassword
    },
    Signup: {
        screen: Signup
    },
    Login: {
        screen: Login
    },
    Land: {
        screen: Home,
    },
    SideBar: {
        screen: SideBar,
    },
    Find: {
        screen: Find
    },
    Shop: {
        screen: Shop,
    },
    SetCat: {
        screen: ServicesCategory
    },
    ServiceProfile: {
        screen: ServiceProfile
    },
    ServiceDetail: {
        screen: ServiceDetail,
    },
    JobBid: {
        screen: JobBid
    },
    Sell: {
        screen: Sell
    },
    MyAccount: {
        screen: MyAccount
    },
    Terms:{
        screen: Terms
    }
});
screens.navigationOptions = ({ navigation }) => {
    name = (navigation.state.index !== undefined ? navigation.state.routes[navigation.state.index] : navigation.state.routeName)
     let drawerLockMode = 'locked-closed'
     if (name.routeName === 'Land' ) {
       drawerLockMode = 'unlocked'
     }
     return {
       drawerLockMode,
     };
   }
const RootStack = DrawerNavigator(
    {
        drawer: {
            screen: screens
        }
    },
    {
        drawerWidth: Width * (80 / 100),
        contentComponent: SideBar
    },

    {
        initialRouteName: 'Home',
    }
    , {}
);
class reduxApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timePassed: false,
            On: true,
            side: 'sc'
        };
    }

    render() {
        setTimeout(() => {
            this.setState({timePassed: true})
        }, 500);
        if (!this.state.timePassed) {
            return <View style={{flex: 1}}>
                <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content'/>
                    
                <Splash/></View>;
        } else {
            return (
                <View style={styles.container}>
                    <Provider store={store}>
                        <RootStack/>
                    </Provider>
                </View>
            );

        }
    }
}
const NAVBAR_HEIGHT = Platform.select({
    ios: {marginTop: 0},
    android: {marginTop: window.height / 8}
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EE8F62',
    }
});
function connectWithStore(store, WrappedComponent, ...args) {
    var ConnectedWrappedComponent = connect(...args)(WrappedComponent)
    return function (props) {
      return <ConnectedWrappedComponent {...props} store={store} />
    }
  }
const App = connectWithStore(store, reduxApp,mapStateToProps, mapDispatchToProps);
export default App;
/*
  var config = {
        headers: {'Authorization': "bearer " + token}
   };

   var bodyParameters = {
       key: "value"
   }

  Axios.post(
      'http://localhost:8000/api/v1/get_token_payloads',
      bodyParameters,
      config
  ).then((response) => {
      console.log(response)
  }).catch((error) => {
      console.log(error)
  });*/