import React from 'react'
import { TestoBox } from '../connectwallet/ConnectWalletStyled'
import {
  BoxCurrentBalance,
  TestoPiccoloSottoBalance,
} from './CurrentBalanceStyled'
import { TestoBiancoGrande } from '../selectnetwork/SelectNetworkStyled'

const CurrentBalance = () => {
  return (
    <BoxCurrentBalance>
      <TestoBox>Current Balance</TestoBox>
      <TestoBiancoGrande>BNB 97,36</TestoBiancoGrande>
      <TestoPiccoloSottoBalance>$29,230.37</TestoPiccoloSottoBalance>
    </BoxCurrentBalance>
  )
}

export default CurrentBalance
