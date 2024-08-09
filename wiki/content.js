chrome.storage.sync.get('active', function (data) {
    console.log('Loading extn')
    if (data.active) {
        document.body.classList.add('asp-wiki-minify');
    }
});