//Funcion para Encriptar
function encriptar() {
  let txtinput = document.querySelector(".inputTexto");
  if (txtinput.value != "") {
    let txtEncriptado = txtinput.value
      .toLowerCase()
      .replace(/[aeiou]/g, function (match) {
        if (match === "a") return "ai";
        if (match === "e") return "enter";
        if (match === "i") return "imes";
        if (match === "o") return "ober";
        if (match === "u") return "ufat";
      });

    document.querySelector(".asideDoll").classList.add("d-none");
    document.querySelector(".asideDesencriptado").classList.remove("d-none");
    document.querySelector(".carta").innerHTML = txtEncriptado;
  } else {
    alert("Ingrese algun texto");
  }
}

//Funcion para desencriptar
function desencriptar() {
  let txtinput = document.querySelector(".inputTexto");
  if (txtinput.value != "") {
    let txtEncriptado = txtinput.value
      .toLowerCase()
      .replace(/ai|enter|imes|ober|ufat/g, function (match) {
        if (match === "ai") return "a";
        if (match === "enter") return "e";
        if (match === "imes") return "i";
        if (match === "ober") return "o";
        if (match === "ufat") return "u";
      });

    document.querySelector(".asideDoll").classList.add("d-none");
    document.querySelector(".asideDesencriptado").classList.remove("d-none");
    document.querySelector(".carta").innerHTML = txtEncriptado;
  } else {
    alert("Ingrese algun texto");
  }
}

function copiarTexto() {
  let txt = document.querySelector(".carta").innerHTML;
  navigator.clipboard.writeText(txt);
  btnCopiar.innerHTML = "¡Copiado!";
  setTimeout(() => (btnCopiar.innerHTML = "Copiar"), 1000);
}

let btnEncriptar = document.querySelector("#btnEncriptar");
let btnDesencriptar = document.querySelector("#btnDesencriptar");
let btnCopiar = document.querySelector("#btnCopiar");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiarTexto;
