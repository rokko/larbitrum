import React from 'react'
import { BoxContatti, ContainerContatti, InputInfo } from './ContattiStyled'
import { SezioneTitolo, TitoloSezione } from '../RoadMap/RoadMapStyled'
import Cerchio from '../../../../../assets/images/cerchioContatti.png'
const Contatti = () => {
  return (
    <ContainerContatti>
      <SezioneTitolo
        style={{
          position: 'absolute',
          border: 'none',
          top: '-110px',
          left: '300px',
        }}
      >
        <TitoloSezione>Contatti</TitoloSezione>
      </SezioneTitolo>
      <BoxContatti>
        <InputInfo></InputInfo>
        <InputInfo></InputInfo>
      </BoxContatti>
      <img
        src={Cerchio}
        style={{
          position: 'absolute',
          top: '-90px',
          left: '180px',
        }}
      />
    </ContainerContatti>
  )
}

export default Contatti
