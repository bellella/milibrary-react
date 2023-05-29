import { Div } from '@milibrary/mi-style';
import React from 'react';

const Shimmer: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  return (
    <Div position="absolute">
      {element}
    </Div>
  );
}

export default Shimmer;