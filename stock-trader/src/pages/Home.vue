<template>
    <div class="banner">
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save & Load your Data</p>
        <p>Click on 'End Day' to begin a new Day!</p>
        <hr>
        <h3>Your Funds: {{ funds | monify }}</h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'funds'
        ]),
    }
}
</script>

<style scoped>
    div.banner {
        border: 1px solid lightgray;
        padding: 50px 30px;
        border-radius: 4px;
    }
</style>