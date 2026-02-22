let lastInput = "";

document.getElementById("A").addEventListener("input", function() {
  lastInput = this.value.trim().toLowerCase();
});

document.getElementById("C").addEventListener("click", function() {
  let text = lastInput;
  
  if (text === "hello" || text === "hi" || text === "hey") {
    document.getElementById("B").innerText = "Hello👏,how can i assist you today";
  }
  else if (text === "who are you" || text === "who you" || text === "hello who are you") {
    document.getElementById("B").innerText = "Oh!,my name is OrangeGPT,nice to meet you";
  }
  else if (text === "how to breath" || text === "am i tuff" || text === "what is epstein files") {
    document.getElementById("B").innerText = "i dont fucking know";
  }
  else if (text === "what is job means" || text === "jobs" || text === "job") {
    document.getElementById("B").innerText = "WAIT SENSOR THAT ";
  }
  else if (text === "idk" || text === "uhhh" || text === "ok") {
    document.getElementById("B").innerText = "fuck you";
  }
  else if (text === "really?" || text === "you lie" || text === "really") {
    document.getElementById("B").innerText = "i am not lying grr😡😡";
  }
  else if (text === "what is love" || text === "love means" || text === "love u") {
    document.getElementById("B").innerText = "what is love baby dont Hurt me, dont hurt me no more";
  }
  else if (text === "i love you" || text === "im in love with u" || text === "lop you") {
    document.getElementById("B").innerText = "ewww ur gay";
  }
  else if (text === "haha" || text === "are u real" || text === "bradar") {
    document.getElementById("B").innerText = "ts pmo";
  }
  else if (text === "i hate you" || text === "worst ai" || text === "u stupid") {
    document.getElementById("B").innerText = "sybau🥀💔";
  }
  else if (text === "no you sybau" || text === "sybau") {
    document.getElementById("B").innerText = "no you sybau";
  }
});
