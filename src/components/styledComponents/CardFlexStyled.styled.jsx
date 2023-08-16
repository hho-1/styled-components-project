import styled from "styled-components"

export const CardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin-bottom: 2rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    gap: 2rem;
    padding: 60px;
    flex-direction: ${({odd}) => odd ? "row-reverse" : "row"};

    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex-direction: column;
        text-align: center;
    }

    img{width:80%}

`