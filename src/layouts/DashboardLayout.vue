<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated height-hint="64">
      <q-toolbar :class="mode ? '' : 'bg-grey-1'" class="GNL__toolbar">
        <q-btn
          :class="mode ? '' : 'bg-grey-7'"
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <img
            src="./../assets/logo.png"
            :style="{
              maxWidth: '4.5%',
              marginRight: '1rem',
            }"
          />
          <DarkModeToggle :class="mode ? 'text-grey-1' : ''" />
        </q-toolbar-title>

        <q-space />

        <q-input
          class="GNL__toolbar-input"
          outlined
          dense
          v-model="search"
          color="shadow-1"
          placeholder="Search for topics, locations & sources"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer text-primary"
              @click="search = ''"
            />
          </template>
          <template v-slot:append>
            <q-btn flat dense round aria-label="Menu" icon="arrow_drop_down">
              <q-menu anchor="bottom end" self="top end">
                <div class="q-pa-md" style="width: 400px">
                  <div class="q-mb-md">Narrow your search results</div>

                  <div class="row items-center">
                    <div class="col-3 text-subtitle2">Exact phrase</div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="exactPhrase" />
                    </div>

                    <div class="col-3 text-subtitle2">Has words</div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="hasWords" />
                    </div>

                    <div class="col-3 text-subtitle2">Exclude words</div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="excludeWords" />
                    </div>

                    <div class="col-3 text-subtitle2">Website</div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="byWebsite" />
                    </div>

                    <div class="col-12 q-pt-lg row justify-end">
                      <q-btn
                        flat
                        dense
                        no-caps
                        color="grey-7"
                        size="md"
                        style="min-width: 68px"
                        label="Search"
                        v-close-popup
                      />
                      <q-btn
                        flat
                        dense
                        no-caps
                        color="grey-7"
                        size="md"
                        style="min-width: 68px"
                        @click="onClear"
                        label="Clear"
                        v-close-popup
                      />
                    </div>
                  </div>
                </div>
              </q-menu>
            </q-btn>
          </template>
        </q-input>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            v-if="$q.screen.gt.sm"
            round
            dense
            flat
            color="text-grey-7"
            icon="apps"
          >
            <q-tooltip>GKonic App</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" class="text-white" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      :class="mode ? 'bg-primary' : 'text-grey-4'"
      dense
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item
            class="GNL__drawer-item"
            v-ripple
            v-for="link in links1"
            :key="link.text"
            :to="link.to"
            clickable
          >
            <q-item-section avatar>
              <q-icon
                :class="mode ? 'text-accent' : ''"
                class="text-primary"
                :name="link.icon"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label :class="mode ? 'text-white' : ''">{{
                link.text
              }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item
            class="GNL__drawer-item"
            v-ripple
            v-for="link in links2"
            :key="link.text"
            clickable
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" :class="mode ? 'text-accent' : ''" />
            </q-item-section>
            <q-item-section>
              <q-item-label :class="mode ? 'text-white' : ''">{{
                link.text
              }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item
            class="GNL__drawer-item"
            v-ripple
            v-for="link in links3"
            :key="link.text"
            clickable
          >
            <q-item-section>
              <q-item-label :class="mode ? 'text-white' : ''"
                >{{ link.text }} <q-icon v-if="link.icon" :name="link.icon"
              /></q-item-label>
            </q-item-section>
          </q-item>

          <div>
            <div class="flex flex-center q-gutter-xs">
              <a class="GNL__drawer-footer-link" href="javascript:void(0)"></a>
              <span> · </span>
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="Terms"
              ></a>
              <span> · </span>
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="About"
              ></a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-footer elevated class="text-white">
      <q-toolbar :class="mode ? '' : 'bg-grey-1'">
        <q-toolbar-title>
          <div class="flex justify-center q-px-lg">
            <div :class="mode ? '' : 'text-black'"></div>
            <div :class="mode ? '' : 'text-black'"></div>
            <div :class="mode ? '' : 'text-black'"></div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fasEarthAmericas, fasFlask } from "@quasar/extras/fontawesome-v6";
import DarkModeToggle from "../components/DarkModeToggle.vue";

export default {
  name: "GoogleNewsLayout",

  components: {
    DarkModeToggle,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");
    const showAdvanced = ref(false);
    const showDateOptions = ref(false);
    const exactPhrase = ref("");
    const hasWords = ref("");
    const excludeWords = ref("");
    const byWebsite = ref("");
    const byDate = ref("Any time");
    function onClear() {
      exactPhrase.value = "";
      hasWords.value = "";
      excludeWords.value = "";
      byWebsite.value = "";
      byDate.value = "Any time";
    }
    function changeDate(option) {
      byDate.value = option;
      showDateOptions.value = false;
    }
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    return {
      leftDrawerOpen,
      search,
      showAdvanced,
      showDateOptions,
      exactPhrase,
      hasWords,
      excludeWords,
      byWebsite,
      byDate,
      links1: [
        { icon: "home", text: "Home", to: "/dashboard" },
        { icon: "currency_bitcoin", text: "BTC", to: "/dashboard/bitcoin" },
        { icon: "person", text: "ETH" },
        { icon: "star_border", text: "USDT" },
        { icon: "search", text: "BNB" },
      ],
      links2: [
        { icon: "flag", text: "DODGE" },
        { icon: fasEarthAmericas, text: "ADA" },
        { icon: "place", text: "DOT" },
        { icon: "domain", text: "DAI" },
        { icon: "memory", text: "FTT" },
        { icon: "local_movies", text: "BCH" },
        { icon: "directions_bike", text: "USDP" },
        { icon: fasFlask, text: "FTM" },
        { icon: "logout", text: "Logout " },
      ],
      links3: [
        { icon: "", text: "Settings" },
        { icon: "", text: "Send feedback" },
        { icon: "open_in_new", text: "Help" },
      ],
      onClear,
      changeDate,
      toggleLeftDrawer,
    };
  },
  computed: {
    mode: function () {
      return this.$q.dark.isActive;
    },
  },
};
</script>

<style lang="sass">
.GNL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 55%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      .q-icon
        color: #5f6368

    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
