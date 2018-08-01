<template>
<div class="col 12 m6">
  <div class="card-panel #f5f5f5 grey lighten-4">
    <h5>Are you new? Please fill your information here</h5>
    <div class="input-field">
      <input type="text" placeholder="Name" v-model="name">
    </div>
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
    <input type="submit" value="Submit" class="btn lime" @click="submit">
  </div>
</div>
</template>

<script>
export default {
  name: 'Signup',
  data: () => ({
    name: '',
    password: '',
    email: ''
  }),
  methods: {
    submit () {
      console.log('dddd')
      //   this.$store.dispatch('addUser', {
      //     name: this.name,
      //     password: this.password,
      //     email: this.email
      //   })
      //   this.$emit('move', 'login')
    }
  }
}
</script>

<style scoped >
</style>
