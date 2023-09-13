import styled, {css} from 'styled-components'


// const FormLabelStyles = css`

//     font-size: 12px;
//     font-weight: 400;
//     line-height: 22px;

// `

export const FormLabel = styled.label`

    font-size: 16px;
    font-weight: 400;
    line-height: 22px;

`

export const StyledForm = styled.form `


    border: 1px solid var(--color-grey-2);
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    max-width: 450px;

    padding: 2.6rem;
    gap: 1.2rem;

    span {
        color: rgba(134, 142, 150, 1);
        font-size: .75rem;
    }

`

export const StyledInput = styled.input`

    height: 3rem;
    width: 100%;

    font-size: 16px;
    font-weight: 400;
    font-style: normal;

    line-height: 26px;

    text-decoration: none;
    text-transform: none;

    background-color: var(--color-grey-1);
    border-radius: .5rem;

    padding: 0 1.25rem;

    :focus {
        border: 2px solid black;
        outline: 0;
    }
`

export const StyledButton = styled.button`

    width: 100%;
    height: 3rem;

    font-size: 1rem;
    font-weight: 500;
    font-style: normal;

    text-decoration: none;
    text-transform: none;

    color: #FFFFFF;

    background-color: var(--color-primary);
    border-radius: 0.5rem;
    
`

export const StyledSelect = styled.select`

    width: 100%;
    height: 3rem;

    padding: 0 1.25rem;

    font-size: 12px;
    font-weight: 400;
    line-height: 22px;

    text-decoration: none;
    text-transform: none;

    color: var(--color-grey-3);
    background-color: var(--color-grey-1);
    border-radius: 0.5rem;

    :focus {
        outline: 0;
        border: 2px solid black;
    }

`