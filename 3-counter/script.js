var count = 0

$(document).ready(function() {   
    $("#counter").html(count);
    
    // Addition
    $(document).on('click', '#increase', function() {
        count +=1;
        $("#counter").html(count);
        
    });

    // Subtraction
    $(document).on('click', '#decrease', function() {
        count -=1;
        $("#counter").html(count);
        
    });

    // Multiply by 10
    $(document).on('click', '#times-ten', function() {
        count *= 10;
        $("#counter").html(count);
    })

    // Divide by 10
    $(document).on('click', '#divided-ten', function() {
        count /= 10;
        $("#counter").html(count);
    })

  });
