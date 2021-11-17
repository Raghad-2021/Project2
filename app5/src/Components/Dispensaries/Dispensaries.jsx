import React, {useState ,useEffect}from 'react'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { useParams } from "react-router-dom";
// import {AiTwotoneHeart} from "react-icons/ai"
import { useHistory } from "react-router-dom";
import { logDOM } from '@testing-library/dom';

// import {AiTwotoneHeart} from "react-icons/ai"
export default function Dispensaries() {
  const [DispensariesArr, setDispensariesArr] = useState([])
  const history = useHistory();
  const [valueInput, setvalueInput] = useState('')
  const p = useParams();

      console.log(p,"pppppp");

 
  useEffect(async() => {
    const Dispensaries = await axios.get("http://localhost:5000/Dispensaries")
   setDispensariesArr(Dispensaries.data)
      }, [])
      const goToCard  =(id)=>{
        // history.push(`/card/${id}`);
      }
      function setvalue(e) {
        let v = e.target.value;
        setvalueInput(v)
  }
      function serch(e) {
          let newArr = DispensariesArr.filter((item)=>item.name ==valueInput );
          setDispensariesArr(newArr)
  }
  const likefun=async(id)=>{
  
      console.log(id);
  const likes = await axios.post(`http://localhost:5000/like/${id}`)
  setDispensariesArr(likes.data)
  console.log(likes,"llllllllllllllllllllllllllllllll")
    
  }
// const replaceImg = (elem, index) => {
// for (let i = 0; i < cardsArray.length; i++) {
//     if (cardsArray[i].id == id) {
//         if (cardsArray[i].toggle == true) {
//             newArr[i].toggle = false
//         } else {
//             newArr[i].toggle = true
//         }
//     }
// }
// setCardsArray(newArr)




// }}
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
         {  DispensariesArr[i].key === true ?  <button  onClick={()=>{likefun(elem.id)}}> 🧡</button> :  <button  onClick={()=>{likefun(elem.id)}}> 💔</button>}
         {/* <button  onClick={()=>{likefun(elem.id)}}> 🧡</button> */}
 
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