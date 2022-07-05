<template>
  <q-page :class="mode ? 'bg-dark' : ''">
    <q-item-section
      elevated
      :class="mode ? 'bg-primary' : ''"
      class="flex q-py-lg q-px-lg"
    >
      <q-item-title>
        <carousel-slider-home />
      </q-item-title>
    </q-item-section>

    <q-item-section>
      <q-item-title>
        <ChartsHome />
      </q-item-title>
    </q-item-section>

    <q-item-section>
      <TableHome />
    </q-item-section>
  </q-page>
</template>

<script>
import CarouselSliderHome from "../components/CarouselSliderHome.vue";
import ChartsHome from "src/components/ChartsHome.vue";
import TableHome from "../components/TableHome.vue";

export default {
  name: "HomeDashboard",

  setup() {
    return {};
  },

  components: {
    CarouselSliderHome,
    ChartsHome,
    TableHome,
  },
  computed: {
    mode: function () {
      return this.$q.dark.isActive;
    },
  },
};
</script>
