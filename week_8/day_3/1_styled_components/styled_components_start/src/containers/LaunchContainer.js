// Importing
import {useState, useEffect} from "react";
import LaunchSelector from "../components/LaunchSelector";
import LaunchDetails from "../components/LaunchDetails";

//CSS that's affecting whatevers in the return session
import styled from 'styled-components'

//Always put CSS above the Javascript logic!

const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  color: #fff;
  /* background: linear-gradient(45deg, blue, red); */
  background-color: #062c43;
  margin: 0;
  padding: 1em;
`


// Javascript Logic Here
const LaunchContainer = () => {

  const [launch, setLaunch] = useState(null);
  const [selectedLaunchId, setSelectedLaunchId] = useState(1);

  useEffect(() => {
    getLaunch();
  }, [selectedLaunchId]);

  const getLaunch = async () => {
    const launchResponse = await fetch(`https://api.spacexdata.com/v3/launches/${selectedLaunchId}`)
    const launchData = await launchResponse.json()
    setLaunch(launchData)
  }

  const increaseSelectedLaunch = () => {
    const nextLaunchIndex = selectedLaunchId + 1;
    if (nextLaunchIndex <= 110){
      setSelectedLaunchId(nextLaunchIndex);
    }
  }

  const decreaseSelectedLaunch = () => {
    const nextLaunchIndex = selectedLaunchId - 1;
    if (nextLaunchIndex >= 1){
      setSelectedLaunchId(nextLaunchIndex);
    }
  }

  // JSX renders here
  return (
    <>
      <Title>SpaceX Launch Details</Title>
      <LaunchSelector 
        launchIncrease={increaseSelectedLaunch}
        launchDecrease={decreaseSelectedLaunch}
      />
      <LaunchDetails 
        launch={launch}
      />
    </>
  )
}

export default LaunchContainer;