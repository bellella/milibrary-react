import { Div, Flex } from '@milibrary/mi-style';
import { Dragger } from '@milibrary/react-interaction';
import React from 'react';

const DragContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Dragger>
      {(({ content, box }) => (
        <Div position="relative" ref={box}>
          <Flex alignItems="center"
            gap={5} height="100%" flexWrap="nowrap"
            ref={content}>
            {children}
          </Flex>
        </Div>
      ))}
    </Dragger>
  );
}

export default DragContainer;