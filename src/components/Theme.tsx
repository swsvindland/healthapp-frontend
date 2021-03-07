import React, { FC } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {},
});

const Theme: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
