<template>
    <header>
        <nav class=" py-5 w-full">
            <div class="flex items-center justify-between container mx-auto">
                <div class="flex items-center gap-8">
                    <MLogo></MLogo>
                    <ul class="flex items-center gap-8 text-[#404040] text-sm font-medium font-gilroy pt-1">
                        <li>
                            <a href="#">Community</a>
                        </li>
                        <li>
                            <a href="#">Get Support</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                    </ul>
                </div>
                <button class=" font-semibold h-12 px-6 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-gilroy">
                    Request early access
                </button>
            </div>
        </nav>
        <div class="w-full more" ref="headRef">
            <div class="container mx-auto">
                <button class="aviable">
                    <h6>
                        Available in EU🇪🇺, UK🇬🇧, and USA🇺🇸! See it in action:
                    </h6>
                    <p>
                        Watch our Promo Video.
                    </p>
                </button>
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>
import { MLogo } from '../../components/icons'
import { onMounted, ref } from 'vue'
const headRef: any = ref(null); // obtain the reference
onMounted(() => {
    if (headRef.value) {
        window.addEventListener("scroll", () => {
            var curr = window.pageYOffset;
            if (curr === 0) {
                headRef.value?.classList.remove("scrolled");
            }
            else {
                headRef.value?.classList.add("scrolled");
            }
        });
    }
});

</script>
<style lang="scss" scoped>
.more {
    .aviable {
        border-radius: 8px;
        border: 2px solid rgba(0, 0, 0, 0.01);
        background: rgba(0, 0, 0, 0.90);
        backdrop-filter: blur(8px);
        height: 50px;
        width: 80%;
        margin: auto;
        margin-top: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        h6 {
            color: #FCFCFC;
            font-family: Arial, sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-right: 5px;
        }

        p {
            color: #FCFCFC;
            font-family: Arial, sans-serif;
            font-size: 14px;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 0.5px;
            text-decoration-line: underline;
            text-transform: uppercase;
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
</style>