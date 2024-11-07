function bigger() {
    let textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
}

function changeStyle() {
    let textArea = document.getElementById("userText");
  
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } 
    
    else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
  }

function moo() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-MOO";
    }

    textArea.value = sentences.join(". ");
}
  