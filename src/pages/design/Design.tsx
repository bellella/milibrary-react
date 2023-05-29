import React from 'react';
import Buttons from './Buttons';
import Colors from './Colors';
import Elevation from './Elevation';
import Typography from './Typography';
import { Container } from 'components/mis/Container';

const Design: React.FC = () => {
  return (
    <Container pt={30}>
      <Typography />
      <Colors />
      <Buttons />
      <Elevation />
    </Container>
  );
}

export default Design;