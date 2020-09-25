// Input, just for HTML
function InputSecond(){
    let N=parseInt(prompt('Enter N: '),10);
    if(Number.isNaN(N)){
        return;
    }
    let x=parseInt(prompt('Enter x: '),10);
    let y=parseInt(prompt('Enter y: '),10);
    Secretary_Jimny(N,x,y);
}

// Main function
function minTime(arr,n,m){
    let t = 0; // time

    while(true){
        let items = 0;

        for(let i =0; i<n;i++){
            items+=(t/arr[i]);
        }

        if(items>m){
            return t;
        }

        t++;
    }
}

function Secretary_Jimny(N, x, y){
    // Init
    let arr = [x,y]; 
    let n = arr.length;
    let res = minTime(arr,n,N);

    // Output
    console.log("Result of Task_2: " + res);
    document.getElementById("task2").innerHTML="Result of second task is ";
    document.getElementById("resSecond").innerHTML=res;
    setTimeout(function(){ document.location.reload(true) }, 5000);
}