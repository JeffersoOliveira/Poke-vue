<script>
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">PokeVue</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Primeira Geração</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/geracao2" class="nav-link">Segunda Geração</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/geracao3" class="nav-link">Terceira Geração</RouterLink>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
</template>


<style></style>