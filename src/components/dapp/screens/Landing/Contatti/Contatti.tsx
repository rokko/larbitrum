import React from 'react'
import {
  BoxContatti,
  ContainerContatti,
  TestoSopraInput,
} from './ContattiStyled'
import { SezioneTitolo, TitoloSezione } from '../RoadMap/RoadMapStyled'
import Cerchio from '../../../../../assets/images/cerchioContatti.png'
import { Input, Textarea } from '@mui/joy'
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TestoSopraInput>Nome*</TestoSopraInput>
            <Input
              size="lg"
              variant="soft"
              style={{
                zIndex: 10,
                width: '423px',
                height: ' 55px',
                background: ' #1C1C1E 0% 0% no-repeat padding-box',
                borderRadius: '15px',
                opacity: 1,
                outline: 'none',
                border: 'none',
                textDecoration: 'none !important',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TestoSopraInput>Cognome*</TestoSopraInput>
            <Input
              size="lg"
              variant="soft"
              style={{
                zIndex: 10,
                width: '423px',
                height: ' 55px',
                background: ' #1C1C1E 0% 0% no-repeat padding-box',
                borderRadius: '15px',
                opacity: 1,
                outline: 'none',
                border: 'none',
                textDecoration: 'none !important',
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TestoSopraInput>Email*</TestoSopraInput>
            <Input
              size="lg"
              variant="soft"
              style={{
                zIndex: 10,
                width: '423px',
                height: ' 55px',
                background: ' #1C1C1E 0% 0% no-repeat padding-box',
                borderRadius: '15px',
                opacity: 1,
                outline: 'none',
                border: 'none',
                textDecoration: 'none !important',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TestoSopraInput>Società*</TestoSopraInput>
            <Input
              size="lg"
              variant="soft"
              style={{
                zIndex: 10,
                width: '423px',
                height: ' 55px',
                background: ' #1C1C1E 0% 0% no-repeat padding-box',
                borderRadius: '15px',
                opacity: 1,
                outline: 'none',
                border: 'none',
                textDecoration: 'none !important',
              }}
            />
          </div>
        </div>
        <Textarea
          style={{
            zIndex: 10,
            width: '1134px',
            height: '135px',
            background: ' #1C1C1E 0% 0% no-repeat padding-box',
            borderRadius: '15px',
            opacity: 1,
            outline: 'none',
            border: 'none',
            textDecoration: 'none !important',
          }}
          minRows={3}
        ></Textarea>
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
