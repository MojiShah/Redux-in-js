const  redux = require('redux');
const createStore = redux.createStore;

const BUY_MOB = 'BUY_MOB';
function buyMob(){
    return{
        type:BUY_MOB,
        info:'first action'
    }
}

const initialState={
    numOfMobs:100
};

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case BUY_MOB :
            return{
                ...state,
                numOfMobs:state.numOfMobs-1
            };

        default:
            return state;
    }
}


const store = createStore(reducer);

console.log('Initial State is:',store.getState());

const unSubscribe = store.subscribe(()=>console.log('Updated state is :',store.getState()));

store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyMob());

unSubscribe();