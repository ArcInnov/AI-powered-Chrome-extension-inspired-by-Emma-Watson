# 28 June 2022

How to do it  extension that changes hair of people in photos

Javascript code to detect face in selected photo

At the mon=ment I am trying to modify hello world extension to get source of all images on a tab
I realized I dont have permission to see or acess the tab 
I think the below loink will get me that permission
https://developer.chrome.com/docs/extensions/mv3/manifest/activeTab/

Tried this did not work at all as i expected

Great improvement found an image grabber tutorial by Andrey Germanov
https://dev.to/andreygermanov/create-a-google-chrome-extension-part-1-image-grabber-1foa

comments are not permitted in json therefore I will documnet them here
{
    "name": "Image Grabber", // Name of the extension displayed in line 1
    "description": "Extract all images from current web page", // description of extension displayed in line 2
    "version": "1.0", // Displayed in line 1 after name of extension
    "manifest_version": 3,
    "icons": {
        "16":"icons/16.png",
        "32":"icons/32.png",
        "48":"icons/48.png",
        "128":"icons/128.png"
    },
    "action": {},
    "permissions": [],
    "background":{}
}

Instead of removing and unpacking the extension just use the reload button in lower right corner