<template>
  <div>
    <q-footer reveal elevated class="bg-primary text-white q-pt-lg q-pb-lg">
      <q-toolbar class="flex gap-md justify-center">
        <div class="row footer-row items-center">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </q-toolbar>
    </q-footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterComponent",
  setup() {
    return {};
  },
});
</script>


<style scoped>
 .footer-row .col{

    margin-left: 4em;
  }
</style>
