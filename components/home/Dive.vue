<template>
    <div>
        <section data-bg="#0D0D0D" second="#0D0D0D" class="section pt-10 md:pt-20 pb-10">
            <div class="container mx-auto zoom">
                <div class="dark">
                    <h3 class=" text-[32px] md:text-5xl lg:text-7xl font-medium  font-stapel leading-[normal]">
                        Redefining finance:
                        <br>
                        Dive into standout features
                    </h3>
                    <div class="content py-3 px-4 md:px-7 lg:px-24 rounded-[32px] w-full my-10 mb-16 h-[530px] overflow-hidden lg:h-[594px] flex flex-col lg:flex-row items-center justify-between"
                        v-motion-slide-visible-once-bottom>
                        <div class="w-full">
                            <h3 class="text-[32px] lg:text-7xl font-medium  font-stapel leading-[normal]">
                                All in one <br> Finance hub
                            </h3>
                            <p
                                class=" mt-4 lg:mt-6 max-w-[512px] text-base lg:text-2xl font-gilroy leading-[normal] text-[#404040]">
                                Manage, track, and optimize all your financial activities seamlessly in one intuitive app.
                            </p>
                        </div>
                        <div class=" w-[193px] lg:w-[47%] mt-6 lg:mt-0 h-full">
                            <img :src="phoneWep"
                                class="w-full h-full md:w-full lg:h-auto dark-svg object-contain lg:mb-[75px]" alt="phone2">
                            <video class=" w-full h-full rounded-[30px] lg:rounded-[60px] object-contain dark-image"
                                :poster="phoneWep" autoplay muted loop playsinline>
                                <source :src="isMobile ? demo_compressed : demo"
                                    :type="isMobile ? 'video/mp4' : 'video/webm'">
                            </video>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div @click="sendRequest"
                        class="advantage hover:translate-y-[-15px] transition-all cursor-pointer hover:shadow-xl"
                        v-motion-slide-visible-once-bottom>
                        <h5>
                            Reach your <br> financial goals
                        </h5>
                        <div class="anime">
                            <img :data-src="mishenSvg" class=" lazyload blur-up" alt="mishen">
                            <Blottie ref="blottie" class="onHover" :loop="true" renderer="svg" :path="mishen"
                                @ready="onReady" />
                        </div>
                        <p>
                            Set your financial goals and let our app guide you, step by step, to make them a reality.
                        </p>
                    </div>
                    <div @click="sendRequest"
                        class="advantage !bg-[#FAFAFA] hover:translate-y-[-15px] transition-all cursor-pointer hover:shadow-xl"
                        v-motion-slide-visible-once-bottom>
                        <h5 class="!text-[#0D0D0D]">
                            Smart analytics <br> insights
                        </h5>
                        <div class="anime">
                            <img :data-src="chartSvg" class="lazyload blur-up" alt="chart">
                            <Blottie ref="blottie" class="onHover" :loop="true" renderer="svg" :path="diagram"
                                @ready="onReady" />
                        </div>
                        <p class="!text-[#0D0D0D]">
                            Dive into tailored transaction overviews, understand spending habits, and master finance easily.
                        </p>
                    </div>
                    <div @click="sendRequest"
                        class="advantage hover:translate-y-[-15px] transition-[0.12s] cursor-pointer hover:shadow-xl"
                        v-motion-slide-visible-once-bottom>
                        <h5>
                            Personalize your experience

                        </h5>
                        <div class="anime">
                            <img :data-src="settingSvg" class="lazyload blur-up" alt="chart">
                            <Blottie ref="blottie" class="onHover" :loop="true" renderer="svg" :path="setting"
                                @ready="onReady" />
                        </div>
                        <p>
                            Navigate with multi-currency support, craft your categories, and receive notifications that
                            truly
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
                <div class=" hidden md:flex justify-center mt-20">
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
    </div>
</template>
<script lang="ts" setup>
import { useModal } from "@/composables";
import type { AnimationItem } from 'lottie-web'
import { ref } from 'vue'
import { Blottie, type BlottieExpose } from 'blottie'
import phoneWep from "@/assets/images/phone2.webp"
import mishenSvg from "@/assets/images/icons/mishen.svg"
import chartSvg from "@/assets/images/icons/chart.svg"
import settingSvg from "@/assets/images/icons/setting.svg"
import demo_compressed from "@/assets/videos/demo_compressed.mp4"
import demo from "@/assets/videos/demo.webm"
const mishen = new URL('@/assets/lottie/mishen.json', import.meta.url).href
const diagram = new URL('@/assets/lottie/diagrama_kv.json', import.meta.url).href
const setting = new URL('@/assets/lottie/6.json', import.meta.url).href
const { isMobile } = useDevice();
const blottie = ref<BlottieExpose>()
function onReady(anim?: AnimationItem) {
    anim?.play()
}
const modal = useModal();
const sendRequest = () => {
    modal.setTitle('');
    modal.setWidth("60%");
    modal.showModal();
}
</script>
<style lang="scss">
.advantage {
    padding: 46px 30px;
    border-radius: 32px;
    background: #262626;
    height: 531px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .5s ease-out all;

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


.dark {
    h3 {
        color: #0D0D0D;
    }


    .dark-image {
        display: none;
    }

    .content {
        transition: .5s ease-out all;
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


@media (max-width: 1024px) {

    .content {
        transition: .2s ease-out all !important;
    }

    .advantage {
        height: 373px;
        padding: 16px;
        transition: .2s ease-out all;

        h5 {
            font-size: 24px;
        }

        p {
            font-size: 16px;
        }

        .anime {
            width: 144.445px;
            height: 161px;
        }

        .onHover {
            display: block !important;
        }

        img {
            display: none;
        }
    }
}
</style>