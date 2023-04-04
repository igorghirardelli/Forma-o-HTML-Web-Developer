
function validarData(data) {
  
    /*
      EXPRESSÃO REGULAR PARA VALIDAÇÃO DE DATA ENTRE OS ANOS DE 1970 E 2299
      CONSIDERA ANO BISSEXTO
    
      ^(
          # DIA PODE TER 1 OU 2 DIGITOS E 31 DIAS
          # MÊS PODE TER 1 OU 2 DIGITOS E CONTENPLAM OS MESES 1,3,5,7,8,10,12
          # ANO ENTRE 1970 E 2299
      ((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|10|12)[\.\-\/](19[7-9]\d|2[0-2][0-9]\d))
      |
          # DIA PODE TER 1 OU 2 DIGITOS E 30 DIAS
          # MÊS PODE TER 1 OU 2 DIGITOS E CONTENPLAM OS MESES 4,6,9,11
          # ANO ENTRE 1970 E 2299
      ((0?[1-9]|[12]\d|30)[\.\-\/](0?[469]|11)[\.\-\/](19[7-9]\d|2[0-2][0-9]\d))
      |
          # TRATAMENTO PARA O MÊS DE FEVEREIRO
          # MÊS PODE TER 1 OU 2 DIGITOS
          # ANO ENTRE 1970 E 2299
      ((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/](19[7-9]\d|2[0-2][0-9]\d))
      |
          # REGRA DO ANO BISSEXTO
      (29[\.\-\/]0?2[\.\-\/]((19[7-9]\d|2[0-2][0-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))
      )$
    */
    
    var expReg = /^(((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|10|12)[\.\-\/](19[7-9]\d|2[0-2][0-9]\d))|((0?[1-9]|[12]\d|30)[\.\-\/] (0?[469]|11)[\.\-\/](19[7-9]\d|2[0-2][0-9]\d))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/](19[7-9]\d|2[0-2][0-9]\d))|(29[\.\-\/]0?2[\.\-\/]((19[7-9]\d|2[0-2][0-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))$/;
  
    if ((!data.value.match(expReg)) || (data.value=='')) {
      echo 'Data inválida';
    } else {
      echo 'Data válida';
    }
    
  }
  
   