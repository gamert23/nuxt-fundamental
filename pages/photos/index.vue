<template>
  <b-container>
    <b-row class="photo-block">
      <b-col cols="4" v-for="photo in photos" :key="photo.id">
        <div class="card">
          <div class="card-body">
            <nuxt-link :to="`/photos/${photo.id}`">
              <h4 class="card-title">{{ photo.id }}</h4>
            </nuxt-link>

            <p>By {{ photo.author }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios }) {
    const baseUrl = 'https://picsum.photos'

    const [photos] = await Promise.all([$axios.$get(`${baseUrl}/v2/list`)])

    return {
      photos,
    }
  },
}
</script>

<style scoped>
.photo-block {
  padding: 30px 0;
}

.card {
  margin-bottom: 30px;
}

a {
  color: black;
  text-decoration: none;
}
</style>