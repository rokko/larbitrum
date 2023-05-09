import React from 'react'
import RoMap from '../assets/sezioni/RoadMap.png'
import {
  ContainerRoadmap,
  SezioneTitolo,
  TestoSezione,
  TitoloSezione,
} from './RoadMapStyled'

const RoadMap = () => {
  return (
    <ContainerRoadmap>
      <SezioneTitolo>
        <TitoloSezione>RoadMap</TitoloSezione>
        <TestoSezione>Come vogliamo raggiungere l'obiettivo</TestoSezione>
      </SezioneTitolo>
      <img src={RoMap} style={{ width: '1300px' }} />
    </ContainerRoadmap>
  )
}

export default RoadMap
