<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '~/styles/swiper.css'

const onSwiper = (swiper) => { }
const onSlideChange = () => { }

const pagination = {
  clickable: false,
  renderBullet(index, className) {
    return `
      <div class="bullet-container bullet-container-${index + 1}">
        <div class="${className} bullet-${index + 1} ">0${index + 1}</div>
        <div class="bullet-line"></div>
      </div>
    `
  },
}

const modules = [A11y, Autoplay, Navigation, Pagination, Scrollbar]
</script>

<template>
  <main>
    <Swiper
      autoplay :modules="modules" navigation :pagination="pagination" :slides-per-view="1" :space-between="0"
      @swiper="onSwiper" @slide-change="onSlideChange"
    >
      <SwiperSlide>
        <div class="swiper-content">
          <div id="slide" class="slide">
            <img src="/img/slider/slide-4.jpg" alt="Slide 4">
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-content">
          <div id="slide" class="slide">
            <img src="/img/slider/slide-2.jpg" alt="SLide 2">
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-content">
          <div id="slide" class="slide">
            <img src="/img/slider/slide-3.jpg" alt="Slide 3">
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-content">
          <div id="slide" class="slide">
            <img src="/img/slider/slide-1.jpg" alt="Slide 1">
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </main>
</template>
