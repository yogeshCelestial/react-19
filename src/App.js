import Component from "./components/Component";
import Memo from "./components/Memo";
import ReducerComp from "./components/Reducer";

const App = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <p>This is a simple React application.</p>
      <Component />
      <ReducerComp />
      <Memo />
    </div>
  );
};

export default App;
