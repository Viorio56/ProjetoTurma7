const saida = document.querySelector('.mensagem');

function encriptar(){

  let texto = document.querySelector(".secao2");
  let textoEncriptado = document.querySelector(".text-area").value.replace(/e/g,"enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  

  texto.innerHTML="";
    let dependente_container = `<div class="div-mensagem">
        <textarea id="mensagem" class="mensagem">${textoEncriptado}</textarea>
        <button class="bto-copiar" onclick="copiar()">Copiar</button>
    </div>`;
         texto.innerHTML += dependente_container;
}

function descodar(){

  let texto = document.querySelector(".secao2");
  let textoEncriptado = document.querySelector(".text-area").value.replace(/enter/g,"e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  

  texto.innerHTML="";
    let dependente_container = `<div class="div-mensagem">
        <textarea id="mensagem" class="mensagem">${textoEncriptado}</textarea>
        <button class="bto-copiar" onclick="copiar()">Copiar</button>
    </div>`;
         texto.innerHTML += dependente_container;
}

function copiar(){
  let mensagem = document.querySelector(".mensagem");
  navigator.clipboard.writeText(mensagem.value);
}