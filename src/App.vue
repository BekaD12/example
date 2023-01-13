<script setup lang="ts">
useHead({
  title: 'Example.',
  meta: [
    {
      name: 'description', content: 'Example - A vitrine example' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#202020' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>