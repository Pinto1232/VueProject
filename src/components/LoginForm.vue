<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-card
        v-if="submitResult.length > 0"
        flat
        bordered
        class="q-mt-md bg-grey-2"
      >
        <q-card-section>Login Succeed):</q-card-section>
        <q-separator />
        <q-card-section class="row q-gutter-sm items-center">
          <div
            v-for="(item, index) in submitResult"
            :key="index"
            class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
          >
            {{ item.name }} = {{ item.value }}
          </div>
        </q-card-section>
      </q-card>

      <q-input
        class="txt__username"
        name="name"
        v-model="name"
        color="primary"
        label="Full name"
        filled
        clearable
      />

      <q-input
        class="txt__username"
        name="name"
        v-model="name"
        color="primary"
        label="Full name"
        filled
        clearable
      />

      <div>
        <q-btn label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LoginForm",
  setup() {
    const submitResult = ref([]);

    return {
      name: ref("Username"),
      submitResult,

      onSubmit(evt) {
        const formData = new FormData(evt.target);
        const data = [];

        for (const [name, value] of formData.entries()) {
          data.push({
            name,
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
  width: 50em;
}
</style>
