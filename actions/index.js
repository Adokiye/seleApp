import{TRUE_HOME, TRUE_BROWSE,
TRUE_CART, TRUE_MESSAGES,
TRUE_SERVICES, FALSE_BROWSE,
FALSE_CART, FALSE_HOME, FALSE_MESSAGES,CHANGE_NAME,ADD_CART,REMOVE_CART,
FALSE_GOODS, TRUE_GOODS, TRUE_LOGGEDIN,TRUE_SIGNEDIN, FALSE_LOGGEDIN, FALSE_SIGNEDIN,
FALSE_SERVICES} from "../constants/action-types";

export const trueHome = home => ({type:
    "TRUE_HOME", payload: home
});
export const addCart = newItem => ({type:
    "ADD_CART", payload: newItem
});
export const removeCart = newItem => ({type:
    "REMOVE_CART", payload: newItem
});
export const changeName = name => ({type:
    "CHANGE_NAME", payload: name
});
export const falseHome = home => ({type:
"FALSE_HOME", payload: home
});
export const trueGoods = goods => ({type:
    "TRUE_GOODS", payload: goods
});
export const falseGoods = goods => ({type:
"FALSE_GOODS", payload: goods
});
export const falseBrowse = browse =>({type:
    "FALSE_BROWSE", payload: browse
});
export const trueBrowse = browse => ({type:
"TRUE_BROWSE", payload: browse
});
export const trueMessages = messages => ({type:
"TRUE_MESSAGES", payload: messages
});
export const falseMessages = messages => ({type:
    "FALSE_MESSAGES", payload: messages
});
export const trueCart = cart => ({type:
"TRUE_CART", payload: cart
});
export const falseCart = cart => ({type:
    "FALSE_CART", payload: cart
});
export const trueServices = services => ({type:
"TRUE_SERVICES", payload: services
});
export const falseServices = services => ({type:
"FALSE_SERVICES", payload: services
});
export const trueLoggedIn = loggedIn => ({type:
    "TRUE_LOGGEDIN", payload: loggedIn
    });
export const falseLoggedIn = loggedIn => ({type:
    "FALSE_LOGGEDIN", payload: loggedIn
    });
    export const trueSignedIn = signedIn => ({type:
        "TRUE_SIGNEDIN", payload: signedIn
        });
    export const falseSignedIn = signedIn => ({type:
        "FALSE_SIGNEDIN", payload: signedIn
        });