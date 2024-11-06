'use client'

import React, { useRef } from 'react';
import Mycard from './cards';
import './Imagecarousel.css'
import PrevArrow from './Svg/PrevArrow';
import NextArrow from './Svg/NextArrow';
import { fakeJsonData } from '../FakeData/fakejon';
import {useState} from 'react'



const Imagecarousel = (props) => {
    console.log(props,'props')
    const [data,setData] = useState(fakeJsonData)
    const boxRef = useRef(null);

    const btnPressPrev = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= width;
            console.log(width,'minus width')
        }
    };

    const btnPressNext = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += width;
            console.log(width,'plus width')
        }
    };



    return (
        <div className="product-carousel">
         
         <div  className="pre-btn" onClick={btnPressPrev} on>
         <PrevArrow className="pre-btn" /> 
         </div>
            
            <div className="next-btn" onClick={btnPressNext}>
                <NextArrow />
            </div>



            <div className="product-container" ref={boxRef}>
                 {fakeJsonData.map((data)=>{
                    return (
                        <>
                              <Mycard cardno='1'  title={props.ugDetails}   details={data} />
                        </>
                    )
                })} 

                 
               
            </div>
        </div>
    );
};

export default Imagecarousel;
