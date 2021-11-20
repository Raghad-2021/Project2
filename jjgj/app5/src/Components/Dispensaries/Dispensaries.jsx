import React, {useState ,useEffect}from 'react'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
// import {AiTwotoneHeart} from "react-icons/ai"
// import { useHistory } from "react-router-dom";
import {AiTwotoneHeart} from "react-icons/ai"
import { useHistory } from "react-router-dom";
const [commentsUpdatated, setcommentsupdatated] = useState([])

export default function Dispensaries() {
    // const [isExpanded, setIsExpanded] = useState(false);
    // const [commentValue, setCommentValue] = useState("");

// function PostDatalis(props){
//   const [post, setPost] = React.useState(null);
//   const [comment, setcomment] = React.useState("");
//   const postld = ProPs.match.params.postld;
//   const postRef = firebase.collection("posts").dos(postld);
//   const {authUser} = React.useContext()
// }

// React.useEffect(() => {
//   getPost();
// }, []);

// const getPost = () =>{
//   postRef.get().then(doc => {
//     setPost({...doc.data(),id:doc.id});
//   });
// }

// const addcomment = () => {
//   postRef.get().then(doc => {
//     if (doc.exists) {
//       const PreviousComments = doc.data().comments || [];
//       const commentText = {
//         postedBy: {id:"336" , name: "samadi"},
//         created: data.now(),
//         text:coment
//       };

//       const commentUpdated = [...PreviousComments, commentText];
//       postRef.update ({comments: commentsUpdatated});
//       setPost(prevstat => ({
//         ...prevstat,
//         comments: commentsUpdated
//       }));
//       setcomment("");
//     }
//   })
// }

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
  
  // app.put("/likes/:id", (req,res)=>{
  //   const id = req.params.id
  //   for(let i=0; i<Dispensaries.length;i++) {
  //     if(Dispensaries[i].id==id){
  //       if(Dispensaries[i].like==true){
  //         Dispensaries[i].like = false
  //       }else{
  //         Dispensaries[i].like=true
  //       }
  //     }
  //   }
  //   res.status(200)
  //   res.json(Dispensaries)
  // })

  addComment = (e) => {
    e.preventDefault();
    this.props.addcomment(this.props.postId, this.state.name, this.state.body)
    this.setState({name:"", body:""})    
    ReactDOM.findDOMNode(this.refs.inputname).value = "";
    ReactDOM.findDOMNode(this.refs.inputbody).value = "";
  }
  changeBody=(e)=>{
    this.setState({inputData:e.target.value})
}
  toggle = () =>{
		this.setState({modal : !this.state.modal})
	}

  onSubmit = (e) => {
    e.preventDefault();
   this.props.addpost(this.state.body, this.state.title);
   this.setState({ title: '', body: ''});
 }
  onChange = (e) => this.setState({[e.target.name]: e.target.value});

 
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
           <p>{elem.Location}</p> 
           <AiTwotoneHeart  style={{color:'red' }} /> <br/>
             <a href={elem.location1}>Google MAP </a>

             
                  
                  <div>
                      <input onChange={(e)=>this.changeBody(e)}/>
                      <button onClick={()=>this.updateBody(index, sentPost)}>submit</button>
                      <hr/>
                    </div>
             (<div>
                      <h1>{sentPost.id}</h1>
                      <h3>{sentPost.body}</h3>
                      <button onClick={()=>this.toggleEditFlag()}>edit</button>
                      <hr/>
                  </div>)
             </div>
             </div>
          );}
        )}
   </div>
   </div>
   </>
 )}