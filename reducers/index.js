import{TRUE_HOME, TRUE_BROWSE,
    TRUE_CART, TRUE_MESSAGES,
    TRUE_SERVICES, FALSE_BROWSE,
    TRUE_GOODS, FALSE_GOODS,
    FALSE_CART, FALSE_HOME, FALSE_MESSAGES,
    TRUE_LOGGEDIN, TRUE_SIGNEDIN, REMOVE_CART,
    FALSE_LOGGEDIN, FALSE_SIGNEDIN,ADD_CART,
    FALSE_SERVICES, CHANGE_NAME} from "../constants/action-types";
const initialState = {
    messages: false,
    home: true,
    browse: false,
    cart: false,
    services: false,
    goods: false,
    name: '',
    signedIn: false,
    loggedIn: false,
    cartItems: [{
        image: 'img/lappy.png',
        images: [],
        name: 'Hand Bag',
        amount: '100000',
        id: 4
    }]
};
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case REMOVE_CART: 
            return{
                ...state,
                cartItems: state.cartItems.filter((item, index) => index !== action.payload), 
            }
        case ADD_CART: 
        let index = state.cartItems.findIndex(cartItems => cartItems.id == action.payload.id);    
        if(index != -1){
            return state;
        }else{
        return{
               ...state,
               cartItems: [...state.cartItems, action.payload]
            };    
        }
        
        case CHANGE_NAME:
            return{
                ...state,
             name: action.name
            };
        case TRUE_HOME:
            return{
                ...state,
             home: true
            };
        case FALSE_HOME:
            return{
                ...state,
                home: false
            };
        case TRUE_GOODS:
            return{
                ...state,
             goods: true
            };
        case FALSE_GOODS:
            return{
                ...state,
                goods: false
            };   
        case TRUE_BROWSE:
            return{
                ...state,
                browse: true
            };
        case FALSE_BROWSE:
            return{
                ...state,
                browse: false
            };
        case TRUE_MESSAGES:
            return{
                ...state,
                messages: true
            };
        case FALSE_MESSAGES:
            return{
                ...state,
                messages: false
            };
        case TRUE_CART:
            return{
                ...state,
                cart: true
            };
        case FALSE_CART:
            return{
                ...state,
                cart: false
            };
        case TRUE_SERVICES:
            return{
                ...state,
                services: true
            };
        case FALSE_SERVICES:
            return{
                ...state,
                services: false
            };
            case TRUE_LOGGEDIN:
            return{
                ...state,
                loggedIn: true
            };
        case FALSE_LOGGEDIN:
            return{
                ...state,
                loggedIn: false
            };
            case TRUE_SIGNEDIN:
            return{
                ...state,
                signedIn: true
            };
        case FALSE_SIGNEDIN:
            return{
                ...state,
                signedIn: false
            };
        default:
            return state
    }
}
export default rootReducer;