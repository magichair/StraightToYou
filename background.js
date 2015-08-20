chrome.contextMenus.create({
    title: "Open in 'Straight to You' Tab",
    contexts:["link"],
    onclick: function(info, tab) {
        //console.log("Context Menu!!");
        //console.log(info);
        //console.log(tab);
        // Create a new tab
        chrome.tabs.create({'url' : info.linkUrl}, function(tab) {
            // callback after tab is created
            //console.log(tab);
            chrome.tabs.executeScript(tab.id,
            {
                'file':'lib/jquery-2.1.4.min.js',
                'runAt':'document_end'
            });
            chrome.tabs.executeScript(tab.id,
            {
                'file':'searchVideo.js',
                'runAt':'document_end'
            });
        });
    }
});