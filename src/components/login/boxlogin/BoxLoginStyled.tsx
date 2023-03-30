import styled from 'styled-components'

const BoxLoginStyled = styled.div`
  width: 35vw;
  height: 32vw;
  background: #131315 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`

const ButtonLogin = styled.button`
  width: 32.5vw;
  height: 3.125vw;
  background: var(--unnamed-color-00c7be) 0% 0% no-repeat padding-box;
  background: #00c7be 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  border: none;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const TopText = styled.p`
  text-align: left;
  font-family: PoppinsMedium;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-size: 28px;
  margin: 0;
`

const SecondText = styled.p`
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font-family: PoppinsNormal;
  font-size: 20px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.4;
  margin: 0;
`

const GroupText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export { BoxLoginStyled, ButtonLogin, TopText, SecondText, GroupText }
