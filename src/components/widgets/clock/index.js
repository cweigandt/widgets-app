import { useEffect, useState } from 'react'
import DigitSelector from './DigitSelector'

import styled from 'styled-components'
import withLoadingOpacity from '../../../hoc/withLoadingOpacity'

const ClockDiv = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  font-family: 'Roboto Mono', monospace;
  font-size: 40px;
  color: rgb(38, 27, 70);
`

const getTimeAsDigits = (date) => {
  const ampmHour = date.getHours() % 12 || 12

  return [
    Math.floor(ampmHour / 10),
    ampmHour % 10,
    Math.floor(date.getMinutes() / 10),
    date.getMinutes() % 10,
    Math.floor(date.getSeconds() / 10),
    date.getSeconds() % 10,
  ]
}

const Widget = () => {
  const [digits, setDigits] = useState(getTimeAsDigits(new Date()))

  useEffect(() => {
    const interval = setInterval(() => {
      setDigits(getTimeAsDigits(new Date()))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <ClockDiv>
      <DigitSelector digit={digits[0]} maxDigit={1} />
      <DigitSelector digit={digits[1]} />
      :
      <DigitSelector digit={digits[2]} maxDigit={5} />
      <DigitSelector digit={digits[3]} />
      :
      <DigitSelector digit={digits[4]} maxDigit={5} />
      <DigitSelector digit={digits[5]} />
    </ClockDiv>
  )
}

export default withLoadingOpacity(Widget)
