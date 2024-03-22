const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
  let year=2024;
  let university="greenwich"

  res.render('index',{year,university});
})


router.get('/demo',(req,res)=>{
  res.render('demo',{hn:"Ha noi",vn: "viet nam"});
})


module.exports=router;