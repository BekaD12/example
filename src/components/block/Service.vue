<template>
  <div class="service-container">
    <div class="service-content">
      <div class="service-title">
        <h2>Lorem ipsum dolor sit</h2>
      </div>
      <div class="service-inner">
        <div v-for="index in 4" :key="index" class=" service-block">
          <img src="/img/service/service.png" alt="Service">
          <span class="service">Lorem ipsum dolor sit amet</span>
          <span class="price">Price €</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~/styles/service.css';
</style>
