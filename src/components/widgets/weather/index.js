import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Background from './Background'

import {
  BiCloud,
  BiCloudDrizzle,
  BiCloudLightRain,
  BiCloudLightning,
  BiCloudRain,
  BiCloudSnow,
  BiMoon,
  BiSun,
  BiWind,
} from 'react-icons/bi'

const Description = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px;

  font-size: 28px;
`

const Temperature = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;

  font-size: 80px;
  line-height: 80px;

  opacity: 0.3;

  @media (max-width: 400px) {
    font-size: 60px;
  }
`

const GlassMorphism = styled.div`
  width: 400px;
  max-width: 80%;
  height: 200px;

  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;

  padding: 20px;
  overflow: hidden;

  font-family: 'Roboto Mono', monospace;
`

const IconWrapper = styled.div`
  & svg {
    width: 80px;
    height: 80px;

    opacity: 0.8;
  }
`

const Location = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  padding: 60px;

  font-family: Arial;
  opacity: 0.2;
`

const WEATHER_ENDPOINT = 'https://api.weather.gov/points/35.7272,-78.8541'
const getWeatherData = (endpoint) => {
  return fetch(endpoint, {
    headers: new Headers({
      'User-Agent': 'weigandt.io',
    }),
  }).then((res) => res.json())
}

const Widget = () => {
  const [weatherDescription, setWeatherDescription] = useState('')
  const [temperature, setTemperature] = useState('')
  const [isDayTime, setIsDayTime] = useState(false)

  useEffect(() => {
    getWeatherData(WEATHER_ENDPOINT)
      .then((res) => getWeatherData(res.properties.forecastHourly))
      .then((res) => {
        const weatherData = res.properties.periods[0]
        setWeatherDescription(weatherData.shortForecast)
        setTemperature(parseInt(weatherData.temperature))
        setIsDayTime(weatherData.isDayTime)
      })
  }, [])

  const renderIcon = () => {
    const lowerDesc = weatherDescription.toLowerCase()
    if (lowerDesc.includes('wind')) {
      return <BiWind />
    }
    if (lowerDesc.includes('snow')) {
      return <BiCloudSnow />
    }
    if (lowerDesc.includes('storm')) {
      return <BiCloudLightning />
    }
    if (lowerDesc.includes('drizzle')) {
      return <BiCloudDrizzle />
    }
    if (lowerDesc.includes('light rain')) {
      return <BiCloudLightRain />
    }
    if (lowerDesc.includes('rain')) {
      return <BiCloudRain />
    }
    if (lowerDesc.includes('cloudy')) {
      return <BiCloud />
    }

    return isDayTime ? <BiSun /> : <BiMoon />
  }

  return (
    <Background isDayTime={isDayTime} temperature={temperature}>
      <GlassMorphism>
        <IconWrapper>{renderIcon()}</IconWrapper>
        <Description>{weatherDescription}</Description>
        <Temperature>{temperature}°F</Temperature>
      </GlassMorphism>
      <Location>Apex, NC</Location>
    </Background>
  )
}

export default Widget
