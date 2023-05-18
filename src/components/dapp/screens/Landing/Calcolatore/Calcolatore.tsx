import React from 'react'
import {
  BoxCalcolatore,
  BoxGiorni,
  ContainerCalcolatore,
  ContenitoreBoxCalcolatori,
  TestoSuperioreBox,
} from './CalcolatoreStyled'
import {
  SezioneTitolo,
  TestoSezione,
  TitoloSezione,
} from '../RoadMap/RoadMapStyled'
import { Input } from '@mui/joy'

import RigheSinistra from '../../../../../assets/images/cerchilaterali.png'

const Calcolatore = () => {
  return (
    <ContainerCalcolatore>
      <SezioneTitolo>
        <TitoloSezione>Calcolatore</TitoloSezione>
        <TestoSezione>Stima il tuo profitto</TestoSezione>
      </SezioneTitolo>
      <ContenitoreBoxCalcolatori>
        <BoxCalcolatore>
          <TestoSuperioreBox>Saldo</TestoSuperioreBox>
          <Input
            size="lg"
            variant="soft"
            style={{
              width: '423px',
              height: ' 55px',
              background: ' #1C1C1E 0% 0% no-repeat padding-box',
              borderRadius: '15px',
              opacity: 1,
            }}
          />
        </BoxCalcolatore>
        <BoxCalcolatore>
          <TestoSuperioreBox>Tempo</TestoSuperioreBox>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              gap: '2rem',
            }}
          >
            <BoxGiorni>1 gg</BoxGiorni>
            <BoxGiorni>180 gg</BoxGiorni>
            <BoxGiorni>360 gg</BoxGiorni>
          </div>
        </BoxCalcolatore>
        <BoxCalcolatore>
          <TestoSuperioreBox>Profitto Stimato</TestoSuperioreBox>
          <Input
            size="lg"
            variant="soft"
            style={{
              zIndex: 10,
              width: '423px',
              height: ' 55px',
              background: ' #1C1C1E 0% 0% no-repeat padding-box',
              borderRadius: '15px',
              opacity: 1,
              outline: 'none',
              border: 'none',
              textDecoration: 'none !important',
            }}
          />
        </BoxCalcolatore>
      </ContenitoreBoxCalcolatori>

      <img
        src={RigheSinistra}
        style={{
          width: '900px',
          position: 'absolute',
          left: '-100px',
        }}
      />
    </ContainerCalcolatore>
  )
}

export default Calcolatore
