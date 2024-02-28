import React from 'react';
import ReactDOM from 'react-dom/client';
import FunctionalOne from './FunctionalOne';
import ClassOne from './ClassOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FunctionalOne/>
    <ClassOne/>
  </React.StrictMode>
);

