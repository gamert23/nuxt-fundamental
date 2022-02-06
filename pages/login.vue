<template>
  <b-container>
    <b-row class="login-block">
      <b-row>
        <h1>Log in</h1>

        <b-col cols="6" offset="3">
          <b-form @submit="onSubmit">
            <b-form-group>
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>

              <b-form-input
                id="password"
                v-model="form.password"
                type="password"
                placeholder="Enter password"
                required
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="success">Submit</b-button>
          </b-form>

          <div v-if="error" class="error-box">Invalid data: {{ error }}</div>
        </b-col>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      error: '',
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()

      try {
        await this.$auth.loginWith('local', { data: this.form })
        this.$router.push('/')
      } catch (error) {
        this.error = error
      }
    },
  },
}
</script>

<style scoped>
.login-block {
  padding: 30px 0;
  text-align: center;
}

input {
  margin: 30px 0;
}

.error-box {
  margin-top: 30px;
  border-radius: 5px;
  color: white;
  padding: 30px;
  background: red;
}
</style>