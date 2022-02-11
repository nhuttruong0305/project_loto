var numberDisplay=0;
var numberHasAppear=[];

function checkForDuplicates(a){
    if(numberHasAppear.length==0){
        return false;
    } 
    for(let i=0; i<numberHasAppear.length; i++){
        if(a==numberHasAppear[i]){
            return true;
        }    
    }
    return false;
}

function calculateNumber(){
    while(checkForDuplicates(numberDisplay)==true){
        if(numberDisplay<90){
            numberDisplay++;
        }
        else{
            numberDisplay=1;
        }
    }
}

//Quay số

var myVar;
document.getElementById("turn").onclick = function(){
    if(numberHasAppear.length<90){
        myVar=setInterval(() => {
            if(numberDisplay<90){
                numberDisplay++;
                document.getElementById("number-display").innerHTML=numberDisplay;
            }  
            else{
                numberDisplay=1;
                document.getElementById("number-display").innerHTML=numberDisplay;
            }
        }, 1);
    }
    else{
        location.reload();
    }
}

document.getElementById("stop").onclick = function(){
    clearInterval(myVar);
    calculateNumber();
    numberHasAppear.push(numberDisplay);
    document.getElementById("number-display").innerHTML=numberDisplay;
    let spanNumber=document.createElement("span");
    spanNumber.innerHTML=numberDisplay+", ";
    document.getElementById("list-number-has-appear").appendChild(spanNumber);
    console.log(numberHasAppear);
    console.log(numberDisplay);
    if(numberHasAppear.length==90)
        document.getElementById("turn").innerHTML="Hết số rồi phải quay lại thôi :))";
}
