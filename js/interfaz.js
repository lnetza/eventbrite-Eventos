class Interfaz {
    constructor(){
        //Inicializa la app al instanciar
        this.init();
        //Leer el resultado
        this.listado= document.getElementById('resultado-eventos');
    }
    //Método para cuando inicializa la app
    init(){
        //Llamar a imprimir categorias de las REST API
        this.imprimirCategoria();
    }

    //Imprimir categorias
    imprimirCategoria(){
        const listaCategorias=eventbrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;
                //Seleccionar el select de categorias
                const selectCategoria = document.getElementById('listado-categorias');
                
                //Recorremos el arreglo e imprimimos los <option>
                cats.forEach(item => {
                    const option = document.createElement('option');
                    option.value=item.id;
                    option.appendChild(document.createTextNode(item.name_localized));
                    selectCategoria.appendChild(option);
                });
            })
    }

    //Mostrar mensajes parametros mensajes y clases
    mostrarMensaje(mensaje, clases){
        const div= document.createElement('div');
        div.classList=clases;
        //Agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //Buscar un padre
        const buscadorDiv = document.getElementById('buscador');
        buscadorDiv.appendChild(div);
        //Quitar el aler despues de 3 segundos
        setTimeout(()=>{
            this.limpiarMensaje();
        }, 3000);

    }

    //Desaparece el mensaje en caso de que exista
    limpiarMensaje(){
        const alert= document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}