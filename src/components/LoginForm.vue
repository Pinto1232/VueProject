<template>
  <div class="q-pa-md bg-white form">
    <q-form @submit="onSubmithandler" class="q-gutter-md form-q">
      <q-card v-if="submitResult.length > 0" flat bordered class="bg-grey-2">
        <q-card-section>Login Succeed):</q-card-section>
        <q-separator />
        <q-card-section class="row q-gutter-sm items-center">
          <div
            v-for="(item, index) in submitResult"
            :key="index"
            class="q-px-sm q-py-xs bg-grey-8 text-white text-center text-no-wrap"
          >
            {{ item.name }} = {{ item.value }}
          </div>
        </q-card-section>
      </q-card>

      <div class="flex justify-center">
        <img class="logo" :src="require('./../assets/logo.png')" alt="logo" />
      </div>

      <div class="input-value">
        <q-input
          class="txt__username txt"
          name="name"
          v-model="name"
          color="primary"
          label="Full name"
          filled
        />

        <q-input
          class="txt__username txt"
          name="name"
          v-model="passowrd"
          color="primary"
          label="Passowrd"
          filled
        />
      </div>

      <div class="flex justify-center">
        <q-btn
          class="btn btn-default"
          label="Login"
          type="submit"
          color="primary"
        />
      </div>
      <q-item-section>
        <div class="flex justify-center">
          <a to="/register">Forgot Username</a>
          <div>|</div>
          <a to="/register">Forgot Password</a>
        </div>
      </q-item-section>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";

const link = [
  {
    label: "",
  },
];
export default {
  name: "LoginForm",
  setup() {
    const submitResult = ref([]);

    return {
      name: ref("Username"),
      passowrd: ref("Passowrd"),
      submitResult,

      onSubmithandler(evt) {
        const formData = new FormData(evt.target);
        const data = [];
        console.log(data);

        for (const [name, value, passowrd] of formData.entries()) {
          data.push({
            name,
            passowrd,
            value,
          });
        }

        submitResult.value = data;
      },
    };
  },
};
</script>

<style scoped>
.txt__username {
  max-width: 100%;
}

.logo {
  max-width: 20%;
}

.btn {
  min-width: 100%;
}
.form {
  width: 25%;
  height: 37em;
  margin-top: 6em;
  margin-bottom: 2em;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 1%;
}
.input-value {
  margin-top: 6em;
}
.input-value .txt {
  margin-bottom: 1em;
}
</style>
