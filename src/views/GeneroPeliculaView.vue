<template>
  <router-link :to="{ path: '/' }" class="btn btn-primary" style="margin-right: 20px;">IR AL INICIO</router-link><br>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="pelicula in page.results" :key="pelicula.id">
        <div class="card">
          <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path" class="card-img-top" :alt="pelicula.title" />
          <div class="card-body">
            <h5 class="card-title">{{ pelicula.title }}</h5>
            
            <router-link :to="{ name: 'DetallePelicula', params: { id: pelicula.id } }" class="btn btn-primary" style="margin-right: 20px;">DETALLES</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PeliService from '@/service/PeliService';

export default {
  name: 'GeneroPeliculaView',
  data() {
    return {
      page: {
        results: [],
      },
      currentPage: 1,
      totalPages: 1,
      data: [], // Datos paginados
    };
  },
  async created() {
    const peliculaId = this.$route.params.id;
    this.page = await PeliService.getGeneroPelicula(peliculaId);
    console.log(this.page);
  },
  methods: {
  },
  components: {
  },
};
</script>
