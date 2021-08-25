let qrcode = select("img");
let qrtext = select("textarea");
let generateBtn = select("button");
let downloadBtn = select("a");
var toast = document.querySelector('#toast');


generateBtn.addEventListener("click", generateQR);

function generateQR() {
  let size = "720x720";
  let data = qrtext.value.replace(/\n/g, '%0A');
  let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

  let url = `${baseURL}?data=${data}&size=${size}`;

  qrcode.src = url;
  toastDiv();
  downloadBtn.href = url;
  qrtext.value = "";
  
}

function toastDiv() {
  toast.className = "show";
  setTimeout( function() {
      toast.className = toast.className.replace("show" , "");
  },2200);
}


function select(el) {
  return document.querySelector(el);
}