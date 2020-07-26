import React from "react";
import { ThemeContext } from "./theme-context";
import { Paper, Button } from "@material-ui/core";

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let themeContext = this.context;
    return (
      <Paper>
        <Button
          {...props}
          style={{ backgroundColor: themeContext.background }}
        />
      </Paper>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
