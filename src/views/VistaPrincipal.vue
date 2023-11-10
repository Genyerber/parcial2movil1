<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(pelicula, index) in peliculas" :key="index">
          <div class="card mb-3" :class="getCardColor(index)">
            <div class="card-body">
              <h2 class="card-title">{{ pelicula.name }}</h2>
              <router-link :to="{ path: '/genero/' + pelicula.id}">
                  <h2>Ir</h2>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <router-link :to="{path: '/cartele' }" class="btn btn-primary" style="margin-right: 20px;">CARTELERA</router-link>
      <router-link :to="{path: '/califi' }" class="btn btn-primary" style="margin-right: 20px;">MEJOR CALIFICADAS</router-link>
      <router-link :to="{path: '/popular' }" class="btn btn-primary" style="margin-right: 20px;">POPULARES</router-link>
      
    </div>

</template>
  
<script>
  import PeliService from '@/service/PeliService'
  
  export default {
    name: 'VistaPrincipal',
    data() {
      return {
        peliculas: []
      }
    },
    methods: {
      getCardColor(index) {
        const colors = [
            'bg-blue-400', 'bg-blue-700', 'bg-indigo', 'bg-indigo-600', 'bg-purple', 'bg-purple-500', 'bg-pink', 'bg-pink-800',
            'bg-red', 'bg-red-300', 'bg-orange', 'bg-orange-600', 'bg-yellow', 'bg-yellow-700', 'bg-green', 'bg-green-600',
            'bg-teal', 'bg-teal-400', 'bg-cyan', 'bg-cyan-500', 'bg-gray-500', 'bg-gray-200'
        ];        
        return colors[index % colors.length];
      }
    },
    async created() {
      this.peliculas = await PeliService.getPelicula()
      console.log(this.peliculas)
    }
  }
</script>

<style>
    body {
      background-color: rgba(151, 213, 227, 0.75);  
    }
    .bg-blue-400 {
    background-color: #3498db;
    }
    .bg-blue-700 {
    background-color: #2980b9;
    }

    .bg-indigo {
    background-color: #6610f2;
    }
    .bg-indigo-600 {
    background-color: #5a32a3;
    }

    .bg-purple {
    background-color: #6f42c1;
    }
    .bg-purple-500 {
    background-color: #89609e;
    }

    .bg-pink {
    background-color: #d63384;
    }
    .bg-pink-800 {
    background-color: #8e3164;
    }

    .bg-red {
    background-color: #dc3545;
    }
    .bg-red-300 {
    background-color: #e4606d;
    }

    .bg-orange {
    background-color: #fd7e14;
    }
    .bg-orange-600 {
    background-color: #e06621;
    }

    .bg-yellow {
    background-color: #ffc107;
    }
    .bg-yellow-700 {
    background-color: #d39e00;
    }

    .bg-green {
    background-color: #198754;
    }
    .bg-green-600 {
    background-color: #157347;
    }

    .bg-teal {
    background-color: #20c997;
    }
    .bg-teal-400 {
    background-color: #48cfad;
    }

    .bg-cyan {
    background-color: #0dcaf0;
    }
    .bg-cyan-500 {
    background-color: #17a2b8;
    }

    .bg-gray-500 {
    background-color: #adb5bd;
    }
    .bg-gray-200 {
    background-color: #f8f9fa;
    }
</style>
  