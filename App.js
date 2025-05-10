import React from "react";
import { General, Shorthand } from "./src/components/Components";

// The App component is the main component of the application.
// We can consuder it as the root of react tree.
// It is a functional component that returns a JSX element.

// Placing a component inside another component is called composition.
const App = () => {
  return (
    <div>
      <Shorthand />
      <General />
    </div>
  );
};

export default App;
