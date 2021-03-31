import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 16px;
  border-radius: 10px;
  margin-top: 16px;

  background: ${prps => prps.theme.colors.primary};
  height: 56px;
  border: 0;
  color: ${props => props.theme.colors.text};
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => shade(0.2, props.theme.colors.primary)};
  }

  svg {
    margin-right: 16px;
  }

  span {
    margin-top: 0 !important;
  }
`;
