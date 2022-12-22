import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

  align-items: center;
  justify-items: center;
`

export const Wrapper = styled.div`
  display: grid;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  align-content: center;

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 1rem;
`