<template>
        <div class="prestations-container">
            <div class="prestations-content">
                <h2>Lorem ipsum dolor sit</h2>
                <div class="prestations-inner">
                    <div class="double-block">
                        <div class="prestations-block">
                            <router-link to="/blog/post">
                            <img src="/img/feature/feature-1.jpg" />
                            <div class="prestations-text">
                                <span>Sample</span>
                            </div>
                            </router-link>
                        </div>

                        <div class="prestations-block">
                            <router-link to="/blog/post">
                            <img src="/img/feature/feature-2.jpg" />
                            <div class="prestations-text">
                                <span>Sample</span>
                            </div>
                            </router-link>
                        </div>
                    </div>

                    <div class="single-block">
                        <router-link to="/blog/post">
                            <img src="/img/slider/slide-4.jpg" alt="">
                            <div class="prestations-text">
                                <span>Sample</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
@import '~/styles/pages/prestations.css';
</style>
