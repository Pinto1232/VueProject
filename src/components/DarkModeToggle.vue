<template>
  <q-toggle
    v-model="darkMode"
    checked-icon="nights_stay"
    unchecked-icon="brightness_4"
    color="accent"
    size="lg"
  />
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const darkMode = ref(false);
    const $q = useQuasar();

    watch(darkMode, (darkMode) => {
      $q.dark.set(darkMode);
      $q.localStorage.set("darkMode", darkMode);
    });

    onMounted(() => {
      const darkModeIsActive = $q.localStorage.getItem("darkMode");
      if (darkModeIsActive) {
        darkMode.value = true;
      }
    });

    return {
      darkMode,
    };
  },
};
</script>

<style></style>
