let imagenes = [
    {
        "url": "./images/Slider/minera-2.jpeg",
        

    },
    {
        "url": "./images/Slider/minera-1.jpg",
        

    },
    {
        "url": "./images/Slider/pieza-1.png",
       

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img-carrusel');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img-carrusel" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img-carrusel" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}