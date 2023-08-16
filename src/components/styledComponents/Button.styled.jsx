import styled from "styled-components"

export const Button = styled.button`
    background-color: ${({bg}) => bg || "white"};
    color: ${({renk}) => renk || "white"};
    border: 1px solid #a62440;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    padding: 1rem 1.2rem;
    font-size: 1.1rem;
    margin: 1rem .5rem;
    cursor: pointer;
    &:hover{
        opacity: .9;
        transform: scale(.97);
    }

`