# 5 July 2022

 "In Chrome extensions terms it is called unpacked extension. After you finish development, you will need to pack the extension folder to an archive with a .crx extension using the Chrome extensions manager. This archive then can be used to upload to Chrome Web Store from which users can install your extension to their browsers"

 Add extension icons

 why are different sizes used for extension icons
 Manifest icons 

 https://stackoverflow.com/questions/20424425/recommended-size-of-icon-for-google-chrome-extension
2020 Update:
I was researching this recently. Here is what I found:
These sizes seem to cover most scenarios: 16, 24, 32, 48, 128
These sizes seem to be outdated: 19, 38

Favicon-
What is favicon used for?
Favicons are used in browser tabs, browser history, toolbar apps, bookmarks dropdown, search bar, and search bar recommendations. In all of these, especially in the bookmarks and histoty tabs, that consist of lists of URLs all looking the same, the favicon makes it faster to find that web-site you're looking for

I dont totally get it but its not priority number lets focusn on priority one

Downloaded github code to get icon images could have existing ones too but decided to use icons


## Creating the interface for the extension
The extension allows to run actions in two ways:

In the background, when extension starts
From an interface of the extension, when a user interacts with it using buttons or other UI controls
The extension can use both options at the same time.

To run actions in the background, you have to create a JS script and specify its location in the background parameter of manifest.json
In this particular script we wont be using background javascript it will remain empty we will be running a imagegrabber script


**To run actions in the background, you have to create a JS script and specify its location in the background parameter of manifest.json.** This script can define listeners for a wide range of browser events, for example: when the extension is installed, when a user opens/closes a tab in a browser when the user adds/removes a bookmark, and many others. Then this script will run in the background all the time and react to each of these events by running Javascript code from event handling functions.


To run actions from the interface, we need to define an interface. Interfaces for Chrome extensions are HTML pages, which can be combined with CSS stylesheets to style these pages, and Javascript files, which define actions to run when the user interacts with elements of that interface. The main interface is an interface, displayed when the user clicks on the extension icon on the toolbar and it should be defined in the action parameter of the manifest.json file. Depending on how the interface is defined, it can be opened as a new tab in the browser or displayed as a popup window below the extension button, when the user presses it.
Here we will be using popup interface



Why is doctype html given in heading of html file
The HTML document type declaration, also known as DOCTYPE , is the first line of code required in every HTML or XHTML document. The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers

ID element in html
 Difference between id and class attribute: The only difference between them is that “id” is unique in a page and can only apply to at most one element, while “class” selector can apply to multiple elements
 
Using CSS for styling the page
    body {
    text-align:center;
    width:200px;
}
This particlar line of code gives the size of popup window the default is the minimum size required to isplay the content
