import styled from 'styled-components'

const getBGColor = (temperature) => {
  const colors = [
    '#a50026',
    '#d73027',
    '#f46d43',
    '#fdae61',
    '#fee090',
    '#ffffbf',
    '#e0f3f8',
    '#abd9e9',
    '#74add1',
    '#4575b4',
    '#313695',
  ]

  const index = Math.min(Math.max(Math.floor(temperature / 10), 9), 0)
  return `linear-gradient(to bottom right, ${colors[index]} 20%, ${
    colors[index + 1]
  })`
}

const BG = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${(props) => getBGColor(props.temperature)};

  font-size: 24px;
  color: white;
`

const NightOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(21, 34, 56, ${(props) => (props.isDayTime ? 0 : 0.5)});
`

const Background = ({ children, isDayTime, temperature }) => {
  return (
    <BG temperature={temperature}>
      <NightOverlay isDayTime={isDayTime}>{children}</NightOverlay>
    </BG>
  )
}

export default Background
