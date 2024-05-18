const redux = require('redux');
const createStore = redux.createStore;

const BUY_MOB = 'BUY_MOB';
const BUY_TAB = 'BUY_TAB';

function buyMob() {
    return {
        type: BUY_MOB,
        info: 'first action'
    }
}

function buyTab() {
    return {
        type: BUY_TAB,
        info: 'second action'
    }
}

const initialState = {
    numOfMobs: 100,
    numOfTabs: 50
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_MOB:
            return {
                ...state,
                numOfMobs: state.numOfMobs - 1
            };
        case BUY_TAB:
            return {
                ...state,
                numOfTabs: state.numOfTabs - 1
            };

        default:
            return state;
    }
}


const store = createStore(reducer);

console.log('Initial State is:', store.getState());

const unSubscribe = store.subscribe(() => console.log('Updated state is :', store.getState()));

store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyMob());

store.dispatch(buyTab());
store.dispatch(buyTab());

unSubscribe();