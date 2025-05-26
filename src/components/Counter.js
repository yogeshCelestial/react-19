import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handler = () => {
    setCount(count + 1);
  };

  // React will re-render the component when the state changes whether you use that in JSX or not.
  // However, React.memo, useMemo, and useCallback are used to optimize performance by preventing unnecessary re-renders.

  console.log("Counter Rendering =>", count);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => handler()}>TRIGGER</button>
    </div>
  );
};

export default Counter;
