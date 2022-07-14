import React from 'react'
import './Trends.css'
import Trend from '../trend/Trend'
import { TrendsData } from '../../Data/TrendsData'

const Trends = () => {
  return (
    <div className='Trends'>
      <div className="TrendsTitle">Trends for you</div>
      {
        TrendsData.map((trend, id) => {
          return <Trend data={trend} id={id} />
        })
      }
    </div>
  )
}

export default Trends
