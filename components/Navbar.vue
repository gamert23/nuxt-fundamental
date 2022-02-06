<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <nuxt-link to="/"> <NuxtLogo /> </nuxt-link>
        <nuxt-link class="nav-link" to="/"> Home </nuxt-link>
        <nuxt-link class="nav-link" to="/blogs"> Blogs </nuxt-link>

        <b-nav-item-dropdown text="More" right>
          <nuxt-link class="dropdown-item" to="/about"> About </nuxt-link>
          <nuxt-link class="dropdown-item" to="/profile"> Profile </nuxt-link>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <nuxt-link class="nav-link login-btn" to="/login"> Login </nuxt-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

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
  color: #ddd;
}

.login-btn:hover {
  opacity: 0.8;
}
</style>
