import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import { FirstContextComponent } from "./hooks";
import ReducerComp from "./components/Reducer";
import Memo from "./components/Memo";
import WithFooterLayout from "./components/Footer";
import UseCallbackComp from "./components/UseCallback";
import SuspenseLazy from "./components/SuspenseLazy";
import UseRef from "./components/Ref";

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
    path: "/useRef",
    element: (
      <WithFooterLayout>
        <UseRef />
      </WithFooterLayout>
    ),
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
  {
    path: "/useCallback",
    element: (
      <WithFooterLayout>
        <UseCallbackComp />
      </WithFooterLayout>
    ),
  },
  {
    path: "/suspenseLazy",
    element: (
      <WithFooterLayout>
        <SuspenseLazy />
      </WithFooterLayout>
    ),
  },
]);

export default router;
