const cards = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".dropzone")

cards.forEach(function(card){
    card.addEventListener("dragstart", dragstart)
    card.addEventListener("drag", drag)
    card.addEventListener("dragend", dragend)
})

function dragstart(){
    dropzones.forEach(function(dropzone){
        dropzone.classList.add("highlight")
    })

    this.classList.add("is-dragging")
    console.log("dragstart... card selecionado e arrastado");
}

function drag(){  
    console.log("drag... card selecionado e arrastado");   
}

function dragend(){  
    dropzones.forEach(function(dropzone){
        dropzone.classList.remove("highlight")
    })
    this.classList.remove("is-dragging")
 
}

dropzones.forEach(function(dropzone){
    dropzone.addEventListener("dragenter", dragenter)
    dropzone.addEventListener("dragover", dragover)
    dropzone.addEventListener("dragleave", dragleave)
    dropzone.addEventListener("drop", drop)
})

function dragenter(){
    console.log("dragenter... card selecionado e arrastado");
}

function dragover(){  
    console.log("dragover... card selecionado e arrastado");   
    this.classList.add('over')
    const cardBeanDragged = document.querySelector(".is-dragging")
    this.appendChild(cardBeanDragged)
}

function dragleave(){  
    console.log("dragleave... card selecionado e arrastado");  
    this.classList.remove('over') 
}

function drop(){  
    console.log("drop... card selecionado e arrastado");   

}


// const dados = localStorage.getItem("card") || []
// const dadosParseados = JSON.parse(dados)




