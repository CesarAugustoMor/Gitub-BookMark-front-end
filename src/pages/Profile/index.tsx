import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { ChangeEvent, useCallback, useContext, useRef } from 'react';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import * as Yup from 'yup';
import { ThemeContext } from 'styled-components';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { useTheme } from '../../hooks/theme';

import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import { AvatarInput, Container, Content } from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { toogleTheme } = useTheme();
  const { title, colors } = useContext(ThemeContext);

  const { user, updateUser, signOut } = useAuth();

  const handlesubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val: string) => !!val.length,
            then: Yup.string().min(8, 'No minimo 8 dígitos').required(),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val: string) => !!val.length,
              then: Yup.string().min(8, 'No minimo 8 dígitos').required(),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], 'As senha não coincidem.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          password,
          old_password,
          password_confirmation,
        } = data;

        const formdata = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formdata);

        updateUser(response.data);

        addToast({
          title: 'Perfil atualizado!',
          description: 'Seu perfil foi atualizado com sucesso!',
          type: 'success',
        });

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na atualização!',
          description:
            'Ocorreu um erro ao atualizar o perfil, cheque se as informações são validas.',
        });
      }
    },
    [addToast, history, updateUser],
  );

  const handleAvatarchange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();
        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado!',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  const handleSingOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <header>
        <div>
          <div>
            <Link to="/dashboard">
              <FiArrowLeft />
            </Link>
          </div>
          <div>
            <Switch
              onChange={toogleTheme}
              checked={title === 'dark'}
              checkedIcon
              uncheckedIcon
              height={16}
              width={42}
              handleDiameter={24}
              onColor={colors.blue}
              offColor={colors.blue}
              onHandleColor={colors.primary}
              offHandleColor={colors.primary}
            />
            <span>{title}</span>
          </div>
        </div>
      </header>
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handlesubmit}
        >
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />
              <input
                type="file"
                accept="image/*"
                id="avatar"
                onChange={handleAvatarchange}
              />
            </label>
          </AvatarInput>

          <h1>Meu perfil</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            containerSyle={{ marginTop: 24 }}
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="Senha atual"
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Nova Senha"
          />

          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmar Senha"
          />

          <Button type="submit">Confirmar mudanças</Button>
          <Button type="button" onClick={handleSingOut}>
            Sair
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
