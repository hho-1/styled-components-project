import React from 'react'
import { ImageStyled } from './styledComponents/Image.styled'
import { CardStyled } from './styledComponents/CardFlexStyled.styled'

const Card = ({id, title, body, image}) => {
  return (
    <CardStyled odd = {id % 2}>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <ImageStyled src={`./images/${image}`}/>
        </div>
    </CardStyled>
  )
}

export default Card