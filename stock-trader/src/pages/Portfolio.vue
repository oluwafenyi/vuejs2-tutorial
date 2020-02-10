<template>
    <div class="container">
        <app-owned-stock v-for="(stock, index) in ownedStocks" :key="index" :name="stock.name" :price="stock.price" :quantity="stock.quantity"></app-owned-stock>
        <h3 class="no-stock" v-if="ownedStocks.length == 0">Go buy some stock first!</h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OwnedStock from '../components/sell-stock.vue';

export default {
    components: {
        appOwnedStock: OwnedStock,
    },
    computed: {
        ...mapGetters([
            'ownedStocks'
        ]),
    },
}
</script>

<style scoped>
    .no-stock {
        text-align: center;
        margin-top: 150px;
    }
</style>
