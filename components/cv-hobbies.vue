<template>
    <section class="hobbies">
        <h3 class="section__title">Aficiones</h3>
        <div class="hobbies_list">
            <article class="hobbie">
                <h4>Leer</h4>
            </article>
            <article class="hobbie">
                <h4>Series</h4>
            </article>
        </div>
    </section>
</template>

<style scoped>
    .hobbies_list {
        display: flex;
    }
    .hobbie {
        position: relative;
        display: block;
        margin-bottom: .25rem;
        padding: .5rem 1rem;
        color: white;
        background-color: var(--glaucous);
        border-radius: 2rem;
        box-shadow: .1rem .1rem .1rem 0 rgba(var(--rgb-cultured), .8),
                    -.1rem -.1rem .1rem 0 rgba(var(--rgb-cultured), .8);
    }


</style>