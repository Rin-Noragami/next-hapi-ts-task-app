import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        BGcolorCard: string,
        BorColor: string,
        BGcolorButtCre: string,
        TextcolorButtCre: string,
    };
  }
}