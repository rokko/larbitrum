import React from 'react'
import { ContainerDiv } from '../../../login/LoginStyled'
import { ColProfilo } from '../../../shared/ColProfilo'
import { ConnectWallet } from '../../../shared/connectwallet'
import { ModeOperation } from '../../../shared/modeoperation'
import { TokenBalance } from '../../../shared/tokenbalance'

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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ConnectWallet />
          <ModeOperation />
        </div>
        <TokenBalance />
      </div>
    </ContainerDiv>
  )
}

export default HomePage
