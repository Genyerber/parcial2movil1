import axios from "axios"
const apiKey = '492d218f089fd8c20e9c3a945b482a9f'; // Reemplaza con tu propia clave de API de TMDb

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default{
    async getPelicula(peliculaId){
        return await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO')
        .then(response =>{
            return response.data.genres
        })
        
        .catch(error =>{
            console.log (error)
        })
    },  
    async getGeneroPelicula(id){
        return await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=492d218f089fd8c20e9c3a945b482a9f&language=esCO&with_genres=${id}`)
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            console.log (error)
        })
    },
    async getCartele(){
        return await axios.get('https://api.themoviedb.org/3/movie/now_playing?page=18&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO')
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            console.log (error)
        })
    },
    async getDetallePelicula(peliculaId) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}&language=es-CO`);
          return response.data;
        } catch (error) {
          console.error('Error al obtener los detalles de la película:', error);
          throw error; // Puedes manejar el error según tus necesidades
        }
    
    },
    async getTrailer(peliculaId) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${peliculaId}/videos?api_key=${apiKey}&language=es-CO`);
          const videos = response.data.results;
          const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    
          if (trailer) {
            // Devuelve la clave del video de YouTube
            return trailer.key;
          } else {
            // Si no se encuentra un tráiler, puedes manejarlo de la manera que desees
            return null;
          }
        } catch (error) {
          console.error('Error al obtener el tráiler:', error);
          throw error;
        }
      },
    };
    


