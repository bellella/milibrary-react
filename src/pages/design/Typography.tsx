
import { Div, Font, Grid } from '@milibrary/mi-style';
import React from 'react';

const Typography: React.FC = () => {
  return (
    <Div pb={20}>
      <Font set="h3" mb={5} color="secondary">1. Typhography</Font>
      <Grid row={2} gap={5} >
        <Grid gap={5}>
          <Font set="h1">H1 Typhography</Font>
          <Font set="h2">H2 Typhography</Font>
          <Font set="h3">H3 Typhography</Font>
          <Font set="h4">H4 Typhography</Font>
          <Font set="h5">H5 Typhography</Font>
        </Grid>
        <Grid gap={5}>
          <Font set="p1">P1 Typhography</Font>
          <Font set="p2">P2 Typhography</Font>
          <Font set="p3">P3 Typhography</Font>
          <Font set="p4">P4 Typhography</Font>
          <Font set="p5">P5 Typhography</Font>
        </Grid>
      </Grid>
    </Div>
  );
}

export default Typography;