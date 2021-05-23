import { Container, Typography } from "@material-ui/core";
import React from "react";

import privacy from "./privacy.json";

function paragraph(list) {
  var text = "";
  var i;
  for (i = 0; i < list.length; i++) {
    text += list[i] + "\n";
  }
  return text;
}

export default function Privacy() {
  return (
    <Container>
      <Typography variant="h5">{privacy.title}</Typography>
      <Typography>{paragraph(privacy.content)}</Typography>
    </Container>
  );
}
