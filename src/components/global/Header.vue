<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const currentPath = router.currentRoute.value.name
const isActive = ref(false)

function toggleActive() {
    isActive.value = !isActive.value
    // document.body.classList.toggle('lock')
}

function handleScroll() {
    const element = document.getElementById('header-content')
    if (window.scrollY > 150)
        element.classList.add('scrolled')
    if (window.scrollY < 150)
        element.classList.remove('scrolled')
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="header-container" :class="currentPath">
        <header id="header-content" class="header-content">
            <nav class="header" :class="{ 'menu-active': isActive }">
                <div class=" header-left">
                    <router-link class="navbar-logo" to="/" aria-label="Example.">
                        <div class="logo">
                          <span>Example.</span>
                        </div>
                    </router-link>
                </div>
                <div class="header-middle menu">
                    <div class="menu-inner">
                        <router-link class="menu-item home" to="./">Home</router-link>
                        <router-link class="menu-item blog" to="/blog">Blog</router-link>
                        <router-link class="menu-item contact" to="/contact">Contact</router-link>
                        <div class="menu-item btn-container">
                            <button class="btn">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
                <div class="header-right">
                    <div class="btn-container">
                        <button class="btn">
                          Button
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        <nav class="burger-container">
            <div class="burger-content">
                <svg class="burger rotate" viewBox="0 0 100 100" width="45" :class="{ active: isActive }" @click="
                toggleActive">
                    <path class="line top" d="M70 33H30s-8.5-.15-8.5 8.5S30 50 30 50h20V30" />
                    <path class="line middle" d="M70 50H30" />
                    <path class="line bottom" d="M30 67h40s8.5.15 8.5-8.5S70 50 70 50H50v20" />
                </svg>
            </div>
        </nav>
    </div>
</template>

<style scoped>
@import '~/styles/global/header.css';
</style>
