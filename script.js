const menu = document.querySelector('#menu-icon') //SELECCION POR ID
const navList = document.querySelector('.navlist') //SELECCION POR CLASE

menu.onclick = () => { //() PARA QUE ESCUCHE ESE EVENTO
    menu.classList.toggle('bx-x') //ESTA CLASE VA Y VIENE, PARA QUE APAREZA Y DESAPAREZCA
    navList.classList.toggle('open') //CUANDO ESTE OPEN VA A APARECER
}

const sr = ScrollReveal({ //LLAMADO A SCROLL REVEAL
    distance: '65px',
    duration: 2000, //2 SEGUNDOS
    delay: 450, //MEDIO SEGUNDO DE DEMORA
    reset: true //QUE SE RESETEE CADA VEZ QUE HAGA FALTA
})
                //  CLASE/ 
sr.reveal('.hero-text', {delay: 200, origin: 'left'})
sr.reveal('.hero-img', {delay: 450, origin: 'top'})
sr.reveal('.icons', {delay: 500, origin: 'left'})
sr.reveal('.scroll.sown', {delay: 450, origin: 'right'})