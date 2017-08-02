import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Basic from './Basic/Basic.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Basic></Basic>
	, document.getElementById('root'));
registerServiceWorker();
