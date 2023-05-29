
import React, { useEffect } from 'react';
import { Input, Div, Flex, Font, Img, Grid, Span, Button } from '@milibrary/mi-style';
import { AnimationObserver, AnimationTarget, Animater, MiModal } from '@milibrary/react-interaction';
import { Animate, AnimateInterface, Loading, Modal, Toast } from '@milibrary/core';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';

const fromLeft = Animate().setKeyframes([{ transform: 'translateX(-50%)', opacity: 0 },
{ opacity: 0.1 }, { transform: 'translateY(0)', opacity: 1 }])
  .setDuration(700).setFill('backwards').setEasing('cubic-bezier(0.250, 0.460, 0.450, 0.940)');
const fromRight = Animate().setKeyframes([{ transform: 'translateX(50%)', opacity: 0 },
{ opacity: 0.1 }, { transform: 'translateY(0)', opacity: 1 }])
  .setDuration(700).setEasing('cubic-bezier(0.250, 0.460, 0.450, 0.940)');

const publicUrl = process.env.PUBLIC_URL;

const innerWidth = window.innerWidth - 50;
const innerHeight = window.innerHeight - 50;
const moveForever = (ani: AnimateInterface, x: number = 0, y: number = 0, scale = 1) => {
  const nextX = Math.max(100, Math.min(((Math.random() * 500 - 250)) + x, innerWidth));
  const nextY = Math.max(100, Math.min(((Math.random() * 500 - 250)) + y, innerHeight));
  const newScale = Math.random() * 3.5 + 0.5;
  const duration = Math.random() * 2500 + 2500;
  ani.setKeyframes([{ transform: `translate(${x}px, ${y}px) scale(${scale})` },
  { transform: `translate(${nextX}px, ${nextY}px) scale(${newScale})` }])
    .setDuration(duration)
    .play().then(() => {
      moveForever(ani, nextX, nextY, newScale);
    });
}
const Fourth: React.FC = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);
  const refs = React.useRef<HTMLElement[]>([]);
  const modalRef = React.useRef<any>([]);
  const { t, i18n } = useTranslation();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  useEffect(() => {
    if (refs.current && refs.current.length) {
      refs.current.forEach((r, i) => {
        moveForever(Animate().addElement(r)
          .setFill('forwards')
          , i * 100, (Math.random() * 900)
        )
          ;
      })
    }
  }, [refs.current]);

  useEffect(() => {
  }, []);

  return (
    <Div>
      {Array(20).fill(null).map((_, i) => (
        <Div position="absolute"
          key={i} width={6} height={6}
          background={i % 2 == 0 ? 'onPrimary' : 'transparent'}
          borderRadius="100%"
          border="1px solid"
          borderColor="onPrimary"
          zIndex={99}
          ref={(el: HTMLElement) => (refs.current[i] = el)}></Div>
      ))
      }
      <Section>
        <Container position="relative" height="100vh">
          <Grid column={{ mobile: 1, desktop: 2 }} height="100%" alignItems="center">
            <div>
              <Font set="p2" color="secondary" fontWeight={700}>{t('hi')}</Font>
              <Font set="h1">Mina Choi,<br />Frontend Alchemist</Font>
              <Font set="h5" mt={1} fontWeight={500}>based in Korea.</Font>
              <Button set="primary" mt={5}>Mi library 💜</Button>
            </div>
            <div>
              <Font fontSize="24rem" color="onSecondary" textAlign="center">❁</Font>
              {/* <img src={publicUrl + '/images/3d/coffee.png'} alt="" /> ♬ */}

            </div>
          </Grid>
        </Container>
      </Section>
      <AnimationObserver isOnce={true}>
        <Section padding={[20, 0]}>
          <Container position="relative">
            <Grid column={{ mobile: 1, desktop: 2 }} mt={10} gap={10}>
              <AnimationTarget className="fadeIn">
                <Div opacity={0}>
                  <img src="https://rstheme.com/products/wordpress/swipy/wp-content/uploads/2022/05/8.png" alt="" />
                </Div>
              </AnimationTarget>
              <div>
                <Font set="h3" fontWeight={800}>About Me</Font>
                <Flex gap={1.5}>
                  <Span set="chips">Frontend</Span><Span set="chips">Backend</Span><Span set="chips">3개국어</Span><Span set="chips">ENFJ</Span>
                </Flex>
                <Font set="p3" mt={7} fontWeight={400} dangerouslySetInnerHTML={{ __html: t('intro') }}>
                </Font>
              </div>
            </Grid>
          </Container>
        </Section>
      </AnimationObserver>
      <AnimationObserver isOnce={true}>
        <Section padding={[20, 0]}>
          <Container position="relative">
            <Font set="sectionTitle" textAlign="center">My Skills</Font>
            <Grid column={{ tablet: 1, desktop: 'repeat(3, 300px)' }} mt={10} gap={10} justifyContent="center">
              <AnimationTarget animation={fromLeft} fill="forwards">
                <Div set="card" padding={[15, 8, 8]} opacity={0} >
                  <Img src={publicUrl + '/images/skills/react.png'} width="100px" height="100px" objectFit="contain" />
                  <Font set="p2" mb={1} fontWeight={700}>React</Font>
                  <Font set="p3" mb={3} color="on-surface">현재 가장 많이 이용하고 있고 Ionic 프레임워크와의 서비스 경험이 있어요. React UI 라이브러리를 제작 중에 있습니다.</Font>
                </Div>
              </AnimationTarget>
              <AnimationTarget animation={fromLeft} fill="forwards" delay={.3}>
                <Div set="card" padding={[15, 8, 8]} opacity={0}>
                  <Img src={publicUrl + '/images/skills/angular.png'} width="100px" height="100px" objectFit="contain" />
                  <Font set="p2" mb={1} fontWeight={700}>Angular</Font>
                  <Font set="p3" mb={3} color="on-surface">Admin 페이지 만들때 많이써요. Ionic 프레임워크를 이용한 하이브리드앱 서비스 경험이 있습니다.</Font>
                </Div>
              </AnimationTarget>
              <AnimationTarget animation={fromLeft} fill="forwards" delay={.5}>
                <Div set="cardLined" padding={[15, 8, 8]} opacity={0}>
                  <Img src={publicUrl + '/images/skills/vue.png'} width="100px" height="100px" objectFit="contain" />
                  <Font set="p2" mb={1} fontWeight={700}>Vue</Font>
                  <Font set="p3" mb={3} color="on-surface">간단한 웹페이지를 빠르게 제작해야할 때 사용해요. Nuxt를 이용해 SSR 웹사이트 제작도 했어요.</Font>
                </Div>
              </AnimationTarget>
              <AnimationTarget animation={fromRight} delay={.7}>
                <Div set="cardLined" padding={[15, 8, 8]} opacity={0}>
                  <Img src={publicUrl + '/images/skills/java.png'} width="100px" height="100px" objectFit="contain" />
                  <Font set="p2" mb={1} fontWeight={700}>JAVA</Font>
                  <Font set="p3" mb={3} color="on-surface">자바로 개발을 시작했어요. Scala, Kotlin도 사용해봤습니다.</Font>
                </Div>
              </AnimationTarget>
              <AnimationTarget animation={fromRight} delay={.9}>
                <Div set="card" padding={[15, 8, 8]} opacity={0}>
                  <Img src={publicUrl + '/images/skills/springboot.png'} width="100px" height="100px" objectFit="contain" />
                  <Font set="p2" mb={1} fontWeight={700}>Node.js</Font>
                  <Font set="p3" mb={3} color="on-surface">Nest.js 이용해서 서버를 개발하고 있어요. RDB는 TypeORM, Sequlize를 주로씁니다. </Font>
                </Div>
              </AnimationTarget>
              <AnimationTarget animation={fromRight} delay={1.1}>
                <Div set="card" padding={[15, 8, 8]} position="relative" transform="translateY(30%)" opacity={0}>
                  <Img src={publicUrl + '/images/skills/sass.png'} width="100px" height="100px" objectFit="contain" />
                  <Font set="p2" mb={1} fontWeight={700}>HTML/CSS</Font>
                  <Font set="p3" mb={3} color="on-surface">빠르고 확장성있는 UI관리에 관심이 많아요.</Font>
                </Div>
              </AnimationTarget>
            </Grid>
          </Container>
        </Section>
      </AnimationObserver>
      <Section>
        <Container position="relative" padding={['5rem', 0, '10rem']}>
          <Font set="sectionTitle" textAlign="center">Projects</Font>
          <Grid column={{ tablet: 1, desktop: 'repeat(3, 1fr)' }} mt={10} gap={10}>
            <Div set="card">
              <Img height="300px" src={publicUrl + '/images/projects/mall.png'} objectFit="cover" />
              <Div padding={3}>
                <Font set="p3" color="secondary" textTransform="uppercase">frontend & backend</Font>
                <Font set="p3" mb={1} fontWeight={700}>Shopping mall</Font>
                <Font set="p3" mb={3} color="on-surface">
                  쇼핑몰 페이지 프론트, 백엔드 및 관리자 페이지 제작
                </Font>
                <Flex gap={2}>
                  <Span set="chips">JAVA</Span>
                  <Span set="chips">Jquery</Span>
                  <Span set="chips">Spring</Span>
                </Flex>
              </Div>
            </Div>
            <Div set="card">
              <Img height="300px" src={publicUrl + '/images/projects/sodotsa.jpg'} objectFit="cover" />
              <Div padding={3}>
                <Font set="p3" color="secondary" textTransform="uppercase">frontend & backend</Font>
                <Font set="p3" mb={1} fontWeight={700}>Small size pages</Font>
                <Font set="p3" mb={3} color="on-surface">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, id!</Font>
                <Flex gap={2}>
                  <Span set="chips">Vue</Span>
                  <Span set="chips">JAVA</Span>
                  <Span set="chips">Kotlin</Span>
                </Flex>
              </Div>
            </Div>
            <Div set="card">
              <Img height="300px" src={publicUrl + '/images/projects/yeonha.jpg'} objectFit="cover" />
              <Div padding={3}>
                <Font set="p3" color="secondary" textTransform="uppercase">frontend</Font>
                <Font set="p3" mb={1} fontWeight={700}></Font>
                <Font set="p3" mb={3} color="on-surface">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, id!</Font>
                <Flex gap={2}>
                  <Span set="chips">Vue</Span>
                </Flex>
              </Div>
            </Div>
            <Div set="card">
              <Img height="300px" src={publicUrl + '/images/projects/startup.png'} objectFit="cover" />
              <Div padding={3}>
                <Font set="p3" color="secondary" textTransform="uppercase">frontend & backend</Font>
                <Font set="p3" mb={1} fontWeight={700}>Company introduction website</Font>
                <Font set="p3" mb={3} color="on-surface">스타트업 회사의 홈페이지를 제작하였습니다.</Font>
                <Flex gap={2}>
                  <Span set="chips">JAVA</Span>
                  <Span set="chips">JSP</Span>
                  <Span set="chips">Jquery</Span>
                  <Span set="chips">Spring</Span>
                </Flex>
              </Div>
            </Div>
            <Div set="card">
              <Img height="300px" src={publicUrl + '/images/projects/survey.png'} objectFit="cover" />
              <Div padding={3}>
                <Font set="p3" color="secondary" textTransform="uppercase">frontend & backend</Font>
                <Font set="p3" mb={1} fontWeight={700}>Internet survey
                </Font>
                <Font set="p3" mb={3} color="on-surface">인터넷 설문 페이지를 UI, DB설계및 관리자 페이지까지 전반적으로 담당하였습니다.</Font>
                <Flex gap={2}>
                  <Span set="chips">JAVA</Span>
                  <Span set="chips">JSP</Span>
                  <Span set="chips">Jquery</Span>
                  <Span set="chips">Spring</Span>
                </Flex>
              </Div>
            </Div>
            <Div set="card">
              <Img height="300px" src={publicUrl + '/images/projects/blog.png'} objectFit="cover" />
              <Div padding={3}>
                <Font set="p3" color="secondary" textTransform="uppercase">frontend & backend</Font>
                <Font set="p3" mb={1} fontWeight={700}>Blog</Font>
                <Font set="p3" mb={3} color="on-surface">프론트앤드 프레임워크를 처음 접했을 당시 익숙해지기 위해 개인 블로그를 만들어보았습니다.</Font>
                <Flex gap={2}>
                  <Span set="chips">Nodejs</Span>
                  <Span set="chips">Angular</Span>
                </Flex>
              </Div>
            </Div>
          </Grid>
        </Container>
      </Section>
      <Section background="secondary" padding={[20, 0]}>
        <Container>
          <Grid column={2} gap={10}>
            <div>
              <img src="https://rstheme.com/products/wordpress/swipy/wp-content/uploads/2022/05/8.png" alt="" />
            </div>
            <Div set="card,level2" padding={5}>
              <Font set="h3" color="secondary" fontWeight={800}>Contact Me!</Font>
              <Font padding={[4, 0, 1]}>이름</Font>
              <Input set="full" />
              <Font padding={[4, 0, 1]}>메일주소</Font>
              <Input set="full" />
              <Font padding={[4, 0, 1]}>Message</Font>
              <Input set="full" />
              <Button set="secondary" mt={10} width="50%">메일 보내기</Button>
            </Div>
          </Grid>
        </Container>
      </Section>
      <Div background="secondary">
        <Container padding={[20, 0]}>
          <Grid column={{ desktop: 3, tablet: 2, mobile: 1 }} color="onSecondary">
            <div>
              <Font set="p1" mb={10} >THEMES</Font>
              <Font set="p3" mb={1} fontWeight={700}>Default</Font>
              <Font set="p3" mb={1} fontWeight={700}>Dark</Font>
              <Font set="p3" mb={1} fontWeight={700}>Green</Font>
              <Font set="p3" mb={1} fontWeight={700}>pink</Font>
              <Font set="p3" mb={1} fontWeight={700}>purple</Font>
            </div>
            <div>
              <Font set="p1" mb={10}>MENU</Font>
              <Font set="p3" mb={1} fontWeight={700}>Home</Font>
              <Font set="p3" mb={1} fontWeight={700}>Design</Font>
              <Font set="p3" mb={1} fontWeight={700}>Example1</Font>
            </div>
            <div>
              <Font set="p1" mb={10} >SNS</Font>
              <Font set="p3" mb={1} fontWeight={700}>Instagram
                <Span set="tooltip,tooltipLeft" ml={4}>Follow Me!</Span>
              </Font>
              <Font set="p3" mb={1} fontWeight={700}>Facebook</Font>
              <Font set="p3" mb={1} fontWeight={700}>Linked in</Font>
            </div>
          </Grid>
          <Div padding={[30, 0, 5]}>
            <Font color="onSecondary" set="p3" textAlign="center" fontWeight={700}>This is all made by Mina Choi</Font>
          </Div>
        </Container>
      </Div>
    </Div >
  );
}


export default Fourth;