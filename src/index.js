import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import Profile from '../src/components/profile/Profile';
import user from '../src/components/profile/user.json';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
