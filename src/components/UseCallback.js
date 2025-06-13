import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useMemo, useState } from "react";

const UseCallbackComp = () => {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(1);
  console.log("Parent Component Rendered");

  // useMemo will not let create a new reference on every render for products
  const products = useMemo(
    () => [
      {
        id: 1,
        title: "This is First Product",
        description: "This is the description on First Product",
      },
      {
        id: 2,
        title: "This is Second Product",
        description: "This is the description on Second Product",
      },
      {
        id: 3,
        title: "This is Third Product",
        description: "This is the description on Third Product",
      },
    ],
    []
  );

  // useCallback doesn't let create a new function reference on every render
  const addToCart = useCallback((id) => {
    setCart((prev) => [...prev, id]);
  }, []);

  return (
    <Box>
      <h3>Open Console to check Re-Rendering</h3>
      <Button type="button" onClick={() => setCounter(counter + 1)}>
        Trigger Re-Render
      </Button>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {products.map((prd) => (
          <CardComp key={prd.id} product={prd} handler={addToCart} />
        ))}
      </Box>

      <h3> Cart Items: {cart.length}</h3>
    </Box>
  );
};

// React.memo ensures that component will not re-render until props changed
const CardComp = React.memo(({ product, handler }) => {
  console.log("Card Component Rendered");
  return (
    <Card>
      <CardHeader title={product.title} subheader={product.description} />
      <CardContent
        children={
          <Button type="button" onClick={() => handler(product.id)}>
            Add to Cart
          </Button>
        }
      />
    </Card>
  );
});

export default UseCallbackComp;
