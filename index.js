import ReactDOM from 'react-dom/client';
import App from './src/App';
import React from 'react';

const elem = document.getElementById('root');

const heading = React.createElement('h1', { id: 'heading'}, 'Hello React 19');

const root = ReactDOM.createRoot(elem);

const jsxHeading = <h1 id='heading'>Hello World!</h1>;

// root.render(heading);
// heading and jsxHeading are the same, both gives you React elements

root.render(<App />);
