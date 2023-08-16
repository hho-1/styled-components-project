import React from 'react'
import { Button } from './styledComponents/Button.styled'
import { NavStyled } from './styledComponents/Nav.styled'

const Nav = () => {
  return (
    <NavStyled>
        <div>
            <img src="./images/logo.png" alt="logo" width={"300px"}/>
        </div>
        <div>
            <Button renk="#af3a53">Apply Courses</Button>
            <Button bg="#af3a53">Talk to Advisor</Button>
        </div>
    </NavStyled>
  )
}

export default Nav