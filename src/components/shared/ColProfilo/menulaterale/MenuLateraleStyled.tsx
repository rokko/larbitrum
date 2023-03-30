import styled from 'styled-components'

const DivMenu = styled.div`
  width: 15.2vw;
  height: 10.62vw;
  background: var(--unnamed-color-1c1c1e) 0% 0% no-repeat padding-box;
  background: #1c1c1e 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  display: flex;
  padding: 1rem;
`
const TestoMenu = styled.p`
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font-style: PoppinsMedium;
  font-size: 20px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin: 0;
`

const GroupMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`
export { DivMenu, TestoMenu, GroupMenu }
