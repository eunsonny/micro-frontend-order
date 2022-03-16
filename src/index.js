import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';

window.renderRestaurant = (containerId, navigate) => {
  ReactDOM.render(<App navigate={navigate} />, document.getElementById(containerId));
  unregister();
}

window.unmountRestaurant = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}
