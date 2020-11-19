let url = "https://economia.awesomeapi.com.br/json/all"



function converter(){
    let input = document.getElementById("valor");
    let valor = input.value
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        let USD = data.USD.high
        let resultado = `${valor} Dolares = ${USD * valor} reais`
        document.getElementById("resultado").innerHTML = resultado;
    })
}