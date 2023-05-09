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

const HeaderLanding = () => {
  return (
    <ContainerHeader>
      <img src={Logo} width={'178px'} height={'28px'} />
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
    </ContainerHeader>
  )
}

export default HeaderLanding
