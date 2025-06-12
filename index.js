import { RouterProvider } from "react-router-dom";
import router from './src/Router';
import ReactDOM from "react-dom/client";


const elem = document.getElementById('root');
const root = ReactDOM.createRoot(elem);

root.render(
    // adding future attributes to false to remove console warning
  <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} future={{ v7_startTransition: true, v7_normalizeFormMethod: true }} />
);
