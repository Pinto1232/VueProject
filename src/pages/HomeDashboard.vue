<template>
  <q-page :class="mode ? 'bg-dark' : ''">
    <q-item-section
      elevated
      :class="mode ? 'bg-primary' : ''"
      class="flex justify-content align-items q-py-lg q-px-lg"
    >
      <q-item-title>
        <carousel-slider />
      </q-item-title>
    </q-item-section>

    <q-item-section>
      <q-item-title :class="model ? '' : ''">
        <ChartsHome />
      </q-item-title>
    </q-item-section>

    <q-item-section>
      <TableHome />
    </q-item-section>
  </q-page>
</template>

<script>
import ChartsHome from "src/components/ChartsHome.vue";
import TableHome from "../components/TableHome.vue";
import CarouselSlider from "../components/Slider/CarouselSlider.vue";

export default {
  name: "HomeDashboard",
  components: {
    ChartsHome,
    TableHome,
    "carousel-slider": CarouselSlider,
  },

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
