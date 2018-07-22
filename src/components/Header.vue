<template lang="html">
  <div class="navbar-fixed">
      <nav class="teal">
        <div class="container">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">OllaPedia</a>
            <a href="#" data-target="mobile-nav" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#search">Search</a>
              </li>
              <li>
                <a href="#popular">Popular Place</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>{{total}}</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css">
</style>
