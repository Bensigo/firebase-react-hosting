import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {BrowserRouter as Router,
        Route,Link


} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';



ReactDOM.render(
       <Router>
                <App /> 
     </Router>,
                 document.getElementById('root'));
registerServiceWorker();

