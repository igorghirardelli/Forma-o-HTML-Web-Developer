
class Dado {

    
    constructor(){
        this.id = 1;

        this.arrayDados = [];
 
    }

    salvar(){
        bancodados();
       let dado = this.lerdados();
       
       if(this.validarcampos(dado)){
            this.adicionar(dado);
       } 

       this.listaTabela();
       
       

    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText ='';

        for(let i=0; i< this.arrayDados.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_rg = tr.insertCell();
            let td_cpf = tr.insertCell();
            let td_cep = tr.insertCell();
            let td_uf = tr.insertCell();
            let td_rua = tr.insertCell();
            let td_bairro = tr.insertCell();
            let td_cidade = tr.insertCell();
            let td_sexo = tr.insertCell();
            let td_complemento = tr.insertCell();
            let td_data = tr.insertCell();
            let td_civil = tr.insertCell();
            let td_acoes = tr.insertCell();


            td_id.innerText = this.arrayDados[i].id;
            td_nome.innerText = this.arrayDados[i].nome;
            td_rg.innerText = this.arrayDados[i].rg;
            td_cpf.innerText = this.arrayDados[i].cpf;
            td_cep.innerText = this.arrayDados[i].cep;
            td_uf.innerText = this.arrayDados[i].uf;
            td_rua.innerText = this.arrayDados[i].rua;
            td_bairro.innerText = this.arrayDados[i].bairro;
            td_cidade.innerText = this.arrayDados[i].cidade;
            td_sexo.innerText = this.arrayDados[i].sexo;
            td_complemento.innerText = this.arrayDados[i].complemento;
            td_data.innerText = this.arrayDados[i].data;
            td_civil.innerText = this.arrayDados[i].civil;



            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png';

            td_acoes.appendChild(imgEdit);

            
            let imgDelet = document.createElement('img');
            imgDelet.src = 'img/deletar-lixeira.png'
            imgDelet.setAttribute("onclick", "dado.deletar("+this.arrayDados[i].id +")");

            td_acoes.appendChild(imgDelet);


        }


    }

    adicionar(dado){
        this.arrayDados.push(dado);
        this.id++;



    }

    lerdados(){
        let dado = {}
        dado.id = this.id;
       dado.nome = document.getElementById('nome').value;
       dado.rg = document.getElementById('rg').value;
       dado.cpf = document.getElementById('cpf').value;
       dado.cep = document.getElementById('cep').value;
       dado.uf = document.getElementById('uf').value;
       dado.rua = document.getElementById('rua').value;
       dado.bairro = document.getElementById('bairro').value;
       dado.cidade = document.getElementById('cidade').value;
       dado.sexo = document.getElementById('sexo').value;
       dado.complemento = document.getElementById('complemento').value;
       dado.data = document.getElementById('data').value;
       dado.civil = document.getElementById('civil').value;

        return dado;
    }

    validarcampos(dado){

        
        
        let msg ='';

        if(dado.nome == ''){
            msg += '- Informe o nome \n';
        }
        if(dado.rg == ''){
            msg += '- Informe o rg \n';
        }
        if(dado.cpf == '') {
            msg += '- informe o cpf \n';
        }
        if(dado.cep == '') {
            msg += '- informe o cep\n';
        }
        if(dado.uf == '') {
            msg += '- informe o estado \n';
        }
        if(dado.rua == '') {
            msg += '- informe o endereço \n';
        }
        if(dado.bairro == '') {
            msg += '- informe o bairro \n';
        }
        if(dado.cidade == '') {
            msg += '- informe a cidade \n';
        }
        if(dado.sexo == '') {
            msg += '- informe o sexo \n';
        }
        if(dado.complemento == '') {
            msg += '- informe o complemento \n';
        }
        if(dado.data == '') {
            msg += '- informe a data \n';
        }
        if(dado.civil == '') {
            msg += '- informe a situação civil \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true;


        

    }

    cancelar(){
        

        //document.getElementById('nome').value = '';
        //document.getElementById('rg').value = '';
       // document.getElementById('cpf').value = '';
       // document.getElementById('cep').value = '';
       // document.getElementById('rua').value = '';
       // document.getElementById('uf').value = '';
       // document.getElementById('bairro').value = '';
       // document.getElementById('cidade').value = '';
       // document.getElementById('sexo').value = '';
       // document.getElementById('data').value = '';
       // document.getElementById('complemento').value = '';
       // document.getElementById('civil').value = '';

       apagardados();
        
    }

    deletar(id){
        let tbody = document.getElementById('tbody');

      for(let i = 0; i< this.arrayDados.length; i++){
        if(this.arrayDados[i].id == id){
             this.arrayDados.splice(i, 1);
             tbody.deleteRow(i);

        }
      }

    }



}
var dado = new Dado();

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');

function validadata(){
   var data = document.getElementById("data").value; // pega o valor do input
   data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
   var data_array = data.split("-"); // quebra a data em array
   
   // para o IE onde será inserido no formato dd/MM/yyyy
   if(data_array[0].length != 4){
      data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
   }
   
   // comparo as datas e calculo a idade
   var hoje = new Date();
   var nasc  = new Date(data);
   var idade = hoje.getFullYear() - nasc.getFullYear();
   var m = hoje.getMonth() - nasc.getMonth();
   if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
   
   if(idade < 0 || idade >= 123){
      alert("Data invalida");
      return false;
   }

   if(idade > 1 && idade <= 120){
      
      return true;
   }
   
   
   
   
}
function validanome(){
   if(campos[0].value.length <= 5){
    alert('Digite o seu sobrenome')
    return true;
    
   } else {
    return false;
    
   }

}
function apagardados(){   
    // limpa os valores da ficha inteira             
     var campos = document.querySelectorAll("input");
 
     campos.forEach((campo) => {  
     campo.checked = false;
     campo.value = "";
     
     })
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
    var db = openDatabase('Dados1', '1.0', 'Test DB', 2 * 1024 * 1024); // criação do banco de dados

    db.transaction(function (tx) {   
        tx.executeSql('CREATE TABLE IF NOT EXISTS DadosNew1 (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, rg TEXT, cpf TEXT, cep TEXT, rua TEXT, uf TEXT, bairro TEXT, cidade TEXT, sexo TEXT, complemento TEXT, data TEXT, civil TEXT)'); 
     }); // criando a tabela com os id

     var nome = document.getElementById('nome').value;
     var rg = document.getElementById('rg').value;
     var cpf = document.getElementById('cpf').value;
     var cep = document.getElementById('cep').value;
     var uf = document.getElementById('uf').value;
     var rua = document.getElementById('rua').value;
     var bairro = document.getElementById('bairro').value;
     var cidade = document.getElementById('cidade').value;
     var sexo = document.getElementById('sexo').value;
     var complemento = document.getElementById('complemento').value;
     var data = document.getElementById('data').value;
     var civil = document.querySelector('input[name="civil"]:checked').value;
     

     db.transaction(function (tx) {   
        tx.executeSql('INSERT INTO DadosNew1 (nome,rg,cpf,cep,rua,uf,bairro,cidade,sexo,complemento,data,civil) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [nome,rg,cpf,cep,rua,uf,bairro,cidade,sexo,complemento,data,civil]); 
     }); // executando a tabela

     // depois que enviar as informações ele seleciona todas elas e mostra na tela que o usuario foi cadrastado
     db.transaction((tx) => {
        tx.executeSql('SELECT * FROM DadosNew1', [], (tx, results) => {
            let len = results.rows.length, i;
            msg = "<p>Usuários Cadastrados no Sistema: " + len + "</p>";
            document.querySelector('#bottom-message').innerHTML += msg;
        }, null);
    });
    
    //APAGAR O CLIENT
    // db.transaction(function(tx) {
    //tx.executeSql('DROP TABLE IF EXISTS DadosNew1');
   // });

      

};





function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        //document.getElementById('ibge').value=(conteudo.ibge);
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
            //document.getElementById('ibge').value="...";
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


function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('complemento').value=("");
}



