<template>
  <header class="main-header">

    <nav class="main-nav">
      <ul class="main-nav__items">
        <li class="main-nav__brand">
          <router-link to="/" tag="a">Stock Trader</router-link>
        </li>
        <li class="main-nav__item">
          <a href="">Portfolio</a>
        </li>
        <li class="main-nav__item">
          <a href="">Stocks</a>
        </li>
      </ul>
    </nav>

    <div class="header-buttons">
      <ul class="header-button__items">
        <li class="header-button__item">
          <a href="">End Day</a>
        </li>
        <li class="header-button__item">
          <a href="">Save & Load
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px" width="8px" height="8px" viewBox="0 0 292.362 292.362"
              style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
              <path
                d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
		C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
		s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" />
            </svg>
          </a>
        </li>
        <li class="header-button__item">Funds: {{ funds | monify }}</li>
      </ul>
    </div>
    <!-- <header class="navigation-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/" tag="a">Stock Trader</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" @click="isDropdownOpen = !isDropdownOpen"></span>
      </button>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/portfolio" tag="a" class="nav-link" active-class="active">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/stocks" tag="a" active-class="active">Stocks</router-link>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="navbarNavDropdown" :class="{ show: isDropdownOpen }">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" style="cursor: pointer;" @click.prevent="endDay">End Day</a>
          </li>
          <li class="nav-item dropdown" :class="{ show: isDropdownOpen }" @click="isDropdownOpen = !isDropdownOpen">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" :aria-expanded="isDropdownOpen">
              Save & Load
            </a>
            <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" style="cursor: pointer;" @click.prevent="save">Save Data</a>
              <a class="dropdown-item" style="cursor: pointer;" @click.prevent="load">Load Data</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link">Funds: {{ funds | monify }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header> -->
  </header>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpen: false,
      }
    },
    computed: {
      ...mapGetters([
        'funds'
      ]),
    },
    methods: {
      ...mapActions([
        'endDay',
        'save',
        'load',
      ]),
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  header.main-header {
    margin: 40px 0;
    background: #f8f9fa;
    padding: 16px 32px;
    border-radius: 4px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1.25rem;
    font-weight: lighter;
  }

  .main-nav {
    display: inline-block;
    text-align: left;
  }

  .main-nav__items {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .main-nav__item {
    display: inline-block;
    padding: 0 6px;
  }

  .main-nav__item>a {
    text-decoration: none;
    color: #665f5f;
  }

  .main-nav__brand {
    display: inline-block;
    padding-right: 10px;
  }

  .main-nav__brand > a {
    text-decoration: none;
    color: black;
    font-weight: 400;
    padding: .3125rem 0;
  }

  .header-buttons {
    display: inline-block;
    text-align: right;
    width: calc(100% - 283px);
  }

  .header-button__items {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .header-button__item {
    display: inline-block;
    padding: 0 6px;
  }
</style>