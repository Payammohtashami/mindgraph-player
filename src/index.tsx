import React from 'react';
import ReactDOM from 'react-dom/client';

// providers

// components
import App from './App';

// styles
import './styles/index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);