import styled from 'styled-components'

const ContainerObiettivo = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
`
const TitoloObiettivo = styled.p`
  text-align: left;
  font: normal normal 600 40px/47px Raleway;
  letter-spacing: 0px;
  color: #00cbbf;
  opacity: 1;
  justify-content: center;
`
const ContainerTitoloObiettivo = styled.div`
  width: 40%;
`
const TestoObiettivo = styled.p`
  text-align: left;
  font: normal normal normal 22px/26px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`

const ContainerTestoObiettivo = styled.div`
  width: 50%;
`
export {
  ContainerObiettivo,
  TestoObiettivo,
  TitoloObiettivo,
  ContainerTitoloObiettivo,
  ContainerTestoObiettivo,
}
