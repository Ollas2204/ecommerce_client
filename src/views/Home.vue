<template>
<div class="body">
  <List/>
</div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'

export default {
  name: 'Home',
  data: () => ({}),
  components: {
    List
  }
}
</script>

<style scoped>

</style>
