<template lang="">
  <div>
    <form @submit.prevent="$emit('submit-form', form)">
      <div class="form-group">
        <q-input
          type="text"
          id="name"
          class="input-group"
          placeholder="Name"
          v-model="form.name"
          required=""
        />
      </div>

      <div class="form-group">
        <q-input
          type="email"
          id="email"
          class="input-group"
          placeholder="Email"
          v-model="form.email"
          required=""
        />
      </div>

      <div class="form-group">
        <q-input
          type="text"
          id="address"
          class="input-group"
          placeholder="Address"
          v-model="form.address"
          required=""
        />
      </div>
      <div class="form-group">
        <q-input
          type="text"
          id="mobile_no"
          class="input-group"
          placeholder="Mobile no"
          v-model="form.mobile"
          required=""
        />
      </div>

      <q-btn
        type="submit"
         color="black" 
         class="btn-primary" 
         label="Submit" 
      />
    </form>
  </div>
</template>
<script>
export default {
  name: "FormsUser",
  props: {
    user: Object,
  },
  data() {
    return {
      form: {
        name: this.user ? this.user.name : "",
        address: this.user ? this.user.address : "",
        email: this.user ? this.user.email : "",
        mobile: this.user ? this.user.mobile : "",
      },
    };
  },
};
</script>
<style scoped>
form .form-group {
  display: flex;
  flex-wrap: wrap;
}

form .input-group{
  min-width: 100%;
}
form .btn-primary {
  display: inline-block;
  margin-top: 8px;
  min-width: 100%;
}
</style>
