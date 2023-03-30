import React from 'react'
import { DivColonna } from './ColProfiloStyled'
import { Logout } from './logout'
import { MenuLaterale } from './menulaterale'
import { ProfileBox } from './profilebox'

const ColProfilo = () => {
  return (
    <DivColonna>
      <ProfileBox />
      <MenuLaterale />
      <Logout />
    </DivColonna>
  )
}

export default ColProfilo
