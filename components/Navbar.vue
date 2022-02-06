<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <nuxt-link to="/"> <NuxtLogo /> </nuxt-link>
        <nuxt-link class="nav-link" to="/"> Home </nuxt-link>
        <nuxt-link class="nav-link" to="/blogs"> Blogs </nuxt-link>
        <nuxt-link class="nav-link" to="/photos"> Photos </nuxt-link>
        <nuxt-link class="nav-link" to="/about"> About </nuxt-link>
        <nuxt-link class="nav-link" to="/profile"> Profile </nuxt-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <nuxt-link v-if="!loggedIn" class="nav-link login-btn" to="/login">
          Login
        </nuxt-link>
        <a v-else class="nav-link logout-btn" @click="logout"> Log out </a>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    async logout() {
      await this.$auth.logout()

      this.$router.push('/login')
    },
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
  },
}
</script>

<style scoped>
.navbar {
  padding: 15px;
  justify-content: space-between;
}
.nuxt-logo {
  width: 32px;
  height: 35px;
}

.login-btn {
  width: 100px;
  text-align: center;
  background: #00dc81;
  border-radius: 5px;
  color: #fff;
}

.logout-btn {
  width: 100px;
  text-align: center;
  background: red;
  border-radius: 5px;
  color: #fff;
}

.login-btn:hover,
.logout-btn:hover {
  opacity: 0.8;
}
</style>
