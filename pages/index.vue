<template>
  <div>
    <div class="w-full more md:pt-[74px] fixed md:relative z-[999] top-0" ref="headRef">
      <div class=" md:container mx-auto zoom">
        <button class="aviable !rounded-none md:!rounded-lg !mt-0 md:!mt-6 !w-full md:!w-[65%] !h-10 lg:!h-[50px]">
          <h6>
            Available in EU🇪🇺, UK🇬🇧, USA🇺🇸!
          </h6>
          <p>
            Watch our promo video.
          </p>
        </button>
      </div>
    </div>
    <section data-bg="#FAFAFA" first="#FAFAFA" ref="container"
      class="section pt-[200px] md:pt-[44px] lg:pt-24 2xl:pt-20 top-section pb-40 md:pb-0 md:h-[80vh] lg:h-[100vh] 2xl:h-[883px] relative overflow-hidden "
      style=" transition: .3s ease-out all; ">
      <div class=" container md:max-w-screen-xl mx-auto zoom ">
        <h1>
          Save money,
          <br>
          with money, for money
        </h1>
        <p>
          We aim to shift your prism of association with savings, by developing our solutions,
          and turn saving from a necessity, into an ingrained way of your life.
        </p>
        <div class="flex justify-center mt-8 md:mt-9">
          <button @click="sendRequest"
            class="  h-16 px-8 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-stapel">
            Request early access
          </button>
        </div>
        <p class=" !mt-[12%] md:!mt-[5%] !text-xs md:!text-sm">
          Midas is a financial technology company, is not a bank. All activities are virtual and developed for
          analytical
          purposes only.
        </p>
      </div>
      <div class="svgs zoom">
        <MTargetIcon :style="isMobile ? '' : layer0"
          class="w-[115px] md:w-[125px] lg:w-auto lg:left-5 bottom-[-20px] z-[-99] lg:bottom-[190px] absolute">
        </MTargetIcon>
        <MPieIcon :style="isMobile ? '' : layer1"
          class=" w-[110px] md:w-[120px] lg:w-auto right-7 top-[75px] md:top-[-20px] z-[-99] lg:right-[70px] lg:top-[30px] absolute">
        </MPieIcon>
      </div>
      <div class="absolute  bottom-9 md:bottom-12 w-full">
        <button
          class=" mx-auto  text-[#343330] hover:text-[#CBE8CA] animate-bounce hidden md:block">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.7411 24.5536L21.9286 36.3661C21.8067 36.4881 21.6619 36.5849 21.5026 36.651C21.3433 36.717 21.1725 36.751 21 36.751C20.8275 36.751 20.6567 36.717 20.4974 36.651C20.3381 36.5849 20.1933 36.4881 20.0714 36.3661L8.25891 24.5536C8.01263 24.3073 7.87427 23.9733 7.87427 23.625C7.87427 23.2767 8.01263 22.9427 8.25891 22.6964C8.50518 22.4501 8.83921 22.3118 9.1875 22.3118C9.53579 22.3118 9.86982 22.4501 10.1161 22.6964L19.6875 32.2695V6.5625C19.6875 6.2144 19.8258 5.88056 20.0719 5.63442C20.3181 5.38828 20.6519 5.25 21 5.25C21.3481 5.25 21.6819 5.38828 21.9281 5.63442C22.1742 5.88056 22.3125 6.2144 22.3125 6.5625V32.2695L31.8839 22.6964C32.1302 22.4501 32.4642 22.3118 32.8125 22.3118C33.1608 22.3118 33.4948 22.4501 33.7411 22.6964C33.9874 22.9427 34.1257 23.2767 34.1257 23.625C34.1257 23.9733 33.9874 24.3073 33.7411 24.5536Z" />
          </svg>
        </button>
      </div>
    </section>
    <Dive></Dive>
    <MoneySaving @send="sendRequest"></MoneySaving>
    <Spaces @send="sendRequest"></Spaces>
    <Reviews></Reviews>
    <Teleport to="body">
      <Transition name="fade">
        <GetEarlyAccessModal v-if="showModal"></GetEarlyAccessModal>
      </Transition>
    </Teleport>
  </div>
</template>
<script lang="ts" setup>
import { useParallax } from '@vueuse/core'
import { MPieIcon, MTargetIcon } from '@/components/icons'
import GetEarlyAccessModal from '@/components/EarlyAccessModal.vue'
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
const showModal = computed(() => modal.show.value);
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
  h1 {
    color: #0D0D0D;
    text-align: center;
    font-family: 'Stapel';
    font-size: 104px;
    font-weight: 500;
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