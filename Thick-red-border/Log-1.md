# Create a thick red border around images on a web page

## 18 July 2022

Creating the manifest file

Creating the popup.html > Display > A button whenclicked inserts red border around images

Creating popup css > It improves aesthetics of popup.html page

Creating a popup.js that houses the functionality

Let us learn to add border to images 
need to use border atrribut to get a border

Tried looking up for a readymade solution but that won't work 

Loading both extensions images grabbaer and thick red border
Image grabber works without hiccups

So back to basics
Search query - java script code to manipulate html elements
W3schools - JS HTML DOM - https://www.w3schools.com/js/js_htmldom.asp
    A property is a value that you can get or set (like changing the content of an HTML element).
    A method is an action you can do (like add or deleting an HTML element).
    I think you will need to change property

    Lets try our tests on Emma Watson wikipedia

How to create arrays in Java script and methods to deal with them
W3schools - JS Arrays - https://www.w3schools.com/js/js_arrays.asp
Showind array using console log to see if its working as expected

You have managed to print all images by tags on console
Now lets try and add border to all the images
You need to add border attribute to all images
This should work
element.setAttribute(attribute, value)	Change the attribute value of an HTML element
I think it will set the border but the color would be a problem you will have to use css to give background color to images

Lets see if this works out
images.style.border = "1px solid blue";
This did not work

Let us try to add image borde on individual image

Lets first test if the code works and add border for one individual element

Code snippet that adds the required functinality
    const images=document.querySelectorAll("img"); // used query selector since element id is null
    let length = images.length; // stores length of arra in variable
    for (let i = 0; i < length; i++) { // for loop conditions
       images[i].style.border = "thick solid #FF0000"; // adds border to images & #FF0000 hex code for color red