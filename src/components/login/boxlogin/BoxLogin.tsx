import React from 'react'
import {
  BoxLoginStyled,
  ButtonLogin,
  GroupText,
  SecondText,
  TopText,
} from './BoxLoginStyled'

const BoxLogin = () => {
  return (
    <BoxLoginStyled>
      <GroupText>
        <TopText>Sign up</TopText>
        <SecondText>Request verification of your data to subscribe</SecondText>
      </GroupText>
      <GroupText>
        <TopText style={{ fontSize: '20px' }}>E-mail</TopText>

        <input></input>
        <GroupText style={{ flexDirection: 'row' }}>
          <SecondText style={{ fontSize: '16px', opacity: '0.4' }}>
            Didn’t get a code?
          </SecondText>

          <TopText
            style={{
              fontSize: '16px',
              opacity: '0.4',
              textDecoration: 'underline',
            }}
          >
            Click to resend
          </TopText>
        </GroupText>
      </GroupText>

      <ButtonLogin>
        <TopText style={{ color: '#000000', fontSize: '24px' }}>Verify</TopText>
      </ButtonLogin>
      <GroupText style={{ flexDirection: 'row' }}>
        <SecondText
          style={{ color: '#ffffff', opacity: '0.4', fontSize: '20px' }}
        >
          Already have an account?
        </SecondText>
        <TopText style={{ fontSize: '20px' }}>Log in</TopText>
      </GroupText>
    </BoxLoginStyled>
  )
}

export default BoxLogin
