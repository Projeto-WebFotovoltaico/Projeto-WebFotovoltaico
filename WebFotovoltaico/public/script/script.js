
function calcular(){

    console.log("Iniciando...")
        let consumo = parseInt(document.getElementById("consumo")); 
        let resultado = document.getElementById("resultado");
        valor_consumo = consumo.value;
        
        if(valor_consumo != String){
            resultado = valor_consumo/12
            resultado.innerHTML = `<p> É um ${resultado}</p>`;
        }else{
            resultado.innerHTML = "<p>Atenção!\nDe entrada somente de números</p>";
           
        }
    
    }
    