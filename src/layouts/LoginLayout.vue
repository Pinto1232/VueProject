<template>
  <q-layout class="layout-box" view="hHh lpR fFf">
    <!--  <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="flex justify-around">
          <div>
            <strong></strong>
          </div>
          <div>
            <strong>
              <q-toggle
                 v-model="isActiveDarkMode"
                 icon="brightness_4"
                 @update:model-value="isActiveDarkMode"
              />
            </strong>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->
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
