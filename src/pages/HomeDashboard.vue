<template>
  <q-page :class="mode ? 'bg-dark' : ''">
    <q-item-section
      elevated
      :class="mode ? 'bg-primary' : ''"
      class="flex justify-content align-items q-py-lg q-px-lg"
    >
      <q-item-title>
        <carousel-slider-home />
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

export default {
  name: "HomeDashboard",

  setup() {
    return {};
  },

  components: {
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
