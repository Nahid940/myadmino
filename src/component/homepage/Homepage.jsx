import React from 'react'
import Chart from '../chart/Chart'
import Featuredinfo from '../featured-info/Featuredinfo'
import {userData} from '../../dummydata'

export default function Homepage() {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Chart 
          data={userData}
          title="User Analytics"
          dataKey="name"
          grid
         />
    </div>
  )
}
