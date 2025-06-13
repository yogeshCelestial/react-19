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
        <li>
          <Link to="/useReducer">useReducer</Link>
        </li>
        <li>
          <Link to="/useMemo">useMemo</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
