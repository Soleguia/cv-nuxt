<template>
  <div class="cv">
    
    <!-- <NuxtLink to="/blog">
      Blog
    </NuxtLink> -->

    <div class="cv__header">
      <cv-presentation></cv-presentation>
    </div>
    <div class="cv__content">
      <cv-education v-if="cvEducation"></cv-education>
      <cv-experience v-if="cvExperience"></cv-experience>
      <cv-skills v-if="cvSkills"></cv-skills>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'custom',
  data: () => {
    return {
      cvEducation: false,
      cvExperience: false,
      cvSkills: false,
    }
  }
}
</script>

<style>
  @import url('~/assets/scss/cv.scss');
  .main {
    background-color: #999;
  }
  .cv {
    display: grid;
    grid-template-columns: 10vw 1fr 10vw;
    grid-template-rows: min-content 1fr;
    grid-template-areas: '. header . '
                          '. content .';
    width: 80vw;
    height: 80vh;
  }
  .cv__header {
    grid-area: header;
  }
  .cv__content {
    grid-area: content;
    padding: 10px 20px;
  }

</style>
