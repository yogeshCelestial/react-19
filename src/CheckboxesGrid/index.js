import * as React from "react";
import Box from "@mui/material/Box";
import { Checkbox, Divider, Grid, Typography } from "@mui/material";
import Row from "./Row";
import rows from "./users_data.json";
import { FixedSizeList } from "react-window";

function CheckBoxesGrid() {
  console.log("Parent Rendered ---------->");
  const [cbStatus, setCbStatus] = React.useState(new Array(10000).fill(false));
  const [topChecked, setTopChecked] = React.useState(false);

  const handleSelectAll = () => {
    console.log("Select All Clicked!");
    let status;
    if (!topChecked) {
      status = rows.map((r) => true);
    } else {
      status = new Array(10000).fill(false);
    }
    setCbStatus(status);
    setTopChecked(!topChecked);
  };

  const cbHandler = React.useCallback((index) => {
    console.log("Checkbox clicked!");
    setCbStatus((prevItems) => {
      const updated = [...prevItems];
      updated[index] = !prevItems[index];
      return updated;
    });
  }, []);

  const rowRenderer = ({ index, style }) => {
    const row = rows[index];
    return (
      <div style={style}>
        <Row
          key={row.id}
          row={row}
          cbHandler={cbHandler}
          status={cbStatus[index]}
          index={index}
        />
      </div>
    );
  };

  return (
    <Box width="100%">
      <h2>
        Open Console and Check Re-Rendering optimization while scrolling and
        clicking Checkboxes
      </h2>
      <Box width="50%">
        <Grid container spacing={2} direction="row" textAlign="center">
          <Grid container direction="column" size={2}>
            <Checkbox checked={topChecked} onChange={handleSelectAll} />
          </Grid>
          <Grid container direction="column" size={4}>
            <Typography fontWeight={600}>First Name</Typography>
          </Grid>
          <Grid container direction="column" size={4}>
            <Typography fontWeight={600}>Last Name</Typography>
          </Grid>
          <Grid container direction="column" size={2}>
            <Typography fontWeight={600}>Age</Typography>
          </Grid>
        </Grid>
        <Divider />
        <FixedSizeList
          width="100%"
          height={600}
          itemSize={35}
          itemCount={10000}
        >
          {rowRenderer}
        </FixedSizeList>
        <Divider />
      </Box>
    </Box>
  );
}

export default CheckBoxesGrid;
