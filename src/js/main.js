let qrcode = select("img");
let qrtext = select("textarea");
let generateBtn = select(".btn");
let downloadBtn = select("a");
var toast = document.querySelector('#toast');
var download = document.querySelector('#download');


generateBtn.addEventListener("click", generateQR);

function generateQR() {
  let size = "512x512";
  let data = qrtext.value.replace(/\n/g, '%0A'); // Serve para quebrar linha no textarea - replace(/\n/g, '<br>');
  let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

  let url = `${baseURL}?data=${data}&size=${size}`;

  qrcode.src = url;
  toastDiv();
  downloadBtn.href = url;
  qrtext.value = qrtext.value; // Definido para retornar o texto digitado dentro do textarea
  downloadA();
}

function toastDiv() {
  toast.className = "show";
  setTimeout( function() {
      toast.className = toast.className.replace("show" , "");
  },2200);
}

function downloadA() {
  download.className = "showA";
}


function select(el) {
  return document.querySelector(el);
}