let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}

const urlInput = document.querySelector("input");
const downloadBtn = document.querySelector("#downloadQR");

downloadBtn.addEventListener("click", async () => {
    const response = await fetch(qrImage.src);
    const file = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "qrcode.jpg";
    link.click();
});
