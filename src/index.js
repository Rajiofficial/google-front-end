import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'mdb-ui-kit/css/mdb.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='259846178726-jjdsbnhcbcvj6dndh9fdhofodku9srkh.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

