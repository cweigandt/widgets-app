import { useEffect, useState } from 'react'
import styled from 'styled-components'

const OpacityDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 0.5s ease;
`

const withLoadingOpacity = (WrappedComponent) => {
  return ({ loadTimeout, ...rest }) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setLoaded(true)
      }, loadTimeout || 600)
    }, [loadTimeout])

    return (
      <OpacityDiv loaded={loaded}>
        <WrappedComponent {...rest} />
      </OpacityDiv>
    )
  }
}

export default withLoadingOpacity
