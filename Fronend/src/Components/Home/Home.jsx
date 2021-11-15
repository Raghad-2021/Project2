import React from 'react'
import style from "./Home.module.css"
export default function Home() {
    return (
        <div  className={style.test}>
            <div className=" w-100 text-center fw-bold"><h1 className="fw-bold">Welcome to our Clinic</h1> </div>
            <button className="btn btn-danger px-5 fw-bold"> Book Now</button>
        </div>
    )
}
