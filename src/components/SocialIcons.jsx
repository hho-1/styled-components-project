import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { SocialIconsStyled } from './styledComponents/Social.styled'

const SocialIcons = () => {
  return (
    <SocialIconsStyled>
        <li>
            <a href="https://twitter.com">
                <FaTwitter/>
            </a>
        </li>
        <li>
            <a href="https://facebook.com">
                <FaFacebook/>
            </a>
        </li>
        <li>
            <a href="https://linkedin.com">
                <FaLinkedin/>
            </a>
        </li>
    </SocialIconsStyled>
  )
}

export default SocialIcons