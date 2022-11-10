import { ArrowDownwardSharp } from '@mui/icons-material'
import React from 'react'
import Chart from '../chart/Chart'
import './style.css'
export default function Featuredinfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$100</span>
                <span className="featuredMoneyRate">+100 <ArrowDownwardSharp/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$100</span>
                <span className="featuredMoneyRate">-100 <ArrowDownwardSharp/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Purchase</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$100</span>
                <span className="featuredMoneyRate">-100 <ArrowDownwardSharp/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
