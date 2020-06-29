<template>
  <div class="home">
    home
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  
  },
  data() {
    return {
      msg: 'home'
    }
  },
  methods: {
    hello(){
      console.log(this.msg)
    }
  },
  mounted() {
    this.hello()
  }
} 
</script>
