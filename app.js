const express = require('express');
const path=require('path');
const app =express();
app.use(express.static('public')).listen(3000,(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log(`server is running on port 3000`);
    }
})