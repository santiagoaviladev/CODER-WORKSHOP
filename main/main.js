
function init(){

   mostrarBotones();
   mostrarUsuarios();
   

}

function mostrarBotones()
{
    const nodoBoton = document.createElement("button");
    nodoBoton.innerHTML="Ordenar ASC";
    nodoBoton.addEventListener("click", ()=>{
       ordenarASC();
    }); 
    document.body.append(nodoBoton);

    const nodoBoton2 = document.createElement("button");
    nodoBoton2.innerHTML="Ordenar DESC";
    nodoBoton2.addEventListener("click", ()=>{
       ordenarDESC();
    }); 
    document.body.append(nodoBoton2);
}


function mostrarUsuarios()
{

    let nodoLista = document.querySelector("#listaUsuarios");
    
    if(!nodoLista)
    {
        nodoLista = document.createElement("ul");
        nodoLista.setAttribute("id", "listaUsuarios"); 
    }

    nodoLista.innerHTML="";

    usuarios.forEach(element=>{
        const nodoEl = document.createElement("li");
        let nombre = `<h1>${element.first_name} ${element.last_name}</h1>
                      <img src=${element.avatar}>
                      <p>${element.text}</p>`;
        if(!element.last_name) // element.last_name===nul
        {
            nombre = `${element.first_name}`
        }
        nodoEl.innerHTML=`${nombre} <button onclick="borrarElemento('${element.id}')">Borrar</button>`;
        
        nodoLista.appendChild(nodoEl);
    });
    document.body.append(nodoLista);
}

function ordenarASC()
{

    usuarios.sort((a,b)=>
    {
        
        if(a.first_name > b.first_name)
            return -1;
        else
            return 1;
    });
    mostrarUsuarios();
   
}


function ordenarDESC()
{

    usuarios.sort((a,b)=>
    {
        
        if(a.first_name < b.first_name)
            return -1;
        else
            return 1;
    });
    mostrarUsuarios();
   
}


function borrarElemento(id)
{
    // slice -- indice 
    // indexOf 
    
    let mapped = usuarios.map((element)=>element.id);
    let index = mapped.indexOf(id);
    usuarios.splice(index,1);

    mostrarUsuarios();


}