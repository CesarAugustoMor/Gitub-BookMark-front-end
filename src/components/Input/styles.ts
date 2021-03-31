import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ConteinerPrpps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ConteinerPrpps>`
  background: ${props => props.theme.colors.secundary};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.blue};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${props.theme.colors.error};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props.theme.colors.primary};
    `}

  input {
    color: ${props => props.theme.colors.text};
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${props => props.theme.colors.blue};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
  span {
    background: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.text};
    &::before {
      border-color: ${props => props.theme.colors.error} transparent;
    }
  }
`;
