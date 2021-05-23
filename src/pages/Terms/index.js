import { Container, Typography } from "@material-ui/core";
import React from "react";

import Terms from "./terms.json";

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
      <Typography variant="h5">{Terms.title}</Typography>
      <Typography>{paragraph(Terms.content)}</Typography>
    </Container>
  );
}
