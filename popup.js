// if (document.querySelector(".popup")) {
if (document.getElementById("popup")) {    
    // const button = document.querySelector(".button");
    // const circle = document.querySelector(".circle");

    const button = document.getElementById("button");
    const circle = document.getElementById("circle");

    let buttonOn = false;
    function invert() {
        alert("Mode Extensions")
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        // let media = document.querySelectorAll("img, picture, video");
        // media.forEach((mediaItem) => {
        //     mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        // })
        document.querySelectorAll("img, picture, video").forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    }

    button.addEventListener("click", () => {
        if (!buttonOn) {
            buttonOn = true;

            button.style.animation = "transformToBlue 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"
            // chrome.tabs.executeScript({
            //     file: 'on.js'
            // })
            chrome.tabs.query({currentWindow: true, active: true}, function (tabs){ 
                var activeTab = tabs[0];  //insertCSS
                chrome.scripting.executeScript({
                    target: { tabId: activeTab.id },
                    files: ["on.js"] 
                });
            })   
        }
        else {
            buttonOn = false;
            button.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
            // chrome.tabs.executeScript({
            //     file: 'off.js'
            // })
            chrome.tabs.query({currentWindow: true, active: true}, function (tabs){ 
                var activeTab = tabs[0]; 
                chrome.scripting.executeScript({
                    target: { tabId: activeTab.id },
                    files: ["off.js"] 
                });
            })
        }
    })

}