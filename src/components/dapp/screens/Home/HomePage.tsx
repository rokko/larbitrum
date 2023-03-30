import React from 'react'
import { ContainerDiv } from '../../../login/LoginStyled'
import { ColProfilo } from '../../../shared/ColProfilo'
import { ConnectWallet } from '../../../shared/connectwallet'
import { ModeOperation } from '../../../shared/modeoperation'

const HomePage = () => {
  return (
    <ContainerDiv
      style={{
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <ColProfilo></ColProfilo>
      <ConnectWallet />
      <ModeOperation />
    </ContainerDiv>
  )
}

export default HomePage
