import React from "react";
import { General, Shorthand } from "./components/Components";
import Counter from "./components/Counter";
import { Route, Routes } from "react-router";
import DynamicRouteHanlder from "./components/DynamicRouteComp";
import DoubleDynamicHandler from "./components/DoubleDynamicComp";

// The App component is the main component of the application.
// We can consuder it as the root of react tree.
// It is a functional component that returns a JSX element.

// Placing a component inside another component is called composition.
const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <Routes>
      <Route path="/general" Component={General} />
      <Route path="/shorthand" Component={Shorthand} />
      <Route path="/" element={<Counter count={count} setCount={setCount} />}  />
      <Route path=":routeParam" Component={DynamicRouteHanlder} />
      <Route path=":routeParam1/:routeParam2" Component={DoubleDynamicHandler} />

    </Routes>
  );
};

export default App;
