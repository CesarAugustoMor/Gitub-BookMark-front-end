import styled from 'styled-components';

export const Container = styled.div`
  height: 9rem;
  left: 0px;
  top: 0px;

  background: ${props => props.theme.colors.text};
  box-shadow: 0px 0px 1.6rem rgba(50, 50, 50, 0.3);
  border-radius: 0px;

  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${props => props.theme.colors.secundary};
    display: flex;
    align-items: center;

    img {
      height: 6rem;
      margin-right: 1rem;
      border-radius: 50%;
    }
  }

  h1 {
    color: ${props => props.theme.colors.secundary};
    font-weight: 900;
    font-size: 3.6rem;
  }

  div {
    color: ${props => props.theme.colors.secundary};

    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
      text-transform: capitalize;
    }
  }

  @media (max-width: 1070px) {
    width: 95%;
  }

  @media (max-width: 1014px) {
    width: 100%;
  }

  @media (max-width: 853px) {
    width: 90%;
    justify-content: space-between;
    a {
      margin: auto 0;
    }
  }
`;
