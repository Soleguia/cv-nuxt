<template>
  <main class="main cv-plano">
    <div class="cv__section cv__presentation">
      <cv-presentation></cv-presentation>
    </div>
    <div class="cv__section cv__education">
      <cv-education></cv-education>
    </div>
    <div class="cv__section cv__experience">
      <cv-experience></cv-experience>
    </div>
    <div class="cv__section cv__skills">
      <cv-skills></cv-skills>
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
    padding: 2rem;
  }
  .cv__presentation {
    
  }
  .cv__education {
    background-color: rgba(73, 216, 130, .1);
  }
  .cv__experience {
    background-color: rgba(173, 216, 230, .3);
  }
  .cv__skills {
    background-color: rgba(52, 1, 53, .1);
  }
</style>
