import React from 'react'
import { FooterLanding } from './Footer'
import { HeaderLanding } from './Header'
import { Centrale } from './Centrale'
import { RoadMap } from './RoadMap'
import { Obiettivo } from './Obiettivo'
import { Calcolatore } from './Calcolatore'
import { Prezzo } from './Prezzo'
import { Contatti } from './Contatti'
import { Sviluppatori } from './Sviluppatori'

const Landing = () => {
  return (
    <div style={{ backgroundColor: 'black', padding: '2rem' }}>
      <HeaderLanding />
      <Centrale />
      <Obiettivo />
      <RoadMap />
      <Calcolatore />
      <Prezzo />
      <Contatti />
      <Sviluppatori />
      <FooterLanding />
    </div>
  )
}

export default Landing
