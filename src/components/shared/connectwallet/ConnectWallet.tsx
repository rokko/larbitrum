import React from 'react'
import { BoxWallet, TestoBox } from './ConnectWalletStyled'
import { TestoBiancoGrande } from '../selectnetwork/SelectNetworkStyled'

const ConnectWallet = () => {
  return (
    <BoxWallet>
      <TestoBox>Connected Wallet</TestoBox>
      <TestoBiancoGrande>OxB049**2b3</TestoBiancoGrande>
    </BoxWallet>
  )
}

export default ConnectWallet
