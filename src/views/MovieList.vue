<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(pelicula, index) in peliculas" :key="index">
          <div class="card mb-3" :class="getCardColor(index)">
            <div class="card-body">
              <h2 class="card-title">{{ pelicula.name }}</h2>
              <router-link :to="{ path: '/genero/' + pelicula.id}">
                  <h2>MAS INFORMACION</h2>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
</script>

<style>
</style>