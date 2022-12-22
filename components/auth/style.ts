import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr auto;
`

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

type InputProps = {
  error?: boolean
}

export const Input = styled.input<InputProps>`
  border: 1px solid black;
  padding: 0.5rem;
  margin: 0.5rem 0;
  ::placeholder {
    color: ${({ error }) => error ? 'red' : 'black'};
  }
  
`