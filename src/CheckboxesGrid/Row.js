import { Checkbox, Divider, Grid } from "@mui/material";
import React from "react";

const Row = React.memo(
  (props) => {
    const { row, cbHandler, status, index } = props;
    console.log("Row ReRendered ----------------------->>");
    return (
      <React.Fragment>
        <Divider />
        <Grid container spacing={1} direction="row" textAlign="center">
          <Grid container direction="column" size={2}>
            <Checkbox
              checked={!!status}
              onChange={() => cbHandler(index)}
            />
          </Grid>
          <Grid container direction="column" size={4}>
            {row.first_name}
          </Grid>
          <Grid container direction="column" size={4}>
            {row.last_name}
          </Grid>
          <Grid container direction="column" size={2}>
            {row.age}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  });

export default Row;
