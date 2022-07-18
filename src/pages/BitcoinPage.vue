<template>
  <q-page padding>
    <q-item-section>
      <h3>Bitcoin</h3>
      <form-bitcoin-data />
    </q-item-section>
  </q-page>
</template>

<script>
import FormsBitcoinVue from 'src/components/FormsBitcoin/FormsBitcoin.vue';

export default {
  name: 'BitcoinPage',
  components: {
  'form-bitcoin-data': FormsBitcoinVue,
  },
  data(){
    return {}
  }

};
</script>
