# 6 July 2022

Lets get the image grabber completed

Look up what link rel is for?

you do not need to reload extension every time when modify HTML or any other file. You have to reload the extension only when change the manifest.json.

 Chrome does not allow to have any inline Javascript in HTML pages of extensions. All Javascript code should be defined only in separate .js files. That is why create a popup.js file in the extensions folder

 At the current stage, this is an extension, that can be used as a base template to start building a wide range of Chrome extensions, based on a popup user interface.

 Implement the "GRAB NOW" function
Using Javascript in extension you can do everything that you can do using Javascript on a website: open other HTML pages from current one, make requests to a remote servers, upload data from extension to the remote locations and whatever else. But in addition to this, if this script executed in a chrome extension, you can use Chrome browser APIs to communicate with the browser objects: to read from them and to change them

chrome.tabs - Chrome Tabs API. It will be used to access an active tab of the Chrome browser.
chrome.scripting - Chrome Scripting API. It will be used to inject and execute JavaScript code on a web page, that opened in the active browser tab.

obtain required permissions
By default, for security reasons, Chrome does not permit access to all available APIs. The extension should declare, which permissions it requires in the permissions parameter of the manifest.json. There are many permissions that exist, all they described in the official documentation here: https://developer.chrome.com/docs/extensions/mv3/declare_permissions/.

activeTab - to obtain access to the active tab of a browser
scripting - to obtain access to the Chrome Scripting API to inject and execute JavaScript scripts in different places of the Chrome browser.


Get information about the active ab browser
chrome.tabs.query(queryObject,callback)
The queryObject is a Javascript object with parameters that define search criteria for browser tabs, which we need to get.
The callback - is a function, that is called after the query is complete. This function is executed with a single parameter tabs, which is an array of found tabs, that meet specified search criteria. Each element of the tabs array is aTab object. The Tab object describes the found tab and contains a unique ID of the tab, its title, and other information.

Grab images from the current page
The extension can communicate with open pages of the Chrome browser using Chrome Scripting JavaScript API, located in the chrome.scripting namespace. In particular, we will use this API to inject a script to a web page of the current tab, execute this script and return the result back to the extension. When running, it has access to all content of a web page, to which this script is injected.

The only function of chrome.scripting API which is used for this extension is executeScript. It has the following signature:
chrome.scripting.executeScript(injectSpec,callback)
injectSpec

This is an object of ScriptInjection type. It defines where and how to inject the script. target parameter of this object is used to specify "where" to inject the script - the ID of the browser tab to which the script should be injected. Then other parameters of this object define "how" to inject the script. The script can be injected as:

file or files - in this case, need to specify an array of Javascript files to inject. The files should exist in the extension folder.
function - in this case, need to specify a function to inject. The function should exist in the same (popup.js) file.
The script, which we need to inject will be used to get all images of a target page and return their URLs.

Callback
The injected function will do actions on a target web page and on all embedded frames of this page (each frame is a separate page as well) and will return the result. After this happens, the extension will execute the callback function with returned results as an argument. An argument of the function is an array of objects of InjectionResult type for each frame. Each object contains the "result" property, which is an actual result, that the grabImages function returns.

Exception dealing (If no webpage open on tab)
Not all tabs that opened in the browser are tabs with web pages inside. For example, a tab with a list of extensions, or a tab with browser settings are not tabs with web pages. If you try to run a script with the document object on these tabs it will fail and return nothing. That is why at the beginning of the onResult function we check the result and continue only if it exists. Then we combine arrays of image URLs returned for each frame to a single array by using map/reduce combination and then, use window.navigator.clipboard API to copy joined to string array to a clipboard. writeText function is asynchronous, so we have to wait until it finishes by resolving a promise, that it returns. And when it is resolved, we close the popup window of the extension


It wasnt working I panicked then I finally remembered I should reload it after changing manifest.json file

