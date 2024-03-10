$(document).ready(function(){
    var btn_em_breve = $('#btn_em_breve').attr('id')
    var btn_populares = $("#btn_populares").attr('id')
    const questions = document.querySelectorAll('[data-faq-question]')

    //função de aparecer o header
    const heroSection = $('.hero')
    const alturaHero = heroSection.height()

    window.addEventListener('scroll', function(){
        const posicaoAtual = $(window).scrollTop()

        if(posicaoAtual < alturaHero){
            ocultaElementosDoHeader()
        }else{
            exibeElementosDoHeader()
        }
    })

    
    // Seção de atrações, programação das abas com jquery
    $(".shows__tabs__button").click(function(){
        $(".shows__tabs__button").removeClass("shows__tabs__button--is-active")

        if($(this).attr('id') === btn_em_breve){
            $(this).addClass("shows__tabs__button--is-active")
            $("#em_breve").css("display", "grid")
            $("#populares").css("display", "none")
            $("#star_plus").css("display", "none")
        }
        else if($(this).attr('id') === btn_populares){
            $(this).addClass("shows__tabs__button--is-active");
            $("#populares").css("display", "grid")
            $('#em_breve').css("display", "none")
            $('#star_plus').css("display", "none")
        }
        else{
            $(this).addClass("shows__tabs__button--is-active")
            $("#star_plus").css("display", "grid")
            $('#em_breve').css("display", "none")
            $("#populares").css("display", "none")
        }
    });
    
    //seção FAQ, accordion
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFecha)
    }
});

function ocultaElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}

function abreOuFecha(elemento){
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}