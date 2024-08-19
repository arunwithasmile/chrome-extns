chrome.storage.sync.get('active', function (data) {
    console.log('Loading extn')
    if (data.active) {
        document.body.classList.add('asp-wiki-minify');
    }
    var link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    link.type = "text/css";
    link.rel = "stylesheet";

    document.getElementsByTagName("head")[0].appendChild(link);

    document.querySelector('.mw-ui-icon-wikimedia-appearance').classList.add('material-symbols-outlined');
    document.querySelector('.mw-ui-icon-wikimedia-appearance').textContent = 'palette';
});