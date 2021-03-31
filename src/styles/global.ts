import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-style:normal;
    scrollbar-width:thin;
    scrollbar-color: rgba(0, 0, 0, 0.5) ${props => props.theme.colors.primary} ;
  }

  body{
    background: ${props => props.theme.colors.background} ;
    color:${props => props.theme.colors.text};
    -webkit-font-smoothing:antialiased;
  }

  html{
    font-size:62.5%;
    height:100%;
  }

  body,input,button{
    font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
    font-size:16px;

  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight:500
  }

  a{
    text-decoration: none;
  }

  li{
    list-style:none;
  }

  button{
    cursor: pointer;
  }


  ::-webkit-scrollbar {
    height: 0.6rem;
    width: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${props => props.theme.colors.primary};
    -webkit-border-radius: 0;
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0;
    border-radius: 0.2rem;
    background: rgba(70, 129, 137, 0.8);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  @media (max-width: 1256px) {
    html{
    font-size:58%;
    }
  }

  @media (max-width: 1145px) {
    html{
    font-size:55%;
    }
  }

  @media (min-width: 854px){
    body{
      overflow:initial !important;
    }
  }
`;
