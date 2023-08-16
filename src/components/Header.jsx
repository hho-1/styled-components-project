import React from 'react'
import { Button } from './styledComponents/Button.styled'
import { ImageStyled } from './styledComponents/Image.styled'
import { FlexStyled } from './styledComponents/Flex.styled'

const Header = () => {
  return (
    <FlexStyled>
        <div>
            <h1>The IT Career of Your Dreams Starts Here!</h1>
            <p>
                Clarusway is a leading international software Bootcamp. Join a micro
                class online with other trainees and learn coding skills with a
                highly-skilled instructor.
            </p>
            <Button bg="#af3a53">Start Your New Career</Button>
        </div>
        <ImageStyled src='./images/hero.jpg'/>
    </FlexStyled>
  )
}

export default Header