Lessons Learned

So, biggest thing is mostly that load order of script matters. When I had originally written the code for the counter, in my eyes it seemed perfect.

RIGHT, yet SO WRONG.

The load order of my scripts was incorrect. I had my script.js loaded at the top and above my jquery,  with boostrap and it's required jquery imports at the bottom.

Way to right this wrong:

1) jquery
2) jquery UI
3) bootsrap
4) font awesome
5) custom script

https://stackoverflow.com/questions/45039541/why-is-my-jquery-script-not-working

See the above link that showed me how to do it. 

LESSON 2
Not sure why I haven't encountered this yet, but add your jquery in:
$(document).ready(function() {
    // Code here
}

So it starts up on document ready (loaded) 