<template>
  <div class="hello">
    <button @click="logout">logout</button>
    <h1>Dashboard</h1>
    <h2>Welcome {{user}}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: ""
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');

        this.$router.push('login')
      }
    },
    mounted() {
      this.user = localStorage.getItem('user');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
