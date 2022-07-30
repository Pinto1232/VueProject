<template>
  <q-item :class="mode ? '' : 'bg-grey-2'" class="text-black main-content">
    <div class="table-row-div">
      <div class="bg-red forms-group" :class="mode ? 'text-white' : ''">
        <forms-user />
      </div>
    </div>

    <div class="table-row-div">
      <div class="bg-red forms-group" :class="mode ? 'text-white' : ''">
        <forms-user />
      </div>
    </div>
  </q-item>
</template>

<script>
import Forms from "./Forms/FormsUser.vue";
export default {
  name: "TableHome",
  components: {
    "forms-user": Forms,
  },
  setup() {
    return {};
  },
  computed: {
    mode: function () {
      return this.$q.dark.isActive;
    },
  },
};
</script>

<style scoped>
.main-content .table-row-div {
  flex-direction: column;
  min-width: 50%;
}

.main-content .forms-group {
  min-width: 20em;
  padding: 2em;
  margin: 5px;
}
</style>
