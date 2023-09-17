import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewUni from './components/uni_create_page/NewUni';
import { BrowserRouter , Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
