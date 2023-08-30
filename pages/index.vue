<template>
  <div>
    <div class="w-full more pt-[84px]" ref="headRef">
      <div class="container mx-auto">
        <button class="aviable">
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
      class="section pt-[44px] 2xl:pt-20 top-section h-[100vh] 2xl:h-[883px] relative overflow-hidden "
      style=" transition: .3s ease-out all; zoom: 120%;">
      <div class=" max-w-screen-xl mx-auto">
        <h1>
          Save money,
          <br>
          with money, for money
        </h1>
        <p class=" mt-6">
          We aim to shift your prism of association with savings, by developing our solutions,
          and turn saving from a necessity, into an ingrained way of your life.
        </p>
        <div class="flex justify-center mt-9">
          <button @click="sendRequest"
            class="  h-16 px-8 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-stapel">
            Request early access
          </button>
        </div>
        <p class="mt-[8%] !text-base">
          Midas is a financial technology company, is not a bank. All activities are virtual and developed for
          analytical
          purposes only.
        </p>
      </div>
      <div class="svgs">
        <MTargetIcon :style="layer0" class="left-5 bottom-[190px] absolute z-50"></MTargetIcon>
        <MPieIcon :style="layer1" class="right-[70px] top-[30px] absolute z-50"></MPieIcon>
        <!-- <MDiagramIcon :style="layer2" class=" left-1 bottom-0 absolute">
        </MDiagramIcon>
        <MBankIcon :style="layer3" class=" right-9 bottom-0 absolute"> </MBankIcon> -->
      </div>
      <!-- <div>
          <button class="absolute right-[48.8%] bottom-4  text-[#343330] hover:text-[#CBE8CA] animate-bounce">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.7411 24.5536L21.9286 36.3661C21.8067 36.4881 21.6619 36.5849 21.5026 36.651C21.3433 36.717 21.1725 36.751 21 36.751C20.8275 36.751 20.6567 36.717 20.4974 36.651C20.3381 36.5849 20.1933 36.4881 20.0714 36.3661L8.25891 24.5536C8.01263 24.3073 7.87427 23.9733 7.87427 23.625C7.87427 23.2767 8.01263 22.9427 8.25891 22.6964C8.50518 22.4501 8.83921 22.3118 9.1875 22.3118C9.53579 22.3118 9.86982 22.4501 10.1161 22.6964L19.6875 32.2695V6.5625C19.6875 6.2144 19.8258 5.88056 20.0719 5.63442C20.3181 5.38828 20.6519 5.25 21 5.25C21.3481 5.25 21.6819 5.38828 21.9281 5.63442C22.1742 5.88056 22.3125 6.2144 22.3125 6.5625V32.2695L31.8839 22.6964C32.1302 22.4501 32.4642 22.3118 32.8125 22.3118C33.1608 22.3118 33.4948 22.4501 33.7411 22.6964C33.9874 22.9427 34.1257 23.2767 34.1257 23.625C34.1257 23.9733 33.9874 24.3073 33.7411 24.5536Z" />
            </svg>
          </button>
        </div> -->
    </section>
    <section data-bg="#0D0D0D" second="#0D0D0D" class="section pt-20 pb-10">
      <div class="container mx-auto">
        <div class="dark">
          <h3 class=" text-7xl font-medium  font-stapel leading-[normal]">
            Redefining finance:
            <br>
            Dive into standout features
          </h3>
          <div
            class="content  pt-3 pb-3 px-24 rounded-[32px] w-full my-10 mb-16 h-[594px] flex items-center justify-between"
            v-motion-slide-visible-once-bottom style=" transition: .5s ease-out all;">
            <div>
              <h3 class=" text-7xl font-medium  font-stapel leading-[normal]">
                All in one <br> Finance hub
              </h3>
              <p class="mt-6 max-w-[512px] text-2xl font-gilroy leading-[normal] text-[#404040]">
                Manage, track, and optimize all your financial activities seamlessly in one intuitive app.
              </p>
            </div>
            <div class="w-[35%] h-full">
              <MPhoneIcon class="dark-svg object-contain px-5 mb-[75px]"></MPhoneIcon>
              <img class=" w-full h-full rounded-[60px] object-contain dark-image" src="@/assets/images/demo.gif">
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div @click="sendRequest"
            class="advantage hover:translate-y-[-15px] transition-all cursor-pointer hover:shadow-xl"
            v-motion-slide-visible-once-bottom style=" transition: .5s ease-out all;">
            <h5>
              Reach your <br> financial goals

            </h5>
            <div class="anime ">
              <img src="@/assets/images/icons/mishen.svg" alt="mishen">
              <Blottie ref="blottie" class="onHover" :loop="true" renderer="svg" :path="mishen" @ready="onReady" />
            </div>
            <p>
              Set your financial goals and let our app guide you, step by step, to make them a reality.
            </p>
          </div>
          <div @click="sendRequest"
            class="advantage !bg-[#FAFAFA] hover:translate-y-[-15px] transition-all cursor-pointer hover:shadow-xl"
            v-motion-slide-visible-once-bottom style=" transition: .5s ease-out all;">
            <h5 class="!text-[#0D0D0D]">
              Smart analytics <br> insights
            </h5>
            <div class="anime">
              <img src="@/assets/images/icons/chart.svg" alt="chart">
              <Blottie ref="blottie" class="onHover" :loop="true" renderer="svg" :path="diagram" @ready="onReady" />
            </div>
            <p class="!text-[#0D0D0D]">
              Dive into tailored transaction overviews, understand spending habits, and master finance easily.
            </p>
          </div>
          <div @click="sendRequest"
            class="advantage hover:translate-y-[-15px] transition-[0.12s] cursor-pointer hover:shadow-xl"
            v-motion-slide-visible-once-bottom style=" transition: .5s ease-out all;">
            <h5>
              Personalize your experience

            </h5>
            <div class="anime">
              <img src="@/assets/images/icons/setting.svg" alt="chart">
              <Blottie ref="blottie" class="onHover" :loop="true" renderer="svg" :path="setting" @ready="onReady" />
            </div>
            <p>
              Navigate with multi-currency support, craft your categories, and receive notifications that truly
              resonate.
            </p>
          </div>
        </div>
        <!-- <div class=" bg-white px-24 rounded-[32px] w-full my-10 h-[594px] flex items-center justify-between">
          <div>
            <h3 class=" text-[64px] font-medium text-[#0D0D0D] font-stapel">
              Bank sync
            </h3>
            <p class="mt-3 max-w-[336px] text-xl font-gilroy">
              Instantly connect with top banks for real-time financial updates.
            </p>
          </div>
          <div class=" w-[451px]">
            <Blottie ref="blottie" :loop="true" renderer="svg" :path="banka" @ready="onReady" />
          </div>
        </div> -->
        <div class="flex justify-center mt-20">
          <button class=" text-[#343330] hover:text-[#CBE8CA] animate-bounce w-24 mx-auto">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" class="mx-auto"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.7411 24.5536L21.9286 36.3661C21.8067 36.4881 21.6619 36.5849 21.5026 36.651C21.3433 36.717 21.1725 36.751 21 36.751C20.8275 36.751 20.6567 36.717 20.4974 36.651C20.3381 36.5849 20.1933 36.4881 20.0714 36.3661L8.25891 24.5536C8.01263 24.3073 7.87427 23.9733 7.87427 23.625C7.87427 23.2767 8.01263 22.9427 8.25891 22.6964C8.50518 22.4501 8.83921 22.3118 9.1875 22.3118C9.53579 22.3118 9.86982 22.4501 10.1161 22.6964L19.6875 32.2695V6.5625C19.6875 6.2144 19.8258 5.88056 20.0719 5.63442C20.3181 5.38828 20.6519 5.25 21 5.25C21.3481 5.25 21.6819 5.38828 21.9281 5.63442C22.1742 5.88056 22.3125 6.2144 22.3125 6.5625V32.2695L31.8839 22.6964C32.1302 22.4501 32.4642 22.3118 32.8125 22.3118C33.1608 22.3118 33.4948 22.4501 33.7411 22.6964C33.9874 22.9427 34.1257 23.2767 34.1257 23.625C34.1257 23.9733 33.9874 24.3073 33.7411 24.5536Z"
                fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </section>
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
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { MPhoneIcon, MPieIcon, MTargetIcon } from '@/components/icons'
import GetEarlyAccessModal from '@/components/EarlyAccessModal.vue'
import { useModal } from "@/composables";
import type { AnimationItem } from 'lottie-web'
import { ref, computed, reactive, onMounted } from 'vue'
import { Blottie, type BlottieExpose } from 'blottie'
import Spaces from '~/components/Spaces.vue';
import MoneySaving from '~/components/MoneySaving.vue';
import Reviews from '~/components/Reviews.vue';
const container = ref(null)
const [animex] = useAutoAnimate()
const parallax = reactive(useParallax(container))
const mishen = new URL('../assets/lottie/mishen.json', import.meta.url).href
const diagram = new URL('../assets/lottie/diagrama_kv.json', import.meta.url).href
const setting = new URL('../assets/lottie/6.json', import.meta.url).href
const blottie = ref<BlottieExpose>()
function onReady(anim?: AnimationItem) {
  anim?.play()
}
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


    }
  });
})
// const layer2 = computed(() => ({
//   transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * 80
//     }px) scale(1.23)`,
// }))

// const layer3 = computed(() => ({
//   transform: `translateX(${parallax.tilt * 40}px) translateY(${parallax.roll * 90
//     }px) scale(1.23)`,
// }))
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
  }
}

.advantage {
  padding: 46px 30px;
  border-radius: 32px;
  background: #262626;
  height: 531px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 500ms ease-in-out;

  h5 {
    color: #FFF;
    font-family: 'Stapel';
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 24px;
    line-height: normal;
  }

  p {
    margin-top: 24px;
    color: #B3B3B3;
    font-family: 'Gilroy';
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
  }

  .anime {
    width: 190.745px;
    height: 191.459px;
    display: flex;
    margin: auto;

    .onHover {
      display: none;
    }
  }

  &:hover {
    margin-top: -20px;
    cursor: pointer;
    box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.2);
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);

    .onHover {
      display: block;
    }

    img {
      display: none;
    }
  }
}

.svgs {
  svg {
    // transition: .3s ease-out all;
  }
}


.dark {
  h3 {
    color: #0D0D0D;
  }


  .dark-image {
    display: none;
  }

  .content {
    background: #0D0D0D;

    h3 {
      color: #E8E8E8;
    }

    p {
      color: white;
    }
  }

  &.white {
    h3 {
      color: white;
    }

    .dark-svg {
      display: none;
    }

    .dark-image {
      display: block;
    }

    .content {
      background: white;

      h3 {
        color: #0D0D0D;
      }

      p {
        color: #404040;
      }
    }
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

// @media (max-width: 1536px) {
//   .top-section {
//     p {
//       max-width: 863px;
//       font-size: 22px;
//     }
//   }
// }
</style>
