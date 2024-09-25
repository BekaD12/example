<script setup>
const router = useRouter()
const currentPath = router.currentRoute.value.name
</script>

<template>
  <div class="footer-container">
    <div class="footer-content">
      <footer>
        <div class="footer-left">
          <div>
            <a class="footer-logo" href="/" aria-label="Example.">
              <span>Example.</span>
            </a>
          </div>
          <div class="footer-left-inner">
            <nav>
              <router-link v-if="!(currentPath === 'index')" class="footer-item home" to="./">
                Home
              </router-link>
              <router-link v-if="!(currentPath === 'blog')" class="footer-item blog" to="/blog">
                Blog
              </router-link>
              <router-link v-if="!(currentPath === 'contact')" class="footer-item contact" to="/contact">
                Contact
              </router-link>
            </nav>
          </div>
        </div>

        <div class="footer-middle" />

        <div class="footer-right">
          <div class="button-socials">
            <a class="button-social" href="https://benoitk.fr/" target="_blank" aria-label="Site personnel">
              <div i-tabler-world-www />
            </a>
            <a class="button-social" href="https://github.com/BekaD12" target="_blank" aria-label="Profil github">
              <div i-tabler-brand-github />
            </a>
            <button icon-btn title="Toggle dark mode" @click="toggleDark()">
              <div dark:i-tabler-moon i-tabler-sun />
            </button>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@import '~/styles/global/footer.css';
</style>
