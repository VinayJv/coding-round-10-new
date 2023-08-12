import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { DataWrapper } from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <DataWrapper>
        <App />
      </DataWrapper>
    </BrowserRouter>
  </React.StrictMode>
);