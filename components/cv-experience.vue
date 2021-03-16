<template>
    <section class="experiences_list">
        <h3 class="section__title">Experiencia</h3>
        <article class="experience">
            <h4 class="experience__position">Desarrollador Front End</h4>
            <h5 class="experience__company">Ideable Solutions (Enero 2019 - Actualidad)</h5>
            <p class="experience__description">Maquetación web sobre proyectos Laravel. Mantenimiento de proyectos WordPress.</p>
        </article>

        <article class="experience">
            <h4 class="experience__position">Desarrollador web WordPress</h4>
            <h5 class="experience__company">Irudigital (Mayo 2015 - Diciembre 2018)</h5>
            <p class="experience__description">Desarrollo de themes a medida para WordPress, maquetación CSS y funcionalidades PHP. <br>WPO y analítica web. Formador WordPress y Google Tag Manager.</p>
        </article>

        <article class="experience">
            <h4 class="experience__position">Desarrollador Web</h4>
            <h5 class="experience__company">Unexpendables (Marzo 2014 - Junio 2014)</h5>
            <p class="experience__description">Maquetación web sobre proyecto HTML5, Canvas y CSS3.</p>
        </article>

        <article class="experience">
            <h4 class="experience__position">Ayudante de fotógrafo y Desarrollador Web.</h4>
            <h5 class="experience__company">Custodio Fotografía (2008 - 2015)</h5>
            <p class="experience__description">Segundo fotógrafo del estudio, retoque fotográfico, administrativo y desarrollador web.</p>
        </article>

        <article class="experience">
            <h4 class="experience__position">Desarrollador Web</h4>
            <h5 class="experience__company">Uvedoble Studio (2011)</h5>
            <p class="experience__description">Maquetación web CSS. Desarrollo y refactorización PHP y MySql.</p>
        </article>
    </section>
</template>

<style scoped>
    .experiences_list {}
    .experience {
        position: relative;
        margin-top: 2rem;
        padding-top: .25rem;
        padding-left: 4rem;
    }
    .experience__position {
        margin-bottom: .4rem;
        font-size: 1.6rem;
    }
    .experience__company {
        margin-bottom: .5rem;
        padding-left: 1rem;
        font-size: 1.2rem;
    }
    .experience__description {
        padding-left: 1rem;
        width: 90ch;
        max-width: 100%;
    }
    .experience:before,
    .experience:after {
        position: absolute;
        display: block;
        content: '';
    }
    .experience:before {
        z-index: 1;
        top: .5rem;
        left: 0;
        width: 1.5rem;
        height: 1.5rem;
        background-color: var(--china-pink);
        border: .5rem solid var(--glaucous);
        border-radius: 50%;
        box-shadow: .2rem ​.2rem 0 .1rem rgba(var(--rgb-china-pink), .2);
    }
    .experience:nth-child(odd):before {
        left: 1rem;
    }
    .experience:after {
        top: 2.5rem;
        left: 1rem;
        width: 1px;
        height: 90%;
        border-left: .4rem dashed var(--china-pink);
        transform: rotateZ(6deg);
    }
    .experience:nth-child(even):after {
        transform: rotateZ(-6deg);
    }
    .experience:nth-child(odd) {
        padding-left: 5rem;
    }
    .experience:nth-child(odd) .experience__company {
        margin-left: -.75rem;
        padding-left: 0;
    }
    .experience:nth-child(odd) .experience__description {
        margin-left: -1.5rem;
        padding-left: 0;
    }
</style>