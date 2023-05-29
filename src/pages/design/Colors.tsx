
import { Div, Font, Grid } from '@milibrary/mi-style';
import React from 'react';

const Colors: React.FC = () => {
  return (
    <Div pb={20}>
      <Font set="h3" mb={5} color="secondary">2. Colors</Font>
      <Grid row={{ tablet: 3, desktop: 4 }} gap={5}>
        <Div background="primary" width="300px" height="150px">
          <Font set="p1" color="on-primary">primary</Font>
        </Div>
        <Div background="secondary" width="300px" height="150px">
          <Font set="p1" color="on-secondary">secondary</Font>
        </Div>
        <Div background="error" width="300px" height="150px">
          <Font set="p1" color="on-error">error</Font>
        </Div>
        <Div background="background" width="300px" height="150px">
          <Font set="p1" color="on-background">background</Font>
        </Div>

        <Div background="gray50" width="300px" height="150px">
          <Font set="p1" color="#191919">gray50</Font>
        </Div>
        <Div background="gray500" width="300px" height="150px">
          <Font set="p1" color="on-background">gray500</Font>
        </Div>

        <Div background="red50" width="300px" height="150px">
          <Font set="p1" color="#191919">red50</Font>
        </Div>
        <Div background="red500" width="300px" height="150px">
          <Font set="p1" color="on-background">red500</Font>
        </Div>

        <Div background="blue50" width="300px" height="150px">
          <Font set="p1" color="#191919">blue50</Font>
        </Div>
        <Div background="blue500" width="300px" height="150px">
          <Font set="p1" color="on-background">blue500</Font>
        </Div>

        <Div background="green50" width="300px" height="150px">
          <Font set="p1" color="#191919">green50</Font>
        </Div>
        <Div background="green500" width="300px" height="150px">
          <Font set="p1" color="#fff">green500</Font>
        </Div>
      </Grid>
    </Div>
  );
}

export default Colors;