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
              <router-link class="footer-item home" to="./">Home</router-link>
              <router-link class="footer-item blog" to="/blog">Blog</router-link>
              <router-link class="footer-item contact" to="/contact">Contact</router-link>
            </nav>
          </div>
        </div>

        <div class="footer-middle"></div>

        <div class="footer-right">
          <div class="button-socials">        
                <a class="button-social" href="https://benoitk.fr/" target="_blank">
                  <div i-tabler-world-www />
                </a>
            <a class="button-social" href="https://github.com/BekaD12" target="_blank">
              <div i-tabler-brand-github />
            </a>
            <a class="button-social" href="https://www.linkedin.com/in/benoitkourot/" target="_blank">
              <div i-tabler-brand-linkedin />
            </a>
            <button icon-btn @click="toggleDark()">
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
