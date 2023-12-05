JS main.js >...
1 // 1. Código JS para fala em texto: É a WebSpeechAPI utilizada para reconhcer fala e convertê-la
2 var SpeechRecognition = window.webkitSpeechRecognition;
3 // 2. defina a função de início e escreva o código para ela:
4 var recognition = new SpeechRecognition();
5 // 3. Este resultado é a conversão de nossa fala em texto
6 var Textbox = document.getElementById("textbox");
7/ Chame a função start();
8 function start()
9 {
10 Textbox.innerHTML "";
11 recognition.start();
12 }
13
// A função onresult armazena todos os valores de falas que foram convertidos para texto.
14 recognition.onresult = function(event)
15
{
16 console.log(event);
17 var Content = event.results[0][0].transcript;
18 Textbox.innerHTML = Content;
19 console.log(Content);
20 if(Content =="selfie")
21 {
22 console.log("tirando selfie ");
23 speak();
24 }
25 }