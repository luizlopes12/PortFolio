import React from 'react'
import { ButtonStyle } from './styled'

const LinkButton = ({children}) => {
  return (
    <ButtonStyle>{children}</ButtonStyle>
  )
}

export default LinkButton