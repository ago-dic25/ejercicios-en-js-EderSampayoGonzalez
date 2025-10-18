/*var alumnos = [
    "Carlos",
    "Cesar",
    "Regina",
    "Diego",
    "Andrea",
    "Mayela",
    "Eder",
    "Diego",
    "Naomi",
    "Eder"]

//  -- Manipulaciones --  //
//console.log(alumnos.pop());

alumnos.push("Edgar");
console.log(alumnos);

console.log(alumnos.shift());
alumnos.unshift("Axel");
console.log(alumnos);

//  -- Consultas --  //
console.log(alumnos.indexOf("Axel"));

console.log(alumnos.indexOf("samapayo"));
console.log(alumnos.includes("Eder"));

console.log(alumnos.find(nombre => nombre == "Eder"));
console.log(alumnos.findIndex(nombre => nombre == "Eder"));
*/
let alumnos = [
    {
        nombre: "Diego Leonardo",
        apellidoPaterno: "Alejandro",
        apellidoMaterno: "Cantu",
        matricula: 2053209
    },
    {
        nombre: "Carlos Manuel",
        apellidoPaterno: "Valerio",
        apellidoMaterno: "Rios",
        matricula: 2049129
    },
    {
        nombre: "Alexis Felipe",
        apellidoPaterno: "Elorza",
        apellidoMaterno: "Obregon",
        matricula: 2053789
    },
    {
        nombre: "Andrea Carolina",
        apellidoPaterno: "Alfaro",
        apellidoMaterno: "Sanchez",
        matricula: 2090186
    },
    {
        nombre: "Mayela Mayte",
        apellidoPaterno: "Lopez",
        apellidoMaterno: "Cerino",
        matricula: 2062209
    },
    {
        nombre: "Edgar Aurelio",
        apellidoPaterno: "Santiago",
        apellidoMaterno: "Santiago",
        matricula: 2053348
    },
    {
        nombre: "Eder Abraham",
        apellidoPaterno: "Sampayo",
        apellidoMaterno: "Gonzalez",
        matricula: 2048785
    },
    {
        nombre: "Eliud Abner",
        apellidoPaterno: "Sanchez",
        apellidoMaterno: "Garcia",
        matricula: 2039875
    },
]

let input = document.getElementById("filtroAlumno");
let listaAlumnos = document.getElementById("listaAlumnos");
//Agregar la lista inicial al html
for (let i = 0; i < alumnos.length; i++){
    let li = document.createElement('li');
    li.innerText = alumnos[i].nombre + " " + alumnos[i].apellidoMaterno + " " + alumnos[i].apellidoPaterno + "  " + alumnos[i].matricula;
    listaAlumnos.appendChild(li);
}

input.addEventListener('input', function(e){
    let busqueda = input.value.toLowerCase();
    //console.log(input.value);
    let listaDisplay = Array();

    //console.log(busqueda, listaDisplay, alumnos);
    if (busqueda == ''){
        listaDisplay = alumnos;
        //console.log("agregando todos los alumnos");
    }
    else{
        //onsole.log("lol");
        //console.log(alumnos, alumnos.length);
        for (let i = 0; i < alumnos.length; i++){
            //Agregar json del alumno actual
            al = alumnos[i];
            //console.log(al, busqueda, Object.values(al).includes(busqueda))
            if (al.nombre.toLowerCase().includes(busqueda) || al.apellidoPaterno.toLowerCase().includes(busqueda) || al.apellidoMaterno.toLowerCase().includes(busqueda) ||al.matricula.toString().includes(busqueda)){
                listaDisplay.push(al);
                console.log("Agregando alumno " + al.nombre);
            }
        }
        console.log("display nuevo: " + listaDisplay);
    }

    //Actualizar la lista en el html
    while (listaAlumnos.firstChild){
        listaAlumnos.removeChild(listaAlumnos.firstChild)
    }

    for (let i = 0; i < listaDisplay.length; i++){
        let li = document.createElement('li');
        li.innerText = listaDisplay[i].nombre + " " + listaDisplay[i].apellidoMaterno + " " + listaDisplay[i].apellidoPaterno + "  " + listaDisplay[i].matricula;
        listaAlumnos.appendChild(li);
    }
});

//Ordenar alfabeticamente
let orden = Boolean();
let botonOrden = document.querySelector(".orden");
botonOrden.addEventListener('click', function(e){
    alumnosDisplay = Array();
    orden = !orden;
    //asignar orden ascendente por primera vez
    if (orden == null){
        orden = true;
        alumnosDisplay = alumnos;
    }
    //Cambiar el orden del arreglo
    //console.log("Ordenando, orden actual: " + orden);
    if (orden){
        botonOrden.innerText = "Orden: ascendente ↑";
        alumnosDisplay = alumnos.sort((a,b) => a.nombre.localeCompare(b.nombre));
    }
    else{
        botonOrden.innerText = "Orden: descendente ↓";
        alumnosDisplay = alumnos.sort((a,b) => b.nombre.localeCompare(a.nombre));
    }
    console.log(alumnos);

    while (listaAlumnos.firstChild){
        listaAlumnos.removeChild(listaAlumnos.firstChild)
    }

    for (let i = 0; i < (alumnosDisplay || alumnos).length; i++){
        let li = document.createElement('li');
        li.innerText = (alumnosDisplay || alumnos)[i].nombre + " " + (alumnosDisplay || alumnos)[i].apellidoMaterno + " " + (alumnosDisplay || alumnos)[i].apellidoPaterno + "  " + (alumnosDisplay || alumnos)[i].matricula;
        listaAlumnos.appendChild(li);
    }
});