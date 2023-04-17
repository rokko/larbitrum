import React from 'react'
import { ContainerDiv } from '../../../login/LoginStyled'
import { ColProfilo } from '../../../shared/ColProfilo'
import { SelectNetwork } from '../../../shared/selectnetwork'
import { ModeOperation } from '../../../shared/modeoperation'
import { Operation } from '../../../shared/operations'

const Operations = () => {
  return (
    <ContainerDiv
      style={{
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <ColProfilo></ColProfilo>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            marginLeft: '1rem',
          }}
        >
          <SelectNetwork />
          <ModeOperation />
        </div>
        <Operation />
      </div>
    </ContainerDiv>
  )
}

export default Operations
