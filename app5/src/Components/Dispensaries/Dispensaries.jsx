import React, {useState}from 'react'
import Navbar from '../Navbar/Navbar';

export default function Dispensaries() {

  const [valueInput, setvalueInput] = useState('')


    const [arr, setarr] = useState([{name:"مستوصف سلامتي",img:"https://www.jobzaty.com/company_logos/mjmaa-slamty-llkhdmat-altby-1570187884-547.jpg",Location:"عرعر- حي المحمدية "},
                                  {name:"اماس الطبي",img:"https://www.almowaten.net/wp-content/uploads/%D9%85%D8%AC%D9%85%D8%B9-%D8%A7%D9%85%D8%A7%D8%B3-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A.jpg",Location:"عرعر- حي العزيزيه"},
                                  {name:"سحاب الطبي",img:"https://www.cuuned.com/wp-content/uploads/2020/10/Shab-400x284.jpg",Location:"عرعر-حي الناصرية"},
                                  {name:"الخناني",img:"https://lh3.googleusercontent.com/proxy/VNeLBC98C_YUH9a808s2Gn1UA-oY6_vN-fnYxx2jT64Q_xW91Sxq3ME24hoS0xmn208tI0LDt_VVcOE",Location:"عرعر- حي العزيزية"},
                                  {name:"لين الطبي",img:"https://takafulalarabia.com/resources/Gallery/831611573662_servers.jpeg",Location:"عرعر- حي الناصرية"},
                                  {name:" السعودي الروماني",img:"https://i1.wp.com/www.takafulawsat.com/wp-content/uploads/2019/01/%D9%85%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D8%A7%D9%84%D8%B1%D9%88%D9%85%D8%A7%D9%86%D9%8A.png?fit=225%2C225&ssl=1",Location:"عرعر- حي المحمدية "},
                                  {name:"اليحيى",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQT7-AlIw2HYPohM9KIhQJw29Akbrku6r4qg&usqp=CAU",Location:"عرعر-حي المساعدية"},
                                  {name:"المهيدب لطب الاسنان ",img:"https://pbs.twimg.com/profile_images/1297802859027861509/XrsDK-Oh.jpg",Location:"عرعر-حي المساعدية"},
                                  {name:"درة الدوهره ",img:"data:image/jpeg;base64,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",Location:"عرعر-حي المنصوريه"},
                                  {name:"الخبره",img:"https://www.alriyadh.com/media/article/2013/05/01/img/248518823490.jpg",Location:"عرعر-حي المساعدية"},
    ])

function setvalue(e) {
      let v = e.target.value;
      setvalueInput(v)
}
    function serch(e) {
        let newArr = arr.filter((item)=>item.name ==valueInput );
        setarr(newArr)
}

  return (
    <>
      <Navbar myFunction={serch} fun={ setvalue}/>
        <div className="container">
    <div className="row">
      {arr.map((elem, i) => {
          return (
            <div className=" col-md-3  p-2 text-center" key={i} >
            <div style={{height:"350px"}} className="item p-4 border border-info  rounded">
            <p className="">{elem.name}
            <div style={{height:"200px"}}>
          <img className="w-100 h-100" src={elem.img} alt="mj" /></div></p>
            <p>{elem.Location}</p>
              <button className="btn btn-info px-4"> أحجز الان </button>
            </div>
            </div>
          );
        })}
      
  </div>
  </div>
  </>
)}

