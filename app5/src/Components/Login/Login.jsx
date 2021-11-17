import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function NavBar() {
  const [Users, setUsers] = useState([]);
  const [input, setPassword] = useState("");
  const [NewUsers, setNewUsers] = useState("");
  const history = useHistory();
  const interuser = (e) => {
    setNewUsers(e.target.value);
  };
  const interbass = (e) => {
    setPassword(e.target.value);
  };
  const singIn = async () => {
    const res = await axios.post("http://localhost:5000/login", {
      username: NewUsers,
      password: input,
    });
    if (res.data === "login correct") {
      history.push("/");
    }
    setUsers(res.data);
    console.log(res.data);
  };
  return (
    <div>
     
      <div className="btn">
        <input
          onChange={(e) => {
            interuser(e);
          }}
          type="text"
          placeholder="UserName"
        />
        <br />
        <br />
        <input
          onChange={(e) => {
            interbass(e);
          }}
          type="text"
          placeholder="Password"
        />
        <br />
        <br />
        <button
          onClick={(e) => {
            singIn();
          }}
        >
          sign in
        </button>{" "}
      </div>
      <h1>{Users}</h1>
    </div>
  );
}



// import React, {useState }from 'react'

// export default function Login() {
//     const [NewUsers, setNewUsers] = useState([])
//     const [Password, setPassword] = useState([])

//     const interuser = (e) => {
//         setNewUsers(e.target.value);
//       };
//       const interbass = (e) => {
//         setPassword(e.target.value);
//       };
//       const singIn = async () => {
//         const res = await axios.post("http://localhost:5000/login", {
//           username: NewUsers,
//           password: input,
//         });
//         if (res.data === "login correct") {
//           history.push("/");
//         }
//         setUsers(res.data);
//         console.log(res.data);
//       };
    
//     return (
//         <>
//                 <div className="vh-100 d-flex text-light justify-content-center align-items-center">
//             <div style={{ height:"450px ", borderRadius:"15px "}} className=" p-2 col-md-3 bg-dark text-center   ">
//                 <h2 > User Name </h2>
//                 <input 
//                 onChange={()=>{interuser()}} 
//                 className="form-control mb-5 w-75 m-auto" />
//                 <h2> Password </h2>
//                 <input 
//                 onChange={()=>{interbass()}} 
//                 type="password" className=" m-auto mb-5 form-control w-75 m-3" />

//                 <button className=" btn btn-info px-5 fw-bold py-1"> log in </button>
//                 <button onClick={()=>{}}                                ></button>

//                 <p className="mt-2 mb-5"> Register </p>
//                 <h6> Forget password?</h6>
//             </div>
//         </div>
//             </>
//     )
// }
