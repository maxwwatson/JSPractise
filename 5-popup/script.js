

// $(document).ready(function () {
//     $("#image-slider").prepend('<img src="../images/VelKoz_OriginalSkin.jpg" id="image">');

//     // Decrease slide
//     $(document).on('click', '#left-arrow', function () {
//         if(count == 2 || count == 3)
//         {
//             count --;
//         }
//         else 
//         {
//             count = 3;
//         }
//         changeSlide();

//     });
//     // Decrease slide
//     $(document).on('click', '#right-arrow', function () {
//         if(count == 1 || count == 2)
//         {
//             count ++;
//         }
//         else 
//         {
//             count = 1;
//         }
//         changeSlide();
//     });
// })


var popUp = document.getElementsByClassName("mModal");
var modalButton1 = document.getElementById("myModals");
var abc = document.getElementsByClassName("close1");

function emailPopup() {
    
    popUp.style.display = "block";
}

modalButton1.onclick = function() {
    popUp[0].style.display = "block";
}

abc[0].onclick = function() {
    popUp[0].style.display = "none";
}

window.onclick = function(event) {
    if(event.target == popUp[0]) {
        popUp[0].style.display = "none";
      }

}
// setTimeout(emailPopup(), 3000);