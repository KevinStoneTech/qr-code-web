window.onload = function() {
    var arrButtons = document.getElementsByTagName("button");
    for (var i = 0; i < arrButtons.length; i++) {
        var oButton = arrButtons[i];
        var sRelatedImage = oButton.getAttribute("rel");
        if (sRelatedImage && sRelatedImage.length > 0) {
            oButton.onclick = function() {
                HandleRelatedImage(this, sRelatedImage);
            }
        }
    }
};

function HandleRelatedImage(oButton, sRelatedImage) {
    var oImage = document.getElementById(sRelatedImage);
    if (!oImage) {
        alert("related image '" + sRelatedImage + "' does not exist");
        return false;
    }

    return DownloadImage(sRelatedImage);
}
