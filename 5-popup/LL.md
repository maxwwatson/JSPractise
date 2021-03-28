Big one on this is be wary of bootstrap classes! Wasted a good bit of time because I would say target .close, when thats a bootstrap class. 

var popUp = document.getElementsByClassName("mModal");


window.onclick = function(event) {
    if(event.target == popUp[0]) {
        popUp[0].style.display = "none";
      }

}

^^ window is a html object, represents an open window in a browser 