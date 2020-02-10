<template>
  <div class="stock-item">
    <div class="stock-item__title buy">
      <span class="stock-item__name buy">{{ name }}</span>
      <span class="stock-item__price buy">(Price: {{ price }})</span>
    </div>
    <div class="stock-item__body buy">
      <input type="number" placeholder="Quantity" :class="{ danger: fundsInsufficient }" v-model.number="quantity">
      <button @click="buy({ name, quantity: Math.abs(quantity) })" class="buy" :disabled="quantity <= 0 || !Number.isInteger(quantity) || fundsInsufficient">{{ !fundsInsufficient ? 'Buy' : 'Insufficient Funds' }}</button>
    </div>
  </div>
</template>

<script>
  // import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        quantity: '',
      }
    },
    props: ['price', 'name'],
    methods: {
      // ...mapActions([
      //   'buy',
      // ]),
      buy(obj) {
        if (obj.quantity) {
          this.$store.dispatch('buy', obj);
          this.quantity = '';
        }
      }
    },
    computed: {
      fundsInsufficient() {
        return this.quantity * (this.price/1000) > this.$store.state.funds;
      }
    },
  }
</script>

<style scoped>

  .stock-item__title.buy {
    background: #bee0be;
  }

  .stock-item__name.buy {
    color: green;
  }

  .stock-item__price.buy {
    color: green;
  }

  .stock-item__body.buy {
    border-color: #bee0be;
  }

  .stock-item__body.buy > input:focus {
    outline-color: #bee0be;
  }

  .stock-item__body.buy > button {
    background: #93d693;
    border-color: #93d693;
  }

  button.buy:not(:disabled) {
    background: #288128;
    border-color: #288128;
  }

</style>