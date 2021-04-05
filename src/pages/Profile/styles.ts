import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  > header {
    height: 9rem;
    background: ${props => props.theme.colors.text};

    display: flex;
    align-items: center;

    > div {
      display: flex;
      justify-content: space-between;
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;

      div {
        color: ${props => props.theme.colors.secundary};

        display: flex;
        align-items: center;

        span {
          margin-left: 10px;
          text-transform: capitalize;
        }

        svg {
          color: ${props => props.theme.colors.secundary};
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  margin: -176px auto;

  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: ${props => props.theme.colors.secundary};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${props => shade(0.2, props.theme.colors.secundary)};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 36px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    right: 0%;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      color: ${props => props.theme.colors.secundary};
    }
    input {
      display: none;
    }

    &:hover {
      background: ${props => shade(0.2, props.theme.colors.primary)};
    }
  }
`;
