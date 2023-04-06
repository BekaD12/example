<script setup>

const router = useRouter()
const currentPath = router.currentRoute.value.name
console.log(currentPath);
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
              <router-link class="footer-item home" to="./" v-if="!(currentPath == 'index')">Home</router-link>
              <router-link class="footer-item blog" to="/blog" v-if="!(currentPath == 'blog')">Blog</router-link>
              <router-link class="footer-item contact" to="/contact" v-if="!(currentPath == 'contact')">Contact</router-link>
            </nav>
          </div>
        </div>

        <div class="footer-middle"></div>

        <div class="footer-right">
          <div class="button-socials">        
                <a class="button-social" href="https://benoitk.fr/" target="_blank" aria-label="Site personnel">
                  <div i-tabler-world-www />
                </a>
            <a class="button-social" href="https://github.com/BekaD12" target="_blank" aria-label="Profil github">
              <div i-tabler-brand-github />
            </a>
            <a class="button-social" href="https://www.linkedin.com/in/benoitkourot/" target="_blank" aria-label="Profil linkedin">
              <div i-tabler-brand-linkedin />
            </a>
            <button icon-btn @click="toggleDark()" title="Toggle dark mode">
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
