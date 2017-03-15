const express = require('express');
const path=require('path');
const app =express();
const port =process.env.PORT||3000;
app.use(express.static('public')).listen(port,(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log(`server is running on port ${port}`);
    }
})