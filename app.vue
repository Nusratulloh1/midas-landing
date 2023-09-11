<template>
  <NuxtLayout>
    <div>
      <NuxtLoadingIndicator color="#ffffff" :height="5" />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
  
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
useSeoMeta({
  title: 'Midas',
  ogTitle: 'Midas | Financial Freedom',
  description: 'We aim to shift your prism of association with savings, by developing our solutions, and turn saving from a necessity, into an ingrained way of your life.',
  ogDescription: 'We aim to shift your prism of association with savings, by developing our solutions, and turn saving from a necessity, into an ingrained way of your life.',
  ogImage: 'https://i.imgur.com/GlW51Ae.jpg',
  twitterCard: 'summary_large_image',
})

if ('setup' in route.query) {
  throw new Error('error in setup')
}
if ('mounted' in route.query) {
  onMounted(() => {
    throw new Error('error in mounted')
  })
}

</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>