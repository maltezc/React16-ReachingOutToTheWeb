import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log(request);
    // can also edit before return
    return request; // Must always return
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

axios.interceptors.response.use(response => {
    console.log(response);
    // can also edit before return
    return response; // Must always return
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
