import React,{useState ,useEffect} from 'react'
import axios from 'axios'
export default function Dates() {
    const [Dates, setDates] = useState([])




    // useEffect(async() => {
    //     const Dates = await axios.get(`http://localhost:5000/dates/${1}`)
    // //    setDates(Dates.data)
    // console.log(Dates.data);
    //       }, [])
    
    return (
        <div>
      <div>
              <div>
                <label > تاريخ الموعد</label>
               
              </div>
              <div >
          
                <label>: أختار العياده</label>
                <select>
              <option>عياده أسنان</option> 
              <option>عياده أطفال</option> 
              <option>عياده جلدية</option> 
              <option>عياده تحميلة</option> 
              <option>عياده عظام</option> 
              <option>عيادة مخ وأعصاب</option> 
              <option>عياده الأنف والاذن</option> 
              <option>طيب عام </option> 
              <option>طيب الاسره </option> 
                </select><br/>
                <label>:أسم المريض</label>  <input type="text"/><br/>
                <label>:رقم الجوال</label>  <input type="text" />  <br/> 
                <label>: تاريخ الموعد </label>     <input type="date"/><br/>
                <label>:وقت الموعد </label>   <input type="time"/><br/>
                <label>: وقت مناسب للإتصال </label>
                <select>
              <option>10AM - 12PM</option> 
              <option>12PM - 5PM</option> 
              <option>5PM - 8PM</option> 
                </select><br/>
              </div>
           <button className="btn btn-primary btn-block" type="submit"> Book</button>
            
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
      
        </div>
    )
}
