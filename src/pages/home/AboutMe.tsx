import { Grid, Div, Font, Flex, Span } from '@milibrary/mi-style';
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';
import React from 'react';
import { useTranslation } from 'react-i18next';

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