import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Slider from './Components/Slider';
// import banner from './data/data.json'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Slider />
  </React.StrictMode>,
  document.getElementById('root')
);

