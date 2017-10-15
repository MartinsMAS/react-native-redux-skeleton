import {createStore, applyMiddleware} from 'redux';
import getRootReducer from './reducers';
import thunk from 'redux-thunk';

export default function getStore(){
    return store = createStore(getRootReducer(), applyMiddleware(thunk));
}
