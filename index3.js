const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_MOB = 'BUY_MOB';
const BUY_TAB = 'BUY_TAB';

const initialMobState = {
    numOfMobs: 100
};

const initialTabState = {
    numOfTabs: 50
};

const buyMob = () => ({
    type: BUY_MOB,
    info: 'first action'
});

const buyTab = () => ({
    type: BUY_TAB,
    info: 'second action'
});

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
};

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
};

const rootReducer = combineReducers({
    tab: TabReducer,
    mob: MobReducer
});

const store = createStore(rootReducer,applyMiddleware(logger));

console.log('Initial State is:',store.getState());

const unSubscribe = store.subscribe(()=>{});

store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyMob());

store.dispatch(buyTab());
store.dispatch(buyTab());

unSubscribe();
