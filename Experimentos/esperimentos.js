function ask(question, yes, no){
    if (confirm(question)){yes()}
    else{no()};
}
function showOk(){
    alert("vale");
}
function showCancel(){
    alert("cancelaste");
}

ask(prompt("ingresa tu pregunta"), showOk, showCancel);
