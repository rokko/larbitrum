import React from 'react'
import {
  ContainerFooter,
  SecondaParteFooter,
  TestoFooter,
} from './FooterLandingStyled'
import { ReactComponent as Facebook } from '../assets/iconeSocial/facebook.svg'
import { ReactComponent as Instagram } from '../assets/iconeSocial/instagram.svg'
import { ReactComponent as Linkedin } from '../assets/iconeSocial/linkedin.svg'

const FooterLanding = () => {
  return (
    <ContainerFooter>
      <TestoFooter>© 2023 Larbitrum. All right reserved</TestoFooter>
      <SecondaParteFooter>
        <Facebook
          style={{
            background:
              "transparent url('img/Icon awesome-facebook.png') 0% 0% no-repeat padding-box",
            opacity: 1,
          }}
        ></Facebook>
        <Instagram></Instagram>
        <Linkedin></Linkedin>
      </SecondaParteFooter>

      <SecondaParteFooter>
        <TestoFooter>Cookie setting</TestoFooter>
        <TestoFooter>Privacy and cookies policy</TestoFooter>
        <TestoFooter>Terms of use</TestoFooter>
      </SecondaParteFooter>
    </ContainerFooter>
  )
}

export default FooterLanding
