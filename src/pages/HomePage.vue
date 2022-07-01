<template>
  <q-page class="flex justify-around">
    <LoginFormVue />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginFormVue from "src/components/LoginForm.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    LoginFormVue
  }
});
</script>
