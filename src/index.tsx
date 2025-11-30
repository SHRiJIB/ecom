import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';
import store from 'Stores/index';
import StripeProvider from 'Components/StripeElement/StripeElement';
import App from './App';

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					{/* <PersistGate persistor={persistor}> */}
					<StripeProvider>
						<App />
					</StripeProvider>
					{/* </PersistGate> */}
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	);
}
