const API_GENERAL = '../API/data/info.pagina.json';
const API_MENU = '../API/data/info.menu.json';
// const APIPRUEBA = '../API/data/info.menu.json';

/**
 * 
 * @param {Trae la consulta a la api} api 
 */
function consultarApi(api){
    $.getJSON(api, function(data){
        console.log(data);
    });
}

function consultarApiGetData(api){
    let dataInfo;
    $.getJSON(api, function(data){
        console.log(data);
        // dataInfo = data;
        // console.log(dataInfo);
        return data;
    });
    debugger;
    // return dataInfo;
}
// consultarApi(API_MENU);
// var dataG = consultarApiGetData(API_MENU);
// console.log(dataG);
// function forADatos(nombreMenu){
//     let menu;
//     let nombre;
//     let descripcion;
//     let imagen;
//     let precio;
//     let objMenu = {};
//     console.log(dataG);
//     // return nombreMenu;
//     // switch(nombreMenu){
//     //     case "tacos":
//     //         menu = data.menu[0].tacos;
//     //         break;
//     //     case "quesadillas":
//     //         menu = data.menu[0].quesadillas;
//     //         break;
//     //     case "bebidas":
//     //         menu = data.menu[0].bebidas;
//     //         break;
//     //     case "entradas":
//     //         menu = data.menu[0].entradas;
//     //         break;
//     //     case "varios":
//     //         menu = data.menu[0].varios;
//     //         break;
//     // }
//     // for(let j = 0; j < menu.length; j++){
//     //     nombre = menu[j].nombre;
//     //     descripcion = menu[j].descripcion;
//     //     imagen = menu[j].image;
//     //     precio = menu[j].precio;
//     // }

//     // objMenu = {
//     //     nombre : nombre,
//     //     descripcion : descripcion,
//     //     imagen : imagen,
//     //     precio : precio
//     // }

//     return objMenu;
// }



function consultarMenu(api, comida){
    $.getJSON(api, function(data){
        for (let index = 0; index < data.menu.length; index++) {
            let res;
            let objMenu ;
            let menu = [];
            switch(comida){
                case "tacos":
                    // res = forADatos(comida);
                    menu = data.menu[0].tacos;
                    for(let j = 0; j < menu.length; j++){
                        nombre = menu[j].nombre;
                        descripcion = menu[j].descripcion;
                        imagen = menu[j].image;
                        precio = menu[j].precio;
                    }
                
                    objMenu = {
                        nombre : nombre,
                        descripcion : descripcion,
                        imagen : imagen,
                        precio : precio
                    }            
                    // return objMenu;
                    break; 
                case "quesadillas": 
                    // res = forADatos(comida);
                    menu = data.menu[1].quesadillas;
                    for(let j = 0; j < menu.length; j++){
                        nombre = menu[j].nombre;
                        descripcion = menu[j].descripcion;
                        imagen = menu[j].image;
                        precio = menu[j].precio;
                        
                        objMenu = {
                            nombre : nombre,
                            descripcion : descripcion,
                            imagen : imagen,
                            precio : precio
                        }
                        
                        menu.push(objMenu);
                    }
                
                    // return objMenu;
                    break;
                case "bebidas": 
                    // res = forADatos(comida);
                    menu = data.menu[2].bebidas;
                    for(let j = 0; j < menu.length; j++){
                        nombre = menu[j].nombre;
                        descripcion = menu[j].descripcion;
                        imagen = menu[j].image;
                        precio = menu[j].precio;
                    }
                
                    objMenu = {
                        nombre : nombre,
                        descripcion : descripcion,
                        imagen : imagen,
                        precio : precio
                    }                                
                    // return objMenu;
                    break;
                case "entradas": 
                    // res = forADatos(comida);
                    menu = data.menu[3].entradas;
                    for(let j = 0; j < menu.length; j++){
                        nombre = menu[j].nombre;
                        descripcion = menu[j].descripcion;
                        imagen = menu[j].image;
                        precio = menu[j].precio;
                    }
                
                    objMenu = {
                        nombre : nombre,
                        descripcion : descripcion,
                        imagen : imagen,
                        precio : precio
                    }            
                    // return objMenu;
                    break;
                case "varios": 
                    // res = forADatos(comida);
                    menu = data.menu[4].varios;
                    for(let j = 0; j < menu.length; j++){
                        nombre = menu[j].nombre;
                        descripcion = menu[j].descripcion;
                        imagen = menu[j].image;
                        precio = menu[j].precio;
                    }

                    objMenu = {
                        nombre : nombre,
                        descripcion : descripcion,
                        imagen : imagen,
                        precio : precio
                    }            
                    // return objMenu;
                    break;
            }

            console.log(menu);
            
        }
    });
}

/**
 * 
 * @param {Consulta el api con los datos basicos del restaurante} api 
 */
function datosBasicosApi(api){

    $.getJSON(api, function(data){
        // console.table(data);
        /** 
         * @razonSocail Nombre del restaurante
         * @roRestaurante Numero del restaurante
         * @direccionRestaurante Direccion del restaurante
         * @nombre = H1 en documento html
         */
        let razonSocial = data.Nombre;
        let numeroRestaurante = data.Telefono;
        let direccionRestaurante = data.Direccion;
        let nombre = document.getElementById("nombreRes");
        let direccion = document.getElementById("direccionRes");
        nombre.innerHTML = razonSocial;
        direccion.innerHTML = direccionRestaurante;
    });
    
}

function dataMenu(name){
    let data = consultarMenu(API_MENU, name);
    console.log(data);
}

function escribirDatosMenu(nombre, descripcion, imagen, precio){
    let div = document.getElementById("containerCards");
    div.innerHTML = `<div class="col-md-6 card-colu">    
                        <div class="card mb-5" style="width: 23rem;">
                            <img src="../Assets/images/${imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${nombre}</h5>
                                <p class="card-text">${descripcion}</p>
                                <p class="card-text">$ ${precio}</p>
                                <a href="#" class="btn btn-primary">Pedir</a>
                            </div>
                        </div> 
                        <div class="card" style="width: 23rem;">
                            <img src="../Assets/images/esquites.png" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>`;
}

datosBasicosApi(API_GENERAL);
// consultarMenu(API_MENU, "tacos");
// escribirDatosMenu("algun nombre", "Esto es una descripcion", "esquites.png", "17.5");
dataMenu("quesadillas");