import React from 'react'
import {
  BoxMission,
  ContainerSviluppatori,
  TestoMission,
  TitoloMission,
} from './SviluppatoriStyled'
import {
  SezioneTitolo,
  TestoSezione,
  TitoloSezione,
} from '../RoadMap/RoadMapStyled'

const Sviluppatori = () => {
  return (
    <ContainerSviluppatori>
      <SezioneTitolo>
        <TitoloSezione>Sviluppatori</TitoloSezione>
        <TestoSezione>Scopri di più su ChainGrowth</TestoSezione>
      </SezioneTitolo>
      <BoxMission>
        <TitoloMission>La Mission</TitoloMission>
        <TestoMission>
          Chaingrowth, tramite i suoi servizi innovativi che permettono di
          effettuare un'analisi approfondita dei contratti intelligenti,
          rilevare tutte le vulnerabilità presenti e successivamente
          correggerle, mira ad accompagnare quante piu aziende dal punto di
          vista dell'auditing e della sicurezza in ambito blockchain
        </TestoMission>
      </BoxMission>
    </ContainerSviluppatori>
  )
}

export default Sviluppatori
