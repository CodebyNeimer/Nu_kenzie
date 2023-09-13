import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    
    :root {
        --color-primary: rgba(253,55,126,1);
        --color-primary-2: rgba(227,73,129,1);
        --color-secondary: rgba(3,184,152,1);
        --color-grey-4: rgba(33, 37, 41, 1);
        --color-grey-3: rgba(52,58,64,1);
        --color-grey-2: rgba(233,236,232,1);
        --color-grey-1: rgba(248,249,250,1);
        --font-primary: "Nunito";
    }

    body, button, input {
        font-family: "Nunito";
    }

    .formDiv {
        max-width: 450px;
        width: 100%;
    }
    
    body {
        margin-top: 1rem;
    }

`