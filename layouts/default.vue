<template>
  <div>
    <Transition name="fade">
      <div v-if="cookies" class="h-[62px] bg-[#E8E8E8] relative zoom py-[22px]">
        <div class="container xl:max-w-screen-2xl mx-auto flex items-center justify-between">
          <p class=" font-gilroy">
            The website uses cookies to personalize content and to analyze web traffic.
          </p>
          <div class="flex items-center gap-4">
            <button class=" font-semibold font-gilroy underline" @click="setCookie()">
              Accept cookies
            </button>
            <button class="text-[#727272] font-semibold font-gilroy underline" @click="setCookie()">
              Reject
            </button>
          </div>
        </div>
      </div>
    </Transition>
    <MHeader></MHeader>
    <main>
      <div class=" overflow-hidden">
        <slot />
      </div>
      <!-- <section class=" py-20 bg-[#0D0D0D]">
        <div class="container mx-auto transition" v-motion-slide-visible-once-bottom>
          <p class="text-[#A1BAA1] font-gilroy lg:text-lg text-center">
            What are you waiting for?
          </p>
          <h4 class=" text-[32px] lg:text-5xl font-medium font-stapel text-white text-center mt-2">
            Get the only money saving app
          </h4>
          <div class="flex items-center justify-center mt-8">
            <button @click="sendRequest"
              class=" font-semibold h-12 px-6 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-gilroy mx-auto">
              Request early access
            </button>
          </div>
        </div>
      </section>
      <div class="w-full zoom bg-[#0D0D0D]">
        <div class=" container md:max-w-screen-2xl flex justify-end mx-auto h-20">
          <button @click="scrollTop" id="al" aria-label="Scrool"
            class="h-16 w-16 bg-[#F5F5F5] rounded-2xl px-4 py-4 hover:bg-[#CBE8CA] transition-all topper">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.7075 14.7076C25.6146 14.8005 25.5043 14.8743 25.3829 14.9246C25.2615 14.9749 25.1314 15.0008 25 15.0008C24.8686 15.0008 24.7385 14.9749 24.6171 14.9246C24.4957 14.8743 24.3854 14.8005 24.2925 14.7076L17 7.4138V27.0001C17 27.2653 16.8947 27.5196 16.7071 27.7072C16.5196 27.8947 16.2652 28.0001 16 28.0001C15.7348 28.0001 15.4804 27.8947 15.2929 27.7072C15.1054 27.5196 15 27.2653 15 27.0001V7.4138L7.70751 14.7076C7.51987 14.8952 7.26537 15.0006 7.00001 15.0006C6.73464 15.0006 6.48015 14.8952 6.29251 14.7076C6.10487 14.5199 5.99945 14.2654 5.99945 14.0001C5.99945 13.7347 6.10487 13.4802 6.29251 13.2926L15.2925 4.29255C15.3854 4.19958 15.4957 4.12582 15.6171 4.07549C15.7385 4.02517 15.8686 3.99927 16 3.99927C16.1314 3.99927 16.2615 4.02517 16.3829 4.07549C16.5043 4.12582 16.6146 4.19958 16.7075 4.29255L25.7075 13.2926C25.8005 13.3854 25.8742 13.4957 25.9246 13.6171C25.9749 13.7385 26.0008 13.8686 26.0008 14.0001C26.0008 14.1315 25.9749 14.2616 25.9246 14.383C25.8742 14.5044 25.8005 14.6147 25.7075 14.7076Z"
                fill="#343330" />
            </svg>
          </button>
        </div>
      </div> -->
    </main>
    <MFooter></MFooter>
    <Teleport to="body">
      <!-- <Transition name="fade"> -->
      <GetEarlyAccessModal></GetEarlyAccessModal>
      <!-- </Transition> -->
    </Teleport>
  </div>
</template>
<script lang="ts" setup>
import MHeader from './components/MHeader.vue'
import MFooter from './components/MFooter.vue'
import { useRoute } from 'vue-router'
import GetEarlyAccessModal from '@/components/EarlyAccessModal.vue'
import { useModal } from "@/composables";
const route = useRoute()
const modal = useModal();
const showModal = computed(() => modal.show.value);
const cookies = ref()
const sendRequest = () => {
  modal.setTitle('');
  modal.setWidth("60%");
  modal.showModal();
}
const setCookie = () => {
  localStorage.setItem('accept', 'true')
  cookies.value = false
}
const scrollTop = () => {
  setTimeout(() => window.scrollTo({
    top: 0,
    behavior: "smooth",
  }), 0);
};
onMounted(() => {
  cookies.value = localStorage.getItem('accept') === 'true' ? false : true
})
</script>
<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>