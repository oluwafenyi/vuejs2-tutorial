<template>
  <div id="app">
    <app-progress-bar :quotesLength="quotes.length" :maxQuotes="maxQuotes"></app-progress-bar>
    <app-add-quote @newQuoteAdded="addQuote($event)"></app-add-quote>
    <div class="quotes">
      <app-quote v-for="(quote, index) in quotes" :key="quote" :quote="quote" @click.native="deleteQuote(index)"></app-quote>
    </div>
      <p class="warning" v-if="quotes.length > 0">Info: Click on a quote to delete it.</p>
  </div>
</template>

<script>
import appProgressBar from './components/ProgressBar';
import appQuote from './components/Quote';
import appAddQuote from './components/AddQuote';

export default {
  name: 'app',
  data() {
    return {
      quotes: [],
      maxQuotes: 10,
    }
  },
  components: {
    appProgressBar,
    appQuote,
    appAddQuote,
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length == this.maxQuotes) {
        return alert('You have reached capacity. Please delete some quotes.');
      }
      if (quote.trim() == ''){
        return;
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
}
</script>

<style>

  body {
    box-sizing: border-box;
  }

  div#app {
    width: 80%;
    margin: 0 auto;
  }

  div.quotes {
    width: 80%;
    margin: 0 auto;
  }

  p.warning {
    text-align: center;
    margin-top: 40px;
    background: #7cbfd3;
    color: #205a9c;
    padding: 20px 0;
    border: #205a9c;
    border-radius: 3px;
  }

</style>
