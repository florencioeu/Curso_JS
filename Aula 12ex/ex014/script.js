function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = `fotomanha.png`
        document.body.style.background = '#c5e9fe'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = `fototarde.png`
        document.body.style.background = '#febb76'
    } else {
        // BOA NOITE!
        img.src = `fotonoite.png`
        document.body.style.background = '#203039'
    }
}
