import styled from "styled-components";

export const StyledSection = styled.section `

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;


    max-width: 37rem;
    width: 100%;

    h2 {
        
        display: inline-block;
        width: 100%;

        font-weight: 700;
        font-size: 1.275rem;

        margin-top: 1rem;
        margin-bottom: 1rem;

        color: var(--color-grey-4);
    }

`

export const StyledCard = styled.li`

    background-color: var(--color-grey-1);
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;
    
    margin-bottom: 1.5rem;

    h3 {
        
        font-weight: 700;
        font-size: 1.275rem;

        margin-bottom: 1rem;

        color: var(--color-grey-4);
    }
    
    .infoDiv{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        
        width: 100%;
        padding: 0.5rem 1rem;
        
        border-left: 4px solid var(--color-secondary);
    }

    .typeOfInfo {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        
        width: 100%;
        padding: 0.5rem 1rem;
        
        border-left: 4px solid var(--color-secondary);
    }

    .lessMoney {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        
        width: 100%;
        padding: 0.5rem 1rem;
        
        border-left: 4px solid var(--color-grey-2);

    }

    .lessMoney > button {

        font-weight: 400;
        font-size: 0.725rem;

        color: var(--color-grey-4);
        background-color: var(--color-grey-2);

        border-radius: 5px;
        padding:0.3rem 0.8rem;
    }


    .typeOfInfo > button {

        font-weight: 400;
        font-size: 0.725rem;

        color: var(--color-grey-4);
        background-color: var(--color-grey-2);

        border-radius: 5px;
        padding:0.3rem 0.8rem;
    }

`
