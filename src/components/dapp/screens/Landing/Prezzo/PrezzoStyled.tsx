import styled from 'styled-components'

const ContainerPrezzo = styled.div`
  width: 100%;
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`

const BoxPrezzo = styled.div`
  top: 2855px;
  left: 297px;
  width: 398px;
  height: 903px;
  /* UI Properties */
  background: #131315 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerCheck = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #00cbbf 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const Container3Prezzi = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`

const PrimoTitolo = styled.p`
  text-align: left;
  font: normal normal bold 50px/0px Raleway;

  color: #00cbbf;
  opacity: 1;
`

const SecondoTitolo = styled.p`
  text-align: right;
  font: normal normal 900 50px/0px Raleway;
  margin-top: 10px;
  color: #ffffff;
  opacity: 1;
`

const ButtonCompra = styled.div`
  width: 282px;
  height: 60px;
  background-color: #00cbbf;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TestoLista = styled.p`
  text-align: left;
  font: normal normal 22px/26px Raleway;
  font-weight: medium;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`

const RaggruppoTestoLista = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 80%;
  align-items: center;
`
const TitoloGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export {
  ContainerPrezzo,
  BoxPrezzo,
  Container3Prezzi,
  PrimoTitolo,
  ButtonCompra,
  TestoLista,
  RaggruppoTestoLista,
  ContainerCheck,
  SecondoTitolo,
  TitoloGroup,
}
