import React, {useState ,useEffect}from 'react'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
// import {AiTwotoneHeart} from "react-icons/ai"
import { useHistory } from "react-router-dom";

// import {AiTwotoneHeart} from "react-icons/ai"
import { useHistory } from "react-router-dom";
export default function Dispensaries() {
  const [DispensariesArr, setDispensariesArr] = useState([])
  const history = useHistory();
  const [valueInput, setvalueInput] = useState('')

  useEffect(async() => {
    const Dispensaries = await axios.get("http://localhost:5000/Dispensaries")
   setDispensariesArr(Dispensaries.data)
      }, [])
      const goToCard  =(id)=>{
        history.push(`/card/${id}`);
      }
      function setvalue(e) {
        let v = e.target.value;
        setvalueInput(v)
  }
      function serch(e) {
          let newArr = DispensariesArr.filter((item)=>item.name ==valueInput );
          setDispensariesArr(newArr)
  }
    return (
      <>
      <Navbar myFunction={serch} fun={ setvalue}/>
      

        <div className="container">
                 <div className="row">
      {
      DispensariesArr.map((elem, i) => {
          return (
            <div className=" col-md-3  p-2 text-center" key={i} >
            <div onClick={()=>{goToCard(elem.id)}} style={{height:"350px"}} className="item p-4 border border-info  rounded">  
            <p className="">{elem.name}
            <div style={{height:"200px"}}>
           <img className="w-100 h-100" src={elem.img} alt="mj" /></div></p>
           {/* <p>{elem.Location}</p> */}
           {/* <AiTwotoneHeart  style={{color:'red' }} /> <br/> */}
            {/* <a href={elem.location1}>Google MAP </a> */}
             </div>
            </div>
          );}
        )}
   </div>
   </div>
   </>
 )}