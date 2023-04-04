import React from 'react'
import { BoxdeiCoin } from './boxcoin/BoxCoinStyled'
import { BoxTokenBalance } from './TokenBalanceStyled'

const TokenBalance = () => {
  return (
    <BoxTokenBalance>
      <BoxdeiCoin />
      <BoxdeiCoin />
      <BoxdeiCoin />
      <BoxdeiCoin />
      <BoxdeiCoin />
      <BoxdeiCoin />
    </BoxTokenBalance>
  )
}

export default TokenBalance
