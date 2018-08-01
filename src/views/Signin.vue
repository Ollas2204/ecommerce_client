<template>
<div class="col 12 m6">
  <div class="card-panel #f5f5f5 grey lighten-4">
    <h5>Welcome Back!!</h5>
    <div class="input-field">
      <input type="text" placeholder="Email" v-model="email">
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="password" type="password" class="validate" v-model="password">
        <label for="password">Password</label>
      </div>
    </div>
    <br>
    <input type="submit" value="Login" class="btn lime" @click="submit">
  </div>
</div>
</template>

<script>
export default {
  name: 'Signin',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    submit() {
      console.log('dddd')
      // this.$store.dispatch('login', {
      //   password: this.password,
      //   email: this.email
      // })
    }
  }
}
</script>

<style scoped >
</style>
