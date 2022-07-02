<template>
  <q-layout class="layout-box" view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LoginForm",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: { /* FooterComponent */ },
};
</script>

<style scoped>
.layout-box {
  height: 570px !important;
  overflow: hidden !important;
}

.footer-row {
  height: 5rem;
}
.footer-row > div {
  padding: 10px 15px;
}
</style>
