import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    html {
        font-family: 'Lato', sans-serif;
        box-sizing: border-box;
        font-size: 20px;
        min-width: 320px;
    }

    a, button { cursor: pointer; text-decoration: none; color: inherit}
`;
