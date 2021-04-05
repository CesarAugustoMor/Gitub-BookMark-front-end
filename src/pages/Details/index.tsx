import React, { useCallback, useEffect, useState } from 'react';
import { FiStar } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import Header from '../../components/Header';

import {
  Container,
  UserData,
  Legenda,
  Data,
  Repositories,
  Feed,
} from './styles';
import apiGit from '../../services/apiGit';
import api from '../../services/api';

interface Params {
  user: string;
}

interface GitUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  public_repos: number;
  followers: number;
}

interface GitUserRepos {
  id: number;
  name: string;
  html_url: string;
}

interface GitUserEvents {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
}

interface UserFavorito {
  id: string;
  nickname: string;
}

const Details: React.FC = () => {
  const [favorite, setFavorite] = useState(false);
  const [favoriteID, setFavoriteId] = useState<string | undefined>(undefined);
  const [gitUser, setGitUser] = useState<GitUser>({} as GitUser);
  const [gitUserRepos, setGitUserRepos] = useState<GitUserRepos[]>([]);
  const [gitUserEvents, setGitUserEvents] = useState<GitUserEvents[]>([]);

  const { user } = useParams<Params>();

  useEffect(() => {
    apiGit.get(`users/${user}`).then(response => {
      setGitUser(response.data);
    });

    apiGit.get(`users/${user}/repos?per_page=4`).then(response => {
      setGitUserRepos(response.data);
    });

    apiGit.get(`users/${user}/events/public?per_page=10`).then(response => {
      setGitUserEvents(response.data);
    });
  }, [user]);

  useEffect(() => {
    api.get<UserFavorito[]>('favorites').then(resp => {
      resp.data.forEach(userFav => {
        if (userFav.nickname === user) {
          setFavorite(true);
          setFavoriteId(userFav.id);
        }
      });
    });
  }, [user]);

  const handleFavorite = useCallback(async () => {
    if (favorite && favoriteID) {
      await api.delete(`favorites/${favoriteID}`);

      setFavoriteId(undefined);
      setFavorite(false);
    } else {
      const data = {
        nickname: gitUser.login,
        avatar_github: gitUser.avatar_url,
      };

      const userGit = await api.post('favorites', data);

      setFavoriteId(userGit.data.id);
      setFavorite(true);
    }
  }, [favorite, favoriteID, gitUser.avatar_url, gitUser.login]);
  return (
    <>
      <Header />
      <Container>
        <UserData>
          <img src={gitUser.avatar_url} alt={gitUser.login} />
          <Legenda>
            <b>Nome:</b>
            <b>Username:</b>
            <b>Seguidores:</b>
            <b>Nº de repositórios:</b>
          </Legenda>
          <Data>
            <div>{gitUser.name || 'Nome não disponivel'}</div>
            <div>{gitUser.login}</div>
            <div>{gitUser.followers}</div>
            <div>{gitUser.public_repos}</div>
          </Data>
          <Repositories>
            <b>Repositórios recentes:</b>
            {gitUserRepos.map(repo => (
              <a
                key={repo.id}
                target="_blank"
                rel="noopener noreferrer"
                href={repo.html_url}
              >
                {repo.name}
              </a>
            ))}
          </Repositories>
          <button type="button" onClick={handleFavorite} title="Favoritar">
            {favorite ? <BsStarFill /> : <FiStar />}
          </button>
        </UserData>
        <h1>Atividades recentes: </h1>
        <Feed>
          <table>
            <tr>
              <th>Tipo</th>
              <th>Repositório</th>
              <th>Data:</th>
            </tr>
            {gitUserEvents.map(gitUserEvent => (
              <tr key={gitUserEvent.id}>
                <td>{gitUserEvent.type}</td>
                <td>
                  <a
                    href={`https://github.com/${gitUserEvent.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {gitUserEvent.repo.name}
                  </a>
                </td>
                <td>
                  {format(
                    new Date(gitUserEvent.created_at),
                    'dd/MM/yyyy HH:mm',
                    {
                      locale: ptBr,
                    },
                  )}
                </td>
              </tr>
            ))}
          </table>
        </Feed>
      </Container>
    </>
  );
};

export default Details;
