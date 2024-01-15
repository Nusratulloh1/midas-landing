<template>
  <div class="bg-black">
    <section data-bg="#FAFAFA" first="#FAFAFA" ref="container"
      class="section pt-[200px] md:pt-[44px] lg:pt-24 2xl:pt-20 top-section pb-40 md:pb-0 md:h-[80vh] lg:h-[100vh] 2xl:h-[883px] relative overflow-hidden "
      style=" transition: .3s ease-out all; ">
      <div class=" container mx-auto flex items-center justify-between">
        <div class=" w-[726px]">
          <div class="flex items-center gap-2.5">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-95 bg-[#62AF6080]"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#92E490]"></span>
            </span>
            <span class="text-[#92E490] font-semibold">
              Available for both iOS and Android
            </span>
          </div>
          <h1>
            Your Financial Mastery, Our Mission
          </h1>
        </div>
        <div class=" w-[35%]">
          <svg xmlns="http://www.w3.org/2000/svg" width="564" height="653" viewBox="0 0 564 653" fill="none">
            <path
              d="M448.798 162.015L448.79 162.006C385.974 96.6127 300.179 87.7285 226.953 123.489C155.163 158.522 115.364 218.134 103.286 297.518C90.8197 379.225 130.823 475.053 215.461 520.704C263.638 546.718 314.524 554.396 367.733 539.608L367.743 539.605L367.752 539.602C401.601 529.481 432.038 510.092 455.713 483.571C462.822 475.964 469.411 467.832 475.998 459.703C478.921 456.096 481.843 452.488 484.811 448.928C491.021 452.031 501.683 459.389 515.074 469.76C528.87 480.445 545.49 494.27 562.985 509.785C563.112 511.915 562.42 513.68 561.354 515.385C560.783 516.297 560.116 517.176 559.412 518.087L559.219 518.337C558.585 519.157 557.926 520.009 557.333 520.894C518.679 576.711 469.144 618.872 404.116 637.864L404.116 637.864C296.131 669.457 197.598 647.99 111.956 574.52C43.2348 515.565 7.24296 438.572 1.71645 347.404L0.718285 347.465L1.71645 347.404C-3.48019 261.837 19.5278 184.707 72.8391 117.97C123.885 54.0714 189.828 15.1872 270.702 4.19945C330.729 -3.93063 384.051 3.55505 431.544 25.2698C478.786 46.869 520.318 82.5729 556.964 131.105L476.963 191.101C474.516 190.89 472.966 189.756 471.652 188.246C470.979 187.472 470.382 186.615 469.751 185.709L469.654 185.569C469 184.631 468.304 183.644 467.496 182.769C464.706 179.736 461.914 176.59 459.119 173.44C455.686 169.571 452.248 165.696 448.798 162.015Z"
              stroke="url(#paint0_linear_6530_12000)" stroke-width="2" />
            <defs>
              <linearGradient id="paint0_linear_6530_12000" x1="282" y1="0" x2="282" y2="653"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#92E490" />
                <stop offset="0.583398" stop-color="#189115" stop-opacity="0.416602" />
                <stop offset="1" stop-color="#92E490" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
    <Dive></Dive>
    <MoneySaving @send="sendRequest"></MoneySaving>
    <Spaces @send="sendRequest"></Spaces>
    <Reviews></Reviews>
  </div>
</template>
<script lang="ts" setup>
import { useParallax } from '@vueuse/core'
import { MPieIcon, MTargetIcon } from '@/components/icons'
import { useModal } from "@/composables";
import { ref, computed, reactive, onMounted } from 'vue'
import Spaces from '~/components/home/Spaces.vue';
import MoneySaving from '~/components/home/MoneySaving.vue';
import Dive from '~/components/home/Dive.vue';
import Reviews from '~/components/home/Reviews.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const container = ref(null)
const isMobile = useMediaQuery('(max-width: 768px)')
const parallax = reactive(useParallax(container))
const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 70
    }px) scale(1.23)`,
}))

const layer1 = computed(() => ({
  transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 50
    }px) scale(1.23)`,
}))
const modal = useModal();
const sendRequest = () => {
  modal.setTitle('');
  modal.setWidth("60%");
  modal.showModal();
}
onMounted(() => {
  window.addEventListener('scroll', () => {
    const dark = document.getElementsByClassName('dark')
    const money = document.getElementsByClassName('money-saving')
    const review = document.getElementsByClassName('review')
    const sections = [...document.querySelectorAll('.section')]
    document.body.style.background = sections[0]?.getAttribute('data-bg');
    const section = sections
      .map(section => {
        const el = section;
        const rect = el.getBoundingClientRect();
        return { el, rect };
      })
      .find(section => section.rect.bottom >= (window.innerHeight * 0.4));
    document.body.style.background = section?.el.getAttribute('data-bg');
    if (route.path === '/') {
      if (section?.el.getAttribute('first')) {
        dark[0].classList.remove('white')
      }
      else if (section?.el.getAttribute('second')) {
        dark[0].classList.add('white')
        money[0].classList.remove('scrolled')
      }
      else if (section?.el.getAttribute('third')) {
        dark[0].classList.remove('white')
        money[0].classList.add('scrolled')
      }
      else if (section?.el.getAttribute('four')) {
        review[0].classList.remove('scrolled')
      }
      else if (section?.el.getAttribute('five')) {
        review[0].classList.add('scrolled')
      }
      else {
        document.body.style.backgroundColor = '#0D0D0D';
        console.log('last');
      }
    }
  });
})
</script>
<style lang="scss">
.top-section {
  span {
    color: #92E490;
    font-family: 'Stapel';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  h1 {
    color:  #FFF;
    font-family: 'Stapel';
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    color: #404040;
    text-align: center;
    font-family: 'Gilroy';
    font-size: 20px;
    font-weight: 400;
    max-width: 1064px;
    margin-left: auto;
    margin-right: auto;
    line-height: normal;
    margin-top: 24px;
  }
}

.more {
  .aviable {
    border-radius: 8px;
    border: 2px solid rgba(0, 0, 0, 0.01);
    background: rgba(0, 0, 0, 0.90);
    backdrop-filter: blur(8px);
    height: 50px;
    width: 90%;
    margin: auto;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    h6 {
      color: #FCFCFC;
      font-family: Arial, sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0.5px;
      margin-right: 5px;
    }

    p {
      color: #FCFCFC;
      font-family: Arial, sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0.5px;
      text-decoration-line: underline;
      transition: 0.5s;

      &:hover {
        color: #CBE8CA;
      }
    }
  }

  &.scrolled {
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: inset;
  }
}

@media (max-width: 1024px) {
  .top-section {
    h1 {
      font-size: 40px;
      line-height: 105%;
    }

    p {
      font-size: 14px;
      margin-top: 16px;
    }
  }

  .more {

    .aviable {

      h6,
      p {
        font-size: 10px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .top-section {
    h1 {
      font-size: 80px;
      line-height: 105%;
    }
  }
}

@media (min-width: 1024px) and (max-width: 1280px) {
  .top-section {
    h1 {
      font-size: 90px;
      line-height: 105%;
    }
  }
}

@media (min-width: 1024px) {
  .top-section {
    .zoom {
      zoom: 100%;
    }
  }
}
</style>