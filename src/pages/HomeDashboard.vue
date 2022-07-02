<template>
  <q-page padding :class="mode ? 'bg-dark' : ''">
    <h2>Dashboard</h2>
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
