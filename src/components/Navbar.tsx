import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { Div, Flex, Font, Img, Grid, Button, useMiTheme } from '@milibrary/mi-style';
import { themes } from '../theme';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from './mis/Container';
import { css } from '@emotion/css';
import useThemePicker from 'hooks/useThemePicker';


interface NavItemInterface {
  link: string;
  name: string;
}

const Navbar: React.FC = () => {
  const [showMobileNav, setShowMobileNav] = React.useState<boolean>(false);
  const { changeTheme, themeNames, themeIndex } = useThemePicker();
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setLang(lang);
    console.log(i18n.language)
  }

  const NavItem = React.memo<NavItemInterface>(({ link, name }) => (
    <Div padding={5} onClick={() => {
      setShowMobileNav(false);
    }}>
      <Link to={link}><Font set="p3">{name}</Font></Link>
    </Div>))

  const MobileNavItem = React.memo<NavItemInterface>(({ link, name }) => (
    <Div padding={5} borderBottom="1px solid" borderColor="onPrimary" onClick={() => {
      window.scrollTo(0, 0);
      setShowMobileNav(false);
    }}>
      <Link to={link}><Font set="p3">{name}</Font></Link>
    </Div>))

  const LangBtns = React.memo(() => (
    <>
      {['ko', 'en', 'jp'].map(l => (
        <Button padding={3}>
          <Font set="p3" color="onPrimary" fontWeight={l === lang ? 700 : 400} onClick={() => changeLang(l)} textTransform="uppercase">{l}</Font>
        </Button>
      ))}</>
  ))

  return (
    <>
      <Div className={backdropClass} position="fixed" display={{ mobile: 'none' }} width="100%" zIndex={101}>
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex color="onPrimary">
              <NavItem link="/" name="Home" />
              <NavItem link="/milibrary" name="Mi Library" />
              <NavItem link="/example1" name="example1" />
              <NavItem link="/example2" name="example2" />
              <NavItem link="/example3" name="example3" />
              <NavItem link="/example4" name="example4" />
            </Flex>
            <div>
              <LangBtns />
            </div>
          </Flex>
        </Container>
      </Div>
      <Div display={{ tablet: 'none', desktop: 'none' }}
        zIndex={101} width="100%"
        position="fixed"
        background="primary"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Button onClick={() => setShowMobileNav(show => !show)} color="onPrimary">
            <FontAwesomeIcon icon={solid('bars')} />
          </Button>
          <div>
            <LangBtns />
          </div>
        </Flex>
        <Div height={showMobileNav ? '100%' : '0'} width="100%" overflow="hidden" pr={3} pl={3}>
          <MobileNavItem link="/" name="Home" />
          <MobileNavItem link="/milibrary" name="Library" />
          <MobileNavItem link="/design" name="Design" />
          <MobileNavItem link="/example1" name="example1" />
          <MobileNavItem link="/example2" name="example2" />
          <MobileNavItem link="/example3" name="example3" />
          <MobileNavItem link="/example4" name="example4" />
        </Div>
      </Div>
      <Flex position="fixed" right="2rem" zIndex={100} top={50} gap={5} flexFlow="column">
        {
          themeNames.map((theme, i) => (
            <Div background={theme.color} width="1.5rem" height="1.5rem" borderRadius="100%"
              border="double"
              borderColor={themeIndex === i ? 'onPrimary' : 'transparent'}
              onClick={() => changeTheme(i)} />))
        }
      </Flex>
    </>
  );
}

const backdropClass = css`
  backdrop-filter: blur(10px);
`;


export default Navbar;