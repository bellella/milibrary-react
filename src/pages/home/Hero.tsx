import { Div, Font, Button, Flex } from '@milibrary/mi-style';
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';
import useAnimateShimmer from 'hooks/useAnimateShimmer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { refs } = useAnimateShimmer();
  const navigate = useNavigate();

  return (
    <Section>
      {Array(15).fill(null).map((_, i) => (
        <Div position="absolute"
          display={{ mobile: 'none' }}
          key={i} width="1rem" height="1rem"
          background={i % 2 === 0 ? 'onPrimary' : 'transparent'}
          borderRadius="100%"
          border="1px solid"
          borderColor="onPrimary"
          zIndex={99}
          ref={(el: HTMLElement) => (refs.current[i] = el)}></Div>
      ))
      }
      <Container position="relative" height="100vh">
        <Flex height="100%" alignItems="center">
          <Div position="absolute" right={0}>
            <Div opacity={0.4} position="absolute" background="onPrimary" borderRadius="100%" width="23rem" height="23rem" right={40} top={10} />
            <Font fontSize="24rem" color="secondary" textAlign="center" position="relative">❁</Font>
          </Div>
          <Div position="relative">
            <Font set="p2" color="accent" fontWeight={700}>{t('hi')}</Font>
            <Font set="h1">Mina Choi,<br />Full-stack<br />Developer</Font>
            <Font set="h5" mt={1} fontWeight={500}>based in Canada.</Font>
            <Button set="accent" mt={5} onClick={() => navigate('/milibrary')}>Mi library 💜</Button>
          </Div>
        </Flex>
      </Container>
    </Section>
  );
}

export default Hero;