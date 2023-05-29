
import { Div, Font, Grid, Button } from '@milibrary/mi-style';
import React from 'react';

const Buttons: React.FC = () => {
  return (
    <Div pb={20}>
      <Font set="h3" mb={5} color="secondary">3. Buttons</Font>
      <Grid row={3} gap={5}>
        <Button set="primary">primary</Button>
        <Button set="secondary">secondary</Button>
        <Button set="error">error</Button>
        <Button set="primaryLined">primary lined</Button>
        <Button set="secondaryLined">secondary lined</Button>
        <Button set="errorLined">error</Button>
        <Button set="primary,large">primary</Button>
        <Button set="secondary,large">secondary</Button>
        <Button set="error,large">error</Button>
        <Button set="primaryLined,large">primary lined</Button>
        <Button set="secondaryLined,large">secondary lined</Button>
        <Button set="errorLined,large">error</Button>
      </Grid>
    </Div>
  );
}

export default Buttons;