const redux = require('redux');
const thunkMiddleware = require('redux-thunk');
const axios = require('axios');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const middleware = thunkMiddleware.thunk;

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });

const fetchDataSuccess = users => ({
    type: FETCH_DATA_SUCCESS,
    payload: users
});

const fetchDataFailure = err => ({
    type: FETCH_DATA_FAILURE,
    payload: err
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            };
        case FETCH_DATA_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            };

        default:
            return state;
    }
};

const fetchUsers = () =>{
    return function(dispatch){ 
        dispatch(fetchUsersRequest()); 
        axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users')
            .then(res => {
                const users = res.data;
                dispatch(fetchDataSuccess(users))
                console.log('Moji1');
            })
            .catch(err => {dispatch(fetchDataFailure(err.message))
                console.log('Moji3');
            })
    }
};


const store = createStore(reducer, applyMiddleware(middleware));
console.log('Moji2',store.getState());
// const unsubscribe = store.subscribe(() => console.log('Updated state is :',store.getState()) );
const unsubscribe = store.subscribe(() => {} );
store.dispatch(fetchUsers());
unsubscribe();