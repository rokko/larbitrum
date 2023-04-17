import React from 'react'
import { BoxSingolaoperazione } from './BoxstoricoStyled'
import { TestoBox } from '../connectwallet/ConnectWalletStyled'
import { BoxdeiCoin } from '../tokenbalance/boxcoin/BoxCoinStyled'
import BitCoin from '../../../../src/assets/images/bitcoin.png'
import Binance from '../../../../src/assets/images/binance.png'
import { TestoBiancoGrande } from '../selectnetwork/SelectNetworkStyled'
import { TestoPiccoloSottoBalance } from '../currentbalance/CurrentBalanceStyled'
const Boxstorico = () => {
  return (
    <BoxSingolaoperazione>
      <TestoBox>Historical operations</TestoBox>
      <BoxdeiCoin style={{ gap: '13rem', padding: '0.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={BitCoin} style={{ width: '48px', height: '48px' }}></img>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <TestoBiancoGrande>Bitcoin</TestoBiancoGrande>
              <TestoPiccoloSottoBalance>BTC</TestoPiccoloSottoBalance>
            </div>
          </div>
          <img src="https://img.icons8.com/material-outlined/48/000000/refresh--v1.png" />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={Binance} style={{ width: '48px', height: '48px' }}></img>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <TestoBiancoGrande>Binance</TestoBiancoGrande>
              <TestoPiccoloSottoBalance>BNB</TestoPiccoloSottoBalance>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TestoBiancoGrande>+BNB 2,68</TestoBiancoGrande>
            <TestoPiccoloSottoBalance>+$2,68</TestoPiccoloSottoBalance>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TestoBiancoGrande>13.03.2023</TestoBiancoGrande>
            <TestoPiccoloSottoBalance>20:47 UTC</TestoPiccoloSottoBalance>
          </div>
        </div>
      </BoxdeiCoin>
    </BoxSingolaoperazione>
  )
}

export default Boxstorico
