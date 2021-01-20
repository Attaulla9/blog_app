<template>
  <div class="container ">
    <div v-if="getpost" class="border rounded shadow-sm mt-4 p-2">
      <h1>{{ getpost.title }}</h1>
      <p>{{ getpost.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getpost() {
      return this.$store.state.getPost;
    },
  },
  mounted() {
    this.$store.dispatch("singlePost", this.$route.params.post);
  },
};
</script>

<style>
</style>