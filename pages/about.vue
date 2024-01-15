<template>
    <div>
        <div class="bg-black pt-10 sm:pt-16 h-[720px] sm:h-[790px]  md:h-[839px] header relative">
            <div class="container mx-auto text-center">
                <h6 class=" text-[#92E490] font-gilroy font-semibold text-lg lg:text-xl">
                    About us
                </h6>
                <h2
                    class=" text-3xl sm:text-[32px] sm:leading-normal lg:text-5xl font-medium font-stapel text-white sm:mt-1">
                    Empowering Your Financial Journey with Innovation and Insight
                </h2>
                <p class=" text-[#E8E8E8] text-base lg:text-xl font-gilroy max-w-[845px] mx-auto mt-4 sm:mt-6">
                    At Cashier, we transcend the typical boundaries of personal finance management. We're not just another
                    app; we're pioneers in the realm of comprehensive financial tracking and growth.
                </p>
                <div class="absolute bottom-0 left-0 w-full">
                    <img class="mx-auto lg:mt-10 object-cover lg:object-contain h-[278px] lg:h-auto w-full max-w-[1285px] max-h-[604px]"
                        src="@/assets/images/about.png" alt="about">
                </div>
            </div>
        </div>
        <Vision></Vision>
        <section class=" !py-16 container mx-auto zoom">
            <h4 class=" text-[40px] leading-[54px] lg:text-[64px] lg:leading-[74px] font-semibold font-stapel text-center transition"
                v-motion-slide-visible-once-bottom>
                Three pilars we believe about <br> saving money
            </h4>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
                <div class="p-6 transition" v-motion-slide-visible-once-left>
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.246582" width="48" height="48" rx="24" fill="#92E490" />
                        <path
                            d="M25.5 16.7466V31.7466C25.5 31.9455 25.4209 32.1362 25.2803 32.2769C25.1396 32.4176 24.9489 32.4966 24.75 32.4966C24.551 32.4966 24.3603 32.4176 24.2196 32.2769C24.079 32.1362 24 31.9455 24 31.7466V18.0713L21.3862 19.6397C21.2156 19.7421 21.0114 19.7726 20.8183 19.7244C20.6253 19.6763 20.4593 19.5534 20.3568 19.3828C20.2544 19.2123 20.2239 19.008 20.2721 18.8149C20.3203 18.6219 20.4431 18.4559 20.6137 18.3534L24.3637 16.1034C24.4775 16.0351 24.6075 15.9981 24.7402 15.9964C24.873 15.9947 25.0038 16.0282 25.1194 16.0936C25.2349 16.159 25.3311 16.2539 25.3979 16.3687C25.4648 16.4834 25.5 16.6138 25.5 16.7466Z"
                            fill="black" />
                    </svg>
                    <div class=" mt-6 lg:mt-8">
                        <h6 class=" text-xl lg:text-[30px] font-semibold font-stapel">
                            Automated savings
                        </h6>
                        <p class=" font-gilroy text-sm lg:text-lg text-[#404040] mt-2">
                            The best way to save is when you don't have to think about it.
                        </p>
                    </div>
                </div>
                <div class="p-6 transition" v-motion-slide-visible-once-left>
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.246582" width="48" height="48" rx="24" fill="#92E490" />
                        <path
                            d="M28.5 31.7466C28.5 31.9455 28.421 32.1363 28.2803 32.2769C28.1397 32.4176 27.9489 32.4966 27.75 32.4966H20.25C20.1107 32.4966 19.9742 32.4578 19.8557 32.3846C19.7372 32.3113 19.6415 32.2066 19.5792 32.082C19.5169 31.9574 19.4905 31.818 19.503 31.6792C19.5155 31.5405 19.5664 31.408 19.65 31.2966L26.3944 22.3041C26.6351 21.9898 26.8112 21.631 26.9125 21.2483C27.0139 20.8657 27.0385 20.4668 26.985 20.0745C26.9315 19.6823 26.8009 19.3046 26.6007 18.9631C26.4006 18.6215 26.1348 18.323 25.8187 18.0847C25.5026 17.8464 25.1425 17.673 24.7591 17.5745C24.3757 17.4759 23.9766 17.4543 23.5848 17.5107C23.193 17.5672 22.8162 17.7006 22.4762 17.9033C22.1362 18.106 21.8397 18.3741 21.6038 18.6919C21.4627 18.8795 21.3438 19.0827 21.2494 19.2975C21.1697 19.4798 21.0209 19.6229 20.8356 19.6954C20.6504 19.768 20.444 19.7639 20.2617 19.6842C20.0795 19.6046 19.9363 19.4557 19.8638 19.2705C19.7913 19.0853 19.7953 18.8788 19.875 18.6966C20.1293 18.1145 20.5039 17.5929 20.9743 17.1659C21.4446 16.739 22 16.4165 22.6039 16.2197C23.2078 16.0228 23.8466 15.956 24.4782 16.0237C25.1098 16.0914 25.7199 16.292 26.2684 16.6124C26.8168 16.9327 27.2913 17.3656 27.6605 17.8825C28.0297 18.3994 28.2853 18.9886 28.4104 19.6113C28.5356 20.2341 28.5275 20.8762 28.3867 21.4956C28.2459 22.115 27.9755 22.6976 27.5934 23.205L21.75 30.9966H27.75C27.9489 30.9966 28.1397 31.0756 28.2803 31.2163C28.421 31.3569 28.5 31.5477 28.5 31.7466Z"
                            fill="black" />
                    </svg>

                    <div class=" mt-6 lg:mt-8">
                        <h6 class=" text-xl lg:text-[30px] font-semibold font-stapel">
                            Goal-oriented
                        </h6>
                        <p class=" font-gilroy text-sm lg:text-lg text-[#404040] mt-2">
                            Every penny saved should have a purpose, whether it's for an emergency fund or a dream vacation.
                        </p>
                    </div>
                </div>
                <div class="p-6 transition" v-motion-slide-visible-once-left>
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.246582" width="48" height="48" rx="24" fill="#92E490" />
                        <path
                            d="M28.4999 27.2466C28.4998 28.26 28.2065 29.2517 27.6552 30.1021C27.1039 30.9525 26.3183 31.6251 25.3932 32.0389C24.4681 32.4526 23.443 32.5897 22.4417 32.4337C21.4404 32.2777 20.5056 31.8353 19.7502 31.1597C19.673 31.0952 19.6097 31.0158 19.5638 30.9263C19.518 30.8367 19.4907 30.7389 19.4834 30.6386C19.4761 30.5383 19.4891 30.4375 19.5216 30.3424C19.5541 30.2472 19.6053 30.1595 19.6724 30.0845C19.7394 30.0096 19.8209 29.9488 19.9119 29.906C20.0028 29.8631 20.1015 29.839 20.202 29.8351C20.3025 29.8311 20.4028 29.8474 20.4968 29.883C20.5909 29.9186 20.6768 29.9727 20.7496 30.0422C21.2027 30.4473 21.7474 30.7362 22.337 30.884C22.9265 31.0318 23.5432 31.0341 24.1338 30.8907C24.7244 30.7473 25.2713 30.4625 25.7274 30.0608C26.1836 29.659 26.5352 29.1525 26.7521 28.5847C26.969 28.0169 27.0446 27.405 26.9724 26.8015C26.9003 26.198 26.6825 25.6211 26.3379 25.1204C25.9933 24.6197 25.5322 24.2104 24.9943 23.9275C24.4563 23.6446 23.8577 23.4967 23.2499 23.4966C23.1106 23.4966 22.9741 23.4578 22.8556 23.3846C22.7371 23.3113 22.6413 23.2066 22.579 23.082C22.5168 22.9574 22.4904 22.8179 22.5029 22.6792C22.5154 22.5405 22.5663 22.408 22.6499 22.2966L26.2499 17.4966H20.2499C20.051 17.4966 19.8602 17.4176 19.7195 17.2769C19.5789 17.1363 19.4999 16.9455 19.4999 16.7466C19.4999 16.5477 19.5789 16.3569 19.7195 16.2163C19.8602 16.0756 20.051 15.9966 20.2499 15.9966H27.7499C27.8892 15.9966 28.0257 16.0354 28.1442 16.1086C28.2626 16.1818 28.3584 16.2866 28.4207 16.4112C28.483 16.5358 28.5093 16.6752 28.4968 16.8139C28.4843 16.9527 28.4334 17.0852 28.3499 17.1966L24.6149 22.1766C25.7291 22.4782 26.7131 23.138 27.4152 24.0543C28.1173 24.9705 28.4984 26.0923 28.4999 27.2466Z"
                            fill="black" />
                    </svg>
                    <div class=" mt-6 lg:mt-8">
                        <h6 class=" text-xl lg:text-[30px] font-semibold font-stapel">
                            Informed decision
                        </h6>
                        <p class=" font-gilroy text-sm lg:text-lg text-[#404040] mt-2">
                            Knowledge is power, and understanding your spending habits can lead to significant savings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- <History></History> -->
        <Binefits></Binefits>
    </div>
</template>
<script lang="ts" setup>
import Vision from '~/components/about/Vision.vue';
import History from '~/components/about/History.vue';
import Binefits from '~/components/about/Binefits.vue';
definePageMeta({
    title: 'Midas | About',
    ogTitle: 'Midas | About',
})
</script>