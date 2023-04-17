import React from 'react'
import { TestoBox } from '../connectwallet/ConnectWalletStyled'
import { BoxModeOperation } from './ModeOperationStyled'
import { TestoBiancoGrande } from '../selectnetwork/SelectNetworkStyled'

const ModeOperation = () => {
  return (
    <BoxModeOperation>
      <TestoBox>Mode</TestoBox>
      <TestoBiancoGrande>Automatic Operations</TestoBiancoGrande>
    </BoxModeOperation>
  )
}

export default ModeOperation
