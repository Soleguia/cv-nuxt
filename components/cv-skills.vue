<template>
    <section class="skills">
        <h3 class="skills_title">Conocimientos</h3>
        
        <div class="skills_group">
            <article class="skill">
                <h4>HTML</h4>
            </article>

            <article class="skill">
                <h4>CSS</h4>
            </article>

            <article class="skill">
                <h4>SCSS</h4>
            </article>

            <article class="skill">
                <h4>PostCSS</h4>
            </article>

            <article class="skill">
                <h4>Bootstrap 3/4</h4>
            </article>
        </div>
        
        <div class="skills_group">
            <article class="skill">
                <h4>JS</h4>
            </article>

            <article class="skill">
                <h4>jQuery</h4>
            </article>

            <article class="skill">
                <h4>Vue</h4>
            </article>
        </div>

        <div class="skills_group">
            <article class="skill">
                <h4>PHP</h4>
            </article>

            <article class="skill">
                <h4>Laravel</h4>
            </article>

            <article class="skill">
                <h4>MySql</h4>
            </article>

            <article class="skill">
                <h4>WordPress</h4>
            </article>
        </div>

        <div class="skills_group">
            <article class="skill">
                <h4>Git</h4>
            </article>
            <article class="skill">
                <h4>Bitbucket</h4>
            </article>
            <article class="skill">
                <h4>Sourcetree</h4>
            </article>
        </div>

        <div class="skills_group">
            <article class="skill">
                <h4>SEO</h4>
            </article>
            <article class="skill">
                <h4>G. Analytics</h4>
            </article>
            <article class="skill">
                <h4>G. Tag Manager</h4>
            </article>
        </div>
    </section>
</template>

<style scoped>
    .skills {
        display: grid;
        gap: 1rem;
        grid-template-rows: min-content 1fr;
        grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
    }
    .skills_title {
        grid-column: 1 / -1;
        margin-bottom: 2rem;
        font-size: 2rem;
    }
    .skills_group {

    }
    .skill {
        display: block;
        margin-bottom: .25rem;
        padding: .5rem 1rem;
        color: var(--dark-slate-blue);
        background-color: var(--cultured);
    }
</style>