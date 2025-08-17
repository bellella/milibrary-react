import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Div, Flex, Font, Grid, Button } from '@milibrary/mi-style';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { AnimationObserver, AnimationTarget, Dragger, MiModal, MiModalRefInterface } from '@milibrary/react-interaction'
import 'prismjs/themes/prism-okaidia.css';
import { Loading, Modal, Toast } from '@milibrary/core';
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';
import useAnimateShimmer from 'hooks/useAnimateShimmer';
import 'prismjs/components/prism-jsx.min';

const MiLibrary: React.FC = () => {
  const modalRef = React.useRef<MiModalRefInterface>(null);
  const { refs } = useAnimateShimmer();

  const callModal = () => {
    modalRef.current?.present();
  };
  const callToast = () => {
    Toast.create({ message: 'Hi Beautiful' }).present();
  };

  const callLoading = () => {
    const ctrl = Loading.create().present();
    setTimeout(() => ctrl.dismiss(), 1500);
  };

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Section>
        {Array(20).fill(null).map((_, i) => (
          <Div position="absolute"
            display={{ mobile: 'none' }}
            key={i}
            ref={(el: HTMLElement) => (refs.current[i] = el)}>
            <Font fontSize="3rem" color="onSecondary">❁</Font>
          </Div>
        ))
        }
        <Container>
          <Flex flexFlow="column" alignItems="center" justifyContent="center" height="100vh">
            <Flex>
              <Font set="h1" textAlign="center">What is Mi Library</Font>
            </Flex>
            <Font set="p1" textAlign="center">Efficient UI Library</Font>
            <Button set="primary" mt={4} onClick={() => window.open("https://www.npmjs.com/package/@milibrary/mi-style")}>Go to NPM</Button>
          </Flex>
        </Container>
      </Section>
      <LibrarySection>
        <Title>Styling without css</Title>
        <LibraryCard>
          <Div padding={['4rem', 0]}>
            <Font color="onPrimary" fontSize="3rem" fontWeight={700}>I Love Mi Library</Font>
            <Font color="onPrimary" fontSize="1rem" fontWeight={400} mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
            <Button background="#e91e63" color="#fff" mt={5}>Mi library 💜</Button>
          </Div>
          <CodeBlock code={`<Div padding={['4rem', 0]}>
  <Font color="onPrimary" fontSize="3rem" fontWeight={700}>I Love Mi Library</Font>
  <Font color="onPrimary" fontSize="1rem" fontWeight={400} mt={1}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.
  </Font>
  <Button background="#e91e63" color="#fff" mt={5}>Mi library 💜</Button>
</Div>`} />
        </LibraryCard>
      </LibrarySection>

      <LibrarySection>
        <Title>Responsive styling</Title>
        <LibraryCard>
          <Grid column={{ mobile: 1, tablet: 2, desktop: 3 }} gap={3}>
            <Div padding={['4rem', 0]}>
              <Font color="onPrimary" fontSize="3rem" fontWeight={700}>I Love mi Library</Font>
              <Font color="onPrimary" fontSize="1rem" fontWeight={400} mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
              <Button background="mediumpurple" color="#fff" mt={5}>Mi library 💜</Button>
            </Div>
            <Div padding={['4rem', 0]}>
              <Font color="onPrimary" fontSize="3rem" fontWeight={700}>I Love mi Library</Font>
              <Font color="onPrimary" fontSize="1rem" fontWeight={400} mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
              <Button background="mediumpurple" color="#fff" mt={5}>Mi library 💜</Button>
            </Div>
            <Div padding={['4rem', 0]}>
              <Font color="onPrimary" fontSize="3rem" fontWeight={700}>I Love mi Library</Font>
              <Font color="onPrimary" fontSize="1rem" fontWeight={400} mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
              <Button background="mediumpurple" color="#fff" mt={5}>Mi library 💜</Button>
            </Div>
          </Grid>
          <CodeBlock code={`<Grid column={{ mobile: 1, tablet: 2, desktop: 3 }} gap={3}>
  <Div padding={['4rem', 0]}>
    <Font color="onPrimary" fontSize="3rem" fontWeight={700}>I Love mi Library</Font>
    <Font color="onPrimary" fontSize="1rem" fontWeight={400} mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
    <Button background="mediumpurple" color="#fff" mt={5}>Mi library 💜</Button>
  </Div>
  <Div padding={['4rem', 0]}>
    <Font color="onPrimary" fontSize="3rem" fontWeight={700}>I Love mi Library</Font>
    <Font color="onPrimary" fontSize="1rem" fontWeight={400} mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
    <Button background="mediumpurple" color="#fff" mt={5}>Mi library 💜</Button>
  </Div>
  <Div padding={['4rem', 0]}>
    <Font color="onPrimary" fontSize="3rem" fontWeight={700}>I Love mi Library</Font>
    <Font color="onPrimary" fontSize="1rem" fontWeight={400} mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
    <Button background="mediumpurple" color="#fff" mt={5}>Mi library 💜</Button>
  </Div>
</Grid>`} />
        </LibraryCard>

      </LibrarySection>

      <LibrarySection>
        <Title>Styling preset</Title>
        <LibraryCard>
          <Div set="card,level-1" padding={[5]}>
            <Font set="h4">I Love mi Library</Font>
            <Font set="p3" mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
            <Button set="secondary" mt={5}>Mi library 💜</Button>
          </Div>
          <CodeBlock code={`<Div set="card,level-1" padding={[5]}>
  <Font set="h4">I Love mi Library</Font>
  <Font set="p3" mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
  <Button set="secondary" mt={5}>Mi library 💜</Button>
</Div>`} />
        </LibraryCard>
      </LibrarySection>
      <LibrarySection>
        <Title>Make your own mi-styled component</Title>
        <LibraryCard>
          <CodeBlock code={`export interface SectionInterface extends DivInterface { };

export const Section = createMi<SectionInterface>({
  tagName: <Div />,
  styles: [],
  css: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
  }
});`} />
        </LibraryCard>
      </LibrarySection>

      <LibrarySection>
        <Title>Utility components</Title>
        <LibraryCard>
          <Grid column={{ tablet: 3, desktop: 3 }} gap={5}>
            <Button set="primary" onClick={() => callModal()}>Use me as Modal button</Button>
            <Button set="primary" onClick={() => callToast()}>Use me as Toast button</Button>
            <Button set="primary" onClick={() => callLoading()}>Use me as Loading button</Button>
          </Grid>
          <Grid column={{ desktop: 2 }} gap={2}>
            <CodeBlock code={`const callModal = () => {
    modalRef.current?.present();
};
const callToast = () => {
    Toast.create({ message: "Hi Beautiful" }).present();
};

const callLoading = () => {
    const ctrl = Loading.create().present();
    setTimeout(() => ctrl.dismiss(), 1500);
};
`} />
            <CodeBlock code={`<MiModal ref={modalRef} useDefaultStyle={false}>
  <Div width="300px" set="level-1" padding={[5]} border="3px solid" borderColor="onPrimary" background="#fff">
    <Font set="h4">I Love mi Library</Font>
    <Font set="p3" mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
    <Button set="secondary" width="100%" mt={5} onClick={()=> modalRef.current?.dismiss()}>close 💜</Button>
  </Div>
</MiModal>`} />
          </Grid>
        </LibraryCard>

      </LibrarySection>
      <AnimationObserver isOnce={true}>
        <LibrarySection>
          <Title>Animation</Title>
          <Grid column={{ mobile: '70%', tablet: '30% 30%', desktop: '30% 30%' }} justifyContent="center" mt={10} gap={20}>
            <AnimationTarget className="fadeIn">
              <Div opacity={0}>
                <img src={publicUrl + '/images/3d/coffee.png'} alt="" />
              </Div>
            </AnimationTarget>
            <AnimationTarget className="fadeIn" delay={1}>
              <Div opacity={0}>
                <img src={publicUrl + '/images/3d/message.png'} alt="" />
              </Div>
            </AnimationTarget>
          </Grid>
        </LibrarySection>
      </AnimationObserver>
      <LibrarySection>
        <CodeBlock code={`<AnimationObserver isOnce={true}>
  <LibrarySection>
    <Title>Animation</Title>
    <Grid column={{ mobile: '70%', tablet: '30% 30%', desktop: '30% 30%' }} justifyContent="center" mt={10} gap={20}>
      <AnimationTarget className="fadeIn">
        <Div opacity={0}>
          <img src="/images/3d/coffee.png" alt="" />
        </Div>
      </AnimationTarget>
      <AnimationTarget className="fadeIn" delay={1}>
        <Div opacity={0}>
          <img src="/images/3d/message.png" alt="" />
        </Div>
      </AnimationTarget>
    </Grid>
  </LibrarySection>
</AnimationObserver>`} />
      </LibrarySection>

      <LibrarySection>
        <Title>Custom Customponent</Title>
        <LibraryCard>
          <Dragger>
            {(({ content, box }) => (
              <Div position="relative" ref={box}>
                <Flex alignItems="center"
                  gap={5} height="100%" flexWrap="nowrap"
                  ref={content}>
                  {Array(9).fill(null).map((_, i) => (
                    <Div key={i} position="relative" flexShrink={0} width="300px" set="level-1" padding={[5]} border="3px solid" borderColor="onPrimary" background="#fff8">
                      <Font set="h4">I Love mi Library</Font>
                      <Font set="p3" mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
                    </Div>
                  ))}
                </Flex>
              </Div>
            ))}
          </Dragger>
          <CodeBlock code={`<Dragger> {(({ content, box }) => ( <Div position="relative" ref={box}>
    <Flex alignItems="center" gap={5} height="100%" flexWrap="nowrap" ref={content}>
      <Div key={i} position="relative" flexShrink={0} width="300px" set="level-1" padding={[5]} border="3px solid" borderColor="onPrimary" background="#fff8">
        <Font set="h4">I Love mi Library</Font>
        <Font set="p3" mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
      </Div>
      <Div key={i} position="relative" flexShrink={0} width="300px" set="level-1" padding={[5]} border="3px solid" borderColor="onPrimary" background="#fff8">
        <Font set="h4">I Love mi Library</Font>
        <Font set="p3" mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
      </Div>
      <Div key={i} position="relative" flexShrink={0} width="300px" set="level-1" padding={[5]} border="3px solid" borderColor="onPrimary" background="#fff8">
        <Font set="h4">I Love mi Library</Font>
        <Font set="p3" mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
      </Div>
    </Flex>
  </Div> ))}
  </Dragger>`} />
        </LibraryCard >
      </LibrarySection>
      <MiModal ref={modalRef} useDefaultStyle={false}>
        <Div width="280px" set="level-1" padding={[5]} border="3px solid" borderColor="onPrimary" background="surface" color="onSurface">
          <Font set="h4">I Love mi Library</Font>
          <Font set="p3" mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum beatae iste ex velit aut porro, obcaecati laborum. Facilis alias neque nam maiores esse odit quo ut, molestiae obcaecati adipisci.</Font>
          <Button set="secondary" width="100%" mt={5} onClick={() => modalRef.current?.dismiss()}>close 💜</Button>
        </Div>
      </MiModal>
    </>
  );
}

const publicUrl = process.env.PUBLIC_URL;

const Title: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Font set="h5" mb={10} color="onPrimary" fontWeight={600}><FontAwesomeIcon icon={solid('check')} /> {children}</Font>
)
const LibrarySection = React.forwardRef<HTMLDivElement, React.PropsWithChildren>(({ children }, ref) => (
  <Container position="relative" padding={[20, 0]} ref={ref}>{children}</Container>
))
const LibraryCard: React.FC<React.PropsWithChildren> = (props) => (
  <Div set="card" background="#fff4" padding={5} {...props} />
)

const CodeBlock = ({ code }) => (
  <pre>
    <code className="language-jsx">
      {code}
    </code>
  </pre>
)

export default MiLibrary;