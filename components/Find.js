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
    View,
    ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {BoxShadow} from 'react-native-shadow';
var SharedPreferences = require('react-native-shared-preferences');

export default class Find extends Component {
    constructor(props) {
        super(props);
        this.schools = ["Abubakar Tafawa Balewa University, Bauchi", "Ahmadu Bello University, Zaria", "Bayero University, Kano", "Federal University Gashua, Yobe", "Federal University of Petroleum Resources, Effurun", "Federal University of Technology, Akure", "Federal University of Technology, Minna", "Federal University of Technology, Owerri", "Federal University, Dutse, Jigawa State", "Federal University, Dutsin-Ma, Katsina", "Federal University, Kashere, Gombe State", "Federal University, Lafia, Nasarawa State", "Federal University, Lokoja, Kogi State", "Alex Ekweme University, Ndufu-Alike, Ebonyi State", "Federal University, Otuoke, Bayelsa", "Federal University, Oye-Ekiti, Ekiti State", "Federal University, Wukari, Taraba State", "Federal University, Birnin Kebbi", "Federal University, Gusau Zamfara", "Michael Okpara University of Agriculture, Umudike", "Modibbo Adama University of Technology, Yola", "National Open University of Nigeria, Lagos", "Nigeria Police Academy Wudil", "Nigerian Defence Academy Kaduna", "Nnamdi Azikiwe University, Awka", "Obafemi Awolowo University,Ile-Ife", "University of Abuja, Gwagwalada", "Federal University of Agriculture, Abeokuta", "University of Agriculture, Makurdi", "University of Benin", "University of Calabar", "University of Ibadan", "University of Ilorin", "University of Jos", "University of Lagos", "University of Maiduguri", "University of Nigeria, Nsukka", "University of Port-Harcourt", "University of Uyo", "Usumanu Danfodiyo University", "Nigerian Maritime University Okerenkoko, Delta State", "Abia State University, Uturu", "Adamawa State University Mubi", "Adekunle Ajasin University, Akungba", "Akwa Ibom State University, Ikot Akpaden", "Ambrose Alli University, Ekpoma", "Chukwuemeka Odumegwu Ojukwu University, Uli", "Bauchi State University, Gadau", "Benue State University, Makurdi", "Yobe State University, Damaturu", "Cross River State University of  Technology, Calabar", "Delta State University Abraka", "Ebonyi State University, Abakaliki", "Ekiti State University", "Enugu State University of Science and Technology, Enugu", "Gombe State Univeristy, Gombe", "Ibrahim Badamasi Babangida University, Lapai", "Ignatius Ajuru University of Education,Rumuolumeni", "Imo State University, Owerri", "Sule Lamido University, Kafin Hausa, Jigawa", "Kaduna State University, Kaduna", "Kano University of Science & Technology, Wudil", "Kebbi State University of Science and Technology, Aliero", "Kogi State University Anyigba", "Kwara State University, Ilorin", "Ladoke Akintola University of Technology, Ogbomoso", "Ondo State University of Science and Technology Okitipupa", "River State University of Science and Technology", "Olabisi Onabanjo University, Ago Iwoye", "Lagos State University, Ojo", "Niger Delta University Yenagoa", "Nasarawa State University Keffi", "Plateau State University Bokkos", "Tai Solarin University of Education Ijebu Ode", "Umar Musa Yar' Adua University Katsina", "Osun State University Osogbo", "Taraba State University, Jalingo", "Sokoto State University", "Yusuf Maitama Sule University Kano", "Oyo State Technical University Ibadan", "Ondo State University of Medical Sciences", "Edo University Iyamo", "Eastern Palm University Ogboko, Imo State", "University of Africa Toru Orua, Bayelsa State", "Bornu State University, Maiduguri", "Moshood Abiola University of Science and Technology Abeokuta", "Gombe State University of Science and Technology", "Zamfara State University", , "Achievers University, Owo", "Adeleke University, Ede", "Afe Babalola University, Ado-Ekiti - Ekiti State", "African University of Science & Technology, Abuja", "Ajayi Crowther University, Ibadan", "Al-Hikmah University, Ilorin", "Al-Qalam University, Katsina", "American University of Nigeria, Yola", "Augustine University", "Babcock University,Ilishan-Remo", "Baze University", "Bells University of Technology, Otta", "Benson Idahosa University, Benin City", "Bingham University, New Karu", "Bowen University, Iwo", "Caleb University, Lagos", "Caritas University, Enugu", "Chrisland University", "Covenant University Ota", "Crawford University Igbesa", "Crescent University", "Edwin Clark University, Kaigbodo", "Elizade University, Ilara-Mokin", "Evangel University, Akaeze", "Fountain Unveristy, Oshogbo", "Godfrey Okoye University, Ugwuomu-Nike - Enugu State", "Gregory University, Uturu", "Hallmark University, Ijebi Itele, Ogun", "Hezekiah University, Umudi", "Igbinedion University Okada", "Joseph Ayo Babalola University, Ikeji-Arakeji", "Kings University, Ode Omu", "Kwararafa University, Wukari", "Landmark University, Omu-Aran.", "Lead City University, Ibadan", "Madonna University, Okija", "Mcpherson University, Seriki Sotayo, Ajebo", "Micheal & Cecilia Ibru University", "Mountain Top University", "Nile University of Nigeria, Abuja", "Novena University, Ogume", "Obong University, Obong Ntak", "Oduduwa University, Ipetumodu - Osun State", "Pan-Atlantic University, Lagos", "Paul University, Awka - Anambra State", "Redeemer's University, Mowe", "Renaissance University, Enugu", "Rhema University, Obeama-Asa - Rivers State", "Ritman University, Ikot Ekpene, Akwa Ibom", "Salem University, Lokoja", "Samuel Adegboyega University, Ogwa.", "Southwestern University, Oku Owa", "Summit University", "Tansian University, Umunya", "University of Mkar, Mkar", "Veritas University, Abuja", "Wellspring University, Evbuobanosa - Edo State", "Wesley University. of Science & Technology, Ondo", "Western Delta University, Oghara Delta State", "Christopher University Mowe", "Kola Daisi University Ibadan, Oyo State", "Anchor University Ayobo Lagos State", "Dominican University Ibadan Oyo State", "Legacy University, Okija Anambra State", "Arthur Javis University Akpoyubo Cross river State", "Crown Hill University Eiyenkorin, Kwara State", "Coal City University Enugu State", "Clifford University Owerrinta Abia State", "Admiralty University, Ibusa Delta State", "Spiritan University, Nneochi Abia State", "Precious Cornerstone University, Oyo", "PAMO University of Medical Sciences, Portharcourt", "Atiba University Oyo", "Eko University of Medical and Health Sciences Ijanikin, Lagos", "Skyline University, Kano"];
        this.schools = this.schools.sort();
        this.state = {
            schools: this.schools,
            index: -1,
            text: '',
            loaded: true,
            id: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.schoolChange = this.schoolChange.bind(this);
    }
    componentDidMount (){
        SharedPreferences.clear();   
    }
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
     update(index){
       console.log(index);
     }
     handlePressedIn(index){
          this.props.navigation.navigate('Land', {id: index+1});
     }
    handleIn(index){
        this.setState({index}, () => {this.update(this.state.index)})
    }
     schoolChange(text){
         const schools = this.schools.filter(school => school.toUpperCase().includes(text.toUpperCase()));
         this.setState({
             schools,
         });
     }
     handleChange(text){
         this.setState({text}, () => {
             this.schoolChange(this.state.text)
         });
     }
    render() {
        const schools = this.state.schools.map((school, index) =>
            <TouchableNativeFeedback
                onPressIn = {() => this.handleIn(index)}
                onPress={() => this.handlePressedIn(index)}
                key={index}>
                <View style={ this.state.index == index ? styles.hover : styles.minis}>
                    <Text style={this.state.index == index ?styles.textHover: styles.text}>{school}</Text>
                </View></TouchableNativeFeedback>
        );
        
        const view = <TouchableNativeFeedback>
            <ScrollView overScrollMode={'never'} keyboardShouldPersistTaps='always'>{schools}</ScrollView></TouchableNativeFeedback>;
        const shadowOpt = {
            color: "#000",
            border: 12,
            opacity: '0.08',
            radius: 12,
            x: 0,
            y: 1,
        };
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#F2C490' translucent={true} barStyle='dark-content'/>
               <View style={styles.header}>
                    <HideWithKeyboard style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginLeft: 15,
                        marginRight: 15,
                        flexDirection: 'row'
                    }}><Text style={styles.headerLeft}>sẹlẹ</Text>
                        <Text style={styles.headerRight}>Select Institute</Text></HideWithKeyboard>
                </View><View style={styles.search}>
                    <View style={styles.subSearch}>
                        <MaterialIcons style={{
                        padding: 10,
                    }} name="search" size={30} color="#535461"/>
                        <TextInput placeholder="Search for your Institute"
                                   value={this.state.text}
                                   onChangeText={(text) => this.handleChange(text)}
                                   placeholderStyle={{fontSize: 16, fontFamily: 'mont'}}
                                   placeholderTextColor="#615D5D"
                                   underlineColorAndroid={'transparent'}
                                   style={{
                                       flex: 1,
                                       paddingTop: 10,
                                       paddingRight: 10,
                                       paddingBottom: 10,
                                       width: '65%',
                                       paddingLeft: 0,
                                       padding: 4,
                                       backgroundColor: '#fff',
                                       fontSize: 16, fontFamily: 'mont', color: '#615D5D',
                                   }}/></View>
                </View>
                <View style={{flex: 1}}>
                    {this.state.loaded ? <View style={{flex: 1}}>{view}</View>
                        :<ActivityIndicator animating={true} size='large' color="#E5AC6C"/>
                        }
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    minis: {
        width: '100%',
      //  height: '8.6%',
        backgroundColor: '#FDFDFD',
        borderColor: '#888584',
        borderBottomWidth: 0.5,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0.8,
        height: Dimensions.get('window').height * (8.6 / 100),
    },
    minis_first: {
        width: '100%',
        backgroundColor: '#FDFDFD',
        borderColor: '#888584',
        borderBottomWidth: 0.5,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * (8.6 / 100),
    },
    hover: {
        width: '100%',
        //  height: '8.6%',
        backgroundColor: '#EFB879',
        borderColor: '#888584',
        borderBottomWidth: 0.5,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0.8,
        height: Dimensions.get('window').height * (8.6 / 100),
    },
    textHover: {
        fontFamily: 'mont-semi',
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
    },
    text: {
        fontFamily: 'mont-medium',
        fontSize: 14,
        color: '#000',
        textAlign: 'center'
    },
    headerLeft: {
        fontFamily: 'mont-bold',
        fontSize: 34,
        color: '#fff',
        marginTop: '4%',
        letterSpacing: 0.7,
    },
    headerRight: {
        fontFamily: 'mont-semi',
        fontSize: 12,
        color: '#fff',
        marginTop: '9%',
        letterSpacing: 0.7,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '12%',
        backgroundColor: '#E5AC6C'
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDFDFD',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * (8 / 100),

    },
    subSearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDFDFD',
        marginLeft: 25,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
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