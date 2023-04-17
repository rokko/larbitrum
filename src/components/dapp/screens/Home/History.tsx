import React from 'react'
import { ContainerDiv } from '../../../login/LoginStyled'
import { ColProfilo } from '../../../shared/ColProfilo'
import { SelectNetwork } from '../../../shared/selectnetwork'
import { CurrentBalance } from '../../../shared/currentbalance'
import { ConnectWallet } from '../../../shared/connectwallet'
import { Boxstorico } from '../../../shared/boxstorico'

const HistoryPage = () => {
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            marginLeft: '1rem',
          }}
        >
          <SelectNetwork />
          <CurrentBalance />
          <ConnectWallet />
        </div>
        <Boxstorico />
      </div>
    </ContainerDiv>
  )
}

export default HistoryPage
