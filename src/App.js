import { useState } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
export const App = () => {
  const [floor, setFloor] = useState(0)
  const [isDoorClosed, setIsDoorClosed] = useState(false)

  const handleClick = (floor) => {
    setIsDoorClosed(true)
    setTimeout(() => {
      floor === '0' ?
        setFloor(0)
        : floor === '1' ? setFloor(-50)
          : floor === '2' ? setFloor(-100)
            : floor === '3' ? setFloor(-150)
              : floor === '4' ? setFloor(-200)
                : floor === '5' ? setFloor(-250)
                  : floor === '6' ? setFloor(-300)
                    : setFloor(0)
    }, [1000])
    setTimeout(() => { setIsDoorClosed(false) }, [2000])
  }

  return (
    <PageWrapper>
      <Building>
        <Elevator floor={floor}>
          <Door isDoorClosed={isDoorClosed}></Door>
        </Elevator>
      </Building>
      <Controls>
        <Button
          onClick={(event) => handleClick(event.currentTarget.innerHTML)}
        >
          0
        </Button>
        <Button
          onClick={(event) => handleClick(event.currentTarget.innerHTML)}
        >
          1
        </Button>
        <Button
          onClick={(event) => handleClick(event.currentTarget.innerHTML)}
        >
          2
        </Button>
        <Button
          onClick={(event) => handleClick(event.currentTarget.innerHTML)}
        >
          3
        </Button>
        <Button
          onClick={(event) => handleClick(event.currentTarget.innerHTML)}
        >
          4
        </Button>
        <Button
          onClick={(event) => handleClick(event.currentTarget.innerHTML)}
        >
          5
        </Button>
        <Button
          onClick={(event) => handleClick(event.currentTarget.innerHTML)}
        >
          6
        </Button>
      </Controls>
    </PageWrapper>
  )
}

/*---> Styles <---*/
export const PageWrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
`

export const Building = styled.div`
  border: 1px solid red;
  height: 350px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Elevator = styled.div`
  border: 1px solid red;
  height: 50px;
  width: 100px;
  transition: transform 1s;
  position: absolute;
  transform: ${(props) => `translateY(${props.floor}px)`};
`

export const Door = styled.div`
border: 1px solid black;
height: 100%;
width: ${(props) => props.isDoorClosed ? '100%' : '0%'};
background: gray;
transition: width 1s ease-in-out;
`

export const Controls = styled.div`
  border: 1px solid yellow;
  margin-top: 30px;
  height: 100px;
  width: 400px;
  display: flex;
`

export const Button = styled.div`
  border: 1px solid black;
  height: 50px;
  width: 50px;
  cursor: pointer;
`