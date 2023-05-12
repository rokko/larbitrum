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
        </BoxCalcolatore>
        <BoxCalcolatore>
          <TestoSuperioreBox>Tempo</TestoSuperioreBox>
        </BoxCalcolatore>
        <BoxCalcolatore>
          <TestoSuperioreBox>Profitto Stimato</TestoSuperioreBox>
        </BoxCalcolatore>
      </ContenitoreBoxCalcolatori>
    </ContainerCalcolatore>
  )
}

export default Calcolatore
