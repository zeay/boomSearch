var xmlHttpRequest=new XMLHttpRequest();
var content;
var url;
var key;
var cx;
var query;
    //button work
let prev=document.getElementById('prev');
let next=document.getElementById('next');
var makeSearch= data=>{
    console.log('inSearch');
    key ='AIzaSyAFdT3Tuq-L2GxNg2q7h25JrRqvNJ0OKMI';
 cx='010920237652087603993:j90ascr4fpw';
 query=data;
 url=`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`;
xmlHttpRequest.open('GET',url,false);
xmlHttpRequest.send();
//console.log(url);
//console.log(xmlHttpRequest.status);
 content = JSON.parse(xmlHttpRequest.response);
    //console.log(content.url.template);
   displayContent(content);
}
function displayContent(data){
    //console.log(data.items);
    console.log('Inside displayContent',data)
    let result = document.getElementById('resultArea');
    result.innerHTML='';
    var displayData=data.items;
    if(data.queries.nextPage && data.queries.previousPage){
        next.style.display='block';
        prev.style.display='block';
    }else{
       next.style.display='block'; 
    }
    for (let i = 0; i < displayData.length; i++) {
        console.log('Inside display loop')
    var element = `<h2 class='inTitle'><a href=${displayData[i].link}>${displayData[i].htmlTitle}</a></h2><p class='snippet'>${displayData[i].snippet}</p><p class='link'>${displayData[i].link}</p>`;
        //console.log(element);
    result.innerHTML += element;
}
    
}
//next button functioanality
next.addEventListener('click',function(){
    var start=content.queries.nextPage[0].startIndex;
    //console.log(start);
    var nextUrl=`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}&start=${start}`;
    xmlHttpRequest.open('GET',nextUrl,false);
xmlHttpRequest.send();
content = JSON.parse(xmlHttpRequest.response);
    console.log(content);
   displayContent(content); 
})
prev.addEventListener('click',function(){
    var start=content.queries.previousPage[0].startIndex;
    //console.log(start);
    var nextUrl=`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}&start=${start}`;
    xmlHttpRequest.open('GET',nextUrl,false);
xmlHttpRequest.send();
content = JSON.parse(xmlHttpRequest.response);
    console.log(content);
   displayContent(content);   
})
var videoSearch = data =>{
    console.log('inVideoSearch');
    key ='AIzaSyAFdT3Tuq-L2GxNg2q7h25JrRqvNJ0OKMI';
 cx='010920237652087603993:esyci4rft5e';
 query=data;
 url=`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`;
xmlHttpRequest.open('GET',url,false);
xmlHttpRequest.send();
//console.log(url);
//console.log(xmlHttpRequest.status);
 content = JSON.parse(xmlHttpRequest.response);
    //console.log(content.url.template);
   displayContent(content);
}








