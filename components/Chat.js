import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    NetInfo,
    Animated,
    Image,
    Alert,
    Dimensions,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback,
    View, ViewPagerAndroid, StatusBar
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.checker = this.checker.bind(this);
    };
 /*   checker(){
        const {params} = this.props.navigation.state;
               this.setState({loading: true});
               var bodyParameters = {
                   id: params.id,
                   receiver_id: params.receiver_id
               }
              /*    var config = {
                   headers: {'Authorization': "Bearer " + this.state.token}
              };
              axios.post(
                  'http://10.0.2.2:8000/api/messages',
                  bodyParameters,
              //      config
              ).then((response) => {
               this.setState({loading: false});
               
           /*    var found = false;
               for(var i = 0; i < this.state.messages.length; i++) {
               if (vendors[i].Name == 'Magenic') {
               found = true;
               break;
               }
               }
               console.log(response);   
               var len = response.data.success?response.data.success.length:null;
               for (let i = 0; i < len; i++) {
                   let row = response.data.success[i];
                   console.log(row.id, row.user1.id);console.log("chat");
                   this.setState(prevState => ({
                       messages: [...prevState.messages, {_id: row.id, text: row.message, 
                           createdAt: row.created_at, user: {_id: row.user1.id,name: row.user1.first_name+' '+row.user1.last_name}}],
                   }), console.log(this.state.messages));
                   console.log("checker");
                   
                   
               };
              }).catch((error) => {
               this.setState({loading: false}); 
                       console.log(error); 
                      });      
}*/
  /*  componentDidMount(){
    this.interval = setInterval(() => this.checker(), 1000);
    }
    componentWillUnmount() {
            clearInterval(this.interval);
          }*/
    componentWillMount() {
   //     this.checker();
        const {params} = this.props.navigation.state;
  /*      var pusher = new Pusher('1363556f717d953dcf86', {
            cluster: 'mt1',
            forceTLS: true
          });
          var channel = pusher.subscribe('messages.'+params.receiver_id);
          channel.bind('MessageSent', function(data) {
            console.log(data);
          });*/
      }  
      onSend(messages = []) {
     /*     console.log(messages);
          const {params} = this.props.navigation.state;
          messages[0].sent = true;
        var bodyParameters = {
            id: params.id,
            receiver_id: params.receiver_id,
            message: messages[0].text
        }
    /*    var config = {
            headers: {'Authorization': "Bearer " + this.state.token}
       };
       axios.post(
           'http://10.0.2.2:8000/api/sendMessage',
           bodyParameters,
     //      config
       ).then((response) => {
        this.setState({loading: false});
        console.log(response);   
        
       }).catch((error) => {
        this.setState({loading: false});
            Alert.alert(
                'Error',
                 'Internal Server Error, please try again later',
                [
                  {text: 'OK'},
                ],  );    
                console.log(error); 
               }); */
          this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }));  
      }
    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
            <View style={{flexDirection: 'row', height: 80,backgroundColor: '#fcfcfc',
elevation: 0.5, width: '100%', alignItems: 'center',justifyContent: 'center' }}>                                                      
                    <TouchableNativeFeedback onPress={() => this.props.navigation.goBack()}>
                        <MaterialCommunityIcons style={{
                            position: 'absolute', left: 10, top: 40,
                        }} name="arrow-left" size={30} color="#535461"/>
                    </TouchableNativeFeedback>
                    <Text style={{
                        fontFamily: 'mont-semi',
                        fontSize: 20, marginTop: 27,
                        color: '#000',
                    }}>
                        {params.header}
                    </Text>
                </View>
            <GiftedChat
            messages={this.state.messages}
          //  inverted={false}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: params.id,
            }}
          /></View>
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
    //    justifyContent: 'center',
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