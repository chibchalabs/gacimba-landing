import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Snapshot from "../../assets/snapshot.png";
import { white } from "material-ui/styles/colors";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 4, 8),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heroText: {
    color: white,
  },
  heroImage: {
    flex: 1,
    height: undefined,
    maxWidth: "100%",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Grid container alignItems="center" direction="row">
          <Grid item xs={12} md={7}>
            <div className={classes.heroContent}>
              <Container maxWidth="sm" direction="row" justify="center">
                <Typography
                  variant="h5"
                  align="center"
                  paragraph
                  className={classes.heroText}
                >
                  Bienvenido a la primera red social de memes de Colombia. Crea
                  tu cuenta y comparte tu contenido a miles de seguidores
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={3} justify="center">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        href="https://play.google.com/store/apps/details?id=com.chibchalabs.proyectomm"
                      >
                        DESCARGAR
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </Grid>
          <Grid container xs={12} md={5}>
            <img
              src={Snapshot}
              className={classes.heroImage}
              alt="Gacimba Snapshot"
            />
          </Grid>
        </Grid>
      </main>
    </Container>
  );
}
