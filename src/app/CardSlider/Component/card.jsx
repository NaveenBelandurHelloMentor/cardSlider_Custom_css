'use client'

import React from 'react'
import {useState} from 'react'
import style from './page.module.css'
import { StateData } from '../FakeData/fakejon'
import Imagecarousel from './imagecarosule'


const Card = () =>{
    const [toogle,setToggle] = useState(false)

    const handleclickug = () =>{
           setToggle(!toogle)
    }

    const handleclickpg = () =>{
        setToggle(!toogle)
    }
    return (
        <>
      <section className={style.container}>
       <div className={style.headcontainer}>
        <h2 className={style.fntfirst}>Comming <span className={style.fntsecond}>Soon</span></h2>
        <p className={style.par}>Make Your Calender for our upcoming webinar</p>
       </div>
       <div className={style.togglecontainer}>
        <div className={style.togglebox}>
         <p className={toogle ? style.ugtoogle : style.ugcontianer} onClick={handleclickug}>Ug</p>
         <p className={toogle ? style.tooglepgcontainer : style.pgcontainer}  onClick={handleclickpg}>Pg</p>
        </div>
       </div>

       <div className={style.state}>
        {StateData.map((state)=>{
            return (
                <div className={style.statecontainer} key={state.id}>
                <p className={style.statefnt}>{state.state}</p>
               </div>
            )
        })}
       </div>
       <div>
        <Imagecarousel ugDetails={toogle} />
     </div>
      </section>
        </>
    )
}





export default Card