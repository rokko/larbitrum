import styled from 'styled-components'

const ContainerCalcolatore = styled.div`
  width: 100%;
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ContenitoreBoxCalcolatori = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

const BoxCalcolatore = styled.div`
  width: 448px;
  height: 120px;
  /* UI Properties */
  background: #131315 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
`

export { ContainerCalcolatore, BoxCalcolatore, ContenitoreBoxCalcolatori }
