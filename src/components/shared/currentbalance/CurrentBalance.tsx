import React from 'react'
import { TestoBox } from '../connectwallet/ConnectWalletStyled'
import { BoxCurrentBalance } from './CurrentBalanceStyled'

const CurrentBalance = () => {
  return (
    <BoxCurrentBalance>
      <TestoBox>Current Balance</TestoBox>
    </BoxCurrentBalance>
  )
}

export default CurrentBalance
