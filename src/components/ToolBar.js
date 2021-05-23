import "typeface-roboto";
import React, { img } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../assets/logotextwhite.png";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { minHeight: "84px" },
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

export default function ToolBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Container>
          <Toolbar>
            <IconButton href="/" edge="start" color="inherit" aria-label="menu">
              <img src={logo} className={classes.logo} alt="" />
            </IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
