<script setup>
// @ts-ignore
import { ref, onMounted } from "vue";
import Pokemon from '@/components/Pokemon/Pokemon.vue';
import appCarregamento from '@/components/AppCarregamento.vue';
import appBusca from '@/components/AppBusca.vue'


let carregamento = ref(true);
let vetorPokemons = ref([]);
let termoFiltragem = ref('');
let inicio ;
let fim

const props = defineProps(['geracao'])

function emitBusca(campoBusca) {
  termoFiltragem.value = campoBusca
}

function filtar() {
  return vetorPokemons.value.filter(obj => obj.name.toLowerCase().includes(termoFiltragem.value.toLowerCase()));
}

onMounted(async () => {

  if (props.geracao === 1) {
    inicio = 1;
    fim = 151;
    console.log(inicio, fim)
  }else if(props.geracao === 2){
    inicio = 152;
    fim = 251;
    console.log(inicio, fim)
  }else{
    inicio = 252;
    fim = 386;
    console.log(inicio, fim)
  }
  for (let indice = inicio; indice <= fim; indice++) {
    let requisicao = await fetch(`https://pokeapi.co/api/v2/pokemon/${indice}`);
    let pokemon = await requisicao.json();
    vetorPokemons.value.push(pokemon);
  }
  carregamento.value = false
});


</script>

<template>
  <appCarregamento v-if="carregamento" />
  <div class="row" v-if="!carregamento">
    <appBusca @campoBusca="emitBusca($event)" />
    <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="p in filtar()" :key="p.name">
      <Pokemon :pokemon="p"></Pokemon>
    </div>
  </div>
</template>

<style scoped></style>