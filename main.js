let qrcode = select("img");
let qrtext = select("textarea");
let generateBtn = select("button");
let downloadBtn = select("a");

generateBtn.addEventListener("click", generateQR);

function generateQR() {
  let size = "1000x1000";
  let data = qrtext.value;
  let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

  let url = `${baseURL}?data=${data}&size=${size}`;

  qrcode.src = url;
  downloadBtn.href = url;
  qrtext.value = "";
}

function select(el) {
  return document.querySelector(el);
}
