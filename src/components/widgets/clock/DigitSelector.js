import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100px;

  margin: 10px;
`

const Selector = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 12px 0;

  top: -38px;
  transition: top 0.5s ease;
`

const Digit = styled.div`
  margin: 10px;
  transition: opacity 0.5s ease;
`

const GlassDisplay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 50%;
  left: 0;
  transform: translateY(-50%);

  width: 100%;
  height: 100px;

  font-size: 32px;

  backdrop-filter: none;
  -webkit-backdrop-filter: none;
`

// const digitSeparation = 38, 112, 186

const DigitSelector = ({ digit, maxDigit = 9 }) => {
  const generateFull = () => (
    <Selector
      className='glassmorphism'
      style={{ top: -50 - 73 * digit + 'px' }}
    >
      {Array.from(Array(maxDigit + 1).keys()).map((num) => {
        return (
          <Digit
            key={num}
            style={{
              opacity: num === digit ? 1 : 0.1,
            }}
          >
            {num}
          </Digit>
        )
      })}
    </Selector>
  )

  return (
    <Wrapper>
      {generateFull()}
      <GlassDisplay className='glassmorphism' />
    </Wrapper>
  )
}

export default DigitSelector
