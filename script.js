let outputOR = document.getElementById("outputOR")
let test = document.getElementById('testing')








let outputAND = document.getElementById("outputAND")

function submitAND(){
    

    let inpAND01 = document.getElementById('inpAND1').value
    let inpAND02 = document.getElementById('inpAND2').value;
    
    inpAND1 = parseInt(inpAND01)
    inpAND2 = parseInt(inpAND02)

    if (!((inpAND1 === 1 || inpAND1 === 0) && (inpAND2 === 1 || inpAND2 === 0))) {
        outputAND.innerHTML = "Invalid Input";
    }
    
    else{
        outputAND.innerHTML = inpAND1&&inpAND2
    }

    /*
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
        */
    // test.innerHTML= "val 1 is " + inpOR1 + " val 2 is " + inpOR2 + " their sum is : " + val
}








function submitOR(){
    
    let inpOR01 = document.getElementById('inpOR1').value
    let inpOR02 = document.getElementById('inpOR2').value;

    inpOR1 = parseInt(inpOR01)
    inpOR2 = parseInt(inpOR02)

    // valOR = parseInt(inpOR1) + parseInt(inpOR2);
    if (!((inpOR1 === 1 || inpOR1 === 0) && (inpOR2 === 1 || inpOR2 === 0))) {
        outputOR.innerHTML = "Invalid Input";
    }
    
    else{
        outputOR.innerHTML = inpOR1&&inpOR2
    }
    /*
    if(valOR == 1){
        outputOR.innerHTML = "True"
    }
    else if(valOR == 0){
        outputOR.innerHTML = "False"
    }
    else{
        alert("Make sure you input 1 or 0 ")
    }*/
   
    // test.innerHTML= "val 1 is " + inpOR1 + " val 2 is " + inpOR2 + " their sum is : " + val
}





let outputNOT = document.getElementById("outputNOT")

function submitNOT(){
    
    let inpNOT01 = document.getElementById('inpNOT1').value
    inpNOT1 = parseInt(inpNOT01);
    if (inpNOT1 === 1 || inpNOT1 === 0) {
        outputNOT.innerHTML = !inpNOT1
        }
        else{
            outputNOT.innerHTML = "Invalid Input"
            }
}