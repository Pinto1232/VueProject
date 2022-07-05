<template>
  <q-item :class="mode ? '' : 'bg-grey-2'" class="text-black">
    <div class="flex table-row-div">
      <div class="bg-red" :class="mode ? 'text-white' : ''">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div class="bg-green" :class="mode ? 'text-white' : ''">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
      <div class="bg-blue" :class="mode ? 'text-white' : ''">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div class="bg-yellow" :class="mode ? 'text-white' : ''">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div class="bg-yellow" :class="mode ? 'text-white' : ''">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <div class="bg-yellow" :class="mode ? 'text-white' : ''">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  </q-item>
</template>

<script>
export default {
  name: "TableHome",

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
.table-row-div div {
  margin-top: 3em;
  flex-grow: 1;
  gap: 1em;
  padding: 6%;
  margin: 1em;
  align-items: center;
  justify-content: space-between;
}
</style>
