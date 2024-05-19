import { Animate } from '@milibrary/core';
import { Grid, Div, Font, Flex, Span } from '@milibrary/mi-style';
import { Animater, AnimationObserver, AnimationTarget } from '@milibrary/react-interaction';
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';
import React from 'react';
import { useTranslation } from 'react-i18next';

const fromLeft = Animate().setKeyframes([{ transform: 'translateX(-50%)', opacity: 0 },
{ opacity: 0.1 }, { transform: 'translateY(0)', opacity: 1 }])
  .setDuration(700).setFill('forwards').setEasing('cubic-bezier(0.250, 0.460, 0.450, 0.940)');
const move = Animate().setKeyframes([{ transform: 'translateX(-50%)' }, { transform: 'translateX(100%)' }]).setDuration(50000)

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section padding={[20, 0]}>
      <Container position="relative">
        <Grid column={{ mobile: 1, tablet: 1, desktop: 2 }} mt={10} gap={10}>
          <Div position="relative">
            <Font fontSize="20rem" color="accent" textAlign="center" fontFamily="Noto Emoji">🥳</Font>
          </Div>
          <div>
            <Font set="h3" fontWeight={800}>About Me</Font>
            <Flex gap={1.5}>
              <Span set="chips">Frontend</Span><Span set="chips">Backend</Span><Span set="chips">DevOps</Span><Span set="chips">Multilingual</Span><Span set="chips">ENFJ</Span>
            </Flex>
            <Font set="p3" mt={7} fontWeight={400} dangerouslySetInnerHTML={{ __html: t('intro') }}>
            </Font>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}

export default AboutMe;