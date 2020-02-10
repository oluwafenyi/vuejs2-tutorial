<template>
    <div class="container">
        <div class="entry">
            <label for="quoteEntry">Quote: </label>
            <textarea id="quoteEntry" cols="30" rows="6" v-model="quoteEntry"></textarea>
        </div>
        <div>
            <button @click="addQuote">Add Quote</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quoteEntry: '',
        }
    },
    methods: {
        addQuote() {
            this.$emit('newQuoteAdded', this.quoteEntry);
            this.quoteEntry = '';
        }
    },
}
</script>

<style scoped>

    label {
        display: block;
    }

    .container {
        margin: 30px 0;
        text-align: center;
    }

    .entry {
        display: inline-block;
        margin: 0 auto;
        text-align: left;
    }

    button {
        background: #168aad;
        color: white;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        margin: 2px 0;
        border: solid 1px #168aad;
        border-radius: 4px;
        padding: 5px 15px;
    }

    button:hover {
        color:#168aad;
        background: white;
    }

</style>
