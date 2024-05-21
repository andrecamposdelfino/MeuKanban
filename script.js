const titulo = document.querySelector("#titulo")
const conteudo = document.querySelector("#conteudo")
const data = document.querySelector("#data")
const btnSalvar = document.querySelector("#btnSalvar")
const dropcard = document.querySelector(".dropcard")
const dados = JSON.parse(localStorage.getItem("card")) || []


btnSalvar.addEventListener("click", function(e){
    e.preventDefault()
    
    const obj = [
        {
            titulo:titulo.value,
            conteudo: conteudo.value,
            data:data.value
        },
        ...dados
        
    ]

    localStorage.setItem("card", JSON.stringify(obj))
    getDadosStorage()
    
})


function getDadosStorage(){
    
    let html = ""
    
    dados.forEach(element => {
        html += `

        <div class="card" draggable="true">
            <h3>${element.titulo}</h3>
            <p>${element.conteudo}</p>
            <p>${element.data}</p>
            <button id="trash">Excluir</button>
        </div> 

    `
    });
    
    dropcard.innerHTML = html
}

getDadosStorage()


const btnTrash = document.querySelector("#trash")

btnTrash.addEventListener("click", function(e){
    e.preventDefault()
    
    alert("Botao funcionando")
})




