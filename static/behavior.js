var text = document.getElementById('name'),
    createItem= document.getElementById('btn-start'),
    lista = document.getElementById('lista'),
    day = document.getElementById("select-day"),
    month = document.getElementById("select-month"),
    sign = document.getElementById('signo')
 

    text.addEventListener('keydown',(e) => {
        if(e.keyCode !== 13)
            return;

            createItem.click()

    });



    createItem.addEventListener('click', (e) => {
        var name = text.value;
        var signo = teste(month.value,  day.value);
        var obj =  {nome: name,  signo: signo};
        $.post('/signos', obj)
        .done((data) => addItem(obj))
    }); 

        console.log(signos.count({signo : 'Áries'}));

    var teste = (month, day)=>{
        if((month == 'Janeiro' && day <= 20) || (month == 'Dezembro' && day >=22 )){
            return "Capricórnio"; 
        }
            
        else if((month == 'Fevereiro' && day <= 29) || (month == 'Janeiro' && day >=21 )){
            return "Aquário"; 
        }
            
        else if((month == 'Marco' && day <= 20) || (month == 'Fevereiro' && day >=20)){
                return "Peixes"; 
    
        }
  
        else if((month == 'Abril' && day <= 20) || (month == 'Marco' && day >=21)){
                return "Áries"; 
    
        }
  
        else if((month == 'Maio' && day <= 20) || (month == 'Abril' && day >=21)){
                return "Touro"; 
    
        }     
  
        else if((month == 'Junho' && day <= 20) || (month == 'Maio' && day >=21)){
                return "Gêmeos"; 
    
        }     
            
        else if((month == 'Julho' && day <= 21) || (month == 'Junho' && day >=21)){
                return "Câncer"; 
    
        }
  
        else if((month == 'Agosto' && day <= 22) || (month == 'Julho' && day >=22)){
                return "Leão";
    
  
        }

        else if((month == 'Setembro' && day <= 22) || (month == 'Agosto' && day >=23)){
                return  'Virgem';


        }

        else if((month == 'Outubro' && day <= 22) || (month == 'Setembro' && day >=23)){
                return "Libra";


        }

        else if((month == 'Novembro' && day <= 21) || (month == 'Outubro' && day >=23)){
                return "Escorpião";


        }

        else if((month == 'Dezembro' && day <= 21) || (month == 'Novembro' && day >=22)){
                return 'Sagitário';


        }

    }

    var ready = function(){
    $.get('/signos')
    .done((data) => {
        data.forEach((item) => {
            addItem(item);
        });
    });
}



ready();

var addItem = (item) => {
    var li = document.createElement("li");
        li.innerText = item.nome +' - ' + item.signo;
        lista.appendChild(li);

        
}


