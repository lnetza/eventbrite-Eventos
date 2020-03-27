class EventBrite{
    constructor(){
        this.token_auth='WUW5PPXTUA3IEGJYWQ2Z';
        this.ordenar='date';
    }

    //Obtiene las categorias en init()
    async obtenerCategorias(){
        //Consultar las categorias a la REST API de event brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        
        //Esperar la respuesta de las categorias y devolver un JSON
        const categorias= await respuestaCategorias.json();

        //devolvemos el resultado
        return {
            categorias
        }
    }

    //Obtiene resultados de una busqueda 
    async obtenerEventos(evento,categoria){

        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);

        const eventos = await respuestaEvento.json();

        return {
            eventos
        }
    }

}