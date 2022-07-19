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
    let str=window.location.href;
    let id = str.slice(19);
    alert("The magic is about to happen "+id);
    //alert(str);
    //alert(str.length); // 30-11= 19 split at 19
    //alert(id);

}


