import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import { FirstContextComponent } from "./hooks";
import ReducerComp from "./components/Reducer";
import Memo from "./components/Memo";
import WithFooterLayout from "./components/Footer";

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
  {
    path: "/useReducer",
    element: (
      <WithFooterLayout>
        <ReducerComp />
      </WithFooterLayout>
    ),
  },
  {
    path: "/useMemo",
    element: (
      <WithFooterLayout>
        <Memo />
      </WithFooterLayout>
    ),
  },
]);

export default router;
