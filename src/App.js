import "typeface-roboto";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

import ToolBar from "../src/components/ToolBar";
import Footer from "../src/components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { theme } from "./themes";
import { Box, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: { maxHeight: 40 },
  grid: { flex: 1 },
}));

export default function App() {
  const [light, setLight] = React.useState(true);
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment className={classes.root}>
              <ToolBar />
              <Home />
              <Footer />
            </Fragment>
          )}
        />
        <Route
          exact
          path="/contacto"
          render={() => (
            <Box className={classes.root}>
              <ToolBar />
              <Contact />
              <Footer />
            </Box>
          )}
        />
        <Route
          exact
          path="/politica-de-privacidad"
          render={() => (
            <Box className={classes.root}>
              <ToolBar />
              <Privacy />
              <Footer />
            </Box>
          )}
        />
        <Route
          exact
          path="/terminos-y-condiciones"
          render={() => (
            <Box className={classes.root}>
              <ToolBar />
              <Terms />
              <Footer />
            </Box>
          )}
        />
      </Router>
    </MuiThemeProvider>
  );
}
