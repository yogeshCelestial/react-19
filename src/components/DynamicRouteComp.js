import { useParams } from "react-router-dom";

const DynamicRouteHanlder = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
    <h1>Dynamic Route is - {params.routeParam}</h1>
    </>
  );
};

export default DynamicRouteHanlder;
