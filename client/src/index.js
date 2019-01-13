import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { CookiesProvider } from 'react-cookie';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import Routes from './routes';

const store = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
    <Provider store={store(reducers)}>
        <CookiesProvider>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        </CookiesProvider>
    </Provider>
, document.getElementById('root'));
// Let's not have service worker for now, it's a bit buggy. I will work on it later! skip it for now
serviceWorker.unregister();