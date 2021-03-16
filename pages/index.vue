<template>
  <main class="main cv-plano">
    <div class="cv__section cv__presentation">
      <cv-presentation></cv-presentation>
    </div>
    <div class="cv__section cv__experience">
      <cv-experience></cv-experience>
    </div>
    <div class="cv__section cv__education">
      <cv-education></cv-education>
    </div>
    <div class="cv__section cv__skills">
      <cv-skills></cv-skills>
    </div>
    <div class="cv__section cv__hobbies">
      <cv-hobbies></cv-hobbies>
    </div>

  </main>
</template>

<script>
export default {
  layout: 'cv',
  data: () => {
    return {
    }
  }
}
</script>

<style>
  @import url('~/assets/css/variables.css');

  .cv-plano {
    display: block;
  }
  .cv__section {
    padding: 4rem 6vw;
  }
  .section__title {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .cv__presentation {
    
  }
  .cv__education {
    background-color: rgba(var(--rgb-granny-smith-apple), .1);
  }
  .cv__experience {
    background-color: rgba(var(--rgb-glaucous), .3);
  }
  .cv__skills {
    color: white;
    background-color: var(--dark-slate-blue);
  }
</style>
