import React, { useEffect, useState } from 'react'
import '../../styles/trafficLight.css'
let trafficLights = ["red", "yellow", "green"]
let repeatTrafficLights = [...trafficLights]

const TrafficComponent = () => {
  const [choosenColor, setChoosenColor] = useState("")
  const [showButton, setShowButton] =useState(true)
  
  function setLight() {
    if(repeatTrafficLights.length == 0) {
      repeatTrafficLights = [...trafficLights]
    }
    setChoosenColor(repeatTrafficLights[0])
    repeatTrafficLights.splice(0, 1)
  }
  function extraLightColor() {
    if (showButton) {
      trafficLights.push("purple")
      repeatTrafficLights.push("purple")
      setChoosenColor('purple')
      setShowButton(false)
    }
  }
  const listItems = trafficLights.map((item) => {
    return <div key={item} className={choosenColor == item ? `${item} circle selected`: `${item} circle`} onClick={() => setChoosenColor(item)}></div>
  })
  return (
    <>
     <div className="traffic-wrapper d-flex justify-content-center align-items-center">
      <div>
      <div className="traffic-handle"></div>
      <div className="traffic-lights">
        {listItems}
      </div>
      </div>
     </div>
      <button className='m-auto btn btn-primary' onClick={() => setLight()}>Traffic Light Button</button>
      <button className='m-auto btn btn-primary' disabled={!showButton} onClick={() => extraLightColor()}>Extra Color</button>
    </>
  )
}

export default TrafficComponent