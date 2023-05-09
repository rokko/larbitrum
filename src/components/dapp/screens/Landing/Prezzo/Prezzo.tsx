import React from 'react'
import { ContainerPrezzo } from './PrezzoStyled'
import {
  SezioneTitolo,
  TestoSezione,
  TitoloSezione,
} from '../RoadMap/RoadMapStyled'

const Prezzo = () => {
  return (
    <ContainerPrezzo>
      <SezioneTitolo>
        <TitoloSezione>Prezzo</TitoloSezione>
        <TestoSezione>Composizione dei pacchetti disponibili</TestoSezione>
      </SezioneTitolo>
    </ContainerPrezzo>
  )
}

export default Prezzo
