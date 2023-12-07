
const qrTextEl = document.getElementById('qrText');
const imgBoxEl = document.getElementById('imgBox');
const qrImgEl = document.getElementById('qrImg');
const api_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function gnerateQR() {
    if (qrTextEl.value.length > 0) {
        qrImgEl.src = api_url + qrTextEl.value;
        imgBoxEl.classList.add('show-imgBox');
        // console.log(qrImgEl.src);
    }
    else{
        qrTextEl.classList.add('error');
        setTimeout(() => {
            qrTextEl.classList.remove('error');
        }, 1000);
    }
}


