
import { Div, Font, Grid } from '@milibrary/mi-style';
import React from 'react';

const Elevation: React.FC = () => {
  return (
    <Div pb={20}>
      <Font set="h3" mb={5} color="secondary">4. Elevation</Font>
      <Grid row={3} gap={5}>
        <Div padding={5} background="surface" set="level1" width="300px" borderRadius={2}>
          <Font color="on-surface">level1</Font>
        </Div>
        <Div padding={5} background="surface" set="level2" width="300px" borderRadius={2}>
          <Font color="on-surface">level2</Font>
        </Div>
        <Div padding={5} background="surface" set="level3" width="300px" borderRadius={2}>
          <Font color="on-surface">level3</Font>
        </Div>
      </Grid>
    </Div>
  );
}

export default Elevation;