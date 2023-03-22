function apagardados(){   
                
    var campos = document.querySelectorAll("input");

    campos.forEach((campo) => {
    campo.checked = false;
    campo.value = "";
    
    })
}