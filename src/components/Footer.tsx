import { Div, Grid, Font, Span } from '@milibrary/mi-style';
import React, { Children } from 'react';
import { Container } from './mis/Container';
import { Link, NavLink } from 'react-router-dom';
import useThemePicker from 'hooks/useThemePicker';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { themeNames, changeTheme } = useThemePicker();
  const { t } = useTranslation();

  return (
    <Div background="secondary">
      <Container padding={[20, 0]}>
        <Grid column={{ desktop: 3, tablet: 2, mobile: 1 }} color="onSecondary">
          <div>
            <Font set="p1" mb={10} >THEMES</Font>
            {
              themeNames.map((theme, i) => (
                <FooterMenu onClick={() => changeTheme(i)}>{theme.name}</FooterMenu>
              ))
            }
          </div>
          <div>
            <Font set="p1" mb={10}>MENU</Font>
            <FooterMenu to="/">Home</FooterMenu>
            <FooterMenu to="/milibrary">Library</FooterMenu>
            <FooterMenu to="/example1">Example1</FooterMenu>
            <FooterMenu to="/example2">Example2</FooterMenu>
            <FooterMenu to="/example3">Example3</FooterMenu>
            <FooterMenu to="/example4">Example4</FooterMenu>
          </div>
          <div>
            <Font set="p1" mb={10} >SNS</Font>
            <FooterMenu target="_black" to="https://instagram.com/minaacoco?igshid=OGQ5ZDc2ODk2ZA==">Instagram<Span set="tooltip,tooltipLeft" ml={4}>Follow Me!</Span></FooterMenu>
            <FooterMenu target="_black" to="https://github.com/bellella">Github</FooterMenu>
            <FooterMenu target="_black" to="https://www.linkedin.com/in/%EB%AF%B8%EB%82%98-%EC%B5%9C-a04818180/">LinkedIn</FooterMenu>
          </div>
        </Grid>
        <Div padding={[30, 0, 5]}>
          <Font color="onSecondary" set="p3" textAlign="center" fontWeight={700}>{t('outro')}</Font>
        </Div>
      </Container>
    </Div>
  );
}

const FooterMenu = (props) => (<Font set="p3" mb={1} fontWeight={700}><Link {...props} /></Font>)

export default Footer;