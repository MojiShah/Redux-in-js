const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

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

const initialMobState = {
    numOfMobs: 100
};

const initialTabState = {
    numOfTabs: 50  
};


const MobReducer = (state = initialMobState, action) => {
    switch (action.type) {
        case BUY_MOB:
            return {
                ...state,
                numOfMobs: state.numOfMobs - 1
            };
        

        default:
            return state;
    }
}

const TabReducer = (state = initialTabState, action) => {
    switch (action.type) {
        case BUY_TAB:
            return {
                ...state,
                numOfTabs: state.numOfTabs - 1
            };

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    mob:MobReducer,
    tab:TabReducer
});

const store = createStore(rootReducer);

console.log('Initial State is:', store.getState());

const unSubscribe = store.subscribe(() => console.log('Updated state is :', store.getState()));

store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyMob());

store.dispatch(buyTab());
store.dispatch(buyTab());

unSubscribe();