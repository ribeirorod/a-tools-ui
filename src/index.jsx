import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import to use 'react-dom/client'
import App from './App';
import ErrorBoundary from './common/components/ErrorBoundary';

import './output.css';  
import './index.css';
import './styles/variables.css';


const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render
root.render(
  <ErrorBoundary>
      <App />
  </ErrorBoundary>
);
