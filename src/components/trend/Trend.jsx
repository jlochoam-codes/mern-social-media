import React from 'react'
import './Trend.css'

const Trend = ({ data }) => {
  return (
    <div className='Trend'>
      <div className="TrendName">#{data.name}</div>
      <div className="TrendShares">{data.shares} shares</div>
    </div>
  )
}

export default Trend
