window.onload=function(){
var result=document.getElementById('resultArea');
var query;
var searchOn;
var web=document.getElementById('web');
var videos=document.getElementById('videos');
var action=document.getElementById('goSearch');
action.addEventListener('click',()=>{
    let text=document.getElementById('query');
    query=text.value
    if(query === ''){
        result.innerHTML='Text Box / radio is empty Is Empty'
    }else if(videos.checked === true){
        videoSearch(query);
    }else{
        makeSearch(query);
    }
})
}
