<template>
  <q-layout  view="hHh lpR fFf">
   <!--  <q-header
      reveal
      elevated
      class="bg-primary text-white flex justify-around q-pt-md q-pb-md"
      height-hint="308"
    >
      <q-tabs align="left">
        <q-item-label class="text-h5 text-weight-bolder" to="" label="Logo">
          <p>LOGO</p>
        </q-item-label>
      </q-tabs>

      <q-tabs align="left">
        <q-route-tab to="/dashboard" label="Login" />
      </q-tabs>
    </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-toolbar class="flex justify-center">
     <!--  <FooterComponent /> -->
    </q-toolbar>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import FooterComponent from "src/components/FooterComponent.vue";

export default {
  name: "LoginForm",

  components: {
    /* FooterComponent, */
  },

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: { FooterComponent },
};
</script>

<style scoped>

.footer-row {
  height: 5rem;
}
.footer-row > div {
  padding: 10px 15px;
}
</style>
