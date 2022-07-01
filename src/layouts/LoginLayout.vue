<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      reveal
      elevated
      class="bg-primary text-white flex justify-around q-pt-md q-pb-md"
      height-hint="308"
    >
      <q-tabs align="left">
        <q-route-tab to="" label="Logo" />
      </q-tabs>

      <q-tabs align="left">
        <q-route-tab to="/dashboard" label="Login" />
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-primary justify-center text-white q-pt-lg q-pb-lg">
      <q-toolbar>
        <q-toolbar-title class="flex justify-center">
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
