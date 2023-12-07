
const qrTextEl = document.getElementById('qrText');
const imgBoxEl = document.getElementById('imgBox');
const qrImgEl = document.getElementById('qrImg');
const api_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function gnerateQR(){
    console.log(qrTextEl.value);
    qrImgEl.src = api_url + qrTextEl.value;
    console.log(qrImgEl.src);
    imgBoxEl.classList.add('show-imgBox');
}

