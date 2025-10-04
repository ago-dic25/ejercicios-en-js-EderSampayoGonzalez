let secuencia = [];
var reproducirBtn = document.getElementById('reproducirBtn')
var limpiarBtn = document.getElementById('limpiarBtn')

//variables de cada tecla//
document.addEventListener('keydown', function(e)
{
    console.log(e);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(audio);
    guardarSecuencia(e.keyCode)
    audio.play();
});

//guardar la secuencia de sonidos reproducidos
function guardarSecuencia(codigoTecla){
    secuencia.push(codigoTecla);
    console.log(secuencia)
}

//Reproducir los sonidos guardados por guardarsecuencia
reproducirBtn.addEventListener('click', function(){reproducirSecuencia()});

function reproducirSecuencia() {
    // recorrer la secuencia y reproducir los sonidos  
   
    for (let i = 0; i < secuencia.length; i++) {
        let audio = document.querySelector(`audio[data-key="${secuencia[i]}"]`);
        setTimeout(() => {
            audio.currentTime = 0;
            audio.play();
        }, i * 500); // espera 500ms entre cada sonido
       
    }
 
};

function limpiarSecuencia(){
    secuencia = [];
    console.log('Secuencia borrada');
}

limpiarBtn.addEventListener('click', function(){limpiarSecuencia()})




