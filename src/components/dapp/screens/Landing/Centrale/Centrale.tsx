import React from 'react'

import {
  ButtonApp,
  ContainerCentrale,
  Sottotitolo,
  TextButtonApp,
  TitoloGrande,
  TitoloGrandeSpan,
} from './CentraleStyled'
const Centrale = () => {
  return (
    <ContainerCentrale>
      <div>
        <TitoloGrande>Bevenuti in</TitoloGrande>
        <TitoloGrandeSpan>Larbitrum!</TitoloGrandeSpan>
      </div>
      <Sottotitolo>
        Una piattaforma che utilizza la tecnologia blockchain per
        <br /> offrire un'opportunità di investimento unica per gli
        <br /> appassionati di criptovalute.
      </Sottotitolo>
      <ButtonApp>
        <TextButtonApp>Vai all'App</TextButtonApp>
      </ButtonApp>
    </ContainerCentrale>
  )
}
export default Centrale
