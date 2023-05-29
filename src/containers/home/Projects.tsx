import { Font, Div, Img, Flex, Span } from '@milibrary/mi-style';
import DragContainer from 'components/DragContainer';
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true }) as { category: string, name: string, content: string, tags: string[] }[];

  if (!projects || !(projects instanceof Array)) {
    return null;
  }

  return (
    <Section>
      <Container position="relative" padding={['5rem', 0, '10rem']}>
        <Font set="sectionTitle" textAlign="center" mb={20}>Projects</Font>
        <DragContainer>
          {projects.map((project, i) => (
            <Card image={publicUrl + projectImages[i]}
              link={links[i] && links[i]}
              {...project}
            />
          ))}
        </DragContainer>
      </Container>
    </Section>
  );
}

const Card = ({ image, category, name, content, tags, link = null }) => {

  return (
    <Div set="card" width="clamp(200px, 30rem, 350px)" flexShrink={0} pb={3}>
      <Img height="300px" src={image} objectFit="cover" onClick={() => {
        //window.open(link, '_blank')
      }} />
      <Div padding={3} position="relative">
        <Font set="p3" color="accent" textTransform="uppercase">{category}</Font>
        <Font set="p3" mb={1} color="onSurface" fontWeight={700}>{name}</Font>
        <Font set="p3" mb={3} color="onSurface">{content}</Font>
        <Flex gap={2}>
          {tags.map(t => (<Span set="chips" key={t}>{t}</Span>))}
        </Flex>
        <Flex justifyContent="end" position="absolute" bottom={0} right={3}>
          {link && <Link target="_blank" to={link}>
            <Font set="link">Link</Font>
          </Link>}
        </Flex>
      </Div>
    </Div>
  )
}

const projectImages = [
  '/images/projects/forceteller_app.png',
  '/images/projects/event_2.png',
  '/images/projects/event_1.png',
  '/images/projects/mila.png',
  '/images/projects/angular_blog.png',
  '/images/projects/shopping.png',
  '/images/projects/survey.png',
  '/images/projects/startup.png',
];

const links = [
  'https://play.google.com/store/apps/details?id=com.un7qi3.forceteller&hl=ko&gl=US',
  'https://event.forceteller.com/interactive/tiving',
  'https://sodotsa.forceteller.com/interactive/yeonha',
  'http://lifestory-mila.s3-website.ap-northeast-2.amazonaws.com',
  null,
  null,
  null,
  'http://www.powerct.kr/',
]

const publicUrl = process.env.PUBLIC_URL;


export default Projects;