import styled from 'styled-components'

const DivColonna = styled.div`
  width: 17.29vw;
  height: 100vh;
  background: #131315 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
const ButtonGeneric = styled.button`
  border: none;
  background: var(--unnamed-color-3a3a3c) 0% 0% no-repeat padding-box;
  background: #3a3a3c 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  width: 15.2vw;
  height: 3.12vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export { DivColonna, ButtonGeneric }
