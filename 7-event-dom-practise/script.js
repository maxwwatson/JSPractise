function myFunction (event) {
    var x = event.type;
    document.getElementById("demo").innerHTML = x;
    itChanged();
}

var changeCount = 0;

function itChanged() {
    changeCount ++;
    document.getElementById("changes").innerHTML = changeCount;
}



/*
property
element.innterHTML = new html content 
element.attribute = new value
element.style.property = new style

Method
element.setAttribute(attribute, value)

Add and delete elements
document.createElement(element) 
document.removeChild(element)
document.appendChild(element)
document.replaceChild(new, old)
document.write(text)

Add event handler
document.getElementById(id).onclick = function(){code}   - add event handler code to an onclick event

Find HTML ELements

var x = document.getElementById("id-name");
var y = document.getElementsByTagName("p")  finds all <p> elements

vay x = document.getElementById("main");
var y = x.getElementsyTagName("p")    this gets element with id=main, and finds all paras inside it

var x = document.getElementsByClassName("class-name")

Find HTML elements by CSS Selectors 
var x = document.querySelectorAll("p.intro")    finds all p elements with class = intro

Find HTML Elements by HTML object collections 

document.getElementById("outputText").style.color = "red";
document.getElementById("profilePicture").src = "./.."

Instead of adding an eventListener to a button like:
<button id="demo" onclick="myFunction()">Click me</button>
Can add an event listener your self:
document.getElementById("demo").addEventListener("click", myFunction);

document.write(Date());
- use this to write directly to HTML output stream, but WARNING do not use it after the document is loaded, it will overwrite document 


*/