import React from 'react'
import { BoxdeiCoin } from './boxcoin/BoxCoinStyled'
import { BoxTokenBalance } from './TokenBalanceStyled'
import { TestoBox } from '../connectwallet/ConnectWalletStyled'
import BitCoin from '../../../assets/images/bitcoin.png'
import { TestoBiancoGrande } from '../selectnetwork/SelectNetworkStyled'
import { TestoPiccoloSottoBalance } from '../currentbalance/CurrentBalanceStyled'

const TokenBalance = () => {
  return (
    <BoxTokenBalance>
      <TestoBox>Token balance</TestoBox>
      <BoxdeiCoin>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginLeft: '2rem',
          }}
        >
          <img src={BitCoin} width={'48px'} height={'48px'} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TestoBiancoGrande style={{ margin: '0px' }}>
              Bitcoin
            </TestoBiancoGrande>
            <TestoPiccoloSottoBalance style={{ margin: '0px' }}>
              BTC
            </TestoPiccoloSottoBalance>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TestoBiancoGrande style={{ margin: '0px' }}>
            BTC 0,392
          </TestoBiancoGrande>
          <TestoPiccoloSottoBalance style={{ color: 'green', margin: '0px' }}>
            BTC 0,392
          </TestoPiccoloSottoBalance>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TestoBiancoGrande style={{ margin: '0px' }}>
            $8.835,99
          </TestoBiancoGrande>
          <TestoPiccoloSottoBalance style={{ margin: '0px' }}>
            EUR €8.076,55{' '}
          </TestoPiccoloSottoBalance>
        </div>
      </BoxdeiCoin>
      <BoxdeiCoin />
    </BoxTokenBalance>
  )
}

export default TokenBalance
