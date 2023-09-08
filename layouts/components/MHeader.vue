<template>
    <header class="w-full fixed top-0 bg-[#0D0D0D] md:absolute zoom  md:bg-transparent z-[9999] shadow-md md:shadow-none"
        :class="{ '!top-[40px] md:!top-0 bg-white': route.path === '/' }">
        <nav class=" py-3 md:py-5 w-full">
            <div class="flex items-center justify-between container md:max-w-screen-2xl mx-auto">
                <div class="hidden md:flex items-center gap-8">
                    <nuxt-link to="/" class=" !no-underline !bg-transparent">
                        <MLogo :iconColor="route.path === '/' ? '#0D0D0D' : '#CBE8CA'"
                            :text-color="route.path === '/' ? '#23262F' : '#fff'"></MLogo>
                    </nuxt-link>
                    <ul class="flex items-center gap-8 text-[#404040] text-base font-medium font-gilroy pt-1">
                        <li class="parent desktop" v-for="link in links" :key="link.id">
                            <nuxt-link class=" cursor-pointer" :to="link.to">{{ link.title }}</nuxt-link>
                            <div class="dropdown" v-if="link.children">
                                <ul class="flex flex-col gap-6">
                                    <li class="item" v-for="child in link.children" :key="child.id">
                                        <img :src="child.icon" alt="icon">
                                        <template v-if="child.local">
                                            <nuxt-link :to="child.to">{{ child.title }}</nuxt-link>
                                        </template>
                                        <template v-else>
                                            <a :href="child.to">{{ child.title }}</a>
                                        </template>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul class="flex items-center gap-8 justify-between md:hidden w-full">
                    <nuxt-link class=" !no-underline !bg-transparent" to="/">
                        <MLogo :iconColor="route.path === '/' ? '#0D0D0D' : '#CBE8CA'"
                            :text-color="route.path === '/' ? '#23262F' : '#fff'"></MLogo>
                    </nuxt-link>
                    <li class="parent w-full items-end text-[#404040]  text-base font-medium font-gilroy pt-1">
                        <button @click="iSmobileMenu = !iSmobileMenu"
                            class=" md:hidden bg-[#262626] rounded-lg relative w-7 h-7 menu-opener" id="menuButton" title="menu-Button">
                            <a class="hamburger" aria-label="swipe" href="#" :class="{ 'active': iSmobileMenu }"><span></span></a>
                            <!-- <svg class=" w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee"
                                stroke-width=".6" fill="rgba(0,0,0,0)" stroke-linecap="round" style="cursor: pointer">
                                <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                                    <animate dur="0.2s" attributeName="d"
                                        values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                                        fill="freeze" begin="start.begin" />
                                    <animate dur="0.2s" attributeName="d"
                                        values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                                        fill="freeze" begin="reverse.begin" />
                                </path>
                                <rect width="10" height="10" stroke="none">
                                    <animate dur="2s" id="reverse" attributeName="width" begin="click" />
                                </rect>
                                <rect width="10" height="10" stroke="none">
                                    <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze"
                                        begin="click" />
                                    <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze"
                                        begin="reverse.begin" />
                                </rect>
                            </svg> -->
                        </button>
                        <div class="dropdown !w-[92%] !mx-auto top-10 !shadow-2xl"
                            :class="{ 'active': iSmobileMenu, '!top-20': route.path === '/' }">
                            <ul class="flex flex-col gap-4">
                                <li class="item flex flex-col !items-start">
                                    <nuxt-link to="/"
                                        class="cursor-pointer flex items-center gap-4 justify-start w-full !text-sm">
                                        <div class=" w-10 h-10 rounded-full">
                                            <img class="w-full h-full" :src="midass" alt="icon">
                                        </div>
                                        Home
                                    </nuxt-link>
                                </li>
                                <li class="item flex flex-col !items-start" v-for="link in links">
                                    <nuxt-link :to="link.to"
                                        class="cursor-pointer flex items-center gap-4 justify-start w-full !text-sm"
                                        v-if="!link.children">
                                        <div class=" w-10 h-10 rounded-full  p-0.5">
                                            <img class="w-full h-full" :src="link.icon" alt="icon">
                                        </div>
                                        {{ link.title
                                        }}
                                    </nuxt-link>
                                    <ul class="flex flex-col gap-4 w-full" v-if="link.children">
                                        <li v-for="child in link.children" class="w-full" :key="child.id">
                                            <template v-if="child.local">
                                                <nuxt-link :to="child.to" class="flex items-center gap-4 !text-sm"><img
                                                        class=" w-10" :src="child.icon" alt="icon"> {{ child.title
                                                        }}</nuxt-link>
                                            </template>
                                            <template v-else>
                                                <a :href="child.to" class="flex items-center gap-4 !text-sm"><img
                                                        class=" w-10" :src="child.icon" alt="icon"> {{ child.title }}</a>
                                            </template>
                                        </li>
                                    </ul>
                                </li>
                                <li class=" mt-4 w-full">
                                    <button @click="sendRequest"
                                        class=" font-semibold h-12 w-full px-6 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-gilroy md:hidden">
                                        Request early access
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <button @click="sendRequest"
                    class=" font-semibold h-12 px-6 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-gilroy hidden md:block">
                    Request early access
                </button>
            </div>
        </nav>
    </header>
    <Teleport to="body">
        <Transition name="fade">
            <GetEarlyAccessModal v-if="showModal"></GetEarlyAccessModal>
        </Transition>
    </Teleport>
</template>
<script lang="ts" setup>
import { useModal } from "@/composables";
import { MLogo } from '../../components/icons'
import { onMounted, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import GetEarlyAccessModal from '@/components/EarlyAccessModal.vue'
import hunt from '@/assets/images/icons/product-hunt.svg'
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
    {
        id: 1,
        title: 'FAQs',
        to: "/faq",
        local: true,
        icon: bold
    },
    {
        id: 3,
        title: 'About us',
        to: "/about",
        local: true,
        icon: cup
    },
    {
        id: 2,
        title: 'Community',
        to: "",
        local: true,
        children: [
            {
                id: 1,
                title: `Product Hunt`,
                to: "#",
                local: false,
                icon: hunt
            },
            {
                id: 2,
                title: 'Reddit',
                to: "#",
                local: false,
                icon: reddit
            },
            {
                id: 3,
                title: `Slack`,
                to: "#",
                local: false,
                icon: slack
            },
            {
                id: 4,
                title: 'Medium',
                to: "#",
                local: false,
                icon: medium
            },
        ]
    },
])
const showModal = computed(() => modal.show.value);
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
    justify-content: end;

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
        border: 1px solid var(--gray-200, #EAECF0);
        background: var(--system-white-blocks-elements, #FFF);
        box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
        width: 339px;
        padding: 24px;
        margin-top: 30px;

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
                color: var(--secondary-900, #0D0D0D);
                font-family: Inter;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 24px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

}

.router-link-active {
    color: #E8E8E8 !important;

    @media (max-width: 768px) {
        background-color: #0D0D0D;
        border-radius: 8px;
    }
}

.hamburger {
    position: absolute;
    left: 18%;
    top: 48%;
}

.hamburger {
    cursor: pointer;
    // padding: 10px 35px 16px 0px;
}

.hamburger span,
.hamburger span:before,
.hamburger span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 18px;
    background: white;
    position: absolute;
    display: flex;
    content: "";
}

.hamburger span:before {
    top: -5px;
}

.hamburger span:after {
    bottom: -5px;
}

/*
#hamburger span, #hamburger span:before, #hamburger span:after {
  transition: all 200ms ease-in-out;
}
*/
.hamburger span,
.hamburger span:before,
.hamburger span:after {
    -webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    -moz-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    /* easeInOutCubic */
}

.hamburger.active span {
    background-color: transparent;
}

.hamburger.active span:before,
.hamburger.active span:after {
    top: 0;
}

.hamburger.active span:before {
    transform: rotate(45deg);
}

.hamburger.active span:after {
    transform: translateY(-10px) rotate(-45deg);
    top: 10px;
}
</style>