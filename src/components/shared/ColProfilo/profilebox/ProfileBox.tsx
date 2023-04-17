import React from 'react'
import { BoxProfile } from './ProfileBoxStyled'
import { TestoBiancoGrande } from '../../selectnetwork/SelectNetworkStyled'
import { TestoPiccoloSottoBalance } from '../../currentbalance/CurrentBalanceStyled'

const ProfileBox = () => {
  return (
    <BoxProfile>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          padding: '0.5rem',
        }}
      >
        <img
          style={{ width: '48px', height: '48px', marginRight: '0.2rem' }}
          src="data:image/png;base64,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"
        ></img>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TestoBiancoGrande>Mario Rossi</TestoBiancoGrande>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <TestoPiccoloSottoBalance>Balance</TestoPiccoloSottoBalance>
            <TestoPiccoloSottoBalance>BNB 97.36</TestoPiccoloSottoBalance>
          </div>
        </div>
      </div>
    </BoxProfile>
  )
}

export default ProfileBox
