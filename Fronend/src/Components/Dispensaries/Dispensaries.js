import React, {useState ,useEffect}from 'react'
import axios from 'axios'


export default function Dispensaries() {
  const [DispensariesArr, setDispensariesArr] = useState([])
  const [hide, sethide] = useState(false)


  useEffect(async() => {
    const Dispensaries = await axios.get("http://localhost:5000/Dispensaries")
   setDispensariesArr(Dispensaries.data)
      }, [])

       
      const  Reservation = () => {
       
      
                  
  
        };
        
    return (
        <div className="container">
                 <div className="row">

 
      {
      
      DispensariesArr.map((elem, i) => {
                if(hide===false){
          return (
            <div className=" col-md-3  p-2 text-center" key={i} >
            <div style={{height:"350px"}} className="item p-4 border border-info  rounded">
    
            <p className="">{elem.name}
            <div style={{height:"200px"}}>
           <img className="w-100 h-100" src={elem.img} alt="mj" /></div></p>
            <p>{elem.Location}</p>
              <button className="btn btn-info px-4" onClick={() => { Reservation(i); }} > أحجز الان </button>
             </div>
            </div>
          );} 
        
          
          
        })}
      
   </div>
   </div>
 )}

