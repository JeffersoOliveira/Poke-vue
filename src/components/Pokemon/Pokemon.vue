<script setup>

const props = defineProps(['pokemon'])

</script>

<template>
    <RouterLink :to="'/pokemon/'+pokemon.id" class="nav-link">
        <div class="card mt-4" :class="pokemon.types[0].type.name">
            <img :src="pokemon.sprites.other.home.front_default">
            <p class="text-center"> {{ pokemon.name }}</p>
        </div>
    </RouterLink>
</template>

<style  scoped>
.card p {
    font-size: 25px;
    color: black;
    margin: 10px;
    border-top: 2px solid #ffffff47;
}

.card {
    transition: transform 0.5s !important;
}

.card:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0px 0px 5px 5px #1d1d1d50;
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