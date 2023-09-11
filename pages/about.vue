<template>
    <div>
        <div class="bg-[#0D0D0D] pt-24 md:pt-[144px] h-[673px] md:h-[995px] header">
            <div class="container mx-auto text-center">
                <h6 class=" text-[#A1BAA1] font-gilroy text-lg md:text-xl">
                    About us
                </h6>
                <h2 class=" text-[32px] leading-normal md:text-5xl font-medium font-stapel text-white">
                    Empowering your money-related status by savings
                </h2>
                <p class=" text-[#E8E8E8] text-base md:text-xl font-gilroy max-w-[629px] mx-auto mt-6">
                    Beyond the ordinary realm of all in one personal finance managers, we are one of the pioneers of a new
                    era - saving money apps.
                </p>
                <img class="mx-auto mt-10 md:hidden" src="@/assets/images/about.webp" alt="about">
                <img class="mx-auto mt-10 hidden md:block" src="@/assets/images/icons/about.svg" alt="about">
            </div>
        </div>
        <Vision></Vision>
        <section class=" !py-16 container mx-auto zoom">
            <h4 class=" text-[40px] md:text-[64px] font-medium font-stapel text-center">
                Three pilars we believe about <br> saving money
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <div class="p-6 bg-[#F5F5F5] rounded-2xl h-[226px] md:h-[337px]">
                    <div class="p-3 rounded-xl bg-[#0D0D0D] h-12 w-12 text-white">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.5 4.74657V19.7466C13.5 19.9455 13.4209 20.1362 13.2803 20.2769C13.1396 20.4176 12.9489 20.4966 12.75 20.4966C12.551 20.4966 12.3603 20.4176 12.2196 20.2769C12.079 20.1362 12 19.9455 12 19.7466V6.07126L9.38621 7.6397C9.21564 7.74214 9.01136 7.77262 8.81832 7.72445C8.62527 7.67628 8.45927 7.55339 8.35683 7.38282C8.25439 7.21225 8.22391 7.00798 8.27208 6.81493C8.32025 6.62189 8.44314 6.45589 8.61371 6.35345L12.3637 4.10345C12.4775 4.03506 12.6075 3.99812 12.7402 3.9964C12.873 3.99468 13.0038 4.02823 13.1194 4.09364C13.2349 4.15904 13.3311 4.25395 13.3979 4.36867C13.4648 4.48338 13.5 4.61379 13.5 4.74657Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div class=" mt-10 md:mt-16">
                        <h6 class=" text-xl md:text-[30px] font-medium font-stapel">
                            Automated savings
                        </h6>
                        <p class=" font-gilroy text-sm md:text-lg text-[#404040] mt-2">
                            The best way to save is when you don't have to think about it.
                        </p>
                    </div>
                </div>
                <div class="p-6 bg-[#F5F5F5] rounded-2xl h-[226px] md:h-[337px]">
                    <div class="p-3 rounded-xl bg-[#0D0D0D] h-12 w-12 text-white">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.5 19.7466C16.5 19.9455 16.421 20.1363 16.2803 20.2769C16.1397 20.4176 15.9489 20.4966 15.75 20.4966H8.25C8.11072 20.4966 7.97418 20.4578 7.8557 20.3846C7.73722 20.3113 7.64147 20.2066 7.57918 20.082C7.51689 19.9574 7.49052 19.818 7.50303 19.6792C7.51554 19.5405 7.56643 19.408 7.65 19.2966L14.3944 10.3041C14.6351 9.9898 14.8112 9.631 14.9125 9.24834C15.0139 8.86569 15.0385 8.46676 14.985 8.07454C14.9315 7.68232 14.8009 7.30457 14.6007 6.96305C14.4006 6.62154 14.1348 6.32302 13.8187 6.0847C13.5026 5.84638 13.1425 5.67296 12.7591 5.57445C12.3757 5.47594 11.9766 5.45429 11.5848 5.51073C11.193 5.56717 10.8162 5.7006 10.4762 5.90332C10.1362 6.10604 9.8397 6.37405 9.60375 6.6919C9.4627 6.87945 9.34378 7.08267 9.24938 7.29752C9.16969 7.47978 9.02086 7.62291 8.83564 7.69543C8.65042 7.76796 8.44397 7.76393 8.26172 7.68424C8.07947 7.60455 7.93633 7.45573 7.86381 7.27051C7.79129 7.08528 7.79531 6.87884 7.875 6.69659C8.12929 6.11451 8.50392 5.59285 8.97427 5.16594C9.44461 4.73903 10 4.41653 10.6039 4.21965C11.2078 4.02277 11.8466 3.95598 12.4782 4.02367C13.1098 4.09135 13.7199 4.29198 14.2684 4.61236C14.8168 4.93274 15.2913 5.36561 15.6605 5.88249C16.0297 6.39938 16.2853 6.98857 16.4104 7.61131C16.5356 8.23406 16.5275 8.87625 16.3867 9.49564C16.2459 10.115 15.9755 10.6976 15.5934 11.205L9.75 18.9966H15.75C15.9489 18.9966 16.1397 19.0756 16.2803 19.2163C16.421 19.3569 16.5 19.5477 16.5 19.7466Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div class=" mt-10 md:mt-16">
                        <h6 class=" text-xl md:text-[30px] font-medium font-stapel">
                            Goal-oriented
                        </h6>
                        <p class=" font-gilroy text-sm md:text-lg text-[#404040] mt-2">
                            Every penny saved should have a purpose, whether it's for an emergency fund or a dream vacation.
                        </p>
                    </div>
                </div>
                <div class="p-6 bg-[#F5F5F5] rounded-2xl h-[226px] md:h-[337px]">
                    <div class="p-3 rounded-xl bg-[#0D0D0D] h-12 w-12 text-white">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.5001 15.2466C16.5001 16.26 16.2067 17.2517 15.6554 18.1021C15.1042 18.9525 14.3186 19.6251 13.3935 20.0389C12.4684 20.4526 11.4433 20.5897 10.442 20.4337C9.44062 20.2777 8.50583 19.8353 7.75042 19.1597C7.67329 19.0952 7.60992 19.0158 7.56409 18.9263C7.51826 18.8367 7.4909 18.7389 7.48364 18.6386C7.47639 18.5383 7.48938 18.4375 7.52185 18.3424C7.55431 18.2472 7.60559 18.1595 7.67264 18.0845C7.73968 18.0096 7.82111 17.9488 7.9121 17.906C8.00308 17.8631 8.10175 17.839 8.20225 17.8351C8.30274 17.8311 8.40301 17.8474 8.49707 17.883C8.59114 17.9186 8.67708 17.9727 8.7498 18.0422C9.20291 18.4473 9.74769 18.7362 10.3372 18.884C10.9268 19.0318 11.5434 19.0341 12.134 18.8907C12.7247 18.7473 13.2716 18.4625 13.7277 18.0608C14.1838 17.659 14.5354 17.1525 14.7523 16.5847C14.9692 16.0169 15.0448 15.405 14.9727 14.8015C14.9005 14.198 14.6828 13.6211 14.3382 13.1204C13.9936 12.6197 13.5324 12.2104 12.9945 11.9275C12.4565 11.6446 11.8579 11.4967 11.2501 11.4966C11.1108 11.4966 10.9743 11.4578 10.8558 11.3846C10.7373 11.3113 10.6416 11.2066 10.5793 11.082C10.517 10.9574 10.4906 10.8179 10.5031 10.6792C10.5157 10.5405 10.5665 10.408 10.6501 10.2966L14.2501 5.49658H8.25011C8.0512 5.49658 7.86043 5.41756 7.71978 5.27691C7.57913 5.13626 7.50011 4.94549 7.50011 4.74658C7.50011 4.54767 7.57913 4.3569 7.71978 4.21625C7.86043 4.0756 8.0512 3.99658 8.25011 3.99658H15.7501C15.8894 3.99658 16.0259 4.03537 16.1444 4.10859C16.2629 4.18182 16.3586 4.28659 16.4209 4.41117C16.4832 4.53575 16.5096 4.67522 16.4971 4.81394C16.4846 4.95266 16.4337 5.08515 16.3501 5.19658L12.6151 10.1766C13.7293 10.4782 14.7133 11.138 15.4154 12.0543C16.1175 12.9705 16.4987 14.0923 16.5001 15.2466Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div class=" mt-10 md:mt-16">
                        <h6 class=" text-xl md:text-[30px] font-medium font-stapel">
                            Informed decision
                        </h6>
                        <p class=" font-gilroy text-sm md:text-lg text-[#404040] mt-2">
                            Knowledge is power, and understanding your spending habits can lead to significant savings.
                        </p>
                    </div>
                </div>

            </div>
        </section>
        <History></History>
        <Binefits></Binefits>
        <section class=" py-20 bg-[#0D0D0D]">
            <div class="container mx-auto">
                <p class="text-[#A1BAA1] font-gilroy md:text-lg text-center">
                    What are you waiting for?
                </p>
                <h4 class=" text-[32px] md:text-5xl font-medium font-stapel text-white text-center mt-2">
                    Get the only money saving app
                </h4>
                <div class="flex items-center justify-center mt-8">
                    <button
                        class=" font-semibold h-12 px-6 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-gilroy mx-auto">
                        Request early access
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts" setup>
import Vision from '~/components/about/Vision.vue';
import History from '~/components/about/History.vue';
import Binefits from '~/components/about/Binefits.vue';

</script>