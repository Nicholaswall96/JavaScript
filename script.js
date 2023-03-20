let userinput;

document.getElementById("Button").onclick = function (){

    userinput = document.getElementById("number").value;
    let output = "Even numbers between 0 and " + userinput + " are: ";
    let first = true;
    for(let i = 0; i <= userinput; i += 2){
        if(first){
            output += i;
            first = false;
        }else{
            output += ", " + i;
        }
    }
    document.getElementById("output").textContent = output;
    document.getElementById("output").style.fontSize = "x-large";
    dodocument.getElementById("output").style.fontWeight = "900";
}