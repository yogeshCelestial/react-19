import React from "react";
import { General, Shorthand } from "./components/Components";
import Counter from "./components/Counter";

// The App component is the main component of the application.
// We can consuder it as the root of react tree.
// It is a functional component that returns a JSX element.

// Placing a component inside another component is called composition.
const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Shorthand />
      <General />
      <Counter count={count} setCount={setCount} />
    </div>
  );
};

export default App;
