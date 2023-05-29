import { Grid, Div, Font, Input, Button } from '@milibrary/mi-style';
import axios from 'axios';
import { Container } from 'components/mis/Container';
import { Section } from 'components/mis/Section';
import { Textarea } from 'components/mis/Textarea';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Loading, Toast } from '@milibrary/core';

const ContatctMe: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const loading = Loading.create().present();
    axios.post('/external/sendemail', {
      ...data
    }).then(r => {
      Toast.create({ message: t('contact.messages.success') }).present();
    }).catch(e => {
      console.log(e.response.status);
      switch (e.response.status) {
        case 409: return Toast.create({ message: t('contact.messages.duplicate') }).present();
        default: return Toast.create({ message: t('contact.messages.error') }).present();
      }
    }).finally(() => {
      loading.dismiss();
    });
  };

  return (
    <Section background="secondary" padding={[20, 0]}>
      <Container>
        <Grid column={{ mobile: 1, tablet: 2, desktop: 2 }} gap={10}>
          <Div position="relative">
            <Div background="onPrimary" overflow="hidden" borderRadius="100%" width="23rem" height="23rem" position="relative" >
              <Font position="relative" fontSize="20rem" color="accent" textAlign="center" top={-20}>*✦</Font>
            </Div>
            <Div position="absolute" left="20rem" top="15rem" background="accent" overflow="hidden" borderRadius="100%" width="9rem" height="9rem" >
              <Font position="relative" fontSize="4rem" color="primary" textAlign="center">*✦</Font>
            </Div>
          </Div>
          <Div set="card,level2" padding={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Font set="h3" color="accent" fontWeight={800}>Contact Me!</Font>
              <Font padding={[4, 0, 1]}>{t('contact.name')}</Font>
              <Input set="full" {...register('name', { required: true })} required />
              <Font padding={[4, 0, 1]}>{t('contact.email')}</Font>
              <Input type="email" set="full" {...register('email', { required: true })} required />
              <Font padding={[4, 0, 1]}>{t('contact.subject')}</Font>
              <Input set="full" {...register('subject', { required: true })} required />
              <Font padding={[4, 0, 1]}>{t('contact.message')}</Font>
              <Textarea name="message" {...register('message', { required: true })} required />
              <Button set="accent" mt={10} width="50%">{t('send')}💕</Button>
            </form>
          </Div>
        </Grid>
      </Container>
    </Section>
  );
}

export default ContatctMe;