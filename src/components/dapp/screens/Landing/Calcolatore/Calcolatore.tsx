import React from 'react'
import {
  BoxCalcolatore,
  ContainerCalcolatore,
  ContenitoreBoxCalcolatori,
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
        <BoxCalcolatore></BoxCalcolatore>
        <BoxCalcolatore></BoxCalcolatore>
        <BoxCalcolatore></BoxCalcolatore>
      </ContenitoreBoxCalcolatori>
    </ContainerCalcolatore>
  )
}

export default Calcolatore
