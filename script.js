var a=0 ;
    document.getElementById("showing").innerHTML = a;
    function changeClick(){
        addNumber(0);
        subtractNumber(0);
    }  
    function addNumber(b){
        if(b==0) {
            a=b;
        }else{
        a=a+1;
        }
        // console.log(a);
         document.getElementById("showing").innerHTML = a;
    }
    function subtractNumber(b){    
        if(b==0) {
            a=b;
        }else{
        a=a-1;
        }
        document.getElementById("showing").innerHTML = a;
    }