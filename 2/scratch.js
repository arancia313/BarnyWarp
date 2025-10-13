var fullscreen = navigator.standalone ||
    window.matchMedia('(max-device-width: 800px) and (max-device-height: 800px)').matches;

window.onload = function() {
    var url = "https://freudenbergs.de/vanessa/squeakjs/scratch/Scratch.image";
    SqueakJS.runSqueak(url, sqCanvas, {
        appName: "Scratch",
        spinner: sqSpinner,
        root: "/Scratch",
        templates: ["Projects", "Media", "Help", "locale"],
    });
};

if (addToHomescreen.isStandalone) addToHomescreen({
    appID: 'squeakjs.scratch.add2home',
});
