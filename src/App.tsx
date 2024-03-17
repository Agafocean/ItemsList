import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/reducer';
import { Layout } from './shared/Layout/Layout';

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() { 
  return (
    <Provider store={store}>    
      <Layout />        
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);
