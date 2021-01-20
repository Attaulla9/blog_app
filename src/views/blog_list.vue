<template>
  <div>
    <div class="container pt-5">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-2 col-md-3 col-sm-4">
          <h2>Blog App</h2>
        </div>
        <div class="col-md-3 order-md-0 mt-2 mt-md-0">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Post name"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3" v-for="post in getPost" :key="post.id">
          <div class="card h-100 shadow-sm">
            <div class="card-body px-3 pt-1">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="h4 text-primary">
                    <router-link class="text-primary" :to="`blog/${post.id}`">{{
                      post.title
                    }}</router-link>
                  </p>
                </div>
              </div>

              <p class="mb-1 text-secondary">{{ post.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Blog",
  data() {
    return {
      search: "",
    };
  },

  computed: {
   ...mapGetters(["getPost"])
  },
  mounted() {
    this.$store.dispatch("getPosts", 10);
  },
};
</script>