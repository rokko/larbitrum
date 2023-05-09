import styled from 'styled-components'

const ContainerContatti = styled.div`
  width: 100%;
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const BoxContatti = styled.div`
  width: 1272px;
  height: 570px;
  /* UI Properties */
  background: transparent 0% 0% no-repeat padding-box;
  background-color: #131315;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  opacity: 1;
`

const InputInfo = styled.input`
  width: 554px;
  height: 60px;
  /* UI Properties */
  background: 0% 0% no-repeat padding-box;
  background-color: white;
  border-radius: 15px;
  opacity: 1;
`
export { ContainerContatti, BoxContatti, InputInfo }
