import React from 'react'
import { ContainerStyled } from './styledComponents/Container.styled'
import { FlexStyled } from './styledComponents/Flex.styled'
import { ImageStyled } from './styledComponents/Image.styled'
import SocialIcons from './SocialIcons'
import { FooterStyled } from './styledComponents/Footer.styled'

const Footer = () => {
  return (
    <FooterStyled>
        <ContainerStyled>
            <FlexStyled>
                <ImageStyled src='./images/logo_white.png' alt='logo-white' />
            </FlexStyled>
            <FlexStyled>
                <ul>
                    <li>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</li>
                    <li> +1 (571) 360 66 77</li>
                    <li>contact@clarusway.com</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>

                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <SocialIcons/>
            </FlexStyled>
        </ContainerStyled>
    </FooterStyled>
  )
}

export default Footer