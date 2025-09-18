chrome.storage.sync.get('active', function (data) {
    console.log('Loading extn....', data.active);
    var link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);

    if (data.active) {
        document.body.classList.add('asp-irctc-minify');

        const slantedDiv = document.querySelector('.jp-radious > .slanted-div')
        slantedDiv.classList.remove('col-xs-12');
        slantedDiv.classList.remove('level_2');
        slantedDiv.removeAttribute('style');

        let head1 = document.querySelector('.h_head1');
        head1.removeAttribute('style');

        if (head1) {
            const anchorTags = head1.querySelectorAll('a');

            anchorTags.forEach(anchor => {
                const childNodes = Array.from(anchor.childNodes);

                childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE
                        || node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'span'
                    ) {
                        node.textContent = capitalize(node.textContent);
                    }
                });
            });
        }

        let formTitle = document.querySelector('.jp-form .heading-font');
        formTitle.textContent = capitalize(formTitle.textContent);
    }
});

function capitalize(str) {
    let tokens = str.trim().toLowerCase().split(/\s+/);

    // Capitalize the first letter of each word
    tokens = tokens.map(token => token.charAt(0).toUpperCase() + token.substring(1));

    return tokens.join(' ');
}