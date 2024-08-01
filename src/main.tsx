import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.tsx';

import './assets/css/global.css';
import './assets/css/variables.css';
import './assets/css/app.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
