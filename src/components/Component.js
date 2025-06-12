import { useContext } from "react";
import FirstContext from "./../hooks";

const Component = () => {
  const firstContext = useContext(FirstContext);
  const { newState } = firstContext;
  return <h1>{newState}!</h1>;
};

export default Component;
