import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      text: string;
      textSecundary: string;
      background: string;
      blue: string;
      card: string;
      error: string;
      orange: string;
    };
  }
}
