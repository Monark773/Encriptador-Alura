const textArea = document.querySelector("#textArea")
const encriptar = document.getElementById("encriptar")
const desencriptar = document.getElementById("desencriptar")
const message = document.getElementById("message")
const copiar = document.getElementById("copiar")
const nohaymensaje = document.getElementById("nohaymensaje")
const tarjeta = document.getElementById("tarjeta")
const body = document.getElementById("body")
const container = document.getElementById("container")
const volver = document.getElementById("volver")

const claves ={
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

function encriptarTexto(){
    const textArr = textArea.value.split("")
    const encriptedArr = textArr.map(item=>{
        switch(item){
            case "a":
                return claves.a
            case "e":
                return claves.e
            case "i":
                return claves.i
            case "o":
                return claves.o
            case "u":
                return claves.u
            default:
                return item
        }
    })
    message.innerText = encriptedArr.join("");
    tarjeta.classList.add("rotar");
    body.classList.add("bodyAtras");
    container.classList.add("containerAtras");
}

function desencriptarTexto(){
    const desencriptedArr = textArea.value
        .replaceAll(claves.o,"o")
        .replaceAll(claves.a,"a")
        .replaceAll(claves.e,"e")
        .replaceAll(claves.i,"i")
        .replaceAll(claves.u,"u")
    message.innerText = desencriptedArr
    tarjeta.classList.add("rotar");
    body.classList.add("bodyAtras");
    container.classList.add("containerAtras");
}

function copiarMessage(){
    navigator.clipboard.writeText(message.innerText)
    alert(`mensaje copiado: ${message.innerText}`)
    tarjeta.classList.remove("rotar")
    body.classList.remove("bodyAtras");
    container.classList.remove("containerAtras");
}

function irAtras(){
    tarjeta.classList.remove("rotar");
    body.classList.remove("bodyAtras");
    container.classList.remove("containerAtras");
}


encriptar.addEventListener("click",encriptarTexto)
desencriptar.addEventListener("click",desencriptarTexto)
copiar.addEventListener("click",copiarMessage)
volver.addEventListener("click",irAtras)
