import React from 'react'
import EventCard from '../components/EventCard'
import testFlyer from '../assets/flyer2.png'
import './OneRSO.css'

function OneRSO() {
  return (
    <div  className="main-container">
      <div>
        <EventCard img={testFlyer} />
        <EventCard img={testFlyer} />
        <EventCard img={testFlyer} />
      </div>
    </div>
  )
}

export default OneRSO