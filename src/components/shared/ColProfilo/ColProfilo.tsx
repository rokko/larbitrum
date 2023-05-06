import React from 'react'
import { ButtonGeneric, DivColonna } from './ColProfiloStyled'
import { Logout } from './logout'
import { MenuLaterale } from './menulaterale'
import { ProfileBox } from './profilebox'
import { TestoMenu } from './menulaterale/MenuLateraleStyled'

const ColProfilo = () => {
  const windowTot = window as any
  const verificaMetamask = typeof windowTot.ethereum !== 'undefined'
  return (
    <DivColonna>
      <ProfileBox />
      <ButtonGeneric onClick={() => console.log(verificaMetamask)}>
        <TestoMenu>Connect Wallet</TestoMenu>
      </ButtonGeneric>
      <MenuLaterale />
      <Logout />
    </DivColonna>
  )
}

export default ColProfilo
