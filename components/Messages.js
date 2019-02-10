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
    FlatList,
    NetInfo,
    View
} from 'react-native';
export default class Messages extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'

    };
    componentDidMount() {
        //const name     = params.name? params.name : "";
        const id     = this.props.id;
        console.log(id);
       // this.setState({school_id: id});
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);          
            if(id){
                console.log("mmm");
                console.log(id);
                console.log("mmm");
                this.setState({loading: true});
                var bodyParameters = {
                    id: id,
                }
            /*    var config = {
                    headers: {'Authorization': "Bearer " + this.state.token}
               };*/
               this.setState({contacts: {
                receiver: {first_name: "Jane", last_name: "Doe"}, 
                sender_id: 4, receiver_id: 2, last_message: {read: 1, message: "books"}   
            }})
         /*      axios.post(
                   'http://10.0.2.2:8000/api/contacts',
                   bodyParameters,
             //      config
               ).then((response) => {
                this.setState({loading: false});
                console.log(response);   
                var len = response.data.success.length;
                for (let i = 0; i < len; i++) {
                    let row = response.data.success;
                    this.setState(prevState => ({
                        contacts: [...prevState.contacts, row],
                    }));
                };
               }).catch((error) => {
                this.setState({loading: false});
                    Alert.alert(
                        'Error',
                         'Internal Server Error, please try again later',
                        [
                          {text: 'OK'},
                        ],  );    
                        console.log(error); 
                       });  */   
            }               
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
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            isConnected: true
        }
    }
    render() {
        const contacts = (
            <FlatList          
            data={this.state.contacts}          
            renderItem={({ item }) => ( 
                <TouchableNativeFeedback 
                onPress={() =>
                    this.props.navigation.navigate('Chat', {}
                )}>
                        <View style={styles.chats}>
                    <View style={styles.profiles}>
                        <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1,}}
                               source={require('../teeth.png')}/>
                    </View>
                    <View style={styles.chatTexts}>
                        <Text style={styles.profileName}>
                            {item.receiver.first_name} {item.receiver.last_name}
                            {'\n'}{'\n'}
                            {item.last_message.read?<Text style={{fontSize: 12}}>
                                {item.last_message.message}
                            </Text>:<Text style={{fontSize: 12, color: '#ADA5A5'}}>
                                {item.last_message.message}
                            </Text>}
                        </Text>
                    </View>
                    <Text style={{fontSize: 12,
                        position: 'absolute',
                        right: '8.33%',fontFamily: 'mont-medium',
                        color: '#000',
                        textAlign: 'left',
                        marginTop: 14,}}>
                        12:15
                    </Text>
                </View>
                        </TouchableNativeFeedback>          
             )}          
             keyExtractor={item => item.id}  
             horizontal={true}                           
          />            );
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
             {contacts}   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stat: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#27AE60',
        position: 'absolute',
        bottom: 57/8,
        right: 0
    },
    stat2: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#EFC07C',
        position: 'absolute',
        bottom: 57/8,
        right: 0
    },
    profileName: {
        fontFamily: 'mont-medium',
        fontSize: 14,
        color: '#000',
        textAlign: 'left',
        marginTop: 14,
    },
    profiles: {
        width: 57,
        height: 57,
        borderRadius: 57/2,
        marginLeft: '8.33%',
        marginTop: 12,
        backgroundColor: '#fff'
    },
    chatTexts: {
        marginLeft: 15,
        width: '50%'
    },
    chats: {
        height: '15.75%',
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 10
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
/**
<View style={styles.chats}>
                    <View style={styles.profiles}>
                        <Image resizeMode="contain" style={{alignSelf: 'center', flex: 1,}}
                               source={require('../teeth.png')}/>
                    </View>
                    <View style={styles.chatTexts}>
                        <Text style={styles.profileName}>
                            Jane Doe
                            {'\n'}{'\n'}
                            <Text style={{fontSize: 12, color: '#ADA5A5'}}>
                                How much is the iPhone?
                            </Text>
                        </Text>

                    </View>
                    <Text style={{fontSize: 12,
                    position: 'absolute',
                    right: '8.33%',fontFamily: 'mont-medium',
                    color: '#000',
                    textAlign: 'left',
                    marginTop: 14,}}>
                    12:15
                </Text>
                </View> 

 */