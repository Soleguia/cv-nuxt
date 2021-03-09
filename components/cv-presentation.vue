<template>
    <header class="presentation">
        <h1>Josu Soleguia</h1>
        <h2>Desarrollador Front End</h2>
        <div class="presentation__face" v-html="beardFace"></div>
    </header>
</template>
<script>
import beardFace from "~/assets/svg/face_12.svg?raw";
export default {
    data(){
        return {
            beardFace
        }
    },
    created(){
        console.log(beardFace)
    }
}
</script>

<style scoped>
    .presentation {
        position: relative;
        display: grid;
        grid-columns: 1fr 40%;
        grid-rows: min-content;
    }

    .presentation h1,
    .presentation h2 {
        grid-column: 1;
        width: 100%;
    }
    .presentation__face {
        grid-column: 2;
        grid-row: 1 / span 2;
    }
</style>