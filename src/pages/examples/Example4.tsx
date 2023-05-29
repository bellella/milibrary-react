import React, { FormEvent } from 'react';
import { Div, Flex, Font, Img, Grid, Button, Span, Input } from '@milibrary/mi-style';

import axios from 'axios';
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';

const publicUrl = process.env.PUBLIC_URL;

interface AvatarInterface {
  message: string;
}

const Avatar: React.FC<AvatarInterface> = ({ message }) => (
  <Flex gap={3}>
    <Img src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/01.7340bf5d971620814d9d.jpg" borderRadius="100%" width={10} height={10} />
    <div>
      <Font set="p5">Chat GPT</Font>
      <Div padding={1.5} background="surface" color="onSurface" borderRadius="8px 8px 8px 0">
        <Font set="p4">{message}</Font>
      </Div>
    </div>
  </Flex>
)

const AvatarMe: React.FC<AvatarInterface> = ({ message }) => (
  <Flex alignItems="end" flexFlow="column">
    <Font set="p5">Me</Font>
    <Div padding={1.5} background="secondary" color="onSecondary" borderRadius="8px 8px 0">
      <Font set="p4">{message}</Font>
    </Div>
  </Flex>
)

const Example1: React.FC = () => {
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const chatInputRef = React.useRef<HTMLInputElement>(null);
  const [chats, setChats] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const userInputHandle = async () => {
    const userMessage = chatInputRef.current.value;
    if (userMessage === '') {
      return false;
    }
    setIsLoading(true);
    const chat = {
      role: 'user',
      content: userMessage
    }
    setChats(c => ([...c, chat]));

    const gptChat = await requestGpt(userMessage);
    setChats(c => ([...c, gptChat]));
    chatInputRef.current.value = '';
    setIsLoading(false);
    setTimeout(() => chatInputRef.current.focus(), 0);
  }

  const requestGpt = (message: string) => {
    return new Promise(r => {
      setTimeout(() => r({
        role: 'gpt',
        content: 'I don\'t wanna talk right now sorry'
      }), 500);
    })
  }

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current?.scrollHeight + 1000
      });
    }
  }, [chats]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      userInputHandle();
    }
  };

  return (
    <>
      <Section padding={['8rem', 0]}>
        <Container>
          <Font set="h4" textAlign="center" fontWeight={700}>Let's be friend with Chat GPT</Font>
          <Flex justifyContent="center">
            <Div set="card" margin={[5, 0]} padding={5} width="500px">
              <Flex background="primary" height="30rem" gap={3} flexFlow="column" padding={5} overflow="auto"
                ref={chatContainerRef}
              >
                {
                  chats.map(({ role, content }, i) => (role === 'user' ?
                    <AvatarMe message={content} /> : <Avatar message={content} />))
                }
                {
                  isLoading && <Avatar message="..." />
                }
              </Flex>
              <Flex justifyContent="space-between" gap={3} mt={3}>
                <Input set="full" name="message" placeholder="Enter Your Comment"
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  ref={chatInputRef}
                />
                <Button set="primary" type="button" onClick={() => userInputHandle()}>Send</Button>
              </Flex>
            </Div>
          </Flex>
        </Container>
      </Section >
    </>
  );
}

export default Example1;