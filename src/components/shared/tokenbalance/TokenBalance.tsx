import React from 'react'
import { BoxdeiCoin } from './boxcoin/BoxCoinStyled'
import { BoxTokenBalance } from './TokenBalanceStyled'
import { TestoBox } from '../connectwallet/ConnectWalletStyled'

const TokenBalance = () => {
  return (
    <BoxTokenBalance>
      <TestoBox>Token balance</TestoBox>
      <BoxdeiCoin></BoxdeiCoin>
      <BoxdeiCoin />
      <BoxdeiCoin />
      <BoxdeiCoin />
      <BoxdeiCoin />
      <BoxdeiCoin />
    </BoxTokenBalance>
  )
}

export default TokenBalance
