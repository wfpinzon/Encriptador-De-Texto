function encryptText() {
    const inputText = document.getElementById('inputText').value;
    if (!/^[a-z\s]*$/.test(inputText)) {
        alert('Por favor, ingrese solo letras minúsculas');
        return;
    }
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('decryptBtn').disabled = false;
    document.getElementById('copyBtn').disabled = false;
    document.getElementById('clearBtn').disabled = false;
    document.getElementById('encryptBtn').disabled = true;
}

function decryptText() {
    const encryptedText = document.getElementById('inputText').value;
    const decryptedText = encryptedText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('outputText').value = decryptedText;
    document.getElementById('encryptBtn').disabled = false;
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('encryptBtn').disabled = false;
    document.getElementById('decryptBtn').disabled = true;
    document.getElementById('copyBtn').disabled = true;
    document.getElementById('clearBtn').disabled = true;
}
