
function validarnome(){
    var nome = document.getElementById("txnome").value;

    if(nome.lenght > 3) {
        return true;

    } else {
        return false;
    }

}

function validatudo(){
    
    if(validarnome()){
        alert("dados enviados");
        return true;
        
    } else {
        alert("dados não enviados");
        return false;
    }
}
