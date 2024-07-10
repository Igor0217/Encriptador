
       // Función para encriptar el texto
function encryptText() {
    var input = document.getElementById('miTextarea').value;
    var output = '';

    for (var i = 0; i < input.length; i++) {
        var char = input.charAt(i);
        switch (char) {
            case 'e':
                output += 'enter';
                break;
            case 'i':
                output += 'imes';
                break;
            case 'a':
                output += 'ai';
                break;
            case 'o':
                output += 'ober';
                break;
            case 'u':
                output += 'ufat';
                break;
            default:
                output += char;
        }
    }

    displayResult(output);
}

// Función para desencriptar el texto
function decryptText() {
    var input = document.getElementById('miTextarea').value;
    var output = '';

    var i = 0;
    while (i < input.length) {
        // Verificar cada posible "código" de encriptación
        if (input.startsWith('enter', i)) {
            output += 'e';
            i += 5;
        } else if (input.startsWith('imes', i)) {
            output += 'i';
            i += 4;
        } else if (input.startsWith('ai', i)) {
            output += 'a';
            i += 2;
        } else if (input.startsWith('ober', i)) {
            output += 'o';
            i += 4;
        } else if (input.startsWith('ufat', i)) {
            output += 'u';
            i += 4;
        } else {
            // Si no coincide con ninguno de los códigos de encriptación, agregar el caracter original
            output += input.charAt(i);
            i++;
        }
    }

    displayResult(output);
}

// Función para copiar el texto al portapapeles
function copyText() {
    var outputText = document.getElementById('resultadoParrafo').textContent;
    navigator.clipboard.writeText(outputText)
        .then(() => {
            alert('Texto copiado al portapapeles: ' + outputText);
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

// Función para mostrar el resultado en la sección derecha
function displayResult(result) {
    document.getElementById('resultadoParrafo').textContent = result;
    document.getElementById('resultadoTitulo').textContent = 'Resultado:';
}
