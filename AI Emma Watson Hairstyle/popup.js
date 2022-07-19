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
    
    const image = document.createElement('img');
    image.setAttribute('src', 'emma-watson.jfif');
    const box=document.getElementById("js-pjax-container");
    box.appendChild(image);

    image.onerror = function handleError() {
        console.log('Image could not be loaded');
        //  Can set image.src to a backup image here
        // image.src = 'backup-image.png'
      
        // Or hide image
        // image.style.display = 'none';
      };
      
      image.onload = function handleImageLoaded() {
        console.log('image loaded successfully');
      };
    
   // const images=document.querySelectorAll("img");
   // images[8].appendChild(image);
   // console.log(images);
    /* const box = document.getElementsByClassName(position-relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0);
    box.appendChild(image);*/
    
    //alert(str);
    //alert(str.length); // 30-11= 19 split at 19
    //alert(id);

}


