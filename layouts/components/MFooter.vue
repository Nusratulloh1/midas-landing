<template>
    <footer class=" py-16 pb-12 ">
        <div class=" max-w-screen-2xl mx-auto">
            <div class="flex items-center justify-between">
                <div class="">
                    <MLogo iconColor="#CBE8CA" textColor="#fff"></MLogo>
                    <ul class="flex items-center text-[#EAECF0] font-semibold mt-6 gap-8">
                        <li>
                            <a href="#">Community</a>
                        </li>
                        <li>
                            <a href="#">Get Support</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <label for="" class=" font-stapel font-medium text-white">
                        Subscribe to our newsletter
                    </label>
                    <div class="flex items-center gap-4 mt-4">
                        <input type="text"
                            class="border-[#D0D5DD] w-[406px] bg-white rounded-lg px-[14px] py-[10px] h-12 text-[#667085] font-gilroy outline-none focus:!border-[#CBE8CA] transition-all"
                            placeholder="Enter your email" style="box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);">
                        <button
                            class=" font-semibold  h-12 px-6 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-gilroy">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div class=" mt-16 mb-8 border-t border-[#475467]"></div>
            <div class="flex items-center justify-between">
                <p class="  text-[#D0D5DD]">
                    © 2023 midas. All rights reserved.
                </p>
                <ul class="flex items-center gap-4  text-[#D0D5DD]">
                    <li>
                        <a href="#">Terms</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                    <li>
                        <a href="#">Cookies</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script lang="ts" setup>
import { MLogo } from '~/components/icons';


</script>
<style lang="scss" scoped>
ul {
    li {
        a {
            font-family: 'Gilroy';
        }
    }
}

p {
    font-family: 'Gilroy';
}
</style>