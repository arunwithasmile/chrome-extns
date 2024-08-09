chrome.storage.sync.get('active', function (data) {
    document.getElementById('enable').checked = data.active;
    document.querySelector('.enable-box').style.opacity = 1;
});
document.getElementById('enable').addEventListener('click', (event) => {
    chrome.storage.sync.set({ active: event.target.checked });
    onSwitchToggle();
});

function onSwitchToggle() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: () => {
                chrome.storage.sync.get('active', function (data) {
                    if (data.active) {
                        document.body.classList.add('asp-wiki-minify');
                    } else {
                        document.body.classList.remove('asp-wiki-minify');
                    }
                });
            }
        });
    });
}