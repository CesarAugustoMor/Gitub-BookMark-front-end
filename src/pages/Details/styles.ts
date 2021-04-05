import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1120px;

  a {
    h1 {
      margin-top: 3.2rem;
      color: ${props => props.theme.colors.textSecundary};
    }
  }
`;

export const UserData = styled.div`
  margin-top: 6.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 15.2rem;
    height: 15.2rem;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 50%;
  }

  button {
    border: none;
    justify-self: inherit;
    align-self: baseline;
    background: transparent;

    svg {
      color: ${props => props.theme.colors.orange};
    }
  }
`;

export const Legenda = styled.div`
  display: flex;
  flex-direction: column;

  b {
    line-height: 3rem;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    line-height: 3rem;
  }
`;

export const Repositories = styled.div`
  display: flex;
  flex-direction: column;

  b {
    line-height: 3rem;
  }

  a {
    line-height: 3rem;
    color: ${props => props.theme.colors.text};
  }
`;

export const Feed = styled.div`
  margin-top: 3.2rem;
  background: ${props => props.theme.colors.card};
  padding: 2.4rem;
  border-radius: 1rem;

  table {
    width: 100%;

    border-collapse: separate;
    tr {
      td,
      th {
        padding: 8px;
      }

      td {
        font-style: normal;
        font-size: 1.8rem;
        font-weight: 400;

        a {
          width: 100%;
          height: 100%;
          color: ${props => props.theme.colors.text};
        }
      }

      th {
        text-align: left;
        font-size: 2.4rem;
        font-weight: 400;
      }
    }
  }
`;
