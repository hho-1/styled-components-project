import styled from "styled-components"

export const FlexStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    gap: 1rem;

    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex-direction: column;
        text-align: center;
    }
    

`