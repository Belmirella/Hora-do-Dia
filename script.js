function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
   // var hora = data.getHours()
   var hora = 19
    msg.innerHTML =  `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        
        img.src = "/imagens/manha.img.jpg"
        document.body.style.background = '#e2cd9f'

    }else if (hora >= 0 && hora <18 ) {
        
        img.src = "/imagens/tarde.img.jpg"
        document.body.style.background = '#F0E68C'
    }else {
        img.src = "/imagens/noite.img.jpg"
        document.body.style.background = '#DCDCDC'
    }

}