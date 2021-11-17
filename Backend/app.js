const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const Dispensaries = [{id:1,key:false,name:"مجمع عيادات سلامتي",img:"https://2u.pw/IAosQ",Location:"عرعر- حي المحمدية ",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.8936415498442!2d41.02320273486259!3d30.973450131553985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0deaeda83835%3A0x80bc90584c999fc!2z2YXYs9iq2YjYtdmBINiz2YTYp9mF2KrZitiMINin2YTZhdiz2KfYudiv2YrYqSDYp9mE2LTYsdmC2YrYqdiMINi52LHYudixIDczMzEx!5e0!3m2!1sar!2ssa!4v1637131553820!5m2!1sar!2ssa" ,service:["عيادة جلدية ","عيادة الليز ","عيادة التجميل"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/u3qyg", "https://2u.pw/IDD3G","https://2u.pw/AgleZ"]},
                    {id:2,key:false,name:"مجمع اماس الطبي",img:"https://2u.pw/zLGr0",Location:"عرعر- حي العزيزيه", location1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.0765915324296!2d41.029652984862274!3d30.996241481546075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0c3188f05c1b%3A0xfefd833f0b95646a!2z2YXYrNmF2Lkg2KfZhdin2LMg2KfZhNi32KjZiiDYqNi52LHYudix!5e0!3m2!1sar!2ssa!4v1637131863865!5m2!1sar!2ssa" ,service:["عيادة جلدية ","عيادة أسنان ","عيادة العظام","عيادة المسالك","عيادة الباطنية"," عيادة النساء والولادة "],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/DJUAW", "https://2u.pw/h5Cbr","https://2u.pw/jfRpN"]},
                    {id:3,key:false,name:"مجمع سحاب الشمال الطبي",img:"https://2u.pw/wRLs4",Location:"عرعر-حي الناصرية",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.0830394232257!2d41.05161718486289!3d30.968164781555735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0ff3e49d2961%3A0x9e731c3362646c6b!2z2YXYrNmF2Lkg2LPYrdin2Kgg2KfZhNi02YXYp9mEINin2YTYt9io2Yo!5e0!3m2!1sar!2ssa!4v1637131961000!5m2!1sar!2ssa" ,service:[" عيادة طؤارى" ," مختبر","عيادة أشعة","عيادة أطفال","عيادة جلدية","عيادة باطنية","عيادة أسنان","عيادة طب عام","عيادة عيون ","عيادة جراحة"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/sRSIc", "https://2u.pw/7drvN","https://2u.pw/U49Hp"]},
                    {id:4,key:false,name:"مستوصف الخناني الطبي",img:"https://2u.pw/f3zpG",Location:"عرعر- حي العزيزية",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.415461944214!2d41.02201443486242!3d30.986790631549326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0dc82e748fc9%3A0x35b662c562a68b6!2z2YXYs9iq2YjYtdmBINin2YTYrtmG2KfZhtmK!5e0!3m2!1sar!2ssa!4v1637132034453!5m2!1sar!2ssa",service:[" عيادة طب العيون " , " عيادة طب الاسنان ", "عيادة طب العظام", " المختبر" ,"عيادة الباطنية ", "عيادة الاشعة " ,"عيادة الامراض الصدرية ","عيادة الانف والاذن والحنجرة"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/g0Eec", "",""]},
                    {id:5,key:false,name:"مجمع لين الخاص الطبي",img:"https://2u.pw/JrXzF",Location:"عرعر- حي المحمدية ",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.2775617785296!2d41.048605584863!3d30.962735581557652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0fe32b40c861%3A0x809cb14414be7bfe!2z2YXYrNmF2Lkg2YTZitmGINin2YTYrtin2LUg2KfZhNi32KjZig!5e0!3m2!1sar!2ssa!4v1637132226342!5m2!1sar!2ssa",service:[ " عيادة طب الاسنان ", "عيادة طب العظام", " عيادة النساء و الولادة" ,"عيادة الباطنية ", "عيادة الاشعة " ,"عيادة الامراض الصدرية ","عيادة الانف والاذن والحنجرة"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/rWFKC", "https://2u.pw/Q9ltL","https://2u.pw/69exi"]},
                    {id:7,key:false,name:"مجمع اليحيي الطبي",img:"https://2u.pw/jLpHZ",Location:"عرعر-حي المساعدية",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109455.81342696185!2d41.13092584185362!3d30.984595160835664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0d979b4a0abd%3A0x8ffeda2b6cc3e947!2z2YXYs9iq2YjYtdmBINin2YTZitit2YrZiQ!5e0!3m2!1sar!2ssa!4v1637132304991!5m2!1sar!2ssa",service:["عيادة الاسنان ","عيادة طب عام  ","عيادة الاطفال"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/0gBqS", "https://2u.pw/PkFrd","https://2u.pw/3bcKQ"]},
                    {id:8,key:false,name:"المهيدب لطب الاسنان ",img:"https://2u.pw/ga7cp",Location:"عرعر-حي المساعدية",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.9686502227914!2d41.017568684862724!3d30.971357031554625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0d0f98c00443%3A0xaa603e184f5a686a!2z2KfZhNmF2YfZitiv2Kgg2YTYt9ioINin2YTYo9iz2YbYp9mG!5e0!3m2!1sar!2ssa!4v1637132369775!5m2!1sar!2ssa",service:["عيادة الأسنان  ","عيادة جلدية ","عيادة التجميل"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/KTYbs", "https://2u.pw/hk85P","https://2u.pw/IbIxL"]},
                    {id:10,key:false,name:"مجمع الخبرة الطبي ",img:"https://2u.pw/a4G0q",Location:"عرعر-حي المساعدية",location1:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27364.721542480074!2d41.0389332!3d30.9819165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0dc7abe0a8b7%3A0x94b2d0e9c22889e2!2z2YXYs9iq2YjYtdmBINin2YTYrtio2LHYqQ!5e0!3m2!1sar!2ssa!4v1637132444106!5m2!1sar!2ssa",service:["عيادة جلدية ","عيادة الليز ","عيادة التجميل"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/VGFaY", "",""]},
                  ]

app.get("/Dispensaries", (req, res) => {
  res.status(200);
  res.json(Dispensaries);
});
app.get("/dates/:id",(req,res)=>{
  let resArr = []
  const idd = req.params.id
  console.log(idd)
for(let i=0;i<Dispensaries.length;i++){
  if(Dispensaries[i].id == idd){
    resArr.push(Dispensaries[i])
  }}
  res.status(200)
  console.log(resArr)
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
const users = [
  { UserName: "rawan", PassWord: "1234" },
  { UserName: "ibtisam", PassWord: "1234" },
  { UserName: "raghad", PassWord: "1234" },
];
app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  for (let i = 0; i < users.length; i++) {
    if (users[i].UserName === username && users[i].PassWord === password) {
      res.send("login correct");
    }
  }
  res.status(200);
  res.json("login failed");
});




const port = 5000;
app.listen(port, () => {
  console.log("server is running");
});