<script setup lang = "ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div class="grow">
    <button btn text-sm m="3 t8" @click="router.back()">
      {{ t('button.back') }}
    </button>
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
