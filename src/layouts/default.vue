<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-grey-4 text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-space />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat>
            <q-avatar size="26px">
              <q-icon :name="fabUser" color="red" size="28px"/>
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-4">
      <q-toolbar>
        <q-toolbar-title>
          <div class="flex flex-center text-black">
            Crypto App - Pinto Manuel
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fabUser } from "@quasar/extras/fontawesome-v6";

export default {
  name: "MyLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");



    return {
      fabUser,
      search,


      links1: [
        { icon: "home", text: "Home" },
        { icon: "login", text: "Login" },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
