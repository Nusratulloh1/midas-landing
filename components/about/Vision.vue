<template>
    <section class=" container lg:max-w-screen-xl  mx-auto !py-16 zoom">
        <div class="flex flex-wrap lg:flex-nowrap items-center gap-10 lg:gap-6">
            <img src="@/assets/images/icons/vision.svg" class="transition" v-motion-slide-visible-once-left alt="vision">
            <div v-motion-slide-visible-once-right class="transition">
                <h5 class=" font-semibold font-stapel text-[32px] lg:text-[64px]">
                    Our mission
                </h5>
                <p class="font-gilroy text-[#404040] text-sm  lg:text-lg  max-w-[550px]">
                    Our mission is to revolutionize the way people view and manage their finances. We aim to empower users
                    with cutting-edge technology, enabling them to save, budget, and plan events effortlessly. Our tools are
                    designed to make financial management not just a necessity but a seamless part of daily life.
                </p>
            </div>
        </div>
    </section>
    <section class=" !py-16  zoom" style="background-color: rgba(255, 255, 255, 0.10);">
        <div
            class=" container lg:max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap items-center justify-between gap-10 lg:gap-6">
            <div v-motion-slide-visible-once-left class="transition">
                <h5 class=" font-semibold font-stapel text-[32px] lg:text-[64px]">
                    Our vision
                </h5>
                <p class=" font-gilroy text-sm lg:text-lg text-[#404040] max-w-[600px]">
                    We envision a world where managing finances is intuitive and empowering. Our app is designed to foster
                    healthy financial habits, encouraging users to save, budget, and plan for the future with ease and
                    confidence.
                </p>
            </div>
            <img v-motion-slide-visible-once-right class="transition" src="@/assets/images/icons/mission.svg" alt="vision">
        </div>
    </section>
    <section class="bg-[#0D0D0D] py-16 zoom">
        <div
            class=" container lg:max-w-screen-xl mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between px-8 gap-16">
            <img v-motion-slide-visible-once-left src="@/assets/images/icons/values.svg"
                class="transition w-[80%] mx-auto lg:w-auto" alt="values">
            <div v-motion-slide-visible-once-right class="transition">
                <h5 class=" font-semibold font-stapel text-[40px] lg:text-[64px] text-white">
                    Our values
                </h5>
                <ul class="text-[#D9D9D9] font-gilroy !leading-[200%] font-semibold text-sm lg:text-xl max-w-[643px] list-disc pl-4">
                    <!-- <li>
                        <span class=" font-semibold text-[#92E490]">Excelling in continuous improvement.</span>
                    </li> -->
                    <li>
                        <span class=" font-semibold text-[#92E490]">Customer obsession:</span> We prioritize our users'
                        needs, striving to exceed their expectations continually.
                    </li>
                    <li>
                        <span class=" font-semibold text-[#92E490]">Innovation:</span> We push the boundaries to create
                        exceptional products and services.
                    </li>
                    <li>
                        <span class=" font-semibold text-[#92E490]">Teamwork:</span> Collaboration and open communication
                        are key to our success.
                    </li>
                    <li>
                        <span class=" font-semibold text-[#92E490]">Excellence:</span> We are committed to the highest
                        standards in all our endeavors.
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>

</script>