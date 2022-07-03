<template>
  <q-page padding :class="mode ? 'bg-dark' : ''">
    <q-item-section elevated class="flex bg-primary q-py-lg q-px-lg">
      <q-item-title>Currency Display Slider</q-item-title>
    </q-item-section>

    <q-item-section class="flex">
      <q-item-title>Graph Display</q-item-title>
    </q-item-section>
  </q-page>
</template>

<script>
export default {
  name: "HomeDashboard",

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
