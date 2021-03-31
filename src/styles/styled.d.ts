import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      text: string;
      background: string;
      blue: string;
      card: string;
      error: string;
    };
  }
}
