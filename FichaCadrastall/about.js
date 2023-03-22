const cpf = document.querySelector('#cpf')
const data  = document.querySelector('#data')


const campo = document.getElementsByClassName("campo")
const box = document.getElementsByName("Civil")
var a = 0;

function apagardados(){   
                
    var campos = document.querySelectorAll("input");

    campos.forEach((campo) => {
    campo.select = "";    
    campo.checked = false;
    campo.value = "";
    
    })

    }   
    
    cpf.addEventListener('keypress', () => {
        var cpfLength = cpf.value.length
    
        // MAX LENGHT 14  CPF
        if (cpfLength == 3 || cpfLength == 7) {
            cpf.value += '.'
        }else if (cpfLength == 11) {
            cpf.value += '-'
        }
    
    })

    data.addEventListener('keypress', () => {
        var dataLength = data.value.length
    
        // MAX LENGHT 8  DATA
        if (dataLength == 2 || dataLength == 5) {
            data.value += '/'
        }
    
    })

    function validar(){
        for (let input of campo){
            if(input.value === ""){
                alert("Por Favor! Preencha o campo "+ input.name )
            } 
        }
        
        
    }
    function validarbox(){
        
            for(var i=0; i<box.length; i++){
                if(box[i].checked ) {
                    a= 1;
                    break;
                }    
            }
            
            if(a==0) {
                alert("Por favor! Informe sua Situação Civil");
            }
        
    }




           


            

           
       