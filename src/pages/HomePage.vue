<template>
  <q-page class="flex justify-around home-bg no-scrollbar">
    <LoginFormVue />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginFormVue from "src/components/LoginForm.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    LoginFormVue,
  },
});
</script>

<style scoped>
.home-bg {
  background-image: url("./../assets/Image-one.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>
