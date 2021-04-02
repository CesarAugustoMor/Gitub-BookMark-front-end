import { Form } from '@unform/web';
import { shade } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 64px auto;
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-gap: 32px;
`;

export const Content = styled.main`
  ul {
    max-height: 60rem;
    margin-top: 4rem;
    height: 60rem;
    overflow: auto;
  }
`;

export const Search = styled(Form)`
  display: flex;

  div {
    margin-right: -2.5%;
    width: 70%;
  }

  button {
    width: 31%;
  }
`;

export const BannerUser = styled.li`
  border-radius: 1rem;
  background: ${props => props.theme.colors.card};
  padding: 1.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    width: 12.2rem;
    height: 12.2rem;
    margin-right: 2.4rem;
  }

  div {
    color: ${props => props.theme.colors.text};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    strong {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 26px;
    }
  }

  & + li {
    margin-top: 2.4rem;
  }
`;

export const Favorites = styled.aside`
  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    color: ${props => props.theme.colors.textSecundary};

    height: 5.6rem;
    display: flex;
    align-items: center;
  }

  ul {
    margin-top: 4rem;
    max-height: 60rem;
    overflow: auto;
    width: 100%;
    padding: 0.8rem;

    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 1rem;

    h1 {
      color: ${props => props.theme.colors.text};
      margin: 1.8rem;
      height: 16rem;
    }
  }
`;

export const BannerFavorite = styled(Link)`
  height: 8.8rem;
  width: 48rem;
  border-radius: 10px;
  background: ${props => props.theme.colors.card};

  display: flex;
  align-items: center;
  padding: 1.6rem;

  color: ${props => props.theme.colors.text};

  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    margin-right: 1.6rem;
  }

  strong {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }

  & + a {
    margin-top: 2.4rem;
  }
`;

export const FavButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: 10px;
  margin-top: 2.4rem;

  background: ${prps => prps.theme.colors.primary};
  height: 5.6rem;
  color: ${props => props.theme.colors.text};
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => shade(0.2, props.theme.colors.primary)};
  }
`;
