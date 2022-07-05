<template>
  <q-card-section class="q-mb-xs" :class="mode ? '' : 'bg-grey-1'">
    <div>Slider</div>
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
