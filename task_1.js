// Main function
function Count(arr,m,W){
    if(W===0){
        return 1;
    }

    if(W<0){
        return 0;
    }

    if(m<=0 && W>=1){
        return 0;
    }

    return Count(arr,m-1,W)+Count(arr,m,W-arr[m-1]);
}

// Input, just for HTML
function Input(){
    let X=parseInt(prompt('Enter X: '),10);
    if(Number.isNaN(X)){
        return;
    }
    let Y=parseInt(prompt('Enter Y: '),10);
    let Z=parseInt(prompt('Enter Z: '),10);
    let W=parseInt(prompt('Enter W: '),10);
    Candies(X,Y,Z,W);
}

function Candies(X,Y,Z,W){
    // Init
    let arr = [X,Y,Z];
    let m = arr.length;
    let res = Count(arr,m,W);

    // Output
    console.log("Result of Task_1: " + res);
    document.getElementById("task1").innerHTML="Result of first task is ";
    document.getElementById("res").innerHTML=res;
    setTimeout(function(){ document.location.reload(true) }, 5000);
}

