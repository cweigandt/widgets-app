import styled from 'styled-components'
import withLoadingOpacity from '../../hoc/withLoadingOpacity'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding-bottom: 20%;

  color: rgb(75, 75, 90);
`

const IntroLine = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin: 20px;

  font-size: 28px;
`

const Selfie = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;

  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 13px 2px lightslategray;

  background-image: url('/profile.jpg');
  background-repeat: no-repeat;
  background-size: 200%;
  background-position-x: -50px;
`

const TextSection = styled.div`
  width: 50%;

  font-size: 22px;
`

const AboutMe = () => {
  return (
    <Wrapper>
      <IntroLine>
        <Selfie />
        <h1>👋 Hi I'm Christian</h1>
      </IntroLine>
      <TextSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TextSection>
    </Wrapper>
  )
}

export default withLoadingOpacity(AboutMe)
