import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Div, Flex, Font, Img, Grid, Button, Span, Input } from '@milibrary/mi-style';

import { Dragger, MiModal, MiModalInterface, MiModalRefInterface } from '@milibrary/react-interaction'
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';

const publicUrl = process.env.PUBLIC_URL;

const Avatar = () => (
  <Flex gap={3}>
    <Img src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/01.7340bf5d971620814d9d.jpg" borderRadius="100%" width={10} height={10} />
    <div>
      <Font set="p5">Paul Molive</Font>
      <Font set="p4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempora?</Font>
    </div>
  </Flex>
)

const testUrl = 'https://stylenanda.com/web/product/medium/201904/324638da564d0c825510496b348da4d5.jpg'
const Example1: React.FC = () => {
  const modalRef = React.useRef<MiModalRefInterface>(null);
  const [s, ss] = React.useState<boolean>(false);
  const open = () => {
    ss(true);
    modalRef.current?.present();
  }
  const close = () => {
    modalRef.current?.dismiss();
  }
  return (
    <>
      <Container padding={['8rem', 0]} width="clamp(0px, 100%, 800px)">
        <Div set="card" margin={[5, 0]} padding={5}>
          <Input set="full" placeholder="Enter Your Comment" />
          <Button set="primary" mt={3}>Post</Button>
        </Div>
        <Grid gap={5}>
          <Div set="card" padding={5}>
            <Flex gap={3} alignItems="center">
              <Img src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/01.7340bf5d971620814d9d.jpg" borderRadius="100%" width={13} height={13} />
              <Font set="p4">Paul Molive</Font>
            </Flex>
            <Font set="p3" padding={[5, 0]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsum odit quam, maiores quaerat sapiente perspiciatis alias sit aperiam eveniet distinctio autem nostrum voluptatum explicabo veritatis deleniti laboriosam dolore at dignissimos quidem? Dignissimos distinctio officia laudantium soluta eos quod incidunt! Necessitatibus excepturi quae nihil corrupti cupiditate labore animi numquam cumque!
            </Font>
            <Img height="300px" width="auto" src={publicUrl + '/images/3d/coffee.png'} />
            <Img height="300px" width="auto" src={publicUrl + '/images/3d/coffee.png'} />
            <Flex justifyContent="space-between" margin={[5, 0]}>
              <Flex gap={3}>
                <Font set="p4"><FontAwesomeIcon icon={solid('heart')} /> 140 Likes</Font>
                <Font set="p4"><FontAwesomeIcon icon={solid('message')} /> 20 Comment</Font>
              </Flex>
              <Font set="p4"><FontAwesomeIcon icon={solid('link')} /> Share</Font>
            </Flex>
            <Grid borderTop="1px solid" borderColor="onPrimary" padding={[5, 0]} gap={5}>
              <Avatar />
              <Avatar />
              <Avatar />
            </Grid>
            <Input set="full" placeholder="Enter Your Comment" />
          </Div>
          <Div set="card" padding={5}>
            <Avatar />
            <Font set="p4" padding={[5, 0]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsum odit quam, maiores quaerat sapiente perspiciatis alias sit aperiam eveniet distinctio autem nostrum voluptatum explicabo veritatis deleniti laboriosam dolore at dignissimos quidem? Dignissimos distinctio officia laudantium soluta eos quod incidunt! Necessitatibus excepturi quae nihil corrupti cupiditate labore animi numquam cumque!
            </Font>
            <Img height="300px" width="auto" src={publicUrl + '/images/3d/coffee.png'} />
            <Img height="300px" width="auto" src={publicUrl + '/images/3d/coffee.png'} />
            <Flex justifyContent="space-between" margin={[5, 0]}>
              <Flex gap={3}>
                <Font set="p4"><FontAwesomeIcon icon={solid('heart')} /> 140 Likes</Font>
                <Font set="p4"><FontAwesomeIcon icon={solid('message')} /> 20 Comment</Font>
              </Flex>
              <Font set="p4"><FontAwesomeIcon icon={solid('link')} /> Share</Font>
            </Flex>
            <Grid borderTop="1px solid" borderColor="onPrimary" padding={[5, 0]} gap={5}>
              <Avatar />
              <Avatar />
              <Avatar />
            </Grid>
            <Input set="full" placeholder="Enter Your Comment" />
          </Div>
        </Grid>
      </Container>
    </>
  );
}

export default Example1;