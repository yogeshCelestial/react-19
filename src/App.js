import React from "react";
import { General, Shorthand } from "./components/Components";
import Counter from "./components/Counter";
import DynamicRouteHanlder from "./components/DynamicRouteComp";
import DoubleDynamicHandler from "./components/DoubleDynamicComp";
import { Link } from "react-router-dom";

// The App component is the main component of the application.
// We can consuder it as the root of react tree.
// It is a functional component that returns a JSX element.

// Placing a component inside another component is called composition.
const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Pages:</h1>
      <ul>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/general'>General</Link></li>
        <li><Link to='/shorthand'>Shorthand</Link></li>
        <li><Link to='/this-is-dynamic'>Dynamic Param</Link></li>
        <li><Link to='/dynamic-one/dynamic-two'>Double Dynamic</Link></li>
        <li><Link to='/this/is/unhandled'>Unhandled</Link></li>

      </ul>
      <h1>Welcome to React Router v6.4 and React 19</h1>
      
    </div>
  );
};

export default App;
