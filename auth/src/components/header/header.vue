<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Vue - Complete Guide</router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!isAuthenticated">
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li v-if="!isAuthenticated">
          <router-link to="/signin">Sign In</router-link>
        </li>
        <li v-if="isAuthenticated">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li v-if="isAuthenticated">
          <button @click="onLogout" class="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
}
</script>

<style scoped>
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
  }

  .logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
  }

  .logout:hover,
  .logout:active {
    color: #fa923f;
  }
</style>