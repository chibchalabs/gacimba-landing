import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { white } from "material-ui/styles/colors";

const useStyles = makeStyles(() => ({
  root: { flex: 1 },
  title: {},
  content: {},
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={5}
      direction="column"
      className={classes.root}
    >
      <CssBaseline />
      <Grid item>
        <Typography variant="h3" component="h1">
          Contacto
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" component="h2">
          info@chibchalabs.com
        </Typography>
      </Grid>
    </Grid>
  );
}
