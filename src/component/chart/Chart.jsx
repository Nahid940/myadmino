import React from 'react'
import './style.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title,data,dataKey,grid}) {
  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <XAxis dataKey={dataKey} stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <CartesianGrid stroke='#8884d8' strokeDasharray="5 5"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
