import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Div, Flex, Font, Img, Grid, Button, Span } from '@milibrary/mi-style';

import { Dragger, MiModal, MiModalInterface, MiModalRefInterface } from '@milibrary/react-interaction'
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';

const publicUrl = process.env.PUBLIC_URL;
const testUrl = 'https://stylenanda.com/web/product/medium/201904/324638da564d0c825510496b348da4d5.jpg'
const Example1: React.FC = () => {
  const modalRef = React.useRef<MiModalRefInterface>(null);
  const [s, ss] = React.useState<boolean>(false);
  const open = () => {
    ss(true);
    modalRef.current?.present();
  }
  const close = () => {
    modalRef.current?.dismiss();
  }
  return (
    <>
      <Container padding={['8rem', 0]}>
        <Font set="h2" color="secondary" fontWeight={800} mb={10}>New Cosmetics</Font>
        <Font set="p3" color="secondary" mb={3}>82 products</Font>
        <Grid column={{ desktop: 3, mobile: 2, tablet: 3 }} gap="2rem">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(m => (
            <Div backgroundColor="#fff" onClick={() => open()}>
              <Img src={testUrl} />
              <Div padding={3}>
                <Font set="p3" color="secondary" textTransform="uppercase">
                  Harleys In Hawaii
                </Font>
                <Flex gap={2} alignItems="center">
                  <div>
                    <FontAwesomeIcon icon={solid('star')} /><FontAwesomeIcon icon={solid('star')} />
                    <FontAwesomeIcon icon={solid('star')} />
                  </div>
                  <a>
                    <Font set="p4">
                      47 reviews
                    </Font>
                  </a>
                </Flex>
                <Font set="p3" mb={3}>
                  $24.00
                </Font>
              </Div>
            </Div>))
          }
        </Grid>
      </Container>
      <MiModal ref={modalRef} useDefaultStyle={false}>
        <Grid column={{ tablet: 2, desktop: 2 }} background="surface" padding="5rem">
          <Img src={testUrl} />
          <Div>
            <Font set="p3" color="secondary">
              home / kylie cosmetics / best sellers
            </Font>
            <Font set="h5" color="onPrimary" fontWeight={700} textTransform="uppercase">
              matte liquid eyeshadow
            </Font>
            <Font color="secondary" mt={1}>
              <FontAwesomeIcon icon={solid('star')} size="2x" /><FontAwesomeIcon icon={solid('star')} size="2x" />
              <FontAwesomeIcon icon={solid('star')} size="2x" />
            </Font>
            <Flex gap={2} margin={[3, 0]}>
              <Div background="#cb5c54" width="30px" height="30px" borderRadius="100%" />
              <Div background="#d68e88" width="30px" height="30px" borderRadius="100%" />
              <Div background="#9b385c" width="30px" height="30px" borderRadius="100%" />
            </Flex>
            <Font mt={6} set="p3" fontWeight={500}>
              say hello to effortless eyeshadow that stays put for up to 12 hours. my matte liquid eyeshadow is a cream-to-powder texture that delivers blurred, soft-matte color without transferring, creasing, or fading throughout the day. this easy to build and blend formula dries to a comfortable, streak-free result.
            </Font>
            <Button set="primary" width="100%" mt={10} onClick={() => close()}>Add to Cart (close)</Button>
          </Div>
        </Grid>
      </MiModal>
    </>
  );
}

export default Example1;