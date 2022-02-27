import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

/*  ==== Credit & Packages Used: ====

Code implemented by Matthew Hawkins

Website design tutorial - Lama Dev: https://www.youtube.com/watch?v=hQjlM-8C4Ps
Sidebar Design Inspiration - BootstrapMade: https://bootstrapmade.com/demo/iPortfolio/

Packages:

= React Bootstrap
= EmailJS
= Material Icons
= Emotion


*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);