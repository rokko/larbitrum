import React from 'react'
import { BoxContatti, ContainerContatti, InputInfo } from './ContattiStyled'
import { SezioneTitolo, TitoloSezione } from '../RoadMap/RoadMapStyled'
const Contatti = () => {
  return (
    <ContainerContatti>
      <SezioneTitolo>
        <TitoloSezione>Contatti</TitoloSezione>
      </SezioneTitolo>
      <BoxContatti>
        <InputInfo></InputInfo>
        <InputInfo></InputInfo>
      </BoxContatti>
    </ContainerContatti>
  )
}

export default Contatti
