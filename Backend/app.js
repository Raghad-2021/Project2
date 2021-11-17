const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const Dispensaries = [{id:1,key:false,name:"مجمع عيادات سلامتي",img:"https://2u.pw/IAosQ",Location:"عرعر- حي المحمدية ",location1:"https://goo.gl/maps/oeUj6UvJqkH2uCJ77" ,service:["عيادة جلدية ","عيادة الليز ","عيادة التجميل"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/u3qyg", "https://2u.pw/IDD3G","https://2u.pw/AgleZ"]},
                    {id:2,key:false,name:"مجمع اماس الطبي",img:"https://2u.pw/zLGr0",Location:"عرعر- حي العزيزيه", location1:"https://g.page/amassmedicalcomplex?share" ,service:["عيادة جلدية ","عيادة أسنان ","عيادة العظام","عيادة المسالك","عيادة الباطنية"," عيادة النساء والولادة "],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/DJUAW", "https://2u.pw/h5Cbr","https://2u.pw/jfRpN"]},
                    {id:3,key:false,name:"مجمع سحاب الشمال الطبي",img:"https://2u.pw/wRLs4",Location:"عرعر-حي الناصرية",location1:"https://goo.gl/maps/5PCygVP5PXJgcvLg9" ,service:[" عيادة طؤارى" ," مختبر","عيادة أشعة","عيادة أطفال","عيادة جلدية","عيادة باطنية","عيادة أسنان","عيادة طب عام","عيادة عيون ","عيادة جراحة"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/sRSIc", "https://2u.pw/7drvN","https://2u.pw/U49Hp"]},
                    {id:4,key:false,name:"مستوصف الخناني الطبي",img:"https://2u.pw/f3zpG",Location:"عرعر- حي العزيزية",location1:"https://goo.gl/maps/Vykj8yNJn9VpHRoH9",service:[" عيادة طب العيون " , " عيادة طب الاسنان ", "عيادة طب العظام", " المختبر" ,"عيادة الباطنية ", "عيادة الاشعة " ,"عيادة الامراض الصدرية ","عيادة الانف والاذن والحنجرة"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/g0Eec", "",""]},
                    {id:5,key:false,name:"مجمع لين الخاص الطبي",img:"https://2u.pw/JrXzF",Location:"عرعر- حي المحمدية ",location1:"https://goo.gl/maps/NuMEgE9WSgrnQnKU6",service:[ " عيادة طب الاسنان ", "عيادة طب العظام", " عيادة النساء و الولادة" ,"عيادة الباطنية ", "عيادة الاشعة " ,"عيادة الامراض الصدرية ","عيادة الانف والاذن والحنجرة"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/rWFKC", "https://2u.pw/Q9ltL","https://2u.pw/69exi"]},
                    {id:7,key:false,name:"مجمع اليحيي الطبي",img:"https://2u.pw/jLpHZ",Location:"عرعر-حي المساعدية",location1:"https://goo.gl/maps/NC4SeL82qe6rTVnD8",service:["عيادة الاسنان ","عيادة طب عام  ","عيادة الاطفال"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/0gBqS", "https://2u.pw/PkFrd","https://2u.pw/3bcKQ"]},
                    {id:8,key:false,name:"المهيدب لطب الاسنان ",img:"https://2u.pw/ga7cp",Location:"عرعر-حي المساعدية",location1:"https://goo.gl/maps/22sf21wy6Nt49QhM7",service:["عيادة الأسنان  ","عيادة جلدية ","عيادة التجميل"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/KTYbs", "https://2u.pw/hk85P","https://2u.pw/IbIxL"]},
                    {id:10,key:false,name:"مجمع الخبرة الطبي ",img:"https://2u.pw/a4G0q",Location:"عرعر-حي المساعدية",location1:"https://goo.gl/maps/KTbpWLkMjrNCMaMf8",service:["عيادة جلدية ","عيادة الليز ","عيادة التجميل"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/VGFaY", "",""]},
                  ]

app.get("/Dispensaries", (req, res) => {
  res.status(200);
  res.json(Dispensaries);
});
app.get("/dates/:id",(req,res)=>{
  let resArr = []
  const idd = req.params.id
for(let i=0;i<Dispensaries.length;i++){
  if(Dispensaries[i].id == idd){
    resArr.push(Dispensaries[i])
  }}
  res.status(200)
res.json(resArr)
})

app.post("/like/:id",(req,res)=>{
  const id = req.params.id
  console.log(id)
for(let i=0;i<Dispensaries.length;i++){
  if(Dispensaries[i].id == id){
    if(Dispensaries[i].key==true){
      Dispensaries[i].key=false}
      else{
        Dispensaries[i].key=true
      
    }
  }}
  res.status(200)
res.json(Dispensaries)
})






const port = 5000;
app.listen(port, () => {
  console.log("server is running");
});