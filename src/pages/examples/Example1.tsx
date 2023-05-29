import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Div, Flex, Font, Img, Grid, Button, Span } from '@milibrary/mi-style';

import { Dragger } from '@milibrary/react-interaction'
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';

const publicUrl = process.env.PUBLIC_URL;
const Example1: React.FC = () => {
  return (
    <>
      <Div padding={['8rem', 0]}>
        <Div zIndex={100} padding={[6, 3]} position="fixed" width="100%" bottom={0} background="secondary" color="onSecondary">
          <Container>
            <Flex gap={10} alignItems="center">
              <Flex gap={5}>
                <FontAwesomeIcon icon={solid('backward')} size="2x" />
                <FontAwesomeIcon icon={solid('play')} size="2x" />
                <FontAwesomeIcon icon={solid('forward')} size="2x" />
              </Flex>
              <Font set="p3">0:00 / 4:03</Font>
            </Flex>
          </Container>
        </Div>
        <Container>
          <Font set="h2" color="accent" fontWeight={800}>New Albums</Font>
          <Dragger>
            {(({ content, box }) => (
              <Div position="relative" ref={box}>
                <Flex alignItems="center"
                  gap={5} height="100%" flexWrap="nowrap" pt={15} pb={15}
                  ref={content}>
                  {[1, 2, 3, 4].map(key => (
                    <Div position="relative" flexShrink={0} width="20rem">
                      <Span set="tooltip,tooltipBottom" position="absolute" top={-5} left={3}>HOT</Span>
                      <Img height="20rem" src="https://resources.tidal.com/images/82ca9adf/d6a0/467c/b4a4/1ab3f81b24c7/640x640.jpg" objectFit="cover" />
                    </Div>
                  ))}
                </Flex>
              </Div>
            ))}
          </Dragger>
        </Container>
        <Container>
          <Font set="h2" color="accent" fontWeight={800} mb={10}>Cover & Remix</Font>
          <Grid column={{ mobile: 2, tablet: 2, desktop: 3 }} gap={3}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(m => (<Flex gap={4}>
              <Img width="50px" height="50px" src="https://resources.tidal.com/images/82ca9adf/d6a0/467c/b4a4/1ab3f81b24c7/640x640.jpg" />
              <div>
                <Font set="p3" color="secondary" fontWeight={700} textTransform="uppercase">
                  Harleys In Hawaii
                </Font>
                <Font set="p3" mb={3}>
                  Katy Perry Harleys In Hawaii
                </Font>
              </div>
            </Flex>))
            }
          </Grid>
        </Container>
        <Container padding={['10rem', 0]}>
          <Font set="h2" color="accent" fontWeight={800} mb={10}>Cover & Remix</Font>
          <Grid column={{ mobile: 2, tablet: 3, desktop: 4 }} gap={5}>
            {[1, 2, 3, 4].map(m => (
              <div>
                <Img width="100%" objectFit="cover" src="https://resources.tidal.com/images/82ca9adf/d6a0/467c/b4a4/1ab3f81b24c7/640x640.jpg" />
                <Font set="p3" color="secondary" fontWeight={700} textTransform="uppercase" mt={3}>
                  Harleys In Hawaii
                </Font>
                <Font set="p3" mb={3}>
                  Katy Perry Harleys In Hawaii
                </Font>
              </div>
            ))}
          </Grid>
        </Container>
        <Container pb="10rem">
          <Font set="h2" color="accent" fontWeight={800} mb={10}>Genres</Font>
          <Flex gap={3} flexWrap="wrap">
            <Button set="secondary">EDM</Button><Button set="secondary">EDM</Button>
            <Button set="secondary">JAZZ</Button><Button set="secondary">EDM</Button>
            <Button set="secondary">K-pop</Button><Button set="secondary">EDM</Button>
            <Button set="secondary">J-pop</Button><Button set="secondary">EDM</Button>
            <Button set="secondary">C-pop</Button><Button set="secondary">EDM</Button>
            <Button set="secondary">Rock</Button><Button set="secondary">EDM</Button>
            <Button set="secondary">Tick tock</Button><Button set="secondary">EDM</Button>
            <Button set="secondary">J-pop</Button><Button set="secondary">EDM</Button>
            <Button set="secondary">C-pop</Button><Button set="secondary">EDM</Button>
            <Button set="secondary">Rock</Button><Button set="secondary">EDM</Button>
            <Button set="secondary">Tick tock</Button><Button set="secondary">EDM</Button>
          </Flex>
        </Container>
        <Container position="relative">
          <Font set="h2" color="accent" fontWeight={800} mb={10}>Memberships</Font>
          <Flex flexFlow="column" justifyContent="center" height="100%" position="relative">
            <Grid column={{ mobile: 1, tablet: 2, desktop: 3 }} gap={6} mt={10}>
              {
                ['card1', 'card2', 'card3'].map((key, i) => (
                  <Div key={key} borderRadius={4} background="surface" padding={10}>
                    <Div borderBottom="1px solid" borderColor="accent" pb={5} mb={5}>
                      <Font set="h4" fontWeight="700" color="onSurface">FREE</Font>
                      <Font set="p1" color="onSurface">$00.00</Font>
                    </Div>
                    <Font set="p1" color="accent" mb={5}>Membership {i + 1}</Font>
                    <Font set="p2" color="onSurface" mb={10}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus quidem sunt delectus? Blanditiis porro, quas vel sed.</Font>
                    <Button set="primary,medium">I like this plan</Button>
                  </Div>
                ))
              }
            </Grid>
          </Flex>
        </Container>
      </Div>
      <Div background="#5F0FC5" padding={['5rem', 0]}>
        <Container position="relative">
          <Flex alignItems="center" flexFlow="column">
            <Font set="h2" fontWeight={700} color="white" mb={5} textAlign="center">Subscribe now!</Font>
            <Font set="h5" color="white" mb={10} textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, recusandae!</Font>
          </Flex>
        </Container>
      </Div>
    </>
  );
}

export default Example1;