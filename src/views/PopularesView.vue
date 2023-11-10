<template>

  <router-link :to="{path: '/' }" class="btn btn-primary" style="margin-right: 20px;">IR AL INICIO</router-link><br>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="pelicula in page.results" :key="pelicula.id">
          <div class="card">
            <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.poster_path" class="card-img-top" :alt="pelicula.title" />
            <div class="card-body">
              <h5 class="card-title">{{ pelicula.title }}</h5>
              
              <router-link :to="{ path: `/details/${pelicula.id}` }" class="btn btn-primary" style="margin-right: 20px;">DETALLES</router-link>

            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PeliService from '@/service/PeliService';
  
  export default {
    name: 'PopularesView',
    data() {
      return {
        page: {
          results: [],
        },
      };
    },
    async created() {
      const apiKey = '492d218f089fd8c20e9c3a945b482a9f'; // Reemplaza con tu clave de API
      const numero_pagina = 1; // Ajusta la página según tus necesidades
      const url = `https://api.themoviedb.org/3/movie/popular?page=${numero_pagina}&api_key=${apiKey}&language=es-CO`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.page.results = data.results;
        console.log(this.page);
      } catch (error) {
        console.error('Error al cargar las películas populares', error);
      }
    },
    methods: {
      verMasInformacion(peliculaId) {
        // Agrega aquí la lógica para mostrar más información de la película con el ID proporcionado
      },
    },
  };
  </script>
  