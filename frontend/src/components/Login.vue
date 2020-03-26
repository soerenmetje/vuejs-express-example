<template>
  <div>
    <h4>Login</h4>
    <form action="" @submit.prevent="handleSubmit">
      <label for="name">Username</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus>
      </div>
      <div>
        <label for="password">Password</label>
        <div>
          <input id="password" type="password" v-model="password" required>
        </div>
      </div>
      <div>
        <button type="submit" v-bind:disabled="!this.name || !this.password">
          Login
        </button>
      </div>
      <span v-show="!this.name || !this.password">enter your username and password</span>
      {{msg}}
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        password: "",
        msg: ""
      }
    },
    methods: {
      handleSubmit() {
        //e.preventDefault()
        this.$http.post('http://localhost:3000/login', {
          name: this.name,
          password: this.password
        }).then(response => {
          localStorage.setItem('user', response.data.user);
          localStorage.setItem('jwt', response.data.token);

          if (localStorage.getItem('jwt') != null) {
            this.$emit('loggedIn');
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl)
            } else {
              this.$router.push('dashboard')
            }
          }
          this.msg = 'login succeeded'
        })
          .catch(error => {
            console.error('request failed');
            this.msg = 'wrong user name or password'
            //this.msg = 'an error occurred while requesting login'
          });
      }
    }
  }
</script>

<style scoped>

</style>
