import React from 'react'
import Chart from '../chart/Chart'
import Featuredinfo from '../featured-info/Featuredinfo'

export default function Homepage() {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Chart/>
    </div>
  )
}
