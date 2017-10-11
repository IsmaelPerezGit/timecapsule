import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Store from './store';
import './index.css';

const StoreInstance = Store();

ReactDOM.render(
<Provider store={StoreInstance}>
  <App className="thebody"/>
</Provider>, document.getElementById('root'));
