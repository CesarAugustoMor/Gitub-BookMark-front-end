import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import apiGit from '../../services/apiGit';
import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Content,
  Search,
  BannerUser,
  Favorites,
  BannerFavorite,
  FavButton,
} from './styles';
import { useToast } from '../../hooks/toast';

interface SearchData {
  name: string;
}

interface GitUser {
  login: 'CesarAugusto';
  avatar_url: 'https://avatars.githubusercontent.com/u/766104?v=4';
}

interface GitSearch {
  total_count: number;
  incomplete_results: boolean;
  items: GitUser[];
}

interface UserFavorito {
  nickname: string;
  avatar_github: string;
}

const Dashboard: React.FC = () => {
  const [gitUsers, setGitUsers] = useState<GitUser[]>([]);
  const [usersFavs, setUsersFavs] = useState<UserFavorito[]>([]);
  const [textLoading, setTextLoading] = useState('Carregando ...');

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  useEffect(() => {
    api
      .get<UserFavorito[]>('favorites')
      .then(resp => {
        setUsersFavs(resp.data);
        resp.data.length === 0
          ? setTextLoading('Carregando...')
          : setTextLoading('Ainda não possui favoritos.');
      })
      .catch(reson => {
        setTextLoading(
          `Erro ao carregar Favoritos: ${reson.response.data.message}`,
        );
      });
  }, []);

  const handlesubmit = useCallback(
    async (data: SearchData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('E-mail obrigatório').min(4),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const gitResponse = await apiGit.get<GitSearch>(
          `/search/users?per_page=6&q=${data.name}`,
        );

        setGitUsers(gitResponse.data.items);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na busca',
          description: 'Não foi possivel realizar a busca',
        });
      }
    },
    [addToast],
  );

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Search ref={formRef} onSubmit={handlesubmit}>
            <Input
              name="name"
              placeholder="Digite o nome em que deseja buscar"
            />
            <Button type="submit" icon={FiSearch} style={{ marginTop: 0 }}>
              Buscar
            </Button>
          </Search>
          <ul>
            {gitUsers.map(gitUser => (
              <BannerUser>
                <img src={gitUser.avatar_url} alt={gitUser.login} />
                <div>
                  <strong>{gitUser.login}</strong>
                  <FavButton to={`/detalhes/${gitUser.login}`}>
                    Ver detalhes
                  </FavButton>
                </div>
              </BannerUser>
            ))}
          </ul>
        </Content>
        <Favorites>
          <h1>Favoritos:</h1>
          <ul>
            {usersFavs.length === 0 ? (
              <h1>{textLoading}</h1>
            ) : (
              usersFavs.map(userFav => (
                <BannerFavorite to={`/detalhes/${userFav.nickname}`}>
                  <img src={userFav.avatar_github} alt={userFav.nickname} />
                  <strong>{userFav.nickname}</strong>
                </BannerFavorite>
              ))
            )}
          </ul>
        </Favorites>
      </Container>
    </>
  );
};

export default Dashboard;
