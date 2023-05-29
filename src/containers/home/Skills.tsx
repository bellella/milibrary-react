import { Animate } from '@milibrary/core';
import { Font, Grid, Div, Img } from '@milibrary/mi-style';
import { AnimationObserver, AnimationTarget } from '@milibrary/react-interaction';
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skills = t('skills', { returnObjects: true }) as { name: string, content: string }[];
  const images = ['/images/skills/react.png', '/images/skills/angular.png', '/images/skills/vue.png', '/images/skills/java.png', '/images/skills/node.png', '/images/skills/sass.png']
  if (!skills || !(skills instanceof Array)) {
    return null;
  }
  return (
    <AnimationObserver isOnce={true} threshold={[0.2]}>
      <Section padding={[20, 0]}>
        <Container position="relative">
          <Font set="sectionTitle" textAlign="center">My Skills</Font>
          <Grid column={{ tablet: 1, desktop: 'repeat(3, 300px)' }} mt={10} gap={10} justifyContent="center">
            {
              skills.map(({ name, content }, i) => (
                <AnimationTarget animation={i > 2 ? fromRight : fromLeft} fill="forwards"
                  delay={i > 2 ? 600 - i * 100 : i * 100}>
                  <Div set="card" padding={[15, 8, 8]} opacity={0}>
                    <Img src={publicUrl + images[i]} width="100px" height="100px" objectFit="contain" />
                    <Font set="p2" mb={1} fontWeight={700}>{name}</Font>
                    <Font set="p3" mb={3}>{content}</Font>
                  </Div>
                </AnimationTarget>
              ))
            }
          </Grid>
        </Container>
      </Section>
    </AnimationObserver>
  );
}

const publicUrl = process.env.PUBLIC_URL;

const fromLeft = Animate().setKeyframes([{ transform: 'translateX(-50%)', opacity: 0 },
{ opacity: 0.1 }, { transform: 'translateY(0)', opacity: 1 }])
  .setDuration(700).setFill('backwards').setEasing('cubic-bezier(0.250, 0.460, 0.450, 0.940)');

const fromRight = Animate().setKeyframes([{ transform: 'translateX(50%)', opacity: 0 },
{ opacity: 0.1 }, { transform: 'translateY(0)', opacity: 1 }])
  .setDuration(700).setEasing('cubic-bezier(0.250, 0.460, 0.450, 0.940)');

export default Skills;