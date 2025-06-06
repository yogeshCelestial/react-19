import Counter from "./components/Counter";
import { createBrowserRouter, Link } from "react-router-dom";
import { General, Shorthand } from "./components/Components";
import DynamicRouteHanlder from "./components/DynamicRouteComp";
import DoubleDynamicHandler from "./components/DoubleDynamicComp";
import App from "./App";

export const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    Component: App,
  },
  {
    path: "/counter",
    Component: Counter,
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>About Page</h1>
        <Link to="/">Go to Home</Link>
      </div>
    ),
  },
  {
    path: "general",
    Component: General,
  },
  {
    path: "shorthand",
    Component: Shorthand,
  },
  {
    path: "/:routeParam",
    Component: DynamicRouteHanlder,
    children: [
      {
        // This is a nested route under the dynamic route - this will never be matched
        // because the parent route will always match first.
        path: "nested",
        element: (
          <div>
            <h1>Nested Route</h1>
            <Link to="/">Go to Home</Link>
          </div>
        ),
      },
    ],
  },
  {
    path: "/:routeParam1/:routeParam2",
    Component: DoubleDynamicHandler,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404 Not Found</h1>
        <Link to="/">Go to Home</Link>
      </div>
    ),
  },
]);
