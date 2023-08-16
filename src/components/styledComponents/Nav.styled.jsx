import styled from "styled-components"

export const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    //background-color: #eee;
    background-color: ${({theme}) => theme.colors.primary};   //theme olusturduktan sonra üstteki yerine bu sekilde de olusturabiliyoruz.

    /* @media (max-width: 700px){
        flex-direction: column;
        text-align: center;
    } */
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex-direction: column;
        text-align: center;
    }

`