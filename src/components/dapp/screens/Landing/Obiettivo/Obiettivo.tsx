import React from 'react'
import {
  ContainerObiettivo,
  ContainerTestoObiettivo,
  ContainerTitoloObiettivo,
  TestoObiettivo,
  TitoloObiettivo,
} from './ObiettivoStyled'

import Cerchilaterali from '../../../../../assets/images/cerchilaterali.png'

const Obiettivo = () => {
  return (
    <ContainerObiettivo>
      <ContainerTitoloObiettivo>
        <TitoloObiettivo>Il nostro obiettivo</TitoloObiettivo>
      </ContainerTitoloObiettivo>
      <ContainerTestoObiettivo>
        <TestoObiettivo>
          Il nostro obiettivo è di fornire un'esperienza di trading
          automatizzata, affidabile e sicura, che consenta agli utenti di
          sfruttare le opportunità di arbitraggio presenti sui mercati di
          criptovalute.
          <br />
          <br /> Con la nostra DApp, gli utenti possono monitorare i prezzi
          delle criptovalute in tempo reale e utilizzare algoritmi di
          arbitraggio per individuare e sfruttare differenze di prezzo su
          diverse piattaforme di scambio. In questo modo, gli utenti possono
          ottenere profitti significativi con una quantità minima di rischio.
          <br />
          <br /> La nostra piattaforma è costruita sulla tecnologia blockchain,
          il che significa che tutte le transazioni sono crittografate e
          immutabili, garantendo la massima sicurezza e trasparenza per gli
          utenti.
          <br /> <br />
          Inoltre, la nostra DApp è facile da usare, con un'interfaccia
          intuitiva che consente agli utenti di accedere alle informazioni
          necessarie e di eseguire facilmente le transazioni in pochi clic.
          <br />
          <br /> Infine, la nostra DApp è supportata da un team di esperti di
          criptovalute e di sviluppatori blockchain altamente qualificati, che
          lavorano costantemente per migliorare la nostra piattaforma e
          garantire che gli utenti possano trarre il massimo beneficio
          dall'arbitraggio cripto. <br />
          <br />
          In sintesi, la nostra DApp di arbitraggio cripto rappresenta
          un'opportunità unica per gli investitori di criptovalute di ottenere
          profitti significativi con un rischio minimo, utilizzando una
          piattaforma affidabile e sicura costruita sulla tecnologia blockchain.
        </TestoObiettivo>
      </ContainerTestoObiettivo>
      <img
        src={Cerchilaterali}
        style={{
          position: 'absolute',
          width: '1400px',
          height: ' 800px',
          transform: 'matrix(0.97, -0.24, 0.24, 0.97, 0, 0)',
          opacity: '0.59',
          top: '0px',
          left: '400px',
        }}
      />
    </ContainerObiettivo>
  )
}

export default Obiettivo
