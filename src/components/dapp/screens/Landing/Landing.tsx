import React from 'react'
import { FooterLanding } from './Footer'
import { HeaderLanding } from './Header'
import { Centrale } from './Centrale'
import { RoadMap } from './RoadMap'

const Landing = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <HeaderLanding />
      <Centrale />
      <RoadMap />
      <FooterLanding />
    </div>
  )
}

export default Landing
