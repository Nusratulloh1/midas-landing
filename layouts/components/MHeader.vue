<template>
    <header
        class="w-full fixed top-[0%] bg-[#0D0D0D] md:top-0 md:absolute zoom  md:bg-transparent z-[999] shadow-md md:shadow-none"
        :class="{ '!top-[5%] bg-white': route.path === '/' }">
        <nav class=" py-3 md:py-5 w-full">
            <div class="flex items-center justify-between container md:max-w-screen-2xl mx-auto">
                <div class="flex items-center gap-8">
                    <nuxt-link to="/">
                        <MLogo :iconColor="route.path === '/' ? '#0D0D0D' : '#CBE8CA'"
                            :text-color="route.path === '/' ? '#23262F' : '#fff'"></MLogo>
                    </nuxt-link>
                    <ul class="hidden md:flex items-center gap-8 text-[#404040] text-base font-medium font-gilroy pt-1">
                        <li class="parent" v-for="link in links" :key="link.id">
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
                <button class=" md:hidden bg-[#262626] p-1 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12ZM3.75 6.75H20.25C20.4489 6.75 20.6397 6.67098 20.7803 6.53033C20.921 6.38968 21 6.19891 21 6C21 5.80109 20.921 5.61032 20.7803 5.46967C20.6397 5.32902 20.4489 5.25 20.25 5.25H3.75C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6C3 6.19891 3.07902 6.38968 3.21967 6.53033C3.36032 6.67098 3.55109 6.75 3.75 6.75ZM20.25 17.25H3.75C3.55109 17.25 3.36032 17.329 3.21967 17.4697C3.07902 17.6103 3 17.8011 3 18C3 18.1989 3.07902 18.3897 3.21967 18.5303C3.36032 18.671 3.55109 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18C21 17.8011 20.921 17.6103 20.7803 17.4697C20.6397 17.329 20.4489 17.25 20.25 17.25Z"
                            fill="white" />
                    </svg>
                </button>
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
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import GetEarlyAccessModal from '@/components/EarlyAccessModal.vue'
const route = useRoute()
const modal = useModal();
const headRef: any = ref(null); // obtain the reference
const links = ref([
    {
        id: 1,
        title: 'FAQs',
        to: "/faq",
        local: true,
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
                icon: new URL('@/assets/images/icons/product-hunt.svg', import.meta.url).href
            },
            {
                id: 2,
                title: 'Reddit',
                to: "#",
                local: false,
                icon: new URL('@/assets/images/icons/reddit.svg', import.meta.url).href
            },
            {
                id: 3,
                title: `Slack`,
                to: "#",
                local: false,
                icon: new URL('@/assets/images/icons/slack.svg', import.meta.url).href
            },
            {
                id: 4,
                title: 'Medium',
                to: "#",
                local: false,
                icon: new URL('@/assets/images/icons/medium.svg', import.meta.url).href
            },
        ]
    },
    {
        id: 3,
        title: 'About us',
        to: "/about",
        local: true,
    }
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
const sendRequest = () => {
    modal.setTitle('');
    modal.setWidth("60%");
    modal.showModal();
}
</script>
<style lang="scss" scoped>
.parent {
    display: flex;
    justify-content: center;

    .dropdown {
        position: absolute;
        z-index: 999;
        display: block;
        visibility: hidden;
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

.router-link-active {
    color: #E8E8E8 !important;
}
</style>