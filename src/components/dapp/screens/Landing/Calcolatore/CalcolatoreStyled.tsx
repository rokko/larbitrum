import styled from 'styled-components'
const ContainerCalcolatore = styled.div`
  width: 100%;
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  z-index: 100;
`

const ContenitoreBoxCalcolatori = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
`

const BoxCalcolatore = styled.div`
  width: 448px;
  height: 120px;

  /* UI Properties */

  background: #131315 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TestoSuperioreBox = styled.p`
  text-align: left;
  font: normal normal normal 20px/24px Raleway;
  letter-spacing: 0px;
  color: #727274;
  opacity: 1;
`

const BoxGiorni = styled.div`
  width: 61px;
  height: 55px;
  /* UI Properties */
  background: #00cbbf 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`
export {
  ContainerCalcolatore,
  BoxCalcolatore,
  ContenitoreBoxCalcolatori,
  TestoSuperioreBox,
  BoxGiorni,
}
