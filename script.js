function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var comprimento = window.document.getElementById('comprimentos')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    
     if (hora >= 0 && hora <= 12) {
        comprimento.innerHTML = "Bom dia!"
        img.innerHTML = img.scr = "img/fotodia.png"
        document.body.style.backgroundColor = '#A3A646'
    } else if (hora >= 12 && hora <= 18) {
        comprimento.innerHTML = "Boa tarde!"
        img.innerHTML = img.src = "img/fototarde.png"
        document.body.style.backgroundColor = '#FBB652'
    } else {
        comprimento.innerHTML = "Boa noite!"
        img.innerHTML = img.src = "img/fotonoite.png"
        document.body.style.backgroundColor = '#0D0D0D'
    }
}



/*AINDA NÃO CONSEGUI FUNCIONAR EM TER 4 MODOS, CONTANDO O DE MANHÃ
if (hora >= 4 && hora <= 7) {
    img.innerHTML = img.scr = "img/fotomanha.png"
*/