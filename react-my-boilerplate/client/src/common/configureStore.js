import { createStore , applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Store from './store';
import createReducer from './reducers';

export default function configureStore (initialstate){
    const store = createStore(
        createReducer({}),
        applyMiddleware(thunkMiddleware),
    );

    Store(store)

    if(module.hot){
        //console.log("HOT")
        module.hot.accept('./reducers' ,()=>{
            console.log('hot accept')
            const nextReducer = require('./reducers/index')
            store.replaceReducer(nextReducer)
        })
    }
    return store
    
}