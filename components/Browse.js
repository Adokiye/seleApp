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

const dimensions = Dimensions.get('window');
const Height = (dimensions.height);
const Width = dimensions.width;
export default class Browse extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    componentDidMount(){
        const {params} = this.props.navigation.state;
        const rfu = params? params.rfu : '';
        this.setState({rfu:rfu})
    }
    constructor(props) {
        super(props)
        this.state = {
            one: false,
            two: false,
            three: false,
            four: false,
            goods: false,
            services: false, 
            rfu: []
        }
    }
    render() {
        
        const goods = {
            
        }
        const shadowNew = {
            width:  Dimensions.get('window').width * (85.56 / 100),
            height: 75,
            color: "#e2e2e2",
            border: 10,
            opacity: '0.05',
            radius: 20,
            marginRight: 20,
            x: 0,
            y: 5,
        };
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{height: 80-(StatusBar.currentHeight), backgroundColor: '#EFB879',
                width: '100%', flexDirection: 'row', alignItems: 'center',paddingLeft: '8%',
            marginBottom: '3.71%'}}>
            <TouchableNativeFeedback onPress={()=>
                this.setState({goods: false, services: false})}>
                <Text style={{fontFamily: this.state.goods===false && this.state.services ===false
                        ?'mont-medium': 'mont',color:
                        this.state.goods===false && this.state.services ===false ?'#fff':'#F7F2F2',
                    fontSize: 14, marginRight: '7%'}}>
                For you
            </Text>
            </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => this.setState({goods: true, services: false})}>
                    <Text style={{fontFamily:this.state.goods?'mont-medium': 'mont',
                        color: this.state.goods?'#fff':'#F7F2F2',
                        fontSize: 14,marginRight: '7%'}}>
                    Goods
                </Text></TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() =>
                    this.setState({goods: false, services: true})}>
                    <Text style={{fontFamily:this.state.services?'mont-medium': 'mont',
                        color: this.state.services?'#fff':'#F7F2F2',fontSize: 14}}>
                    Services
                </Text>
                </TouchableNativeFeedback>
            </View>
                <ScrollView keyboardShouldPersistTaps='always'
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}>
                    <Text style={{fontFamily: 'mont-medium',color: '#000',fontSize: 14,paddingLeft: '8%',
                marginBottom: 9}}>
                    Recommended for you
                </Text>
                {this.state.goods === false && this.state.services === false?
                    <View style={{width: '100%',height: 180, marginBottom: 20}}>
                    <TouchableNativeFeedback>
                        <ScrollView contentContainerstyle={{flexGrow:1,
                        flexDirection: 'row',}}  horizontal={true}
                                    keyboardShouldPersistTaps='always'
                                                         showsHorizontalScrollIndicator={false}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
                                <TouchableNativeFeedback
                                onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {
                                name: this.state.rfu[0].name,
                amount: this.state.rfu[0].amount,
                description: this.state.rfu[0].description,
                images: this.state.rfu[0].images,
                qty: this.state.rfu[0].quantity,
                id: this.state.rfu[0].id
                            })}
                                    onPressIn = {() => this.setState({one: !this.state.one,
                                    two: false,three: false,four: false})}>
                                    <View style={{height:180, flexDirection: 'column',justifyContent: 'space-evenly'}}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1,
                                height: 110,
                                        width: 150,
                                        marginRight: 10,
                                        borderTopRightRadius: 6,
                                        borderTopLeftRadius: 6,
                                        borderBottomLeftRadius: 6,
                                        borderBottomRightRadius: 6,
                                        backgroundColor: '#FAFAFA',
                                        borderWidth: 0.4,
                                        borderColor: '#DADADA',
                                        elevation: this.state.one? 4: 0}}
                                        source={{uri: 'http://10.0.2.2:8000/'+this.state.rfu[0].image.location_url}}/>
                                        <View style={{flexDirection: 'column'}}>
                                        <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                       paddingLeft: 10}}>
                                            {this.state.rfu[0].name}
                                        </Text>
                                        <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                        ,paddingLeft: 10}}>
                                            ₦{this.state.rfu[0].amount}
                                        </Text>
                                        </View>
                                    </View>
                                </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                            onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {
                                name: this.state.rfu[1].name,
                amount: this.state.rfu[1].amount,
                description: this.state.rfu[1].description,
                images: this.state.rfu[1].images,
                qty: this.state.rfu[1].quantity,
                id: this.state.rfu[1].id
                            })}
                                onPressIn = {() => this.setState({two: !this.state.two
                                ,one: false,three: false,four: false})}>
                                <View style={{height:180, flexDirection: 'column',justifyContent: 'space-evenly'}}>
                            <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1,
                            height: 110,
                                width: 150,
                                marginRight: 10,
                                borderTopRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                backgroundColor: '#FAFAFA',
                                borderWidth: 0.4,
                                borderColor: '#DADADA',
                                elevation: this.state.two?4:0}}
                                    source={{uri: 'http://10.0.2.2:8000/'+this.state.rfu[1].image.location_url}}/>
                                    <View style={{flexDirection: 'column'}}>
                                        <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                            paddingLeft: 10}}>
                                            {this.state.rfu[1].name}
                                        </Text>
                                        <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                            ,paddingLeft: 10}}>
                                            ₦{this.state.rfu[1].amount}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                            onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {
                                name: this.state.rfu[2].name,
                amount: this.state.rfu[2].amount,
                description: this.state.rfu[2].description,
                images: this.state.rfu[2].images,
                qty: this.state.rfu[2].quantity,
                id: this.state.rfu[2].id
                            })}
                                onPressIn = {() => this.setState({three: !this.state.three,
                                one: false, two: false, four: false})}>
                                <View style={{height:180, flexDirection: 'column',justifyContent: 'space-evenly'}}>
                            <Image  resizeMode="contain" style={{alignSelf: 'center',
                             flex: 1,
                             height: 110,
                                width: 150,
                                marginRight: 10,
                                borderTopRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                backgroundColor: '#FAFAFA',
                                borderWidth: 0.4,
                                borderColor: '#DADADA',
                                elevation: this.state.three?4:0}}
                                    source={{uri: 'http://10.0.2.2:8000/'+this.state.rfu[2].image.location_url}}/>
                                    <View style={{flexDirection: 'column'}}>
                                        <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                            paddingLeft: 10}}>
                                            {this.state.rfu[2].name}
                                        </Text>
                                        <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                            ,paddingLeft: 10}}>
                                            ₦{this.state.rfu[2].amount}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                            onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {
                                name: this.state.rfu[3].name,
                amount: this.state.rfu[3].amount,
                description: this.state.rfu[3].description,
                images: this.state.rfu[3].images,
                qty: this.state.rfu[3].quantity,
                id: this.state.rfu[3].id
                            })}
                                onPressIn = {() => this.setState({four: !this.state.four,
                                one: false,two: false,three: false})}>
                                <View style={{height:180, flexDirection: 'column',justifyContent: 'space-evenly'}}>
                            <Image  resizeMode="contain" style={{alignSelf: 'center', 
                            height: 110,
                                width: 150,
                                marginRight: 10,
                                borderTopRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                backgroundColor: '#FAFAFA',
                                borderWidth: 0.4,
                                borderColor: '#DADADA',
                                elevation: this.state.four?4:0,
                            flex: 1}}
                                    source={{uri: 'http://10.0.2.2:8000/'+this.state.rfu[3].image.location_url}}/>
                                    <View style={{flexDirection: 'column'}}>
                                        <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                            paddingLeft: 10}}>
                                            {this.state.rfu[3].name}
                                        </Text>
                                        <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                            ,paddingLeft: 10}}>
                                            ₦{this.state.rfu[3].amount}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                    </ScrollView>
                    </TouchableNativeFeedback>
                </View>: <View></View>}
                {this.state.goods?
                    <ScrollView keyboardShouldPersistTaps='always'
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1,
                        flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row',height: 180,width: '83.33%',
                        alignSelf: 'center', justifyContent: 'center'}}>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {})}>
                            <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-evenly'}}>
                            <View style={{height: Height*(17.19/100),
                                width: Width*(40/100),
                                marginRight: 10,
                                borderTopRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                backgroundColor: '#FAFAFA',
                                borderWidth: 0.4,
                                borderColor: '#DADADA',
                                elevation: 0}}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../headset.png')}/>
                            </View>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                        paddingLeft: 10}}>
                                        Headset
                                    </Text>
                                    <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                        ,paddingLeft: 10}}>
                                        ₦230,000.00
                                    </Text>
                                </View>
                            </View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {})}>
                            <View style={{height:180, flexDirection: 'column', justifyContent: 'space-evenly'}}>
                                <View style={{height: Height*(17.19/100),
                                    width: Width*(40/100),
                                    marginRight: 10,
                                    borderTopRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    backgroundColor: '#FAFAFA',
                                    borderWidth: 0.4,
                                    borderColor: '#DADADA',
                                    elevation: this.state.two?4:0}}>
                                    <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                            source={require('../case_.png')}/>
                                </View>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                        paddingLeft: 10}}>
                                        Headset
                                    </Text>
                                    <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                        ,paddingLeft: 10}}>
                                        ₦230,000.00
                                    </Text>
                                </View>
                            </View></TouchableNativeFeedback>
                    </View>
                        <View style={{flexDirection: 'row',height: 180,width: '83.33%',
                            alignSelf: 'center', justifyContent: 'center'}}>
                            <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {})}>
                            <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-evenly'}}>
                                <View style={{height: Height*(17.19/100),
                                    width: Width*(40/100),
                                    marginRight: 10,
                                    borderTopRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    backgroundColor: '#FAFAFA',
                                    borderWidth: 0.4,
                                    borderColor: '#DADADA',
                                    elevation: 0}}>
                                    <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                            source={require('../headset.png')}/>
                                </View>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                        paddingLeft: 10}}>
                                        Headset
                                    </Text>
                                    <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                        ,paddingLeft: 10}}>
                                        ₦230,000.00
                                    </Text>
                                </View>
                            </View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {})}>
                            <View style={{height: 180, flexDirection: 'column',
                                justifyContent: 'space-evenly'}}>
                                <View style={{height: Height*(17.19/100),
                                    width: Width*(40/100),
                                    marginRight: 10,
                                    borderTopRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    backgroundColor: '#FAFAFA',
                                    borderWidth: 0.4,
                                    borderColor: '#DADADA',
                                    elevation: this.state.two?4:0}}>
                                    <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                            source={require('../case_.png')}/>
                                </View>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                        paddingLeft: 10}}>
                                        Headset
                                    </Text>
                                    <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                        ,paddingLeft: 10}}>
                                        ₦230,000.00
                                    </Text>
                                </View>
                            </View></TouchableNativeFeedback>
                        </View><View style={{flexDirection: 'row',height: 180,width: '83.33%',
                        alignSelf: 'center', justifyContent: 'center'}}>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {})}>
                        <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-evenly'}}>
                            <View style={{height: Height*(17.19/100),
                                width: Width*(40/100),
                                marginRight: 10,
                                borderTopRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                backgroundColor: '#FAFAFA',
                                borderWidth: 0.4,
                                borderColor: '#DADADA',
                                elevation: 0}}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../headset.png')}/>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                    paddingLeft: 10}}>
                                    Headset
                                </Text>
                                <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                    ,paddingLeft: 10}}>
                                    ₦230,000.00
                                </Text>
                            </View>
                        </View></TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ProductDetail', {})}>
                        <View style={{height: 180, flexDirection: 'column',justifyContent: 'space-evenly'}}>
                            <View style={{height: Height*(17.19/100),
                                width: Width*(40/100),
                                marginRight: 10,
                                borderTopRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                backgroundColor: '#FAFAFA',
                                borderWidth: 0.4,
                                borderColor: '#DADADA',
                                elevation: this.state.two?4:0}}>
                                <Image  resizeMode="contain" style={{alignSelf: 'center', flex: 1}}
                                        source={require('../case_.png')}/>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontFamily: 'mont-semi',fontSize: 12,color: '#615d5d',
                                    paddingLeft: 10}}>
                                    Headset
                                </Text>
                                <Text style={{fontFamily: 'mont-medium',color: '#615d5d',fontSize: 8
                                    ,paddingLeft: 10}}>
                                    ₦230,000.00
                                </Text>
                            </View>
                        </View></TouchableNativeFeedback>
                    </View>
                    </View>
                    </ScrollView>:
                    <ScrollView keyboardShouldPersistTaps='always'
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ServiceDetail', {})}>
                        <View style={{marginBottom: 17,
                            borderTopRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            width: '85.56%',alignSelf: 'center',elevation: 1,
                            height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                            paddingBottom: 10,paddingRight: '2%',
                            backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                            paddingLeft: '4.87%' }}>
                            <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                                Design a wordpress website for my catering service{'\n'}
                            </Text>
                            <View style={{flexDirection: 'row', width: '100%',
                                height: 20,alignSelf: 'center',flexWrap: 'wrap',
                                alignItems: 'flex-start', justifyContent: 'space-between'}}>
                                <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                                    marginRight: '2%'}}>
                                    ₦30,000.00 - ₦40,000.00</Text>
                                <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                    <View
                                        style={styles.unselected}>
                                    </View>
                                </View>
                                <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                                    8 Bids
                                </Text>
                                <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                    <View
                                        style={styles.unselected}>
                                    </View>
                                </View>
                                <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                                    3 Days
                                </Text>
                            </View>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ServiceDetail', {})}>
                        <View style={{marginBottom: 17,
                            borderTopRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            width: '85.56%',alignSelf: 'center',elevation: 1,
                            height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                            paddingBottom: 10,paddingRight: '2%',
                            backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                            paddingLeft: '4.87%' }}>
                            <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                                Design a wordpress website for my catering service{'\n'}
                            </Text>
                            <View style={{flexDirection: 'row', width: '100%',
                                height: 20,alignSelf: 'center',flexWrap: 'wrap',
                                alignItems: 'flex-start', justifyContent: 'space-between'}}>
                                <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                                    marginRight: '2%'}}>
                                    ₦30,000.00 - ₦40,000.00</Text>
                                <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                    <View
                                        style={styles.unselected}>
                                    </View>
                                </View>
                                <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                                    8 Bids
                                </Text>
                                <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                    <View
                                        style={styles.unselected}>
                                    </View>
                                </View>
                                <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                                    3 Days
                                </Text>
                            </View>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ServiceDetail', {})}>
                        <View style={{marginBottom: 17,
                            borderTopRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            width: '85.56%',alignSelf: 'center',elevation: 1,
                            height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                            paddingBottom: 10,paddingRight: '2%',
                            backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                            paddingLeft: '4.87%' }}>
                            <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                                Design a wordpress website for my catering service{'\n'}
                            </Text>
                            <View style={{flexDirection: 'row', width: '100%',
                                height: 20,alignSelf: 'center',flexWrap: 'wrap',
                                alignItems: 'flex-start', justifyContent: 'space-between'}}>
                                <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                                    marginRight: '2%'}}>
                                    ₦30,000.00 - ₦40,000.00</Text>
                                <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                    <View
                                        style={styles.unselected}>
                                    </View>
                                </View>
                                <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                                    8 Bids
                                </Text>
                                <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                    <View
                                        style={styles.unselected}>
                                    </View>
                                </View>
                                <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                                    3 Days
                                </Text>
                            </View>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ServiceDetail', {})}>
                        <View style={{marginBottom: 17,
                            borderTopRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            width: '85.56%',alignSelf: 'center',elevation: 1,
                            height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                            paddingBottom: 10,paddingRight: '2%',
                            backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                            paddingLeft: '4.87%' }}>
                            <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                                Design a wordpress website for my catering service{'\n'}
                            </Text>
                            <View style={{flexDirection: 'row', width: '100%',
                                height: 20,alignSelf: 'center',flexWrap: 'wrap',
                                alignItems: 'flex-start', justifyContent: 'space-between'}}>
                                <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                                    marginRight: '2%'}}>
                                    ₦30,000.00 - ₦40,000.00</Text>
                                <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                    <View
                                        style={styles.unselected}>
                                    </View>
                                </View>
                                <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                                    8 Bids
                                </Text>
                                <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                    <View
                                        style={styles.unselected}>
                                    </View>
                                </View>
                                <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                                    3 Days
                                </Text>
                            </View>
                        </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ServiceDetail', {})}>
                    <View style={{marginBottom: 17,
                        borderTopRightRadius: 3,
                        borderTopLeftRadius: 3,
                        borderBottomLeftRadius: 3,
                        borderBottomRightRadius: 3,
                        width: '85.56%',alignSelf: 'center',elevation: 1,
                        height: 80,flexDirection: 'column',alignItems: 'center',paddingTop: 10,
                        paddingBottom: 10,paddingRight: '2%',
                        backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                        paddingLeft: '4.87%' }}>
                        <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                            Design a wordpress website for my catering service{'\n'}
                        </Text>
                        <View style={{flexDirection: 'row', width: '100%',
                            height: 20,alignSelf: 'center',flexWrap: 'wrap',
                        alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                            <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                <View
                                    style={styles.unselected}>
                                </View>
                            </View>
                            <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                                8 Bids
                            </Text>
                            <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                                <View
                                    style={styles.unselected}>
                                </View>
                            </View>
                            <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                                3 Days
                            </Text>
                        </View>
                    </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',
                    alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',
                        alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() =>
                            this.props.navigation.navigate('ServiceDetail', {})}>
                <View style={{marginBottom: 17,
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    width: '85.56%',alignSelf: 'center',elevation: 1,
                    height: 80,flexDirection: 'column',
                    alignItems: 'center',paddingTop: 10,
                    paddingBottom: 10,paddingRight: '2%',
                    backgroundColor: '#fdfdfd', justifyContent: 'space-evenly',
                    paddingLeft: '4.87%' }}>
                    <Text style={{color: '#EFCB71',fontFamily: 'mont',fontSize: 14,alignSelf: 'center'}}>
                        Design a wordpress website for my catering service{'\n'}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%',
                        height: 20,alignSelf: 'center',
                        alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'mont-semi',color: '#333333',fontSize: 12,
                            marginRight: '2%'}}>
                            ₦30,000.00 - ₦40,000.00</Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10,marginRight: '3%'}}>
                            8 Bids
                        </Text>
                        <View style={{alignSelf: 'center',marginRight: '2%',justifyContent: 'center',alignItems: 'center'}}>
                            <View
                                style={styles.unselected}>
                            </View>
                        </View>
                        <Text style={{fontFamily: 'mont',color: '#615D5D',fontSize: 10}}>
                            3 Days
                        </Text>
                    </View>
                </View>
                        </TouchableNativeFeedback>
                </ScrollView>}</ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    unselected: {
        width: 5, height: 5, borderRadius: 5 / 2, backgroundColor: '#DADADA',
    },
    footer: {
        height: 56,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 28,
        paddingRight: 28
    },
    miniPictures: {

    },
    minicats: {
        height: 120,
        width: 130,
        marginRight: 10,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: '#Fff',
        borderWidth: 0.4,
        borderColor: '#d1d1d1',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    miniKitchen: {
        height: 120,
        width: 130,
        marginRight: 10,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: '#F2C490',
        borderWidth: 0.4,
        borderColor: '#d1d1d1',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    miniCatsPress: {
        height: 120,
        width: 130,
        marginRight: 10,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: '#Fff',
        borderWidth: 0.4,
        borderColor: '#d1d1d1',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
});