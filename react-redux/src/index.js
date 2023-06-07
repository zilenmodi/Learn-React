/*

React is a libraey used to build user interfaces.

Redux is a library for managing state in predicatable way in javascript.

React-redux is library that provides bindings to use React and Redux.

Redux Structure - Cake Shop

1. Customer - Buy Cake
2. Shop - Stores cake on a shelf
3. Shopkeeper - Remove cake and give to customer

1. Component - Want state
2. Action - component <-dispatch-> reducer
3. Reducer - Define methods what to do
4. Store - Store state



----Core Concept----

A store that holds the state of your Application.

An action that describes the change in the state of application.

A reducer which actually carries out state transition depends on action.



----Core Principles----

The state of your whole application is stored in a single store. - initial state.

The only way to change the state is to emit an action, an object describes what happend - action.type and action.payload

To specify how to state tree transform by actions, write pure reducers



----Store Methods----

store.getState(): Returns the current state of the Redux store.

store.dispatch(action): Dispatches an action to the Redux store. The action is typically an object with a type property that describes the action, and may contain additional data as well.

store.subscribe(listener): Registers a listener function to be called whenever the state of the Redux store changes. The listener will be called with no arguments.

store.replaceReducer(nextReducer): Replaces the current reducer function of the store with a new one. This is typically used in conjunction with dynamic code loading or hot-reloading.

*/

// //Approch 1
// import redux from 'redux'

// const createStore = redux.createStore;

// function buyCake() {
//     return {
//         type: "BUY_CAKE",
//         info: 'First redux action'
//     }
// }

// function buyIceCream() {
//     return {
//         type: "BUY_ICE_CREAM",
//         info: 'Second redux action'
//     }
// }

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'BUY_CAKE':
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }

//         case 'BUY_ICE_CREAM':
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams - 1
//             }

//         default:
//             return state
//     }
// }

// const store = createStore(reducer)
// console.log('Initial State', store.getState());
// const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// unsubscribe()

// //Approch 2
// import redux from 'redux'
// import reduxLogger from 'redux-logger'

// const createStore = redux.createStore;
// const combineReducers = redux.combineReducers
// const logger = reduxLogger.createLogger()
// const applyMiddleware = redux.applyMiddleware

// function buyCake() {
//     return {
//         type: "BUY_CAKE",
//         info: 'First redux action'
//     }
// }

// function buyIceCream() {
//     return {
//         type: "BUY_ICE_CREAM",
//         info: 'Second redux action'
//     }
// }

// const initialCakeState = {
//     numOfCakes: 10,
// }

// const initialIceCreamState = {
//     numOfIceCreams: 20
// }

// const reducerCake = (state = initialCakeState, action) => {
//     switch (action.type) {
//         case 'BUY_CAKE':
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }

//         default:
//             return state
//     }
// }

// const reducerIceCream = (state = initialIceCreamState, action) => {
//     switch (action.type) {
//         case 'BUY_ICE_CREAM':
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams - 1
//             }

//         default:
//             return state
//     }
// }

// const rootReducer = combineReducers({
//     cake: reducerCake,
//     iceCream: reducerIceCream
// })

// const store = createStore(rootReducer, applyMiddleware(logger))
// console.log('Initial State', store.getState());
// const unsubscribe = store.subscribe(() => { })
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// unsubscribe()

import redux from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", storeAPI.getState());
  return result;
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => dispatch(fetchUsersSuccess(response.data)))
      .catch((error) => dispatch(fetchUsersFailure(error)));
  };
};

const store = createStore(
  reducer,
  applyMiddleware(loggerMiddleware, thunk.default)
);
store.subscribe(() => {});
store.dispatch(fetchUsers());
