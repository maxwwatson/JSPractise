var count = 1;

$(document).ready(function () {
    $("#image-slider").prepend('<img src="../images/VelKoz_OriginalSkin.jpg" id="image">');

    // Decrease slide
    $(document).on('click', '#left-arrow', function () {
        if(count == 2 || count == 3)
        {
            count --;
        }
        else 
        {
            count = 3;
        }
        changeSlide();

    });
    // Decrease slide
    $(document).on('click', '#right-arrow', function () {
        if(count == 1 || count == 2)
        {
            count ++;
        }
        else 
        {
            count = 1;
        }
        changeSlide();

    });


})


function changeSlide () {
    if(count == 1) 
    {
        $("#image").remove();
        $("#image-slider").prepend('<img src="../images/VelKoz_OriginalSkin.jpg" id="image">');
    }
    else if(count == 2) 
    {
        $("#image").remove();
        $("#image-slider").prepend('<img src="../images/Velkoz_ArclightSkin.jpg" id="image">');
    }
    else if(count == 3) 
    {
        $("#image").remove();
        $("#image-slider").prepend('<img src="../images/VelKoz_InfernalSkin.jpg" id="image">');
    }


}

/* pseudo code

document ready

    display image a 

    button slider increase on press
        function
    button slider decrease on press
        function 

    function
    if count = 1
    display image a
    else if count = 2
    display image b
    else if count = 3
    display image c 




*/



// $(document).ready(function() {   
//     $("#counter").html(count);
    
//     // Addition
//     $(document).on('click', '#increase', function() {
//         count +=1;
//         $("#counter").html(count);
        
//     });

//     // Subtraction
//     $(document).on('click', '#decrease', function() {
//         count -=1;
//         $("#counter").html(count);
        
//     });

//     // Multiply by 10
//     $(document).on('click', '#times-ten', function() {
//         count *= 10;
//         $("#counter").html(count);
//     })

//     // Divide by 10
//     $(document).on('click', '#divided-ten', function() {
//         count /= 10;
//         $("#counter").html(count);
//     })

//   });
