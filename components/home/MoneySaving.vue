<template>
    <section data-bg="#EAF6EA" third="#EAF6EA" ref="container2" class=" py-16 md:py-20  relative money-saving section"
        style="transition: .3s ease-out all">
        <div class="container mx-auto zoom">
            <div class="bg-icons">
                <img :data-src="layer0" :style="isMobile ? '' : layerr0"
                    v-motion-roll-visible-bottom class="layerr0 lazyload blur-up" alt="layer0">
                <img :data-src="layer1" :style="isMobile ? '' : layerr1"
                    v-motion-roll-visible-bottom class="layerr1 lazyload blur-up"  alt="layer1">
                <img :data-src="layer2" :style="isMobile ? '' : layerr2"
                    v-motion-roll-visible-bottom class="layerr2 lazyload blur-up" alt="layer2">
                <img :data-src="layer3" :style="isMobile ? '' : layerr3"
                    v-motion-roll-visible-bottom class="layerr3 lazyload blur-up" alt="layer3">
                <img :data-src="layer4" :style="isMobile ? '' : layerr4"
                    v-motion-roll-visible-bottom class="layerr4 lazyload blur-up" alt="layer4">
                <img :data-src="layer5" :style="isMobile ? '' : layerr5"
                    v-motion-roll-visible-bottom class="layerr5 lazyload blur-up" alt="layer5">
                <img :data-src="layer6" :style="isMobile ? '' : layerr6"
                    v-motion-roll-visible-bottom class="layerr6 lazyload blur-up" alt="layer6">
                <img :data-src="layer7" :style="isMobile ? '' : layerr7"
                    v-motion-roll-visible-bottom class="layerr7 lazyload blur-up" alt="layer7">
                <img :data-src="layer8" :style="isMobile ? '' : layerr8"
                    v-motion-roll-visible-bottom class="layerr8 lazyload blur-up" alt="layer8">
                <img :data-src="layer9" :style="isMobile ? '' : layerr9"
                    v-motion-roll-visible-bottom class="layerr9 lazyload blur-up" alt="layer9">
                <img :data-src="layer10" :style="isMobile ? '' : layerr10"
                    v-motion-roll-visible-bottom class="layerr10 lazyload blur-up" alt="layer10">
                <img :data-src="layer11" :style="isMobile ? '' : layerr11"
                    v-motion-roll-visible-bottom class="layerr11 lazyload blur-up" alt="layer11">
                <img :data-src="layer12" :style="isMobile ? '' : layerr12"
                    v-motion-roll-visible-bottom class="layerr12 lazyload blur-up" alt="layer12">
                <img :data-src="layer13" :style="isMobile ? '' : layerr13"
                    v-motion-roll-visible-bottom class="layerr13 lazyload blur-up" alt="layer13">
            </div>
            <p class="text font-stapel font-normal text-[#666] text-lg md:text-2xl lg:text-[32px] text-center">
                Introducing Money Game
            </p>
            <h4 class="desc text-[32px] md:text-5xl lg:text-[64px] font-medium font-stapel mt-3 text-center">
                Revolutionise the way of saving money
            </h4>
            <div class="borderedCard mx-auto">
                <img :data-src="phonePng" height="100" class="lazyload" width="100" v-motion-slide-visible-bottom
                    alt="phone">
            </div>
            <div class="flex flex-col md:flex-row items-center justify-center gap-4 mt-20 md:h-[535px]">
                <div @click="$emit('send')" class="card " v-motion-slide-visible-once-bottom>
                    <h5>
                        Automated financial insights
                    </h5>
                    <div>
                        <img :data-src="financeSvg" class="lazyload" alt="finance">
                        <MFinanceAnimeIcon class="animation"></MFinanceAnimeIcon>
                    </div>
                    <p>
                        Benefit from our system's automatic savings recommendations and future forecasting to stay ahead
                    </p>
                </div>
                <div @click="$emit('send')" class="card second !pr-0" v-motion-slide-visible-once-bottom>
                    <h5>
                        Targeted savings distribution
                    </h5>
                    <div>
                        <img :data-src="targetSvg" class="lazyload" alt="target">
                        <MTargetAnimeIcon class="animation"></MTargetAnimeIcon>
                    </div>
                    <p>
                        Use Midas limits to allocate savings and hit your financial goals.
                    </p>
                </div>
            </div>
            <money-game v-motion-slide-visible-once-bottom></money-game>
        </div>
        <div class=" hidden md:flex justify-center mt-24 zoom">
            <button class="  text-[#343330] hover:text-[#CBE8CA] animate-bounce">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M33.7411 24.5536L21.9286 36.3661C21.8067 36.4881 21.6619 36.5849 21.5026 36.651C21.3433 36.717 21.1725 36.751 21 36.751C20.8275 36.751 20.6567 36.717 20.4974 36.651C20.3381 36.5849 20.1933 36.4881 20.0714 36.3661L8.25891 24.5536C8.01263 24.3073 7.87427 23.9733 7.87427 23.625C7.87427 23.2767 8.01263 22.9427 8.25891 22.6964C8.50518 22.4501 8.83921 22.3118 9.1875 22.3118C9.53579 22.3118 9.86982 22.4501 10.1161 22.6964L19.6875 32.2695V6.5625C19.6875 6.2144 19.8258 5.88056 20.0719 5.63442C20.3181 5.38828 20.6519 5.25 21 5.25C21.3481 5.25 21.6819 5.38828 21.9281 5.63442C22.1742 5.88056 22.3125 6.2144 22.3125 6.5625V32.2695L31.8839 22.6964C32.1302 22.4501 32.4642 22.3118 32.8125 22.3118C33.1608 22.3118 33.4948 22.4501 33.7411 22.6964C33.9874 22.9427 34.1257 23.2767 34.1257 23.625C34.1257 23.9733 33.9874 24.3073 33.7411 24.5536Z" />
                </svg>
            </button>
        </div>
    </section>
</template>
  
<script lang="ts" setup>
import { useParallax, useMediaQuery } from '@vueuse/core'
import MoneyGame from './MoneyGame.vue';
import { MFinanceAnimeIcon, MTargetAnimeIcon } from '../icons';
import phonePng from "@/assets/images/phone.webp"
import financeSvg from "@/assets/images/icons/finance.svg"
import targetSvg from "@/assets/images/icons/target.svg"
import layer0 from "@/assets/images/money-icons/layer0.svg"
import layer1 from "@/assets/images/money-icons/layer1.svg"
import layer2 from "@/assets/images/money-icons/layer2.svg"
import layer3 from "@/assets/images/money-icons/layer3.svg"
import layer4 from "@/assets/images/money-icons/layer4.svg"
import layer5 from "@/assets/images/money-icons/layer5.svg"
import layer6 from "@/assets/images/money-icons/layer6.svg"
import layer7 from "@/assets/images/money-icons/layer7.svg"
import layer8 from "@/assets/images/money-icons/layer8.svg"
import layer9 from "@/assets/images/money-icons/layer9.svg"
import layer10 from "@/assets/images/money-icons/layer10.svg"
import layer11 from "@/assets/images/money-icons/layer11.svg"
import layer12 from "@/assets/images/money-icons/layer12.svg"
import layer13 from "@/assets/images/money-icons/layer13.svg"
const isMobile = useMediaQuery('(max-width: 1024px)')
const container2 = ref(null)
const parallax2 = reactive(useParallax(container2))
const layerr0 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 110}px) translateY(${parallax2.roll * 110
        }px) scale(1)`,
}))

const layerr1 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 120}px) translateY(${parallax2.roll * 120
        }px) scale(1)`,
}))

const layerr2 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 130}px) translateY(${parallax2.roll * 130
        }px) scale(1)`,
}))

const layerr3 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 140}px) translateY(${parallax2.roll * 140
        }px) scale(1)`,
}))
const layerr4 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 150}px) translateY(${parallax2.roll * 150
        }px) scale(1)`,
}))

const layerr5 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 160}px) translateY(${parallax2.roll * 160
        }px) scale(1)`,
}))

const layerr6 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 70}px) translateY(${parallax2.roll * 70
        }px) scale(1)`,
}))

const layerr7 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 80}px) translateY(${parallax2.roll * 80
        }px) scale(1)`,
}))
const layerr8 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 90}px) translateY(${parallax2.roll * 90
        }px) scale(1)`,
}))

const layerr9 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 100}px) translateY(${parallax2.roll * 100
        }px) scale(1)`,
}))

const layerr10 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 110}px) translateY(${parallax2.roll * 110
        }px) scale(1)`,
}))

const layerr11 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 120}px) translateY(${parallax2.roll * 120
        }px) scale(1)`,
}))
const layerr12 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 130}px) translateY(${parallax2.roll * 130
        }px) scale(1)`,
}))

const layerr13 = computed(() => ({
    transform: `translateX(${parallax2.tilt * 140}px) translateY(${parallax2.roll * 140
        }px) scale(1)`,
}))
</script>
<style lang="scss" scoped>
.list{
    display: block;
}
</style>