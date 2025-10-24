import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// Редирект для GitHub Pages
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  window.location.href = redirect;
}

root.render(
  <Router basename="/Myakija">
    <App />
  </Router>
);