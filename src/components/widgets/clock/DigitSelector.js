import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  max-width: 15%;
  width: 100px;

  margin: 4px;
`

const GlassMorphism = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 1);
`

const Selector = styled(GlassMorphism)`
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

const GlassDisplay = styled(GlassMorphism)`
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
    <Selector style={{ top: -50 - 73 * digit + 'px' }}>
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
      <GlassDisplay />
    </Wrapper>
  )
}

export default DigitSelector
