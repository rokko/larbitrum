import styled from 'styled-components'

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const ConnectWalletButton = styled.div`
  width: 202px;
  height: 60px;
  /* UI Properties */
  background: #00cbbf 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const TextButtonConnect = styled.p`
  text-align: center;
  font: normal normal bold 22px/26px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`

const SectionSocial = styled.div`
  display: flex;
  flex-direction: row;
`

const SectionTesti = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const TestiTitoli = styled.p`
  /* UI Properties */
  text-align: left;
  font: normal normal bold 16px/19px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`
export {
  ContainerHeader,
  ConnectWalletButton,
  TextButtonConnect,
  SectionSocial,
  SectionTesti,
  TestiTitoli,
}
