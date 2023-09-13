import styled from "styled-components";


export const StyledHeader = styled.header`
    width: 100%;
    background: var(--color-grey-1);
    
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    
    padding: 1.5rem;

    img {
        margin-right: 62rem;
    }
    
    @media (max-width: 1100px) {

       

        img {
            display: flex;
            justify-content: flex-start;
            margin: 0;
        
        }

    }

`