import {hot} from 'react-hot-loader'
import React from 'react'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import importedComponent from 'react-imported-component'
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import configureStore from '../common/configureStore';

import Home from './Home'
import Loading from './Loading'

// loading
const AsyncDynamicPage = importedComponent(
    ()=> import('./DynamicPage'),
    {
        LoadingComponent : Loading
    }
)

const AsyncNoMatch = importedComponent(
    ()=> import ('./NoMatch'),
    {
        LoadingComponent : Loading
    }
)


const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={(store)=>(<Home store={store} />)} />
                        <Route exact path="/dynamic" component={AsyncDynamicPage} />
                        <Route component={AsyncNoMatch} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}

export default hot(module)(App)