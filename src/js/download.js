var link = document.createElement("a");
link.href = 'images.png';
link.download = 'Download.png';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);