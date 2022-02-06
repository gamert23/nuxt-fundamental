<template>
  <b-container>
    <b-row class="photo-block">
      <h1>Photo Detail</h1>

      <img class="img" :src="photo.download_url" alt="picsum photo" />
      <p>By {{ photo.author }}</p>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, params }) {
    const baseUrl = 'https://picsum.photos'

    const [photo] = await Promise.all([
      $axios.$get(`${baseUrl}/id/${params.id}/info`),
    ])

    return {
      photo,
    }
  },
}
</script>

<style scoped>
.photo-block {
  padding: 30px 0;
}

.img {
  max-width: 500px;
  padding: 30px 12px;
}
</style>