let questions = document.querySelectorAll('.questions');
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', mudarResp);
}

function mudarResp() {
    let resp = this.parentElement.querySelector('#resp');
    let img = this.parentElement.querySelector('#imgDesc');
    if (resp.style.display == 'none' || resp.style.display == '') {
        resp.style.display = 'block';
        img.src = 'icon-minus.svg';
    } else {
        resp.style.display = 'none';
        img.src = 'icon-plus.svg';
    }
}