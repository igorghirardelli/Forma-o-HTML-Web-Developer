
//const cpf = document.querySelector('#cpf')
const data  = document.querySelector('#data')
//  essas  4 conts declaradas e o query selector vai retornar o primeiro elemento dentro do documento

const campo = document.getElementsByClassName("campo")
const box = document.getElementsByName("Civil")

var a = 0;


const url = 



function apagardados(){   
   // limpa os valores da ficha inteira             
    var campos = document.querySelectorAll("input");

    campos.forEach((campo) => {  
    campo.checked = false;
    campo.value = "";
    
    })

    }   

    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        document.getElementById('complemento').value=("");
        

        

}
//RG
// so aceita numeros
    let value_rg = document.querySelector('#rg');
    value_rg.addEventListener("keydown", function(e){
    if (e.key > "a" && e.key < "z") {
      e.preventDefault();
    }
});
//CPF 
// só aceita numeros
let value_cpf = document.querySelector('#cpf');

value_cpf.addEventListener("keydown", function(e) {
  if (e.key > "a" && e.key < "z") {
    e.preventDefault();
  }
});
value_cpf.addEventListener("blur", function(e) {
    //Remove tudo o que não é dígito
    let validar_cpf = this.value.replace( /\D/g , "");

    //verificação da quantidade números
    if (validar_cpf.length==11){

    // verificação de CPF valido
     var Soma;
     var Resto;

     Soma = 0;
     for (i=1; i<=9; i++) Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

     if ((Resto == 10) || (Resto == 11))  Resto = 0;
     if (Resto != parseInt(validar_cpf.substring(9, 10)) ) return alert("CPF Inválido!");;

     Soma = 0;
     for (i = 1; i <= 10; i++) Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (12 - i);
     Resto = (Soma * 10) % 11;

     if ((Resto == 10) || (Resto == 11))  Resto = 0;
     if (Resto != parseInt(validar_cpf.substring(10, 11) ) ) return alert("CPF Inválido!");;

     //formatação final
     cpf_final = validar_cpf.replace( /(\d{3})(\d)/ , "$1.$2");
     cpf_final = cpf_final.replace( /(\d{3})(\d)/ , "$1.$2");
     cpf_final = cpf_final.replace(/(\d{3})(\d{1,2})$/ , "$1-$2");
     document.getElementById('cpf').value = cpf_final;

    } else {
      alert("CPF Inválido! É esperado 11 dígitos numéricos.")
    }   

})
    // mascara validar cpf
    cpf.addEventListener('keypress', () => {
    var cpfLength = cpf.value.length

    // MAX LENGHT 14  CPF
    if (cpfLength == 3 || cpfLength == 7) {
        cpf.value += '.'
    }else if (cpfLength == 11) {
        cpf.value += '-'
    }

    })


    //mascara data de nascimento
    data.addEventListener('keypress', () => {
        var dataLength = data.value.length
    
        // MAX LENGHT 8  DATA
        if (dataLength == 2 || dataLength == 5) {
            data.value += '/'
        }
    
    })
    
    

    
    function bancodados(){
        var db = openDatabase('DadosClient', '1.0', 'Test DB', 2 * 1024 * 1024); // criação do banco de dados

        db.transaction(function (tx) {   
            tx.executeSql('CREATE TABLE IF NOT EXISTS Client (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, rg TEXT, cpf TEXT, cep TEXT, ibge TEXT, rua TEXT, uf TEXT, bairro TEXT, cidade TEXT, sexo TEXT, data TEXT, complemento TEXT ,Civil TEXT)'); 
         }); // criando a tabela com os id

         var nome = document.getElementById('nome').value;
         var rg = document.getElementById('rg').value;
         var cpf = document.getElementById('cpf').value;
         var cep = document.getElementById('cep').value;
         var ibge = document.getElementById('ibge').value;
         var rua = document.getElementById('rua').value;
         var uf = document.getElementById('uf').value;
         var bairro = document.getElementById('bairro').value;
         var cidade = document.getElementById('cidade').value;
         var sexo = document.getElementById('sexo').value;
         var data = document.getElementById('data').value;
         var complemento = document.getElementById('complemento').value;
         var Civil = document.querySelector('input[name="Civil"]:checked').value;
         

         db.transaction(function (tx) {   
            tx.executeSql('INSERT INTO Client (nome,rg,cpf,cep,rua,uf,bairro,cidade,sexo,data,complemento,Civil) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [nome,rg,cpf,cep,rua,uf,bairro,cidade,sexo,data,complemento,Civil]); 
         }); // executando a tabela

         // depois que enviar as informações ele seleciona todas elas e mostra na tela que o usuario foi cadrastado
         db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Client', [], (tx, results) => {
                let len = results.rows.length;
                msg = "<p>Usuários Cadastrados no Sistema: " + len + "</p>";
                document.querySelector('#bottom-message').innerHTML += msg;

                var i;

                
                


            }, null);
            //var i;
            //for(i=0;i<len;i++){
                  //  msg =<p>nome.:' + results.rows.item(i).nome+'rg.:' + results.rows.item(i).rg+'cpf.:' + results.rows.item(i).cpf+' cep.:'+ results.rows.item(i).cep+' ibge.:'+ results.rows.item(i).ibge+' rua.:'+ results.rows.item(i).rua+' uf.:'+ results.rows.item(i).uf+' bairro.:'+ results.rows.item(i).bairro+'  cidade.:'+ results.rows.item(i).cidade+'  sexo.:'+ results.rows.item(i).sexo+'  data.:'+ results.rows.item(i).data+'  Civil.:'+ results.rows.item(i).Civil+'</p>;
                    //document.querySelector('#bottom-message').innerHTML += msg;
              // }
            
        });

        



        
        //APAGAR O CLIENT
       // db.transaction(function(tx) {
        // tx.executeSql('DROP TABLE IF EXISTS Client');
       // });

          

    }
    

    function validar(){
     event.preventDefault(); 
        
        for (let input of campo){
            if(input.value === ""){
                // é um for pra validar se os campos foram prenchidos
                alert("Por Favor! Preencha o campo "+ input.name )

            } 

     }
    
     //bancodados();
    // validarbox();
        
        
        
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

        
        bancodados();
        
        //validar();
        
        
    }


 

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        document.getElementById('complemento').value=(conteudo.complemento);
        
    } 
    else {
        //CEP não encontrado
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado
    if (cep != "") {

        //Expressão regular para validar o CEP
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
            document.getElementById('complemento').value="...";
            

            

            //Cria um elemento javascript
            var script = document.createElement('script');

            //Sincroniza com o callback
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo
            document.body.appendChild(script);

        } 
        else {
            //cep é inválido
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        //cep sem valor, limpa formulário
        limpa_formulário_cep();
    }
};

//function validardata(){
    //var hoje = new Date();
    //var yesterday;
    //hoje.setDate(hoje.getDate() - 1);
    //document.getElementById("data").max = yesterday.toISOString().split('T')[0];



//}
function validanome (nome){
   var nome = document.getElementById("nome").value;
    var palavras = nome.value.split(" ");

    if(palavras.length <= 2){
       
        alert("Nome invalido ");
        nome.value = "";
        return;
    }
    return true
}

 



           


            

           
       