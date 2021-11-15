import React, { useState } from 'react'
import style from "./Home.module.css"
import Navbar from './../Navbar/Navbar';
export default function Home() {
   
    return (
        <>
        <Navbar/>
        <div  className={style.test}>
            <div className=" w-100 text-center mt-5 fw-bold"><h1 style={{fontSize:'65px'}}>Welcome to our Clinic</h1> </div>
                <button style={ {backgroundColor:'teal'}}className="btn px-5 fw-bold text-dark fs-5"> Book Now</button>
        </div>
        </>
    )
}
