import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul {
        list-style: none;
    }

    input, select {
        border: none;
        background: transparent;
    }

`
