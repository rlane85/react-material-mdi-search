import React, { useState, useEffect } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  Slider,
  Collapse,
} from "@material-ui/core";
const themeObject = {
  palette: {
    type: "dark",
  },
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const {
    palette: { type },
  } = theme;

  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light",
      },
    };
    console.log(updatedTheme.palette.type);

    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

export const MuiThemeThing = (props) => {
  const [theme, toggleDarkMode] = useDarkMode();
  const themeConfig = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={themeConfig}>
      <Paper>
        <Button onClick={toggleDarkMode}>Change theme!</Button>
        <div>{props.children}</div>
      </Paper>
    </MuiThemeProvider>
  );
};
