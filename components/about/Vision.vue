<template>
    <section class=" container lg:max-w-screen-xl  mx-auto !py-16 zoom">
        <div class="flex flex-wrap lg:flex-nowrap items-center gap-10 lg:gap-6">
            <img src="@/assets/images/icons/vision.svg" class="transition" v-motion-slide-visible-once-left alt="vision">
            <div v-motion-slide-visible-once-right class="transition">
                <h5 class=" font-medium font-stapel text-[32px] lg:text-[64px]">
                    Our mission
                </h5>
                <p class="font-gilroy text-[#404040] text-sm  lg:text-lg  max-w-[550px]">
                    Our mission is to revolutionise people's perspectives on saving money and achieving goals. We strive to
                    develop innovative technological solutions that allow people to make savings like a their way of life
                </p>
            </div>
        </div>
    </section>
    <section class=" !py-16 bg-[#F5FAF4] zoom">
        <div
            class=" container lg:max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap items-center justify-between gap-10 lg:gap-6">
            <div v-motion-slide-visible-once-left class="transition">
                <h5 class=" font-medium font-stapel text-[32px] lg:text-[64px]">
                    Our vision
                </h5>
                <p class=" font-gilroy text-sm lg:text-lg text-[#404040] max-w-[600px]">
                    We envision a world where people effortlessly save money, develop healthy financial habits, and
                    contribute to a sustainable future that enhances their well-being and allows them to explore new
                    possibilities and achievements without limits.
                </p>
            </div>
            <img v-motion-slide-visible-once-right class="transition" src="@/assets/images/icons/mission.svg" alt="vision">
        </div>
    </section>
    <section class="bg-[#0D0D0D] py-16 zoom">
        <div
            class=" container lg:max-w-screen-xl mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between px-8 gap-16">
            <img v-motion-slide-visible-once-left src="@/assets/images/icons/values.svg" class="transition w-[80%] mx-auto lg:w-auto"
                alt="values">
            <div v-motion-slide-visible-once-right class="transition">
                <h5 class=" font-medium font-stapel text-[40px] lg:text-[64px] text-white">
                    Our values
                </h5>
                <ul
                    class="text-[#D9D9D9] font-gilroy text-sm lg:text-lg max-w-[643px] leading-8 lg:leading-normal list-disc lg:list-none pl-4 lg:pl-0">
                    <li>
                        <span class=" font-semibold">Excelling in continuous improvement.</span>
                    </li>
                    <li>
                        <span class=" font-semibold">Customer obsession:</span> We always put the needs of our customers
                        first
                        and constantly strive to exceed their
                        expectations.
                    </li>
                    <li>
                        <span class=" font-semibold">Innovation:</span> We are constantly pushing boundaries and exploring
                        new
                        possibilities to create the best
                        products and services for our customers
                    </li>
                    <li>
                        <span class=" font-semibold">Teamwork:</span> We believe in collaboration and open communication to
                        achieve our goals
                    </li>
                    <li>
                        <span class=" font-semibold">Excellence:</span> We strive for the highest standards of quality and
                        performance in everything we do.
                    </li>
                    <li>
                        <span class=" font-semibold">Disruption:</span> We are committed to challenging the status quo and
                        creating new and innovative robotics
                        solutions.
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>

</script>