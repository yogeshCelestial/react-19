import { useParams } from "react-router-dom";

const DoubleDynamicHandler = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Dynamic param one is - {params.routeParam1}</h1>
      <h1>Dynamic param two is - {params.routeParam2}</h1>
    </>
  );
};

export default DoubleDynamicHandler;
