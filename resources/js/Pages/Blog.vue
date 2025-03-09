<template>
    <div>
      <Link href="/">Home</Link>
      <Navigation />
      <h1>Blog</h1>
      <p>This is the blog page.</p>
      
      <div v-if="posts && posts.length">
        <div v-for="post in posts" :key="post.id" class="blog-post">
          <h2>{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>
          <Link :href="`/blog/${post.slug}`">Read more</Link>
        </div>
      </div>
      <div v-else>
        <p>No posts available.</p>
      </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
import Navigation from '../components/Navigation.vue'

export default {
  components: { Link, Navigation },
  props: {
    posts: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style scoped>
.blog-post {
  margin-bottom: 2rem;
}
</style>