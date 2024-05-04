
    let resposta1 = document.getElementById('resp1');
    let imgDesc1 = document.getElementById('imgDesc1');


    imgDesc1.addEventListener('click', ()=>{
        if (resposta1.style.display == 'none') {
            resposta1.style.display = 'block';
            imgDesc1.src = 'icon-minus.svg';
        } else {
            resposta1.style.display = "none";
            imgDesc1.src = 'icon-plus.svg';
        }
    })



function desc2() {
    let resposta2 = document.getElementById('resp2');
    let imgDesc2 = document.getElementById('imgDesc2');

    if (resposta2.style.display == 'none') {
        resposta2.style.display = 'block';
        imgDesc2.src = 'icon-minus.svg';
    } else {
        resposta2.style.display = 'none'
        imgDesc2.src = 'icon-plus.svg';
    }
}
function desc3() {
    let resposta3 = document.getElementById('resp3');
    let imgDesc3 = document.getElementById('imgDesc3');

    if (resposta3.style.display == 'none') {
        resposta3.style.display = 'block';
        imgDesc3.src = 'icon-minus.svg';
    } else {
        resposta3.style.display = 'none';
        imgDesc3.src = 'icon-plus.svg';
    }
}
function desc4() {
    let resposta4 = document.getElementById('resp4');
    let imgDesc4 = document.getElementById('imgDesc4');

    if (resposta4.style.display == 'none') {
        resposta4.style.display = 'block';
        imgDesc4.src = 'icon-minus.svg';
    } else {
        resposta4.style.display = 'none';
        imgDesc4.src = 'icon-plus.svg';
    }
}

// let resposta = document.getElementById('resp');
// let img = document.getElementById('imgDesc');
// let questions = document.getElementsByClassName('questions');

// for (i = 0; i < questions.length; i++) {
//     questions[i].addEventListener('click', () => {
//             if (resposta.style.display == 'none') {
//                 resposta.style.display = 'block'
//             } else {
//                 resposta.style.display = 'none'
//             }})
//         }