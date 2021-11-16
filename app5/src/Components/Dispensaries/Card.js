
import React, { useState ,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios, { Axios } from 'axios';
// import { useGoogleMaps } from "react-hook-google-maps";
import "./st.css"
export default function Card() {
    const p = useParams();
    const[CardList, setCardList] = useState([])
    
    useEffect(async() => {
        const result = await axios.get(`http://localhost:5000/Dates/${p.id}`);
        console.log(result.data,"result.data")
        setCardList(result.data);
     },[])
    



    return (
       <div >
     <div>
         <h1>{CardList[0] && CardList[0].name}</h1>

  
         <hr/>

         <br/>
                 <div >
                     <h1>عروضنا</h1>
                 <img className="nn" src={CardList[0] && CardList[0].phto[0]}   />
                 <img className="nn" src={CardList[0] && CardList[0].phto[1]}   />
                 <img className="nn" src={CardList[0] && CardList[0].phto[2]}   />


                 <h2>خدماتنا</h2>
                 <ul>
                 <h4>{CardList[0] && CardList[0].service[0]}</h4>
                 <h4>{CardList[0] && CardList[0].service[1]}</h4>
                 <h4 >{CardList[0] && CardList[0].service[2]}</h4>
                 <h4>{CardList[0] && CardList[0].service[3]}</h4>
                 <h4>{CardList[0] && CardList[0].service[4]}</h4>
                 </ul>

                 <h2>أوقات العمل </h2>
                 <ul>
                 <p>{CardList[0] && CardList[0].times[0]}</p>
                 <p>{CardList[0] && CardList[0].times[1]}</p>
                 </ul>
                 <h2> موقعنا</h2>
                 <h4 >{CardList[0] && CardList[0].Location}</h4>
                 <a href={CardList[0] && CardList[0].location1}>Google MAP </a><br/><br/><br/>



                </div>
             
      
       </div>
   </div>
    );
}