<template>
    <div
        class="bg-white pt-8 lg:pl-[30px] bg-main rounded-[32px] h-[594px] lg:flex items-center justify-between mt-4 overflow-hidden relative">

        <div class="w-full lg:w-1/2 px-4 lg:px-0 h-[185px] lg:h-auto">
            <h5 class=" text-2xl lg:text-[64px] text-[#1A1A1A] font-stapel font-medium leading-[normal]">
                Stay inspired with Money Game
            </h5>
            <p class=" text-base lg:text-xl font-stapel text-[#666] font-light mt-4 lg:mt-5">
                Harness the power of interactive notifications, stories, and widgets to ensure you stay within your
                financial limits and keep your savings journey on track.
            </p>
        </div>
        <div class="w-full lg:w-[40%] h-[388px] lg:h-auto flex justify-end items-center lg:justify-center pl-4">
            <div class="circle"></div>
            <div class="content relative text-center pt-14 lg:pt-9 pr-4">
                <h6 class=" font-gilroy text-sm lg:text-[32px] text-[#404040] mb-2">
                    You saved today
                </h6>
                <h5 class="text-[#A1BAA1] font-gilroy font-bold text-5xl lg:text-[106px]">
                    <Vue3autocounter v-if="show" class='counter' :startAmount='0' :endAmount='5' :duration='2' prefix='$'
                        :autoinit='true' />
                    <span v-else>0</span>
                </h5>
                <hr class="bg-[#A1BAA1] border border-[#A1BAA1] mb-3.5" />
                <p class=" text-sm lg:text-2xl font-gilroy">
                    Spent today <span class=" font-semibold">:</span> <span class=" font-bold text-[#A1BAA1]">
                        <Vue3autocounter v-if="show" class='counter' :startAmount='0' :endAmount='30' :duration='2'
                            prefix='$' :autoinit='true' />
                        <span v-else>0</span>
                    </span>
                    <span class="text-[#8C8C8C]">
                        of
                        <Vue3autocounter v-if="show" class='counter' :startAmount='0' :endAmount='35' :duration='2'
                            prefix='$' :autoinit='true' />
                        <span v-else>0</span>
                    </span>
                </p>
            </div>
        </div>
        <div class=" absolute right-9 top-[263px] lg:right-7 lg:top-0">
            <img class=" w-12 h-12 lg:w-auto lg:h-auto lazyload blur-up" :data-src="game1" alt="game1">
        </div>
        <div class="absolute right-[115px] top-[303px] lg:right-[205px] lg:top-[35px]">
            <img class=" h-11 w-16 lg:w-auto lg:h-auto lazyload blur-up" :data-src="game2" alt="game2">
        </div>
        <div class="absolute right-[192px] top-[384px] lg:right-[371px] lg:top-[168px]">
            <img class=" h-11 w-16 lg:w-auto lg:h-auto lazyload blur-up" :data-src="game3" alt="game3">
        </div>
        <div class="absolute right-[203px] bottom-[80px] lg:right-[419px] lg:bottom-[187px]">
            <img class=" h-11 w-16 lg:w-auto lg:h-auto lazyload blur-up" :data-src="game4" alt="game4">

        </div>
        <div class="absolute right-[198px] bottom-[6px] lg:right-[411px] lg:bottom-[19px]">
            <img class=" h-11 w-16 lg:w-auto lg:h-auto lazyload blur-up" :data-src="game5" alt="game5">
        </div>


    </div>
</template>
<script lang="ts" setup>
import Vue3autocounter from 'vue3-autocounter';
import { onMounted, ref } from 'vue'
import game1 from "@/assets/images/money-icons/game1.svg"
import game2 from "@/assets/images/money-icons/game2.svg"
import game3 from "@/assets/images/money-icons/game3.svg"
import game4 from "@/assets/images/money-icons/game4.svg"
import game5 from "@/assets/images/money-icons/game5.svg"
const show = ref(false)
onMounted(() => {
    const width = window.innerWidth || document.body.clientWidth
    window.addEventListener('scroll', () => {
        const verticalScrollPx = window.scrollY || window.pageYOffset;
        if (verticalScrollPx > 2699 && verticalScrollPx < 3295 && width > 768) {
            show.value = true
        }
        if (verticalScrollPx > 4000 && verticalScrollPx < 4400 && width < 768) {
            show.value = true
        }
    })
})
</script>
<style lang="scss" scoped>
.bg-main {
    transition: .5s ease-out all;

    @media (max-width: 1024px) {
        transition: .2s ease-out all;
    }
}

.circle {
    border-radius: 777px;
    border: 1px solid var(--secondary-200, #B3B3B3);
    background: var(--system-white-background-color, #FAFAFA);
    width: 777px;
    height: 777px;
    position: absolute;
    right: -28%;
    bottom: -35%;

    @media (max-width: 1024px) {
        border-radius: 443px;
        width: 443px;
        height: 419px;
        right: -170px;
        bottom: -20%;
    }
}
</style>