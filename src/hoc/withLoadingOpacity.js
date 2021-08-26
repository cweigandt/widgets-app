import { useEffect, useState } from 'react'

const withLoadingOpacity = (WrappedComponent) => {
  return ({ loadTimeout, ...rest }) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setLoaded(true)
      }, 500 || loadTimeout)
    }, [])

    return (
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <WrappedComponent {...rest} />
      </div>
    )
  }
}

export default withLoadingOpacity
