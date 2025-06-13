import { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Box,
  TextField,
  Typography,
} from "@mui/material";

const Memo = () => {
  const [search, setSarch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://dummyjson.com/products/search?limit=200&q=${search}`
      );
      const data = await res.json();
      // only update state when there is a change in data
      if (JSON.stringify(data.products) !== JSON.stringify(products)) {
        setProducts(data.products);
      }
    }
    fetchData();
  }, [search]);

  // only run when products state changed - improve performace/avoid unnecesssory re-computations
  const sortedProductsByRating = useMemo(() => {
    console.log("Memo Running");
    const sorted = [...products];
    sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [products]);

  return (
    <Box>
      <Box>
        <TextField onChange={(e) => setSarch(e.target.value)} />
      </Box>
      <Box
        width="100%"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "stretch",
          flex: "5",
        }}
      >
        {sortedProductsByRating.map((prod) => (
          <Box
            key={prod.id}
            sx={{ flex: "1 1 300px", display: "flex", flexDirection: "column" }}
          >
            <Card sx={{ borderRadius: "6px" }}>
              <CardHeader title={prod.title} subheader={prod.brand} />
              <CardMedia
                component="img"
                height="200px"
                width="300px"
                image={prod.thumbnail}
                alt={prod.brand}
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {prod.description.slice(0, 50) + "..."}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Memo;
