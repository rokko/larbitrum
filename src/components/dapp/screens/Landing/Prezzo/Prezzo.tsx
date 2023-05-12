import React from 'react'
import { BoxPrezzo, Container3Prezzi, ContainerPrezzo } from './PrezzoStyled'
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
      <Container3Prezzi>
        <BoxPrezzo></BoxPrezzo>
        <BoxPrezzo></BoxPrezzo>
        <BoxPrezzo></BoxPrezzo>
      </Container3Prezzi>
    </ContainerPrezzo>
  )
}

export default Prezzo
