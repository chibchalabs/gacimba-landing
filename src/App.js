import "typeface-roboto";
import React, { Fragment, img } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Footer from "../src/components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import logo from "./assets/logotextwhite.png";
import { theme } from "./themes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
}));

function TabContainer({ value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton href="/" edge="start" color="inherit" aria-label="menu">
            <img src={logo} className={classes.logo} alt="" />
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default function App() {
  const [light, setLight] = React.useState(true);
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <TabContainer value={0} />
              <Home />
              <Footer />
            </Fragment>
          )}
        />
        <Route
          exact
          path="/contacto"
          render={() => (
            <Fragment>
              <TabContainer value={1} />
              <Contact />
              <Footer />
            </Fragment>
          )}
        />
        <Route
          exact
          path="/politica-de-privacidad"
          render={() => (
            <Fragment>
              <TabContainer value={2} />
              <Privacy />
              <Footer />
            </Fragment>
          )}
        />
        <Route
          exact
          path="/terminos-y-condiciones"
          render={() => (
            <Fragment>
              <TabContainer value={3} />
              <Terms />
              <Footer />
            </Fragment>
          )}
        />
      </Router>
    </MuiThemeProvider>
  );
}
