let outputOR = document.getElementById("outputOR")
let test = document.getElementById('testing')

function submitOR(){
    
    let inpOR1 = document.getElementById('inpOR1').value
    let inpOR2 = document.getElementById('inpOR2').value;


    valOR = parseInt(inpOR1) + parseInt(inpOR2);
    
    if(valOR == 1){
        outputOR.innerHTML = "True"
    }
    else if(valOR == 0){
        outputOR.innerHTML = "False"
    }
    else{
        alert("Make sure you input 1 or 0 ")
    }
    // test.innerHTML= "val 1 is " + inpOR1 + " val 2 is " + inpOR2 + " their sum is : " + val
}



let outputAND = document.getElementById("outputAND")

function submitAND(){
    
    let inpAND1 = document.getElementById('inpAND1').value
    let inpAND2 = document.getElementById('inpAND2').value;


    valAND = parseInt(inpAND1) * parseInt(inpAND2);
    
    if(valAND == 1){
        outputAND.innerHTML = "True"
    }
    else if(valAND == 0){
        outputAND.innerHTML = "False"
    }
    else{
        alert("Make sure you input 1 or 0 ")
    }
    // test.innerHTML= "val 1 is " + inpOR1 + " val 2 is " + inpOR2 + " their sum is : " + val
}








let outputNOT = document.getElementById("outputNOT")

function submitNOT(){
    
    let inpNOT1 = document.getElementById('inpNOT1').value


    valNOT = parseInt(inpNOT1) ;
    
    if(valNOT == 1){
        outputNOT.innerHTML = "False : 0"
    }
    else if(valNOT == 0){
        outputNOT.innerHTML = "True : 1"
    }
    else{
        alert("Make sure you input 1 or 0 ")
    }
}