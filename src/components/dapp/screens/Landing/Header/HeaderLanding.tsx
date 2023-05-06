import React from 'react'
import {
  ConnectWalletButton,
  ContainerHeader,
  SectionSocial,
  SectionTesti,
  TestiTitoli,
  TextButtonConnect,
} from './HeaderLandingStyled'

const HeaderLanding = () => {
  return (
    <ContainerHeader>
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
