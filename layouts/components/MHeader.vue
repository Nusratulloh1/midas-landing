<template>
    <header class="w-full bg-black zoom">
        <nav class=" py-3 md:py-5 w-full">
            <div class="flex items-center justify-between container xl:max-w-screen-2xl mx-auto">
                <div class="hidden md:flex items-center gap-8">
                    <nuxt-link to="/" class=" !no-underline !bg-transparent">
                        <MLogo></MLogo>
                    </nuxt-link>
                    <ul class="flex items-center gap-8 text-[#E8E8E8] text-sm font-semibold font-gilroy pt-1">
                        <li class="parent desktop" v-for="link in links" :key="link.id">
                            <nuxt-link class=" cursor-pointer flex items-center gap-1" :to="link.to">{{ link.title }}
                                <svg width="16" v-if="link.children" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.3531 6.35403L8.35305 11.354C8.30662 11.4005 8.25147 11.4374 8.19077 11.4626C8.13007 11.4877 8.06501 11.5007 7.9993 11.5007C7.93359 11.5007 7.86853 11.4877 7.80783 11.4626C7.74713 11.4374 7.69199 11.4005 7.64555 11.354L2.64555 6.35403C2.55173 6.26021 2.49902 6.13296 2.49902 6.00028C2.49902 5.8676 2.55173 5.74035 2.64555 5.64653C2.73937 5.55271 2.86662 5.5 2.9993 5.5C3.13198 5.5 3.25923 5.55271 3.35305 5.64653L7.9993 10.2934L12.6456 5.64653C12.692 5.60007 12.7472 5.56322 12.8079 5.53808C12.8686 5.51294 12.9336 5.5 12.9993 5.5C13.065 5.5 13.1301 5.51294 13.1908 5.53808C13.2514 5.56322 13.3066 5.60007 13.3531 5.64653C13.3995 5.69298 13.4364 5.74813 13.4615 5.80883C13.4866 5.86953 13.4996 5.93458 13.4996 6.00028C13.4996 6.06598 13.4866 6.13103 13.4615 6.19173C13.4364 6.25242 13.3995 6.30757 13.3531 6.35403Z"
                                        fill="white" />
                                </svg>
                            </nuxt-link>
                            <div class="dropdown" v-if="link.children">
                                <ul class="flex flex-col gap-6">
                                    <li class="item" v-for="child in link.children" :key="child.id">
                                        <img :data-src="child.icon" class="lazyload" alt="icon">
                                        <template v-if="child.local">
                                            <nuxt-link :to="child.to">{{ child.title }}</nuxt-link>
                                        </template>
                                        <template v-else>
                                            <a :href="child.to" target="_blank">{{ child.title }}</a>
                                        </template>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul class="flex items-center gap-8 justify-between md:hidden w-full">
                    <li>
                        <nuxt-link class=" !no-underline !bg-transparent" to="/">
                            <MLogo></MLogo>
                        </nuxt-link>
                    </li>
                    <li class="parent w-full items-end text-[#E8E8E8]  text-sm font-semibold font-gilroy">
                        <button @click="iSmobileMenu = !iSmobileMenu"
                            class=" md:hidden bg-[#262626] rounded-lg relative w-10 h-10 menu-opener" id="menuButton"
                            title="menu-Button">
                            <a class="hamburger" aria-label="swipe" href="#"
                                :class="{ 'active': iSmobileMenu }"><span></span></a>
                        </button>
                        <div class="dropdown !w-[92%] !mx-auto top-10 !shadow-2xl"
                            :class="{ 'active': iSmobileMenu, '!top-20': route.path === '/' }">
                            <ul class="flex flex-col gap-4">
                                <li class="item flex flex-col !items-start">
                                    <nuxt-link to="/"
                                        class="cursor-pointer flex items-center gap-4 justify-start w-full !text-sm">
                                        <div class=" w-10 h-10 rounded-full">
                                            <img class="w-full h-full lazyload" :data-src="midass" alt="icon">
                                        </div>
                                        Home
                                    </nuxt-link>
                                </li>
                                <li class="item flex flex-col !items-start" v-for="link in links" :key="link.id">
                                    <nuxt-link :to="link.to"
                                        class="cursor-pointer flex items-center gap-4 justify-start w-full !text-sm"
                                        v-if="!link.children">
                                        <div class=" w-10 h-10 rounded-full  p-0.5">
                                            <img class="w-full h-full lazyload" :data-src="link.icon" alt="icon">
                                        </div>
                                        {{ link.title
                                        }}
                                    </nuxt-link>
                                    <ul class="flex flex-col gap-4 w-full" v-if="link.children">
                                        <li v-for="child in link.children" class="w-full" :key="child.id">
                                            <template v-if="child.local">
                                                <nuxt-link :to="child.to" class="flex items-center gap-3 !text-sm">
                                                    <img class=" w-10 lazyload" height="40" width="40"
                                                        :data-src="child.icon" alt="icon"> {{
                                                            child.title
                                                        }}</nuxt-link>
                                            </template>
                                            <template v-else>
                                                <a :href="child.to" target="_blank"
                                                    class="flex items-center gap-4 !text-sm"><img class=" w-10 lazyload"
                                                        :data-src="child.icon" alt="icon"> {{
                                                            child.title }}</a>
                                            </template>
                                        </li>
                                    </ul>
                                </li>
                                <li class=" mt-4 w-full">
                                    <button @click="sendRequest"
                                        class=" font-semibold h-12 text-black w-full px-6 bg-[#92E490] rounded-full hover:bg-[#d2f0d2] transition-all font-gilroy md:hidden">
                                        Request early access
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div class="hidden md:flex items-center gap-3">
                    <router-link to="faq" class="text-[#E8E8E8]  text-sm font-semibold font-gilroy">
                        Get Support
                    </router-link>
                    <button @click="sendRequest"
                        class=" font-semibold h-12 px-6 bg-[#92E490] rounded-full hover:bg-[#d2f0d2] transition-all font-gilroy">
                        Request early access
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>
<script lang="ts" setup>
import { useModal } from "@/composables";
import { MLogo } from '../../components/icons'
import { onMounted, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import hunt from '@/assets/images/icons/product-hunt.svg'
import x from '@/assets/images/icons/x.svg'
import reddit from '@/assets/images/icons/reddit.svg'
import slack from '@/assets/images/icons/slack.svg'
import medium from '@/assets/images/icons/medium.svg'
import cup from '@/assets/images/icons/cup.svg'
import bold from '@/assets/images/icons/bold.svg'
import midass from '@/assets/images/icons/midass.svg'
const route = useRoute()
const modal = useModal();
const iSmobileMenu = ref(false)
const headRef: any = ref(null); // obtain the reference
const links = ref([
    // {
    //     id: 1,
    //     title: 'FAQs',
    //     to: "/faq",
    //     local: true,
    //     icon: bold
    // },

    {
        id: 2,
        title: 'Community',
        to: "",
        local: true,
        children: [
            {
                id: 1,
                title: `Product Hunt`,
                to: "https://www.producthunt.com/",
                local: false,
                icon: hunt
            },
            {
                id: 22,
                title: 'X.com (Twitter)',
                to: "https://www.x.com/",
                local: false,
                icon: x
            },
            {
                id: 2,
                title: 'Reddit',
                to: "https://www.reddit.com/",
                local: false,
                icon: reddit
            },
            {
                id: 3,
                title: `Slack`,
                to: "https://slack.com/",
                local: false,
                icon: slack
            },
            {
                id: 4,
                title: 'Medium',
                to: "https://medium.com/",
                local: false,
                icon: medium
            },
        ]
    },
    {
        id: 3,
        title: 'About us',
        to: "/about",
        local: true,
        icon: cup
    },
])
const scrolled = ref(false)
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
    window.addEventListener('scroll', () => {
        const verticalScrollPx = window.scrollY || window.pageYOffset;
        if (verticalScrollPx == 0) {
            scrolled.value = false
        }
        else {
            scrolled.value = true
        }
    })
    if (route.query.reffer) {
        sendRequest()
    }
}
);
watch(
    () => route.fullPath,
    async () => {
        iSmobileMenu.value = false
    }
);
const sendRequest = () => {
    modal.setTitle('');
    modal.setWidth("60%");
    modal.showModal();
}
</script>
<style lang="scss" scoped>
.parent {
    display: flex;
    justify-content: flex-end;

    &.desktop {
        display: flex;
        justify-content: center;

        .dropdown {
            position: absolute !important;

        }

        &:hover {
            .dropdown {
                -webkit-transform: scaleY(1);
                -ms-transform: scaleY(1);
                transform: scaleY(1);
                opacity: 1;
                visibility: visible;
            }
        }
    }

    .dropdown {
        position: fixed;
        z-index: 999;
        visibility: hidden;
        display: block;
        opacity: 0;
        -webkit-transform: translateY(20px);
        -ms-transform: translateY(20px);
        transform: translateY(20px);
        -webkit-transition: all 0.3s ease-in;
        -o-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
        border-radius: 12px;
        border: 1px solid var(--gray-200, #080808);
        background: #080808;
        box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
        width: 339px;
        padding: 24px;
        margin-top: 60px;

        &.active {
            -webkit-transform: scaleY(1);
            -ms-transform: scaleY(1);
            transform: scaleY(1);
            opacity: 1;
            visibility: visible;
        }


        .item {
            display: flex;
            align-items: center;
            gap: 16px;

            a {
                color: #FFF;
                font-family: 'Gilroy';
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 24px;
                /* 150% */

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

}

.router-link-active {
    color: #92E490 !important;

    @media (max-width: 768px) {
        color: #92E490 !important;
    }
}
</style>