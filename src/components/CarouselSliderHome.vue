<template>
  <q-card-section :class="mode ? '' : 'bg-grey-1'">
      <div class="slider">
        <div class="slide">
          <img
            class="img-icon"
            src="https://assets.website-files.com/5d9b7d2fdb7ed6fc5ddc4075/6190ca63deee47837463e4c1_blab-favicon.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
          class="img-icon"
            src="https://uploads-ssl.webflow.com/5de7c04425af69e72a6b362b/601d5a8b6c5124fbbcf68e74_ppai_logo_256.png"
            alt=""
          />
          </div>
        <div class="slide">
          <img
          class="img-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9c/SketchUp-Logo.png"
            alt=""
          />
          </div>
        <div class="slide">
          <img
          class="img-icon"
            src="https://assets.website-files.com/5ee732bebd98391c46ff27c4/5eff528838630876b8fa70e3_featuredon-abduzeedo-logo.svg"
            alt=""
          />
        </div>
      <div class="slide">
          <img
          class="img-icon"
            src="https://en.opensuse.org/images/c/cd/Button-colour.png"
            alt=""
          />
          </div>

       <div class="slide">
          <img
          class="img-icon"
            src="https://jungleworks.com/wp-content/uploads/2022/06/g2-logo.webp"
            alt=""
           />
        </div>

        <div class="slide">
          <img
          class="img-icon"
            src="https://jungleworks.com/wp-content/uploads/2022/06/g2-logo.webp"
            alt=""
           />
        </div>
        <div class="slide">
          <img
          class="img-icon"
            src="https://jungleworks.com/wp-content/uploads/2022/06/g2-logo.webp"
            alt=""
           />
        </div>
        <div class="slide">
          <img
          class="img-icon"
            src="https://jungleworks.com/wp-content/uploads/2022/06/g2-logo.webp"
            alt=""
           />
        </div>
        <div class="slide">
          <img
          class="img-icon"
            src="https://jungleworks.com/wp-content/uploads/2022/06/g2-logo.webp"
            alt=""
           />
        </div>
        </div>
  </q-card-section>
</template>

<script>
export default {
  name: "CarouselSliderHome",
  setup() {
    return {};
  },
  computed: {
    mode: function () {
      return this.$q.dark.isActive;
    },
  },
};
</script>


<style scoped>
  .slider{
     display: flex;
     gap: 0;
  }
 .img-icon{
  max-width: 20%;
  align-items: center!important;
  justify-content: space-around;
 }
</style>
