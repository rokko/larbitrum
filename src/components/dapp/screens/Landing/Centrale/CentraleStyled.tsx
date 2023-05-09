import styled from 'styled-components'
const ContainerCentrale = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
`
const TitoloGrande = styled.p`
  /* UI Properties */
  text-align: left;
  font: normal normal 900 80px/10px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
`
const TitoloGrandeSpan = styled.span`
  text-align: left;
  font: normal normal 900 120px/10px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
`

const Sottotitolo = styled.p`
  text-align: left;
  font: normal normal bold 25px/30px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`

const ButtonApp = styled.div`
  width: 202px;
  height: 60px;
  background-color: #00cbbf;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TextButtonApp = styled.p`
  text-align: center;
  font: normal normal bold 22px/26px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`
export {
  ContainerCentrale,
  TitoloGrande,
  TitoloGrandeSpan,
  Sottotitolo,
  ButtonApp,
  TextButtonApp,
}
