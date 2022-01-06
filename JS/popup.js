inp1.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: markRadio,
    });
});
inp2.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: markCheckBox,
    });
});

function markCheckBox() {
    var ch = document.getElementsByTagName('input');
    for (var i = ch.length - 1; i >= 0; i--) {
        if (ch[i].type == 'checkbox') {
            ch[i].checked = true;
        }

    }
};

function markRadio() {
    var ch = document.getElementsByTagName('input');
    for (var i = ch.length - 1; i >= 0; i--) {
        if (ch[i].type == 'radio') {
            ch[i].checked = true;
        }

    }
};