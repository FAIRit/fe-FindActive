import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';
// import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
