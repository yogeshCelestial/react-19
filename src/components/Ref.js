import { Box, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef(10);
  console.log(inputRef.current);

  setTimeout(() => {
    inputRef.current = 50;
  }, 2000);

  const handleClick = () => {
    console.log("Input Value", 
      inputRef.current,
      "Value already updated, but not updated in UI"
    );
    console.log(
      "input it not using react state, that's why it is uncontrolled."
    );
  };

  return (
    <Box>
      <h3>Click Button below and check input value in console</h3>
      <p>useRef does not trigger re-render/not update UI...</p>
      <TextField
        placeholder="useRef controlled input"
        ref={inputRef}
        value={inputRef.current}
      />
      <Button onClick={handleClick}>Click After 2 seconds</Button>
    </Box>
  );
};

export default UseRef;
