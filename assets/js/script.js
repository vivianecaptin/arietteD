//menu responsive
var iconMenuElement = document.querySelector('.menuIcon');

//sans resize
var windowSize = window.innerWidth

if (windowSize <= 768) {
    iconMenuElement.style.display = 'block';
}
if (windowSize > 768) {
    iconMenuElement.style.display = 'none';
}

//resize
window.addEventListener('resize', function() {
    var windowSize = window.innerWidth

    if (windowSize <= 768) {
        iconMenuElement.style.display = 'block';
    }
    if (windowSize > 768) {
        iconMenuElement.style.display = 'none';
    }
})

//déroulé du menu
var menuNavElement = document.querySelectorAll('.menu');

iconMenuElement.addEventListener ('click', function(){
    for (aElement of menuNavElement) {
        aElement.classList.toggle('responsive')
        }
})


//_________________________________________________________
//gestion des cookies
//________________________________
var cookiesLineElmt = document.querySelector('#cookies')

//accept
var acceptButton = document.querySelector('#accept')

acceptButton.addEventListener ('click', function(){
    cookiesLineElmt.style.display = 'none'
})

//modal personalize
var personalizeButton = document.querySelector('#personalize')
var cookiesModal = document.querySelector('#cookiesModal')
var closeModal = document.querySelector('.close');

//close modal
closeModal.addEventListener ('click',function(){
    cookiesModal.style.display = "none";
})

//open modal
personalizeButton.addEventListener ('click', function(){
    cookiesModal.style.display = 'block'
})

// changement couleur accept decline
// var btnA1 = document.querySelector('.btnA1')
// var btnD1 = document.querySelector('.btnD1')
// var btnA2 = document.querySelector('.btnA2')
// var btnD2 = document.querySelector('.btnD2')
// var btnA3 = document.querySelector('.btnA3')
// var btnD3 = document.querySelector('.btnD3')

// btnA1.addEventListener ('click', function(){
//     btnA1.style.backgroundColor = '#0f0'
//     if (btnA1.style.backgroundColor = '#0f0') {
//         btnD1.style.backgroundColor = '#b5bec5'
//     }
// })
// btnD1.addEventListener ('click', function(){
//     btnD1.style.backgroundColor = '#f00'
//     if (btnD1.style.backgroundColor = '#f00') {
//         btnA1.style.backgroundColor = '#b5bec5'
//     }
// })
// btnA2.addEventListener ('click', function(){
//     btnA2.style.backgroundColor = '#0f0'
//     if (btnA2.style.backgroundColor = '#0f0') {
//         btnD2.style.backgroundColor = '#b5bec5'
//     }
// })
// btnD2.addEventListener ('click', function(){
//     btnD2.style.backgroundColor = '#f00'
//     if (btnD2.style.backgroundColor = '#f00') {
//         btnA2.style.backgroundColor = '#b5bec5'
//     }
// })
// btnA3.addEventListener ('click', function(){
//     btnA3.style.backgroundColor = '#0f0'
//     if (btnA3.style.backgroundColor = '#0f0') {
//         btnD3.style.backgroundColor = '#b5bec5'
//     }
// })
// btnD3.addEventListener ('click', function(){
//     btnD3.style.backgroundColor = '#f00'
//     if (btnD3.style.backgroundColor = '#f00') {
//         btnA3.style.backgroundColor = '#b5bec5'
//     }
// })

//test fo of
var acceptCookies = document.querySelectorAll('.acceptCookies')
var declineCookies = document.querySelectorAll('.declineCookies')

for (buttonsAccept of acceptCookies) {
    buttonsAccept.addEventListener ('click', function(){
        this.style.backgroundColor = '#0f0'
        if (this.style.backgroundColor = '#0f0') {
            var btnDecline = this.nextElementSibling;
            btnDecline.style.backgroundColor = '#b5bec5'
        }
    })
}

for (buttonsDecline of declineCookies) {
    buttonsDecline.addEventListener ('click', function(){
        this.style.backgroundColor = '#f00'
        if (this.style.backgroundColor = '#f00') {
            var btnAccept = this.previousElementSibling;
            btnAccept.style.backgroundColor = '#b5bec5'
        }
    })
}