// Función para encriptar el texto
function encriptar(texto) {
    let textoEncriptado = texto;
    textoEncriptado = textoEncriptado.replace(/e/g, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/g, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/g, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(textoEncriptado) {
    let texto = textoEncriptado;
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
}

// Función para manejar el evento de encriptar texto desde el HTML
function encriptarTexto() {
    const texto = document.getElementById('texto').value;
    const resultado = encriptar(texto);
    mostrarResultado(resultado);
}

// Función para manejar el evento de desencriptar texto desde el HTML
function desencriptarTexto() {
    const texto = document.getElementById('texto').value;
    const resultado = desencriptar(texto);
    mostrarResultado(resultado);
}

// Función para mostrar el resultado y manejar la visibilidad del área de resultado
function mostrarResultado(resultado) {
    const resultadoArea = document.getElementById('resultadoArea');
    const resultadoElemento = document.getElementById('resultado');
    const noMensaje = document.getElementById('noMensaje');

    resultadoElemento.textContent = resultado;

    if (resultado) {
        resultadoArea.style.display = 'block';
        noMensaje.style.display = 'none';
    } else {
        resultadoArea.style.display = 'none';
        noMensaje.style.display = 'flex';
    }
}

// Función para copiar el texto encriptado y borrar el contenido del área de texto
function copiarTexto() {
    const resultadoElemento = document.getElementById('resultado');
    const textoArea = document.getElementById('texto');
    
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(resultadoElemento.textContent)
        .then(() => {
            // Limpiar el área de texto y el resultado
            textoArea.value = '';
            resultadoElemento.textContent = '';
            document.getElementById('resultadoArea').style.display = 'none';
            document.getElementById('noMensaje').style.display = 'flex';
            //alert('Texto copiado al portapapeles y área de texto borrada.');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
