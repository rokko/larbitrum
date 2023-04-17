import React from 'react'
import {
  BoxOperation,
  BoxPercentuale,
  ButtonStart,
  TestoUpdate,
} from './OperationStyled'
import { TestoBiancoGrande } from '../selectnetwork/SelectNetworkStyled'
import BitCoin from '../../../assets/images/bitcoin.png'
import Ethereum from '../../../assets/images/etherum.png'
import { TestoPiccoloSottoBalance } from '../currentbalance/CurrentBalanceStyled'

const Operation = () => {
  return (
    <BoxOperation>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
          <img src={BitCoin} style={{ width: '48px', height: '48px' }}></img>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TestoBiancoGrande>BTC</TestoBiancoGrande>
            <TestoPiccoloSottoBalance>Bitcoin</TestoPiccoloSottoBalance>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
          <img src={Ethereum} style={{ width: '48px', height: '48px' }}></img>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TestoBiancoGrande>ETH</TestoBiancoGrande>
            <TestoPiccoloSottoBalance>Ethereum</TestoPiccoloSottoBalance>
          </div>
        </div>
      </div>
      <BoxPercentuale>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1ElEQVR4nO2Zz29MURTH71AtVn7Gj7ATUosiNPrjv5BuigQrJKwrtki6ZFqJrpsIKSJ+bSwkuhBLv1ZdSLHQFjuZ0vKRM3OeuW36Ou/NnJfOTd5n03Rm3jnne+999557jnM5OTk5aQBWA93AZeA+8AH4AfwGZoEp4D1wV39zBCi4ZgHYDQwCX0iPPHMV2FHDx2vgVVYCtgC3gF9eYBPAMNAPHAI2AWuAtcA24ABwSn/zyXtObBSBjTG+ymQh4jjwXe3PAaNAV0obBaAHGAP+qK0ZoC9zITq6I95IPgX2GNjdD7zw7A4BLZkIAdZr4MJP4IyJ4YUzdF43BuEh0GYqRGciEvFV1r9F8DG+eoBp9fVEd0MzISOeiL0mES/vrwP4pj5vmAjRFztaTpnNxBJ+uxbtiDS6xUYjY/pOJPR/0UqInBPCM9MIF/oYJyGuTge7dGrnLLbYlRQyqM+PulABVgGfVUiqE7upoJLFChMuZKik2cKwCxkq9wmh34UMlQuQcNCFDNUUfbMLGaqpQatrIkh7U9RD6qVrIoA2HdxZFzLAVhUy40IGOKxC3rqQAU6qkDEXMlQz8QEXKlTu8x9VSKcLFaBXRUxKQutCBbitQq7VayAp4+bRK0A7MA+UgJ0uYCHP1UexESM+F0wjTOb/rPqeiqsLJzXkIxXAo6aRLu+7U5cTS9WD0xqLuK5/pTTUYRZtvN99XrWxaGEwQsqWj71p7jaJOH4mptXXI7+Y3YjRMl72+cBbZuesO05U3omSJ2KdleH/QvT/Fq3F/tWvpBXQbrTFRrtTeTmZzEScEO/zY970S5Pmnp6+hZRpR68edvPesu0zE1BLiH63QWfHLzRLLewmcFru+9Ib1LZbq1ybNRU/oQlglDuhyym29WYhpOZNEdgOXFnUE0zKpDZD6zuxs0CXioz4JeAO8E77KSWdNSlovNGe4YDuTuEmgDk5OW5F+AdDAqUynPasbQAAAABJRU5ErkJggg==" />
        <TestoUpdate>3.2%</TestoUpdate>
      </BoxPercentuale>
      <ButtonStart>Start </ButtonStart>
    </BoxOperation>
  )
}

export default Operation
