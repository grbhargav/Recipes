import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecipeProvider } from './RecipeCreate'; // Correct the import path if needed

ReactDOM.render(
  <React.StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);