import React from 'react'
import {
  BoxCalcolatore,
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
        </BoxCalcolatore>
        <BoxCalcolatore>
          <TestoSuperioreBox>Profitto Stimato</TestoSuperioreBox>
          <Input
            size="lg"
            variant="soft"
            style={{
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
    </ContainerCalcolatore>
  )
}

export default Calcolatore
