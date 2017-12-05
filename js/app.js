window.onload = function () {
//evento para agregar el mensaje escrito//
var button = document.getElementById("button-twittear");
  button.addEventListener("click", PostMessage); //botton
//evento para agregar contador de letras//
var textArea = document.getElementById("words");
  textArea.addEventListener("keyup", ChangeColor); //teclado
var size = document.getElementById("words");
  size.addEventListener('keyup', autosize);
  disableBtn();
};
//Para deshabilitir el botón de Twitt//
function disableBtn() {
    document.getElementById("button").disabled = true;
  }

function undisableBtn() {
    document.getElementById("button").disabled = false;
  }
//creando funcion para ChangeColor//

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

  function ChangeColor (){
    var maximum = "140";
    var twitt = document.getElementById("words").value;
    var long = twitt.length;
    var character=document.getElementById("character");
    //cambiar el color del contador si cambia la longitud del texto//
    if(long>="0" & long<"120"){
      character.style.color="black";
      character.value = maximum-long;
      return undisableBtn()
    }
    else if(long>="120" & long<"130"){
      character.style.color="yellow";
      character.value = maximum-long;
      return undisableBtn()
    }
    else if(long>="130" & long<="140"){
      character.style.color="red";
      character.value = maximum-long;
      return undisableBtn()
    }
    else if(long>"140"){
      character.value =("-"+(long-maximum));
      return disableBtn()
    }
  };

  function clock(){ //Función que da las hora del twitt//
    var day = new Date();
    hour = day.getHours();
    minutes = day.getMinutes();
    var dateTime = "AM";
    if(hour === 12){
        dateTime = "PM";
    } else if(hour > 12){
      dateTime = "PM";
      hour = hour-12;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    var clockSet = hour + ":" + minutes+ " " +dateTime;
    return clockSet;
  };

  function autosize(){//función que oculta el scroll y autoajusta el textarea//
      var el = this;
      setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      },0);
    };



  //ubicando el focus en el  textArea//
  document.getElementById('text').focus();
