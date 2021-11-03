import {createStore} from 'redux';
import allReducers from '../reducers';

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('skeleton-state', serializedState);
    } catch (e) {
        console.log(e);
    }
}

const loadLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('skeleton-state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadLocalStorage();

const store = createStore(
    allReducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;