'use client'

import React, { useEffect } from "react";
import Badgesvg from "./Svg/Badgesvg";
import Badgesvgblue from './Svg/Badgescgblue'
import {useState} from 'react'
import "./cards.css";


const Mycard = ({title,details}) => {
const [data,setData] = useState([details])
const [ug, setug] = useState([]);
const [pg,setpg] = useState([])

const FilterData = () => {
  const filteredUG = data.filter((Data) => Data.title === 'UG');
  const filteredPG = data.filter((item) => item.title === 'PG');
  setug(filteredUG);
  setpg(filteredPG)
}


useEffect(()=>{
 FilterData()
},[title,details])

  return (
    <> 
    {title  ?   pg.map((data)=>{
      return (
        <div className="mycard">
        <div className="boxcontianer">
          <div className='badgecontainer'>
            <p className='title'>{data.title}</p>
          <Badgesvg/>
          </div>
          </div>
        <div className="secondbox">
          <p className="secondfnt">
            {data.maintitle} 
          </p>
          <div>
            <p className="secondfnt_">
             {data. description}
            </p>
          </div>
        </div>
        <div className='thircontaine
        r'>
          <div>
          <p className='thirddate'>Date</p>
          <p className='thirdday'>{data.date}</p>
          </div>
          <div>
            <p className='thirddate'>Time</p>
            <p className='thirdday'>{data.time}</p>
          </div>
        </div>
        <div className='btncontainer'>
         <button className='btn' style={{backgroundColor:'#0064A8'}} > Register Now</button>
        </div>
      </div>
      )
    }) : ug.map((Data)=>{
      console.log(Data,'data')
      return (
        <div className="mycard">
        <div className="boxcontianer">
          <div className='badgecontainer'>
            <p className='title'>{Data.title}</p>
          <Badgesvgblue/>
          </div>
          </div>
        <div className="secondbox">
          <p className="secondfnt">
            {Data.maintitle} 
          </p>
          <div>
            <p className="secondfnt_">
             {Data. description}
            </p>
          </div>
        </div>
        <div className='thircontaine
        r'>
          <div>
          <p className='thirddate'>Date</p>
          <p className='thirdday'>{Data.date}</p>
          </div>
          <div>
            <p className='thirddate'>Time</p>
            <p className='thirdday'>{Data.time}</p>
          </div>
        </div>
        <div className='btncontainer'>
         <button className='btn'> Register Now</button>
        </div>
      </div>
      )
    })}
    </>
  );
};

export default Mycard;
