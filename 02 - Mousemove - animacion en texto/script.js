let texto = document.querySelector('h1');

document.addEventListener('mousemove', function(e){
    //console.log(texto.getBoundingClientRect().left, texto.getBoundingClientRect().right);
    
    //Conseguir coordenadas del centro del texto
    let rect = texto.getBoundingClientRect()
    let rectX = (rect.left + rect.right)/2 + window.scrollX;
    let rectY = (rect.top + rect.bottom)/2 + window.scrollY;

    //obtener coordeandas globales del mouse
    let x = e.clientX;
    let y = e.clientY;

    //Calcular offset de la sombra
    offsetX = (rectX-x)*0.1;
    offsetY = (rectY-y)*0.1;

    //añadir blur cuanto mas alejada este la sombra
    textBlur = 1 + (Math.abs(offsetX) + Math.abs(offsetY))/8;

    //console.log('coordenadas mouse: ',x,y,'\n coordenadas texto: ',rectX, rectY);
    //console.log('offset sombra: ', offsetX, offsetY);
    texto.style.textShadow = `${offsetX}px ${offsetY}px ${textBlur}px rgba(0, 20, 65, 0.8)`;
})