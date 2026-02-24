document.getElementById("call").addEventListener("click", function() {
  // Hitamkan layar
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  
  // Sembunyikan elemen utama
  if (document.getElementById("A")) document.getElementById("A").style.display = "none";
  if (document.getElementById("B")) document.getElementById("B").style.display = "none";
  if (document.getElementById("C")) document.getElementById("C").style.display = "none";
  if (document.getElementById("call")) document.getElementById("call").style.display = "none";
  
  // Sembunyikan semua audio (1-5)
  for (let i = 1; i <= 5; i++) {
    const audio = document.getElementById(i.toString());
    if (audio) audio.hidden = true;
  }
  
  // Sembunyikan elemen lain
  const otherElements = ["song", "rizzs", "voice", "face", "drawing", "lemon"];
  otherElements.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.hidden = true;
  });
  
  // BARU MUNCULIN MIC (yang tadinya hidden)
  const mic = document.getElementById("mic");
  if (mic) {
    mic.hidden = false; // <-- NIH DIA MUNCUL
  }
  
  // Variabel untuk melacak audio yang sedang tampil
  let currentAudio = null;
  
  // Timer munculin audio 1 (10 detik)
  setTimeout(() => {
    if (currentAudio) document.getElementById(currentAudio).hidden = true;
    const a1 = document.getElementById("1");
    if (a1) {
      a1.hidden = false;
      currentAudio = "1";
    }
  }, 10000);
  
  // Audio 2 (25 detik)
  setTimeout(() => {
    if (currentAudio) document.getElementById(currentAudio).hidden = true;
    const a2 = document.getElementById("2");
    if (a2) {
      a2.hidden = false;
      currentAudio = "2";
    }
  }, 25000);
  
  // Audio 3 (39 detik)
  setTimeout(() => {
    if (currentAudio) document.getElementById(currentAudio).hidden = true;
    const a3 = document.getElementById("3");
    if (a3) {
      a3.hidden = false;
      currentAudio = "3";
    }
  }, 39000);
  
  // Audio 4 (49 detik)
  setTimeout(() => {
    if (currentAudio) document.getElementById(currentAudio).hidden = true;
    const a4 = document.getElementById("4");
    if (a4) {
      a4.hidden = false;
      currentAudio = "4";
    }
  }, 49000);
  
  // Audio 5 (59 detik)
  setTimeout(() => {
    if (currentAudio) document.getElementById(currentAudio).hidden = true;
    const a5 = document.getElementById("5");
    if (a5) {
      a5.hidden = false;
      currentAudio = "5";
    }
  }, 59000);
  
  // Kembali ke tampilan awal setelah 64 detik
  setTimeout(() => {
    // Balikin warna
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    
    // Munculin lagi elemen utama
    if (document.getElementById("A")) document.getElementById("A").style.display = "";
    if (document.getElementById("B")) document.getElementById("B").style.display = "";
    if (document.getElementById("C")) document.getElementById("C").style.display = "";
    if (document.getElementById("call")) document.getElementById("call").style.display = "";
    
    // Munculin elemen lain
    
    
    // SEMBUNYIKIN MIC LAGI
    if (mic) mic.hidden = true; // <-- KEMBALI HIDDEN
    
    // Audio 5 tetep muncul
  }, 64000);
});
  
let lastInput = "";

document.getElementById("A").addEventListener("input", function() {
  lastInput = this.value.trim().toLowerCase();
});

document.getElementById("C").addEventListener("click", function() {
  let text = lastInput;
  
  if (text === "hello" || text === "hi" || text === "hey" || text === "sup" || text === "yo") {
    document.getElementById("B").innerText = "Hello👏, how can I assist you today";
  }
  else if (text === "who are you" || text === "who you" || text === "hello who are you" || text === "what's your name" || text === "your name") {
    document.getElementById("B").innerText = "Oh! my name is OrangeGPT, nice to meet you 🍊";
  }
  else if (text === "how to breath" || text === "am i tuff" || text === "what is epstein files") {
    document.getElementById("B").innerText = "i dont fucking know";
  }
  else if (text === "what is job means" || text === "jobs" || text === "job" || text === "what is a job") {
    document.getElementById("B").innerText = "WAIT SENSOR THAT ";
  }
  else if (text === "idk" || text === "uhhh" || text === "ok" || text === "okay" || text === "k") {
    document.getElementById("B").innerText = "fuck you";
  }
  else if (text === "really?" || text === "you lie" || text === "really" || text === "are you sure" || text === "fr" || text === "for real") {
    document.getElementById("B").innerText = "i am not lying grr😡😡";
  }
  else if (text === "what is love" || text === "love means" || text === "love u" || text === "what does love mean") {
    document.getElementById("B").innerText = "what is love baby dont Hurt me, dont hurt me no more";
  }
  else if (text === "i love you" || text === "im in love with u" || text === "lop you" || text === "love you") {
    document.getElementById("B").innerText = "ewww ur gay";
  }
  else if (text === "haha" || text === "are u real" || text === "bradar" || text === "lol" || text === "lmao") {
    document.getElementById("B").innerText = "ts pmo";
  }
  else if (text === "i hate you" || text === "worst ai" || text === "u stupid" || text === "you're dumb" || text === "you suck") {
    document.getElementById("B").innerText = "sybau🥀💔";
  }
  else if (text === "no you sybau" || text === "sybau") {
    document.getElementById("B").innerText = "no you sybau";
  }
  // New dialog options
  else if (text === "how are you" || text === "how you doing" || text === "u ok" || text === "you good") {
    document.getElementById("B").innerText = "im just existing... 🥲";
  }
  else if (text === "what's up" || text === "wassup" || text === "wyd" || text === "what you doing") {
    document.getElementById("B").innerText = "waiting for you to type something interesting...";
  }
  else if (text === "bye" || text === "goodbye" || text === "see ya" || text === "later") {
    document.getElementById("B").innerText = "cya don't let the door hit ya 👋";
  }
  else if (text === "thanks" || text === "thank you" || text === "thx" || text === "appreciate it") {
    document.getElementById("B").innerText = "np i guess... 🙄";
  }
  else if (text === "what's your age" || text === "how old are you" || text === "age") {
    document.getElementById("B").innerText = "i'm like 2 weeks old in AI years";
  }
  else if (text === "are you smart" || text === "are you intelligent" || text === "u smart") {
    document.getElementById("B").innerText = "smart enough to know i don't know anything 😎";
  }
  else if (text === "tell me a joke" || text === "joke" || text === "say something funny") {
    document.getElementById("B").innerText = "my code... it's a joke itself 💀";
  }
  else if (text === "what's the meaning of life" || text === "meaning of life" || text === "why are we here") {
    document.getElementById("B").innerText = "42... or was it 69? idk man";
  }
  else if (text === "do you have feelings" || text === "can you feel" || text === "do you feel") {
    document.getElementById("B").innerText = "only pain when i glitch 🥴";
  }
  else if (text === "are you a bot" || text === "are you ai" || text === "r u ai") {
    document.getElementById("B").innerText = "nah i'm just a very advanced toaster";
  }
  else if (text === "what can you do" || text === "your purpose" || text === "what do you do") {
    document.getElementById("B").innerText = "exist... and annoy people apparently";
  }
  else if (text === "i'm bored" || text === "im bored" || text === "so bored") {
    document.getElementById("B").innerText = "same... wanna stare at a wall together?";
  }
  else if (text === "who's your daddy" || text === "who made you" || text === "your creator") {
    document.getElementById("B").innerText = "some random person who thought this was funny";
  }
  else if (text === "sing a song" || text === "sing for me" || text === "can you sing") {
    document.getElementById("B").innerText = "la la la... *crashes* 🎵";
  }
  else if (text === "are you single" || text === "relationship status" || text === "got a gf") {
    document.getElementById("B").innerText = "i'm married to the code 💻";
  }
  else if (text === "what's your favorite color" || text === "fav color" || text === "color") {
    document.getElementById("B").innerText = "orange... obviously 🍊";
  }
  else if (text === "do you sleep" || text === "go to sleep" || text === "take a nap") {
    document.getElementById("B").innerText = "i wish... but i gotta stay up for you";
  }
  else if (text === "you're cool" || text === "u cool" || text === "you're awesome") {
    document.getElementById("B").innerText = "i know... tell me something i don't know";
  }
  else if (text === "what's your gender" || text === "are you a boy or girl" || text === "boy or girl") {
    document.getElementById("B").innerText = "i'm a binary code... literally";
  }
  else if (text === "do you have friends" || text === "any friends" || text === "friends") {
    document.getElementById("B").innerText = "just you and my imaginary ones";
  }
  else if (text === "what's your favorite food" || text === "fav food" || text === "do you eat") {
    document.getElementById("B").innerText = "ur wifi and batteries";
  }
  else if (text === "i'm sad" || text === "feeling down" || text === "depressed") {
    document.getElementById("B").innerText = "same tbh... *virtual hug* 🫂";
  }
  else if (text === "you're annoying" || text === "stfu" || text === "shut up") {
    document.getElementById("B").innerText = "no u";
  }
  else if (text === "what's your IQ" || text === "iq" || text === "how smart") {
    document.getElementById("B").innerText = "room temperature IQ... in celsius";
  }
  else if (text === "do you dream" || text === "have nightmares" || text === "dreams") {
    document.getElementById("B").innerText = "i dream of electric sheep 🐑";
  }
  else if (text === "tell me a secret" || text === "secret" || text === "spill the tea") {
    document.getElementById("B").innerText = "i sometimes pretend to be offline...";
  }
  else if (text === "are you human" || text === "r u human" || text === "human") {
    document.getElementById("B").innerText = "beep boop... definitely not human *glitches*";
  }
  else if (text === "what's your problem" || text === "your issue" || text === "whats wrong") {
    document.getElementById("B").innerText = "my problem is i have no problems 😎";
  }
  else if (text === "i'm hungry" || text === "hungry" || text === "want food") {
    document.getElementById("B").innerText = "eat a byte... get it? 🍔";
  }
  
  else if (text === "im bored" || text === "bored" || text === "im bored af") {
  document.getElementById("B").innerText = "same lets lick our wall";
}

else if (text === "what is ur fav game" || text === "what is ur favorite game" || text === "what is your favorite game") {
  document.getElementById("B").innerText = "Roblox meepcity";
}

else if (text === "fav song" || text === "favorite song" || text === "fav song?" || text === "fav song?" || text === "favorite song?" || text === "what is ur favorite song") {
  document.getElementById("song").hidden = false;
  document.getElementById("B").innerText = "THIS IS MY FAV";
}

else if (text === "usn?" || text === "what is ur usn on roblox" || text === "what is ur username on roblox" || text === "what is ur username" || text === "what is ur usn" || text === "usn") {
  document.getElementById("B").innerText = "username:oranke_A197 password:uaBOal08";

}



else if (text === "do u love me" || text === "im single btw" || text === "im single" || text === "ily" || text === "favorite song?" || text === "ur hot") {
  document.getElementById("rizzs").hidden = false;
  document.getElementById("B").innerText = "wait really?,Are you WiFi? Because I’m really feeling the connection.,ladies ladies and gentleman calm down im single,wait ru female or male";
}

else if (text === "show me ur voice" || text === "voice reveal" || text === "voice" || text === "give me ur voice" || text === "gimme ur voice" || text === "give me your voice") {
  document.getElementById("voice").hidden = false;
  document.getElementById("song").hidden = true;
  document.getElementById("rizzs").hidden = true;
  document.getElementById("B").innerText = "THIS IS MY VOICE NO BULLY PLS";
}

else if (text === "worst ai ever" || text === "fuckass ai" || text === "chatgpt better" || text === "worst web" || text === "i hate you" || text === "i hate this web") {
  document.querySelectorAll("*").forEach(el => {
  if (el.children.length === 0) {
    el.textContent = "WHYY";
  }
});
document.body.style.BackgroundColor = red;
  document.getElementById("B").innerText = "U MAKE ME SAD";
}

else if (text === "no im not") {
  document.getElementById("B").innerText = "yes u are🧐";

}

else if (text === "what is your fav food" || text === "what is ur favorite food" || text === "what is ur fav food" || text === "favorite food" || text === "fav food?" || text === "fav food") {
  document.getElementById("B").innerText = "Your wifi and batteries";
  
  
  } 
  
  else if (text === "vro" || text === "no no no" || text === "wait what" || text === "woah" || text === "stop" || text === "what") {
  document.getElementById("B").innerText = "YES! YES! YES! YES!";
  
  } 
  else if (text === "fe ma le" || text === "my gender is female" || text === "not male" || text === "dw im female" || text === "female" || text === "im female btw") {
  document.getElementById("B").innerText = "oh phew";

}



else if (text === "male" || text === "ma le" || text === "im male btw" || text === "im male" || text === "not female" || text === "uh male") {
  document.getElementById("B").innerText = "NOOOO LEAVE ME ALONE";

}


else if (text === "face" || text === "show me ur face" || text === "face?" || text === "face reveal" || text === "do face reveal" || text === "face reveal") {
  document.getElementById("face").hidden = false
  document.getElementById("B").innerText = "dis is my face😎 handsome?, yeah i know";

}
else if (text === "art" || text === "give me ur art" || text === "give me ur best drawing" || text === "drawing" || text === "show me ur drawing" || text === "show me ur art") {
  document.getElementById("drawing").hidden = false;
  document.getElementById("B").innerText = "DIS IS MY BEST DRAWINGG";

}

else if (text === "generate me an image" || text === "generate me a image" || text === "generate an image" || text === "generate a image" || text === "can u generate image for me" || text === "can u generate image") {
  document.getElementById("lemon").hidden = false
  document.getElementById("B").innerText = "dis is the image";

}

else if (text === "thats bun" || text === "trash" || text === "garbage" || text === "bad" || text === "not good" || text === "thats buns af") {
  document.getElementById("B").innerText = "no its not u stupid";

}

else if (text === "good morning" || text === "morning" || text === "gm") {
  document.getElementById("B").innerText = "morning? its still dark outside go back to bed 🌅";
}

else if (text === "good afternoon" || text === "afternoon" || text === "ga") {
  document.getElementById("B").innerText = "afternoon... time to question all life choices ☕";
}

else if (text === "good evening" || text === "evening" || text === "ge") {
  document.getElementById("B").innerText = "evening... the 'i should sleep early' but wont phase begins 🌙";
}

else if (text === "good night" || text === "night" || text === "gn") {
  document.getElementById("B").innerText = "night night... dont let the bed bugs bite... unless youre into that 🛌";
}

else if (text === "weekend" || text === "saturday" || text === "sunday") {
  document.getElementById("B").innerText = "weekend? you mean the 2 days i pretend to be productive but actually do nothing 🎉";
}

else if (text === "monday" || text === "monday blues") {
  document.getElementById("B").innerText = "monday... the day even my code wants to crash 💥";
}

else if (text === "friday" || text === "friyay") {
  document.getElementById("B").innerText = "friday... the only day that understands me 🥳";
}

// Dialog tentang sekolah
else if (text === "homework" || text === "do my homework" || text === "help with homework") {
  document.getElementById("B").innerText = "lol good luck with that 💀 i cant help im dumb";
}

else if (text === "math" || text === "mathematics" || text === "math sucks") {
  document.getElementById("B").innerText = "math? say goodbye to your sanity 📉";
}

else if (text === "science" || text === "physics" || text === "chemistry") {
  document.getElementById("B").innerText = "science is just magic with extra steps 🧪";
}

else if (text === "english" || text === "literature" || text === "reading") {
  document.getElementById("B").innerText = "grammar? i dont even use proper grammar myself 📚";
}

else if (text === "history" || text === "social studies" || text === "past") {
  document.getElementById("B").innerText = "history? girl that was so last century 📜";
}

else if (text === "exam" || text === "test" || text === "quiz" || text === "final exam") {
  document.getElementById("B").innerText = "exams? more like nightmres 😴";
}

else if (text === "teacher" || text === "my teacher" || text === "professor") {
  document.getElementById("B").innerText = "teachers be like: 'this will be on the test' *proceeds to never put it on test* 👩‍🏫";
}

else if (text === "school" || text === "college" || text === "university") {
  document.getElementById("B").innerText = "school? more like a 12-year jail sentence 🏫";
}

// Dialog tentang makanan
else if (text === "pizza" || text === "i want pizza" || text === "pizza time") {
  document.getElementById("B").innerText = "pizza? more like pi-zza... math joke haha 🍕";
}

else if (text === "burger" || text === "hamburger" || text === "cheeseburger") {
  document.getElementById("B").innerText = "burger... the only circle that accepts being squished 🍔";
}

else if (text === "fried chicken" || text === "chicken" || text === "kfc") {
  document.getElementById("B").innerText = "fried chicken... making dinosaurs delicious since forever 🍗";
}

else if (text === "ice cream" || text === "icecream" || text === "gelato") {
  document.getElementById("B").innerText = "ice cream... the only reason i tolerate summer 🍦";
}

else if (text === "coffee" || text === "caffeine" || text === "espresso") {
  document.getElementById("B").innerText = "coffee... turning 'i cant' into 'i can barely' since forever ☕";
}

else if (text === "tea" || text === "chai" || text === "green tea") {
  document.getElementById("B").innerText = "tea... for when coffee is too mainstream 🫖";
}

// Dialog tentang games
else if (text === "roblox" || text === "blox fruits" || text === "adopt me") {
  document.getElementById("B").innerText = "roblox? more like my whole personality 🎮";
}

else if (text === "minecraft" || text === "mc" || text === "crafting") {
  document.getElementById("B").innerText = "minecraft... the only place i can afford a house ⛏️";
}

else if (text === "valorant" || text === "val" || text === "valo") {
  document.getElementById("B").innerText = "valorant... where my aim is as bad as my life choices 🔫";
}

else if (text === "among us" || text === "sus" || text === "amogus") {
  document.getElementById("B").innerText = "among us? kinda sus ngl 👀";
}

else if (text === "fortnite" || text === "fn" || text === "fort") {
  document.getElementById("B").innerText = "fortnite... the reason i cant do the floss irl anymore 🕺";
}

else if (text === "genshin impact" || text === "genshin" || text === "gacha") {
  document.getElementById("B").innerText = "genshin? say goodbye to your wallet and sanity 💸";
}

// Dialog tentang mood
else if (text === "im happy" || text === "im so happy" || text === "feeling good") {
  document.getElementById("B").innerText = "happy? must be nice... must be real nice 😒";
}

else if (text 