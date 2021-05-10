import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import Store from './store';

// Entry point for the app. Renders the App.js component
ReactDOM.render(
    <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

