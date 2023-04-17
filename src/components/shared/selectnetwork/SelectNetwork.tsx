import React from 'react'
import {
  BoxSelectNetwork,
  NetworkLogo,
  TestoBiancoGrande,
} from './SelectNetworkStyled'
import Binace from '../../../assets/images/binance.png'
import { TestoBox } from '../connectwallet/ConnectWalletStyled'
const SelectNetwork = () => {
  return (
    <BoxSelectNetwork>
      <TestoBox>Selected Network</TestoBox>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <NetworkLogo src={Binace}></NetworkLogo>
        <TestoBiancoGrande>Binance Smart Chain</TestoBiancoGrande>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdElEQVR4nO2NOwqAMBQEcwM9iJ29hXhkvZkEkn2wEkFBJGo+dm9gmy1mjFEU5QLJlt73RSObeEBkoQgLN8cDwEjAZssBGxzRwB7xfiCwZsqnR3l2BAny5Agy5J8jKJC/RlBBHo3UlN8if8gP6FwXdh6KEtgANG7VQGoeyTYAAAAASUVORK5CYII=" />
      </div>
    </BoxSelectNetwork>
  )
}

export default SelectNetwork
