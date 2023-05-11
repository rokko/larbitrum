import React from 'react'

import {
  ButtonApp,
  ContainerCentrale,
  Sottotitolo,
  TextButtonApp,
  TitoloGrande,
  TitoloGrandeSpan,
} from './CentraleStyled'

import fotoDestra from '../../../../../../src/assets/images/fotodestra.png'
const Centrale = () => {
  return (
    <ContainerCentrale>
      <div>
        <TitoloGrande>Benvenuti in</TitoloGrande>
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
      <img
        src={fotoDestra}
        style={{
          position: 'absolute',
          top: '0px',
          left: ' 878px',
          width: '967px',
          height: '800px',
        }}
      />
    </ContainerCentrale>
  )
}
export default Centrale
