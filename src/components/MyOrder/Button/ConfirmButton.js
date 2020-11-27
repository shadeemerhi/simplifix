import React from "react";

import Fab from "@material-ui/core/Fab";
import BuildIcon from "@material-ui/icons/Build";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {  blue } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
  },
});

export default function OrderButton(props) {
 
  return (
    <ThemeProvider theme={theme}>
      <Fab variant="extended" color="primary" onClick={props.onclick}>
        <BuildIcon style={{ marginRight: "0.3em" }} />
        Confirm
      </Fab>
      </ThemeProvider>
  );
}
