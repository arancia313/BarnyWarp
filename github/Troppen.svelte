<script>
           $(document).ready(function(Scratch) {
    var newURL = window.location.protocol + "//" + window.location.host + "/p/troppen";
    var newTitle = "Troppen";
    $(".navTabs").append('<li><a href="' + newURL + '" title="' + newTitle + '" id="troppenTab">Troppen</a></li>');

    // Listener per il click sul nuovo tab
    $("#troppenTab").on("click", function() {
        console.log("Fine della stringa imprevista.");
    });


// Aggiungere un'icona dinamica
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.browserAction.setIcon({path: "icon-active.png"});
});
$(document).ready(function() {
    var newURL = window.location.protocol + "//" + window.location.host + "/p/troppen";
    var newTitle = "Troppen";
    $(".navTabs").append('<li><a href="' + newURL + '" title="' + newTitle + '" id="troppenTab">Troppen</a></li>');

    // Listener per il click sul nuovo tab
    $("#troppenTab").on("click", function() {
        console.log("Fine della stringa imprevista.");
    });
});

// Aggiungere un'icona dinamica
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.browserAction.setIcon({path: "icon-active.png"});
});
}(Scratch)){
              const extenxion = new extenxionBuilder();
}(Window.Scratch)   
</script>