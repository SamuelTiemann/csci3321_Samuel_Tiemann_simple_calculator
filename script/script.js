var prevKey='';
var calc='';
    function updateDisplay(newValue){
        var d=document.getElementById('display');
        if(newValue.length<1){
            d.innerHTML='';
        }
        else if(newValue== "+"||newValue=="-"||newValue=="*"||newValue=="/"){
                if(prevKey==newValue){
                    d.innerHTML+='';
                }
                else if(prevKey=="+"||prevKey=="-"||prevKey=="*"||prevKey=="/"){
                    d.innerHTML=d.innerHTML.slice(0,-1);
                    d.innerHTML+=newValue;
                    prevKey=newValue;
                    calc=newValue;
                }
                else{
                    d.innerHTML+=newValue;
                    prevKey=newValue;
                    calc=newValue;
                }
            }
        else{
            d.innerHTML+=newValue;
            prevKey=newValue;
        }
    }
    function calcAnswer(){
        var d=document.getElementById('display');
        if(d.innerHTML!=''){
            if(d.innerHTML.slice(-1)=="+"||d.innerHTML.slice(-1)=="-"||d.innerHTML.slice(-1)=="*"||d.innerHTML.slice(-1)=="/"){
                d.innerHTML="Err";
            }else{
                d.innerHTML=eval(d.innerHTML);
            }
        }
    }