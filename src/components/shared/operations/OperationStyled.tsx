import styled from 'styled-components'

const BoxOperation = styled.div`
  width: 19vw;
  height: 19vw;
  background: #131315 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 3rem;
  align-items: center;
  align-content: center;
  margin-left: 20px;
`

const BoxPercentuale = styled.div`
  width: 16.89vw;
  height: 4.63vw;
  background: var(--unnamed-color-1c1c1e) 0% 0% no-repeat padding-box;
  background: #1c1c1e 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
`

const ButtonStart = styled.button`
  width: 16.89vw;
  height: 3.15vw;
  /* UI Properties */
  background: var(--unnamed-color-00c7be) 0% 0% no-repeat padding-box;
  background: #00c7be 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  border: none;
`

const TestoUpdate = styled.p`
  color: var(--unnamed-color-28cd41);
  text-align: center;
  font-size: 32px;
  font-family: PoppinsNormal;
  letter-spacing: 0px;
  color: #28cd41;
  opacity: 1;
`
export { BoxOperation, BoxPercentuale, ButtonStart, TestoUpdate }
