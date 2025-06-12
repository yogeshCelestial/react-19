import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import { FirstContextComponent } from "./hooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <FirstContextComponent>
        <App />,
      </FirstContextComponent>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
