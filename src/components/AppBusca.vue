<script setup>

import { ref } from "vue";

const emit = defineEmits(['campoBusca']);


function enviaBusca(){
  emit('campoBusca', busca.value)
}

let busca = ref();

</script>

<template>
    <div class="row justify-content-center">
      <div class="col-8 mt-3">
        <form class="d-flex" role="search">
          <input class="form-control me-2" v-model="busca" type="search" @keyup="enviaBusca"
            placeholder="Qual Pokémon você está procurando?">
        </form>
      </div>
    </div>
</template>