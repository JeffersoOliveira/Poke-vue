<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from "vue";
import axios from "axios";
import AppCarregamento from '@/components/AppCarregamento.vue';

const route = useRoute()

let vPokemon = ref();
let vInfo = ref();
let showLoad = ref(true);


async function getPokemon() {
  await axios.get(`/pokemon/${route.params.id}`)
  .then((response) =>{
    vPokemon.value = response.data
  })
  .catch((error) => {
    console.log('getPokemon: ', error)
  })
}


async function getInfo() {
  await axios.get(`/pokemon-species/${route.params.id}`)
  .then((response) => {
    vInfo.value = response.data;
  })
  .catch((error) => {
    console.log('getInfo: ',error)
  })
}


onMounted(async () => {
  await getPokemon(),
  await getInfo(),
  showLoad.value = false
})
</script>

<template>
  <AppCarregamento v-if="showLoad" />
  <main class="container" v-if="!showLoad">
    <h1 class="text-center mt-4"> {{ vPokemon.name }}</h1>
    <div class="row mt-2">
      <div class="col-12 col-sm-6 col-md-5 col-lg-4">
        <div class="card " :class="vPokemon.types[0].type.name">
          <img :src="vPokemon.sprites.other.home.front_default">
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md- col-lg-8">
        <p>{{ vInfo.flavor_text_entries[0].flavor_text }}</p>
        <p class="mb-3">{{ vInfo.flavor_text_entries[1].flavor_text }}</p>
        <div v-for="(stats, key) in vPokemon.stats" :key="key" class="mb-1">
          {{ stats.stat.name }}: {{ stats.base_stat }}
          <div class="barra">
            <div class="pontos" :style="{ 'width': stats.base_stat + '%' }" :class="vPokemon.types[0].type.name" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
P {
  margin: 3px 0px;
}

.barra {
  position: relative;
  width: 70%;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  /* background: #e0e0e0; */
  box-shadow: inset 2px 2px 1px #969696de,
    inset -2px -2px 2px #f5f5f5;
}

.pontos {
  position: absolute;
  top: 2px;
  left: 1px;
  right: 1px;
  bottom: 2px;
  height: 90%;
  /* width: 15%; */
  border-radius: 15px;
  background-color: #00ff2a;
}

.grass {
  background-color: rgb(92, 184, 92) !important;

}

.fire {
  background-color: rgb(188, 89, 89) !important;

}

.water {
  background-color: rgb(51, 58, 187) !important;

}
</style>