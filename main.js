const listaDeTeclas = document.querySelectorAll('.tecla');

function playSong(SeletorAudio) {
    const element = document.querySelector(SeletorAudio);
    if (element == null) {
        console.log("Element not found");
    }
    if (element.localName != 'audio') {
        console.log("non compatible type");
    }
    else {
        element.play();
    }
}

function clickButton() {
    for (var i = 0; i < listaDeTeclas.length; i++) {
        const tecla = listaDeTeclas[i]
        const instrumento = listaDeTeclas[i].classList[1];
        const idAudio = `#som_${instrumento}`;
        tecla.onclick = function () {
            playSong(idAudio);
        }

        tecla.onkeydown = function (event) {
            if (event.keyCode == 32 || event.keyCode == 13) {
                tecla.classList.add('ativa');
            }
        }
        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
    }
}

clickButton();





