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
                const selectCategoria = document.getElementById(listado-categorias);
                
                //Recorremos el arreglo e imprimimos los <option>
                cats.forEach(item => {
                    const option = document.createElement('option');
                });
            })
    }
}