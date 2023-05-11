import React from 'react'
import {
  ConnectWalletButton,
  ContainerHeader,
  SectionSocial,
  SectionTesti,
  TestiTitoli,
  TextButtonConnect,
} from './HeaderLandingStyled'

import Logo from '../../../../../assets/images/logo.png'
import ZonaInAlto from '../../../../../assets/images/zonainalto.png'

const HeaderLanding = () => {
  return (
    <ContainerHeader>
      <img
        src={Logo}
        width={'178px'}
        height={'28px'}
        style={{ zIndex: '10' }}
      />
      <SectionTesti>
        <TestiTitoli>Home</TestiTitoli>
        <TestiTitoli>RoadMap</TestiTitoli>
        <TestiTitoli>Calcolatore</TestiTitoli>
        <TestiTitoli>Prezzi</TestiTitoli>
        <TestiTitoli>Contatti</TestiTitoli>
      </SectionTesti>
      <SectionSocial></SectionSocial>
      <ConnectWalletButton>
        <TextButtonConnect>Connect Wallet</TextButtonConnect>
      </ConnectWalletButton>

      <img
        src={ZonaInAlto}
        style={{
          top: '-2rem',
          left: '-2rem',
          width: '1921px',
          height: '349px',
          position: 'absolute',
        }}
      />
    </ContainerHeader>
  )
}

export default HeaderLanding
