import { useState } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
export const App = () => {
  const [position, setPosition] = useState(0)
  const [isDoorClosed, setIsDoorClosed] = useState(false)
  const [activeButton, setActiveButton] = useState(null)

  const buttons = [5, 6, 3, 4, 2, 1, 'T']
  const flats = Array.from(Array(6).keys())

  const handleClick = (button) => {
    setActiveButton(button)
    setIsDoorClosed(true)
    setTimeout(() => {
      button === 'T' ?
        setPosition(0)
        : button === 1 ? setPosition(-50)
          : button === 2 ? setPosition(-100)
            : button === 3 ? setPosition(-150)
              : button === 4 ? setPosition(-200)
                : button === 5 ? setPosition(-250)
                  : button === 6 ? setPosition(-300)
                    : setPosition(0)
    }, [1000])
    setTimeout(() => { setIsDoorClosed(false) }, [2000])
    setTimeout(() => { setActiveButton(false) }, [2000])
  }

  return (
    <PageWrapper>
      <Controls>
        {buttons.map((button, index) => (
          <Button
            key={index}
            button={button}
            activeButton={activeButton}
            onClick={() => handleClick(button)}
          >
            {button}
          </Button>
        ))}
      </Controls>
      <BuildingWrapper>
        <BuildingRoof />
        <FloorsWrapper>
          <LeftFloors>
            {flats.map((flat) => (
              <FlatWrapper key={flat}>
                <LeftFlat>
                  <LeftWindow />
                </LeftFlat>
              </FlatWrapper>
            ))}
            <FlatWrapper>
              <LeftFlat>
                <BuildingDoor>
                  <Divider />
                </BuildingDoor>
              </LeftFlat>
            </FlatWrapper>
          </LeftFloors>
          <ElevatorTunnel>
            <Elevator position={position}>
              <ElevatorTop><ElevatorLamp /></ElevatorTop>
              <ElevatorDoor isDoorClosed={isDoorClosed}></ElevatorDoor>
            </Elevator>
          </ElevatorTunnel>
          <RightFloors>
            {flats.map((flat) => (
              <FlatWrapper key={flat}>
                <RightFlat>
                  <RightWindow />
                </RightFlat>
              </FlatWrapper>
            ))}
            <FlatWrapper>
              <RightFlat />
            </FlatWrapper>
          </RightFloors>
        </FloorsWrapper>
        <BuildingBase />
      </BuildingWrapper>

    </PageWrapper>
  )
}

/*---> Styles <---*/
export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  padding: 40px;
`

export const BuildingWrapper = styled.div`
  width: 300px;
  height: 400px;
`

export const BuildingRoof = styled.div`
  background: #F1D298;
  margin: 0px 80px;
  height: 30px;
`

export const FloorsWrapper = styled.div`
  height: 350px;
  display: flex;
  padding: 0px 15px;
`

export const LeftFloors = styled.div`
  height: 350px;
  width: 100px;
`

export const RightFloors = styled.div`
  height: 350px;
  width: 100px;
`

export const FlatWrapper = styled.div`
  height: 50px;
  background: #90E4EB;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const LeftFlat = styled.div`
  height: 45px;
  background: #F1D298;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px;
`

export const LeftWindow = styled.div`
  width: 35px;
  height: 30px;
  background: #F1BB4F;
  margin-right: 10px;
`

export const RightFlat = styled.div`
  height: 45px;
  background: #F1D298;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 5px;

`

export const RightWindow = styled.div`
  width: 35px;
  height: 30px;
  background: #F1BB4F;
  margin-left: 10px;
`

export const BuildingDoor = styled.div`
  border: 3px solid black;
  background: #C2CAC0;
  width: 80%;
  height: 50px;
  margin: -5px auto;
  display: flex;
  justify-content: center;
`

export const Divider = styled.div`
  border: 2px solid black;
  height: 100%;
`

export const BuildingBase = styled.div`
  background: black;
  height: 20px;
`

export const ElevatorTunnel = styled.div`
  height: 350px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #90E4EB;
`

export const ElevatorTop = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`

export const ElevatorLamp = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #67F242;
`

export const Elevator = styled.div`
  border: 3px solid black;
  height: 45px;
  width: 35px;
  transition: transform 1s;
  position: absolute;
  transform: ${(props) => `translateY(${props.position}px)`};
  background: white;
`

export const ElevatorDoor = styled.div`
height: 82%;
width: ${(props) => props.isDoorClosed ? '100%' : '0%'};
background: #C2CAC0;
transition: width 1s ease-in-out;
`

export const Controls = styled.div`
  height: 300px;
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 30px 100px 0px 0px;
`

export const Button = styled.div`
  border: 2px solid #CAC6C5;
  height: 55px;
  width: 55px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: ${(props) => props.activeButton === props.button ? '#53EC26' : '#F0EBEA'};
  border: ${(props) => props.activeButton === props.button ? '2px solid #46AF27 ' : '2px solid #CAC6C5'};

  :hover {
    border: 2px solid #67F242;
  }
`

export const LastButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`