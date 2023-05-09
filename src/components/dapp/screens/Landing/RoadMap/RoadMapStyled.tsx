import styled from 'styled-components'

const ContainerRoadmap = styled.div`
  width: 100%;
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const TitoloSezione = styled.p`
  text-align: left;
  font: normal normal 600 40px/47px Raleway;
  letter-spacing: 0px;
  color: #00cbbf;
  opacity: 1;
`
const SezioneTitolo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 1300px;
`
const TestoSezione = styled.p`
  text-align: right;
  font: normal normal normal 25px/30px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`
export { ContainerRoadmap, TitoloSezione, SezioneTitolo, TestoSezione }
