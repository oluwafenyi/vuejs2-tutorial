<template>
  <div class="container">
      <app-buy-stock v-for="(stock, index) in stocks" :key="index" :price="stock.price" :name="stock.name"></app-buy-stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BuyStock from '../components/buy-stock.vue';

export default {
  components: {
    appBuyStock: BuyStock
  },
  computed: {
    ...mapGetters([
      'stocks'
    ]),
  },
}
</script>
