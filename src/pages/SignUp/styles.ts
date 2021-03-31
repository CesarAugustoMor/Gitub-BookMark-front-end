import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import gitHub from '../../assets/gitHub.svg';

export const Container = styled.div`
  background: url(${gitHub}) no-repeat center top;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
`;

const appearFromRight = keyframes`
from{
  opacity:0;
  transform:translateX(50px)
}
to{
  opacity:1;
  transform: translateX(0)
}
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 8rem 0;
    width: 34rem;
    text-align: center;

    h1 {
      margin-bottom: 2.4rem;
    }

    a {
      color: ${props => props.theme.colors.text};
      display: block;
      margin-top: 2.4rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${props => shade(0.2, props.theme.colors.text)};
      }
    }
  }

  a {
    color: ${props => props.theme.colors.primary};
    display: block;
    margin-top: 2.4rem;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${props => shade(0.2, props.theme.colors.primary)};
    }

    display: flex;
    align-items: center;

    svg {
      margin-right: 1.6rem;
    }
  }
`;
