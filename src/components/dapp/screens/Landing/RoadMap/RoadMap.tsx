import React from 'react'
import RoMap from '../assets/sezioni/RoadMap.png'
import { ContainerRoadmap } from './RoadMapStyled'

const RoadMap = () => {
  return (
    <ContainerRoadmap>
      <img src={RoMap} style={{ width: '1300px' }} />
    </ContainerRoadmap>
  )
}

export default RoadMap
