const insertBtn = document.getElementById("insertBtn");

insertBtn.addEventListener("click",() => {   
    // Get active browser tab
    chrome.tabs.query({active: true}, function(tabs) {
        var tab = tabs[0];
        if (tab) {
            execScript(tab);
        } else {
            alert("There are no active tabs");
        }
    })
})
// the above code segment listens for a click on insert button
// When button is clicked it gets the current active tab
// Then it executes execScript where tab is a parametes

function execScript(tab) {
    // Execute a function on a page of the current browser tab
    // and process the result of execution
    chrome.scripting.executeScript(
        {
            target:{tabId: tab.id, allFrames: true},
            func:grabImages
        },
        onResult
    )
}

/**
 * Executed on a remote browser page to grab all images
 * and return their URLs
 * 
 *  @return Array of image URLs
 */
function grabImages() {
 
}

