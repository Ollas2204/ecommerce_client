<template>
<nav>
  <div class="nav-wrapper teal">
    <div class="brand-logo teal">OllaPedia🏝️</div>
    <ul class="right hide-on-med-and-down">
      <li>
        <md-menu md-align-trigger>
          <div class="md-raised md-primary md-raised" md-menu-trigger>Category</div>
          <md-menu-content>
            <md-menu-item>Personal Package 🏝️</md-menu-item>
            <md-menu-item>Honeymoon Package 😍</md-menu-item>
            <md-menu-item>Opentrip Package 👍</md-menu-item>
          </md-menu-content>
        </md-menu>
      </li>
      <li>
        <md-menu>
          <div class="md-raised md-primary md-raised"><i class="material-icons">search</i></div>
        </md-menu>
      </li>
      <li>
        <md-menu>
          <div class="md-raised md-primary md-raised white-text" md-menu-trigger>
            <router-link class="white-text" :to="{ name: 'signin', params: {} }">Sign In</router-link>
          </div>
        </md-menu>
      </li>
      <li>
        <md-menu>
          <div class="md-raised md-primary md-raised white-text" md-menu-trigger>
            <router-link class="white-text" :to="{ name: 'signup', params: {} }">Sign Up</router-link>
          </div>
        </md-menu>
      </li>
      <li>
        <md-menu>
          <div class="md-raised md-primary md-raised"><i class="material-icons">add_shopping_cart</i></div>
        </md-menu>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {

  }
}
</script>

<style scoped>
.md-menu {
  margin-right: 24px
}
.room {
  display: block;
  background-color: lightgrey;
  min-height: 100%;
  padding-bottom: 180px;
}
</style>
