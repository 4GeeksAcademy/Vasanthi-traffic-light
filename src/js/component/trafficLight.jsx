import React, { useEffect, useState } from 'react'
import '../../styles/trafficLight.css'

const TrafficComponent = () => {
  const [choosenColor, setChoosenColor] = useState("")
  // function setLight() {
  //   let arr = ['red']
  //    arr[0].forEach((item, index) => {
  //     setChoosenColor(item)
  //   })
    
  // }
  return (
    <>
     <div className="traffic-wrapper d-flex justify-content-center align-items-center">
      <div>
      <div className="traffic-handle"></div>
      <div className="traffic-lights">
        <div className={choosenColor == 'red' ? 'red circle selected' : "red circle"}  onClick={() => setChoosenColor('red')}></div>
        <div className={choosenColor == 'yellow' ? 'yellow circle selected' : "yellow circle"}  onClick={() => setChoosenColor('yellow')}></div>
        <div className={choosenColor == 'green' ? 'green circle selected' : "green circle"} onClick={() => setChoosenColor('green')}></div>
      </div>
      </div>
     </div>
      <button className='m-auto btn btn-primary' onClick={() => setLight()}>Traffic Light Button</button>
    </>
  )
}

export default TrafficComponent