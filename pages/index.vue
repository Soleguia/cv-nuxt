<template>
  <main class="main cv">
    
    <!-- <NuxtLink to="/blog">
      Blog
    </NuxtLink> -->

    <div class="cv__presentation">
      <cv-presentation></cv-presentation>
      <cv-sections-nav></cv-sections-nav>
    </div>
    <div class="cv__content">
      <cv-education v-if="cvEducation"></cv-education>
      <cv-experience v-if="cvExperience"></cv-experience>
      <cv-skills v-if="cvSkills"></cv-skills>
    </div>

  </main>
</template>

<script>
export default {
  layout: 'cv',
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

  .cv {
    display: grid;
    grid-template-columns: 10vw 1fr 10vw;
    grid-template-rows: min-content 1fr;
    grid-template-areas: '. header . '
                          '. content .';
    align-items: center;
    background-color: #999;
  }
  .cv__presentation {
    grid-area: content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem 4rem;
    background-color: rgba(250,250,250, .3);
    border-radius: 2rem;
  }
  .cv__content {
    grid-area: content;
    padding: 10px 20px;
  }

</style>
