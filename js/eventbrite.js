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

}