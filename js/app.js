window.onload = function () {
//evento para agregar el mensaje escrito//
var button = document.getElementById("button-twittear");
  button.addEventListener("click", PostMessage); //botton
//evento para agregar contador de letras//
var textArea = document.getElementById("words");
  textArea.addEventListener("keyup", ChangeColor); //teclado
};
//creando funcion para ChangeColor//
function ChangeColor (){
  var maximum = "140";
  var twitt = document.getElementById("words").value;
  var long = twitt.length;
  var character=document.getElementById("character");
    //cambiar el color del contador si cambia la longitud del texto//
    if(long>="0" & long<"120"){
      character.style.color="black";
      character.value = maximum-long;
    }
    else if(long>="120" & long<"130"){
      character.style.color="yellow";
      character.value = maximum-long;
    }
    else if(long>="130" & long<="140"){
      character.style.color="red";
      character.value = maximum-long;
    }
    else if(long>"140"){
      character.value =("-"+(long-maximum));
    }
};

//creando funcion para PostMessage//
function PostMessage() {
  var length = document.getElementById("words").value.length;
    if (length>"0" & length<="140"){
      var textArea = document.getElementById("words").value;
      var container = document.createElement("div");
      var twitt= document.createElement("p");
      var date = new Date();
      var content = document.createTextNode(textArea + " " + date.getHours()+":"+date.getMinutes());//añadir hora//
      var main = document.getElementById("box1")
        container.appendChild(twitt);
        twitt.appendChild(content);
        twitt.classList.add ("twitt");
        main.appendChild(twitt);
        document.getElementById("c").value="";//borrar mensaje escrito en el input //
        document.getElementById("character").value="140";
        document.getElementById("character").style.color="black";
        document.getElementById('words').focus();
      }
  };


//ubicando el focus en el  textArea//
document.getElementById('words').focus();
