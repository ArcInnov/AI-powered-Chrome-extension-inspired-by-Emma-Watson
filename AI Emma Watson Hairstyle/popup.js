const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click",() => {   
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

function execScript(tab) {

    chrome.scripting.executeScript(
        {
            target:{tabId: tab.id, allFrames: true},
            func:grabId
        },
    )
}

function grabId() {
    const collection = document.getElementsByClassName("p-nickname vcard-username d-block");
   alert(collection);
}


