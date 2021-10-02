import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import Profile from '../src/components/profile/Profile';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Profile />
  </React.StrictMode>,
  document.getElementById('root'),
);
