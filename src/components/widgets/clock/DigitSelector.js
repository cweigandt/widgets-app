import styled from 'styled-components'

const GlassDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  margin: 10px;

  font-size: 32px;
`

const DigitSelector = ({ digit }) => {
  return <GlassDisplay className='glassmorphism'>{digit}</GlassDisplay>
}

export default DigitSelector
