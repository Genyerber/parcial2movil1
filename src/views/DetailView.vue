<template>
  <router-link :to="{ path: '/' }" class="btn btn-primary" style="margin-right: 20px;">IR AL INICIO</router-link>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Detalle</h1>
      </div>
      <div class="col-md-6" v-if="pelicula">
        <div class="card">
          <img :src="'https://image.tmdb.org/t/p/w500/' + pelicula.backdrop_path" class="card-img-top" :alt="pelicula.title" />
          <div class="card-body">
            <h5 class="card-title">{{ pelicula.title }}</h5>
            <p class="card-text">{{ pelicula.overview }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2 v-if="pelicula">{{ pelicula.title }}</h2>
        <p v-if="pelicula">Fecha de Estreno: {{ pelicula.release_date }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="btn-group" role="group" aria-label="Botones de detalle">
          <!-- Agrega botones para mostrar resumen, género, productora y tráiler -->
          <button type="button" class="btn btn-primary" @click="mostrarInfo = 'resumen'">RESUMEN</button>
          <button type="button" class="btn btn-primary" @click="mostrarInfo = 'genero'">GÉNERO</button>
          <button type="button" class="btn btn-primary" @click="mostrarInfo = 'productora'">PRODUCTORA</button>
          <button type="button" class="btn btn-primary" @click="cargarTrailer">TRÁILER</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- Actualiza para mostrar la información adecuada según el botón presionado -->
        <div v-if="mostrarInfo === 'resumen'">{{ pelicula.overview }}</div>
        <div v-if="mostrarInfo === 'genero'">
          <h3>Géneros:</h3>
          <ul>
            <li v-for="genero in pelicula.genres" :key="genero.id">{{ genero.name }}</li>
          </ul>
        </div>
        <div v-if="mostrarInfo === 'productora'">
          <h3>Productoras:</h3>
          <ul>
            <li v-for="productora in pelicula.production_companies" :key="productora.id">{{ productora.name }}</li>
          </ul>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="btn-group" role="group" aria-label="Botones de detalle">
              <!-- ... tus otros botones ... -->
              <button type="button" class="btn btn-primary" @click="cargarTrailer">TRÁILER</button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div v-if="mostrarInfo === 'trailer'">
              <!-- Agrega el reproductor de video de YouTube solo si trailerKey no es null -->
              <iframe v-if="trailerKey" width="560" height="315" :src="'https://www.youtube.com/embed/' + trailerKey" frameborder="0" allowfullscreen></iframe>
              <div v-else>
                El tráiler no está disponible.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PeliService from '@/service/PeliService'

export default {
  name: 'DetallePeliculaView',
  data() {
    return {
      pelicula: {},
      mostrarInfo: 'resumen',
      trailerKey: null,  // Agrega esta propiedad para almacenar la clave del tráiler
      errorCargaTrailer: null,
    };
  },
 
  async created() {
    try {
      const peliculaId = this.$route.params.id;
      // Obtén los detalles de la película basada en el ID de la ruta
      this.pelicula = await PeliService.getDetallePelicula(peliculaId);
    } catch (error) {
      console.error('Error al cargar los detalles de la película:', error);
      // Puedes mostrar un mensaje al usuario o manejar el error de otra manera
    }
  },
  methods: {
    async cargarTrailer() {
      try {
        const peliculaId = this.$route.params.id;
        // Intenta obtener la clave del tráiler
        const key = await PeliService.getTrailer(peliculaId);
        // Verifica si se obtuvo una clave válida
        if (key) {
          this.trailerKey = key;
          this.errorCargaTrailer = null;  // Reinicia el posible error de carga
        } else {
          this.trailerKey = null;
          this.errorCargaTrailer = 'No se encontró un tráiler para esta película.';
        }
      } catch (error) {
        console.error('Error al cargar el tráiler:', error);
        this.trailerKey = null;
        this.errorCargaTrailer = 'Error al cargar el tráiler.';
      }
    },
  }
};
</script>
