<template>
    <section class="experiences_list">
        <h3>Experiencia</h3>
        <article class="experience">
            <h4 class="experience__company">Ideable Solutions (Enero 2019 - Actualidad)</h4>
            <h5 class="experience__position">Desarrollador Front End</h5>
            <p class="experience__description">Maquetación web sobre proyectos Laravel. Mantenimiento de proyectos WordPress.</p>
        </article>

        <article class="experience">
            <h4 class="experience__company">Irudigital (Mayo 2015 - Diciembre 2018)</h4>
            <h5 class="experience__position">Desarrollador web WordPress</h5>
            <p class="experience__description">Desarrollo de themes a medida para WordPress, maquetación CSS y funcionalidades PHP. WPO y analítica web. Formador WordPress y Google Tag Manager.</p>
        </article>

        <article class="experience">
            <h4 class="experience__company">Unexpendables (Marzo 2014 - Junio 2014)</h4>
            <h5 class="experience__position">Desarrollador Web</h5>
            <p class="experience__description">Maquetación web sobre proyecto HTML5, Canvas y CSS3.</p>
        </article>

        <article class="experience">
            <h4 class="experience__company">Custodio Fotografía (2008 - 2015)</h4>
            <h5 class="experience__position">Ayudante de fotógrafo y Desarrollador Web.</h5>
            <p class="experience__description">Segundo fotógrafo del estudio, retoque fotográfico, administrativo y desarrollador web.</p>
        </article>

        <article class="experience">
            <h4 class="experience__company">Uvedoble Studio (2011)</h4>
            <h5 class="experience__position">Desarrollador Web</h5>
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
        padding-left: 3rem;
    }
    .experience__company {
        margin-bottom: .5rem;
    }
    .experience__position {
        margin-bottom: .4rem;
        padding-left: .5rem;
    }
    .experience__description {
        padding-left: 1rem;
    }
    .experience:before,
    .experience:after {
        position: absolute;
        display: block;
        content: '';
    }
    .experience:before {
        z-index: 1;
        top: 0;
        left: .25rem;
        width: 1rem;
        height: 1rem;
        border: .2rem solid purple;
        border-radius: 50%;
    }
    .experience:after {
        top: 1rem;
        left: .7rem;
        width: .1rem;
        height: calc(100% + 1.1rem);
        border-left: .2rem dashed lightcoral;
        transform: rotateZ(-8deg);
        transform-origin: top;
    }
    .experience:nth-child(odd) {
        padding-left: 3rem;
    }
    .experience:nth-child(odd) .experience__position {
        margin-left: -.5rem;
        padding-left: 0;
    }
    .experience:nth-child(odd) .experience__description {
        margin-left: -1rem;
        padding-left: 0;
    }
    .experience:nth-child(odd):before {
        left: 1.25rem;
    }
    .experience:nth-child(odd):after {
        top: .9rem;
        height: calc(100% + 1.1rem);
        transform: rotateZ(9deg);
        transform-origin: bottom;
    }
</style>