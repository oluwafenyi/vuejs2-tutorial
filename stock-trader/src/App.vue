<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import header from "./components/header.vue";

  export default {
    components: {
      appHeader: header
    }
  }
</script>

<style>
  body {
    width: 80%;
    margin: auto;
  }

  input {
    border-radius: 4px;
    border: .5px solid #cac5c5;
    padding: 4px;
    width: 60%;
    height: 30px;
    outline: none;
  }

  .stock-item {
    width: 45%;
    display: inline-block;
    margin: 0 20px;
    margin-bottom: 40px;
  }

  .stock-item__title {
    padding: 8px 10px;
    border-radius: 5px 5px 0 0;
  }

  .stock-item__name {
    font-weight: bold;
  }

  .stock-item__price {
    font-size: 12px;
    margin: 0 4px;
  }

  .stock-item__body {
    padding: 15px 5px;
    border: 1px solid;
    border-radius: 0 0 5px 5px;
  }

  .stock-item__body > button {
    color: white;
    border: 1px solid;
    border-radius: 4px;
    float: right;
    margin: 0 5px;
    padding: 0 8px;
    height: 30px;
  }

  .danger {
    border-color: lightcoral;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in .5s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave-active {
    animation: slide-out .5s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform .5s
  }

  @keyframes slide-in {
    from {
      transform: translateX(30px);
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(30px);
    }
  }
</style>