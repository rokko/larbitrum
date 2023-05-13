import styled from 'styled-components'

const ContainerSviluppatori = styled.div`
  width: 100%;
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 50px;
`

const BoxMission = styled.div`
  width: 1272px;
  height: 370px;
  /* UI Properties */
  background: transparent 0% 0% no-repeat padding-box;
  background-color: #131315;
  border-radius: 15px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 4rem;
`

const TitoloMission = styled.p`
  text-align: center;
  font: normal normal bold 40px/26px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
`

const TestoMission = styled.p`
  text-align: center;
  font: normal normal normal 22px/26px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
`

export { ContainerSviluppatori, BoxMission, TitoloMission, TestoMission }
