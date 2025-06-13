import { Link } from "react-router-dom";
import Component from "./components/Component";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <p>This is a simple React application.</p>
      <p>Below Text is coming from a Context.</p>

      <Component />
      <Typography variant="h5">See Example of - </Typography>
      <ul>
        <h3>Hooks - </h3>
        <li>
          <Link to="/useReducer">useReducer</Link>
        </li>
        <li>
          <Link to="/useMemo">useMemo</Link>
        </li>
        <li>
          <Link to="/useCallback">useCallback & React.memo</Link>
        </li>
        <h3>React APIs</h3>
        <li>
          <Link to="/suspenseLazy">Suspense & Lazy</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
