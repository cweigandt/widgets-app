import { useEffect } from 'react'
import KUTE from 'kute.js'
import { ReactComponent as Waves } from '../../svg/waves_1.svg'
import styled from 'styled-components'

const StyledWaves = styled(Waves)`
  position: absolute;
  width: calc(100% + 120px);

  left: -60px;
  bottom: 0;
`

const WavesSVG = () => {
  useEffect(() => {
    const tweens = []
    for (let index = 1; index < 6; index++) {
      const tween = KUTE.fromTo(
        `#waves_1_path_${index}`,
        { path: `#waves_1_path_${index}` },
        { path: `#waves_2_path_${index}` },
        {
          duration: 3000 + 500 * index,
          easing: 'easeInElastic',
          repeat: true,
          yoyo: true,
        }
      )
      tween.start()
      tweens.push(tween)
    }

    return () => {
      tweens.forEach((tween) => {
        tween.stop()
      })
    }
  }, [])

  return <StyledWaves />
}

export default WavesSVG
