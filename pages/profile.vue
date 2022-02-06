<template>
  <b-container>
    <div class="profile-block">
      <h2 class="title">My Profile</h2>

      <img v-if="user" class="profile-img" :src="user.avatar_url" />
    </div>

    <div class="repos-block" v-if="repos.length > 0">
      <b-row>
        <b-col cols="4" v-for="repo in repos" :key="repo.id">
          <b-card
            @click="redirect(repo.html_url)"
            :title="repo.name"
            img-src="https://picsum.photos/600/300/"
            img-alt="Image"
            img-top
          />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      repos: [],
      show: 6,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const baseUrl = 'https://api.github.com'

      const [user, repos] = await Promise.all([
        this.$axios.$get(`${baseUrl}/users/gamert23`, {
          transformRequest: [
            (data, headers) => {
              delete headers.common.authorization

              return data
            },
          ],
        }),
        this.$axios.$get(`${baseUrl}/users/gamert23/repos`, {
          transformRequest: [
            (data, headers) => {
              delete headers.common.authorization

              return data
            },
          ],
        }),
      ])

      this.user = user
      this.repos = repos
    },
    redirect(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style scoped>
.profile-block {
  padding: 30px 0 50px 0;
  text-align: center;
}

.title {
  font-size: 40px;
  margin-bottom: 30px;
}

.profile-img {
  border-radius: 50%;
  width: 200px;
  border: 1px solid #ddd;
}

.card {
  margin-bottom: 30px;
  cursor: pointer;
}

.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>